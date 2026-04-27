import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useBuilderStore } from '../store/useBuilderStore';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FolderHeart, Trash2, Edit3, Calendar, Layers, ExternalLink, Plus, LayoutGrid, Clock, Settings, Sparkles } from 'lucide-react';
import { Button, Card } from '../components/ui/StandardUI';

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
  const { setSections, setProjectName, clearComponents } = useBuilderStore();
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
        componentKey: s.type || s.componentKey,
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
      }
    }
  };

  const formatDate = (date: any) => {
    if (!date) return "Unknown date";
    const d = date.toDate ? date.toDate() : new Date(date);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const handleCreateNew = () => {
    clearComponents();
    setProjectName("New Project");
    navigate('/builder');
  };

  return (
    <div className="flex-1 bg-[#020617] flex">
      {/* Mini Sidebar for Dashboard feel */}
      <aside className="w-64 border-r border-white/5 bg-[#0f172a] hidden lg:flex flex-col p-6 gap-2">
        <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-4 px-4">Workspace</div>
        <button className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-white text-sm font-bold border border-purple-500/30 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
          <LayoutGrid size={18} /> All Projects
        </button>
        <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-white hover:bg-white/5 text-sm font-bold transition-all">
          <Clock size={18} /> Recent
        </button>
        <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-white hover:bg-white/5 text-sm font-bold transition-all">
          <Settings size={18} /> Settings
        </button>
      </aside>

      <main className="flex-1 p-8 md:p-12 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-[10px] font-black uppercase tracking-widest mb-4">
                <Sparkles size={12} /> Live Sites
              </div>
              <h1 className="text-4xl font-black text-white tracking-tight mb-2">Projects</h1>
              <p className="text-slate-400 font-medium">Manage your futuristic web architectures.</p>
            </div>
            <Button onClick={handleCreateNew} className="h-12 px-6">
              <Plus size={20} /> New Project
            </Button>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-64 bg-[#0f172a] rounded-2xl animate-pulse border border-white/5" />
              ))}
            </div>
          ) : projects.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-32 bg-[#0f172a]/50 border border-white/5 rounded-3xl text-center">
              <div className="w-20 h-20 bg-[#020617] rounded-2xl flex items-center justify-center text-slate-700 mb-6 border border-white/5 shadow-inner">
                <FolderHeart size={40} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Empty Workspace</h3>
              <p className="text-slate-500 mb-8 max-w-xs font-medium">Your architectural journey begins here. Start building the future.</p>
              <Button onClick={handleCreateNew}>Get Started</Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map(project => (
                <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <Card className="group hover:border-purple-500/50 transition-all duration-300">
                    <div 
                      className="h-44 bg-[#020617] relative overflow-hidden flex items-center justify-center cursor-pointer border-b border-white/5"
                      onClick={() => handleLoadProject(project)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 group-hover:opacity-100 transition-opacity" />
                      <div className="flex gap-2 flex-wrap items-center justify-center p-4">
                        {project.componentKeys?.slice(0, 3).map((c, i) => (
                          <div key={i} className="px-2 py-1 bg-[#0f172a] border border-white/5 rounded-md text-[9px] font-black text-purple-400 uppercase tracking-wider">
                            {c.split('-')[0]}
                          </div>
                        ))}
                      </div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-purple-600/10 flex items-center justify-center backdrop-blur-[2px] transition-all">
                        <Button variant="primary" className="scale-90 group-hover:scale-100">Open Architect</Button>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="mb-6">
                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-400 transition-colors truncate tracking-tight">
                          {project.name || "Untitled Project"}
                        </h3>
                        <div className="flex items-center gap-2 text-slate-500 text-[10px] font-black uppercase tracking-widest">
                          <Calendar size={12} />
                          {formatDate(project.createdAt)}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-[9px] font-black text-slate-600 uppercase tracking-widest px-2.5 py-1 bg-[#020617] rounded-md border border-white/5">
                          <Layers size={12} /> {project.sections?.length || 0} Modules
                        </div>
                        <div className="flex gap-2">
                          <button 
                            onClick={(e) => handleDeleteProject(project.id, e)}
                            className="p-2 text-slate-600 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all"
                          >
                            <Trash2 size={16} />
                          </button>
                          <button 
                            onClick={() => handleLoadProject(project)}
                            className="p-2 text-slate-600 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all"
                          >
                            <Edit3 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
