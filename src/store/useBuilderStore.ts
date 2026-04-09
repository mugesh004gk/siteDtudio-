import { create } from 'zustand';

export interface SelectedComponent {
  id: string;
  componentKey: string;
  props: Record<string, any>;
}

export interface BuilderStore {
  sections: Record<string, SelectedComponent>;
  order: string[];
  projectName: string;
  setProjectName: (name: string) => void;
  updateSection: (id: string, data: Record<string, any>) => void;
  addComponent: (componentKey: string, props?: Record<string, any>) => void;
  removeComponent: (id: string) => void;
  moveComponent: (oldIndex: number, newIndex: number) => void;
  clearComponents: () => void;
  setSections: (sections: SelectedComponent[]) => void;
}

export const useBuilderStore = create<BuilderStore>((set) => {
  const saved = localStorage.getItem('siteStudio_selectedComponents');
  const savedName = localStorage.getItem('siteStudio_projectName');
  let initialSections: Record<string, SelectedComponent> = {};
  let initialOrder: string[] = [];
  
  if (saved) {
    try {
      const parsed: SelectedComponent[] = JSON.parse(saved);
      initialOrder = parsed.map(c => c.id);
      parsed.forEach(c => {
        initialSections[c.id] = c;
      });
    } catch (e) {
      console.error("Failed to parse saved components", e);
    }
  }

  return {
    sections: initialSections,
    order: initialOrder,
    projectName: savedName || "Untitled Project",

    setProjectName: (name) => set(() => {
      localStorage.setItem('siteStudio_projectName', name);
      return { projectName: name };
    }),
    
    updateSection: (id, data) => set((state) => {
      const section = state.sections[id];
      if (!section) return state;
      const newSections = {
        ...state.sections,
        [id]: {
          ...section,
          props: { ...section.props, ...data }
        }
      };
      localStorage.setItem('siteStudio_selectedComponents', JSON.stringify(state.order.map(cid => newSections[cid])));
      return { sections: newSections };
    }),

    addComponent: (componentKey, props = {}) => set((state) => {
      const id = `${componentKey}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const newComponent: SelectedComponent = { id, componentKey, props };
      const newSections = { ...state.sections, [id]: newComponent };
      const newOrder = [...state.order, id];
      localStorage.setItem('siteStudio_selectedComponents', JSON.stringify(newOrder.map(cid => newSections[cid])));
      return { sections: newSections, order: newOrder };
    }),
    
    removeComponent: (id) => set((state) => {
      const newSections = { ...state.sections };
      delete newSections[id];
      const newOrder = state.order.filter(cid => cid !== id);
      localStorage.setItem('siteStudio_selectedComponents', JSON.stringify(newOrder.map(cid => newSections[cid])));
      return { sections: newSections, order: newOrder };
    }),
    
    clearComponents: () => set(() => {
      localStorage.removeItem('siteStudio_selectedComponents');
      localStorage.removeItem('siteStudio_projectName');
      return { sections: {}, order: [], projectName: "Untitled Project" };
    }),
    
    moveComponent: (oldIndex, newIndex) => set((state) => {
      const newOrder = Array.from(state.order);
      const [removed] = newOrder.splice(oldIndex, 1);
      newOrder.splice(newIndex, 0, removed);
      localStorage.setItem('siteStudio_selectedComponents', JSON.stringify(newOrder.map(cid => state.sections[cid])));
      return { order: newOrder };
    }),
    
    setSections: (sectionsArr) => set(() => {
      const newSections: Record<string, SelectedComponent> = {};
      const newOrder = sectionsArr.map(c => c.id);
      sectionsArr.forEach(c => {
        newSections[c.id] = c;
      });
      localStorage.setItem('siteStudio_selectedComponents', JSON.stringify(sectionsArr));
      return { sections: newSections, order: newOrder };
    })
  };
});
