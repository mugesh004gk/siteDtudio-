import React, { createContext, useContext, ReactNode } from 'react';
import { useBuilderStore, SelectedComponent } from '../store/useBuilderStore';

export type { SelectedComponent };

interface BuilderContextType {
  projectName: string;
  setProjectName: (name: string) => void;
  selectedComponents: SelectedComponent[];
  addComponent: (componentKey: string, props?: Record<string, any>) => void;
  removeComponent: (id: string) => void;
  moveComponent: (oldIndex: number, newIndex: number) => void;
  clearComponents: () => void;
  setSelectedComponents: (components: SelectedComponent[]) => void;
}

const BuilderContext = createContext<BuilderContextType | undefined>(undefined);

export const BuilderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const store = useBuilderStore();
  const selectedComponents = store.order
    .map(id => store.sections[id])
    .filter((section): section is SelectedComponent => Boolean(section));
  
  const value: BuilderContextType = {
    projectName: store.projectName,
    setProjectName: store.setProjectName,
    selectedComponents,
    addComponent: store.addComponent,
    removeComponent: store.removeComponent,
    moveComponent: store.moveComponent,
    clearComponents: store.clearComponents,
    setSelectedComponents: store.setSections,
  };

  return (
    <BuilderContext.Provider value={value}>
      {children}
    </BuilderContext.Provider>
  );
};

export const useBuilder = () => {
  const store = useBuilderStore();
  const selectedComponents = store.order
    .map(id => store.sections[id])
    .filter((section): section is SelectedComponent => Boolean(section));

  return {
    projectName: store.projectName,
    setProjectName: store.setProjectName,
    selectedComponents,
    addComponent: store.addComponent,
    removeComponent: store.removeComponent,
    moveComponent: store.moveComponent,
    clearComponents: store.clearComponents,
    setSelectedComponents: store.setSections,
  };
};
