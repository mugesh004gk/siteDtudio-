import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useBuilderStore } from '../store/useBuilderStore';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FolderHeart, Trash2, Edit3, Calendar, Layers, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  createdAt: any;
  sections: any[];
  componentKeys: string[];
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const { setSections, setProjectName } = useBuilderStore();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'projects'));
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Project[];
        setProjects(data.sort((a, b) => {
          const dateA = a.createdAt?.toDate ? a.createdAt.toDate().getTime() : new Date(a.createdAt).getTime();
          const dateB = b.createdAt?.toDate ? b.createdAt.toDate().getTime() : new Date(b.createdAt).getTime();
          return dateB - dateA;
        }));
      } catch (error) {
        console.error("Error fetching projects", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const handleLoadProject = (project: Project, targetPath: string = '/builder') => {
    if (project.sections) {
      const mappedSections = project.sections.map((s: any) => ({
        id: s.id,
        componentKey: s.type,
        props: s.props
      }));
      setSections(mappedSections);
      setProjectName(project.name || "Untitled Project");
      navigate(targetPath);
    }
  };

  const handleDeleteProject = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        await deleteDoc(doc(db, 'projects', id));
        setProjects(projects.filter(p => p.id !== id));
      } catch (error) {
        console.error("Error deleting project", error);
        alert("Failed to delete project.");
      }
    }
  };

  const formatDate = (date: any) => {
    if (!date) return "Unknown date";
    const d = date.toDate ? date.toDate() : new Date(date);
    return d.toLocaleDateString();
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#09090b] p-8 md:p-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex items-center gap-4">
          <div className="p-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 text-indigo-400">
             <FolderHeart size={32}/>
          </div>
          <div>
            <h1 className="text-4xl font-black text-white uppercase tracking-tighter">Your Workspace</h1>
            <p className="text-white/40 font-medium mt-1 tracking-widest text-sm uppercase">Manage saved SaaS projects</p>
          </div>
        </div>

        {loading ? (
          <div className="text-white/30 text-center py-20 font-black tracking-widest uppercase text-sm animate-pulse">Loading Workspace...</div>
        ) : projects.length === 0 ? (
          <div className="text-center py-32 border border-white/5 bg-[#111] rounded-[3rem] shadow-2xl">
              <FolderHeart size={48} className="mx-auto text-white/10 mb-6"/>
              <p className="text-white/40 uppercase tracking-[0.3em] font-black text-xs mb-8">No saved projects found</p>
              <button onClick={() => navigate('/components')} className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest shadow-xl transition active:scale-95">Start Building</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
                className="bg-[#111] rounded-[2rem] border border-white/5 overflow-hidden group shadow-xl hover:border-indigo-500/30 transition-colors">
                
                <div className="h-48 bg-[#18181b] relative overflow-hidden flex items-center justify-center p-6 cursor-pointer" onClick={() => handleLoadProject(project)}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="w-full flex gap-2 flex-wrap items-center justify-center pointer-events-none relative z-10 transition-transform group-hover:scale-110 duration-500">
                        {project.componentKeys?.slice(0, 4).map((c: string, i: number) => (
                            <div key={i} className="px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-lg text-[8px] font-black uppercase text-indigo-300 tracking-widest border border-white/10">{c.split('-')[0]}</div>
                        ))}
                        {project.componentKeys?.length > 4 && <div className="px-3 py-1.5 bg-black/60 rounded-lg text-[8px] font-black text-white/50 border border-white/10 tracking-widest">+{project.componentKeys.length - 4}</div>}
                        {(!project.componentKeys || project.componentKeys.length === 0) && (
                          <div className="px-3 py-1.5 bg-black/60 rounded-lg text-[8px] font-black text-white/20 border border-white/10 tracking-widest">EMPTY STACK</div>
                        )}
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>

                <div className="p-6">
                   <div className="flex justify-between items-start mb-6">
                      <div>
                          <h3 className="text-xl font-black text-white tracking-tight leading-none mb-2">{project.name || "Untitled"}</h3>
                          <div className="flex items-center gap-2 text-white/30 text-[10px] font-black uppercase tracking-widest">
                             <Calendar size={12}/>
                             {formatDate(project.createdAt)}
                          </div>
                      </div>
                   </div>

                   <div className="flex items-center justify-between border-t border-white/5 pt-6 gap-2">
                      <div className="flex items-center gap-2 text-white/50 text-[10px] font-black uppercase tracking-widest bg-white/5 px-3 py-2 rounded-lg border border-white/5">
                         <Layers size={12}/> {project.sections?.length || 0}
                      </div>

                      <div className="flex gap-2 relative z-20">
                         <button onClick={(e) => handleDeleteProject(project.id, e)} className="p-3 bg-red-500/10 text-red-400 hover:text-white hover:bg-red-500 rounded-xl transition-all active:scale-95" title="Delete Project">
                            <Trash2 size={16}/>
                         </button>
                         <button onClick={() => handleLoadProject(project, '/live-preview')} className="p-3 bg-indigo-500/10 text-indigo-400 hover:text-white hover:bg-indigo-500 rounded-xl transition-all active:scale-95" title="Preview Live">
                             <ExternalLink size={16}/>
                         </button>
                         <button onClick={() => handleLoadProject(project)} className="px-5 py-3 bg-white/10 hover:bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 flex items-center gap-2 border border-white/5">
                             <Edit3 size={14}/> Edit
                         </button>
                      </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
