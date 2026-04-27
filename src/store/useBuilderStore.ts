import { create } from 'zustand';
import { componentsRegistry } from '../registry/componentsRegistry';

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
  reorder: (newOrder: string[]) => void;
  clearComponents: () => void;
  setSections: (sections: SelectedComponent[]) => void;
}

const STORAGE_KEYS = {
  components: 'siteStudio_selectedComponents',
  projectName: 'siteStudio_projectName'
};

const BASE_SECTION_PROPS: Record<string, any> = {
  bgColor: '#09090b',
  textColor: '#ffffff',
  accentColor: '#6366f1',
  btnColor: '#6366f1',
  iconColor: '#6366f1',
  activeColor: '#6366f1',
  hoverColor: '#6366f1',
  numberColor: '#6366f1',
  barColor: '#6366f1',
  cardBg: 'rgba(255,255,255,0.02)',
  cols: 3
};

function canUseStorage() {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

function readStorageValue(key: string) {
  if (!canUseStorage()) return null;
  return window.localStorage.getItem(key);
}

function writeStorageValue(key: string, value: string) {
  if (!canUseStorage()) return;
  window.localStorage.setItem(key, value);
}

function removeStorageValue(key: string) {
  if (!canUseStorage()) return;
  window.localStorage.removeItem(key);
}

function buildSectionProps(componentKey: string, incoming: Record<string, any> = {}) {
  const registryItem = componentsRegistry.find(
    item => item.componentKey === componentKey || item.slug === componentKey
  );
  const registryDefaults =
    registryItem && registryItem.defaultSettings && typeof registryItem.defaultSettings === 'object'
      ? registryItem.defaultSettings
      : {};

  return {
    ...BASE_SECTION_PROPS,
    ...registryDefaults,
    ...(incoming || {})
  };
}

function normalizeSection(raw: any, index: number): SelectedComponent | null {
  if (!raw || typeof raw !== 'object') return null;
  const componentKeySource =
    typeof raw.componentKey === 'string' && raw.componentKey.trim()
      ? raw.componentKey
      : typeof raw.type === 'string' && raw.type.trim()
      ? raw.type
      : '';

  if (!componentKeySource) return null;
  const componentKey = componentKeySource.trim();

  const id = typeof raw.id === 'string' && raw.id.trim() ? raw.id : `${componentKey}-${Date.now()}-${index}`;
  const props = raw.props && typeof raw.props === 'object' ? raw.props : {};

  return {
    id,
    componentKey,
    props: buildSectionProps(componentKey, props)
  };
}

function readSavedSections() {
  const saved = readStorageValue(STORAGE_KEYS.components);
  if (!saved) return [];

  try {
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .map((section, index) => normalizeSection(section, index))
      .filter((section): section is SelectedComponent => Boolean(section));
  } catch (error) {
    console.error('Failed to parse saved components', error);
    return [];
  }
}

function persistSections(order: string[], sections: Record<string, SelectedComponent>) {
  const payload = order
    .map(id => sections[id])
    .filter((section): section is SelectedComponent => Boolean(section));
  writeStorageValue(STORAGE_KEYS.components, JSON.stringify(payload));
}

export const useBuilderStore = create<BuilderStore>((set) => {
  const savedSections = readSavedSections();
  const savedName = readStorageValue(STORAGE_KEYS.projectName);

  const initialSections: Record<string, SelectedComponent> = {};
  const initialOrder: string[] = [];

  savedSections.forEach(section => {
    if (initialSections[section.id]) return;
    initialSections[section.id] = section;
    initialOrder.push(section.id);
  });

  return {
    sections: initialSections,
    order: initialOrder,
    projectName: savedName || 'Untitled Project',

    setProjectName: (name) => set(() => {
      writeStorageValue(STORAGE_KEYS.projectName, name);
      return { projectName: name };
    }),

    updateSection: (id, data) => set((state) => {
      const section = state.sections[id];
      if (!section) return state;

      const nextProps = {
        ...section.props,
        ...data
      };

      const nextSections = {
        ...state.sections,
        [id]: {
          ...section,
          props: nextProps
        }
      };

      persistSections(state.order, nextSections);
      return { sections: nextSections };
    }),

    addComponent: (componentKey, props = {}) => set((state) => {
      const id = `${componentKey}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
      const newComponent: SelectedComponent = {
        id,
        componentKey,
        props: buildSectionProps(componentKey, props)
      };

      const nextSections = { ...state.sections, [id]: newComponent };
      const nextOrder = [...state.order, id];
      persistSections(nextOrder, nextSections);

      return { sections: nextSections, order: nextOrder };
    }),

    removeComponent: (id) => set((state) => {
      if (!state.sections[id]) return state;

      const nextSections = { ...state.sections };
      delete nextSections[id];
      const nextOrder = state.order.filter(sectionId => sectionId !== id);
      persistSections(nextOrder, nextSections);

      return { sections: nextSections, order: nextOrder };
    }),

    clearComponents: () => set(() => {
      removeStorageValue(STORAGE_KEYS.components);
      removeStorageValue(STORAGE_KEYS.projectName);
      return { sections: {}, order: [], projectName: 'Untitled Project' };
    }),

    moveComponent: (oldIndex, newIndex) => set((state) => {
      if (
        oldIndex < 0 ||
        newIndex < 0 ||
        oldIndex >= state.order.length ||
        newIndex >= state.order.length ||
        oldIndex === newIndex
      ) {
        return state;
      }

      const nextOrder = [...state.order];
      const [moved] = nextOrder.splice(oldIndex, 1);
      nextOrder.splice(newIndex, 0, moved);

      persistSections(nextOrder, state.sections);
      return { order: nextOrder };
    }),

    reorder: (newOrder) => set((state) => {
      const normalizedOrder = newOrder.filter(id => Boolean(state.sections[id]));
      persistSections(normalizedOrder, state.sections);
      return { order: normalizedOrder };
    }),

    setSections: (sectionsArr) => set(() => {
      const nextSections: Record<string, SelectedComponent> = {};
      const nextOrder: string[] = [];

      sectionsArr
        .map((section, index) => normalizeSection(section, index))
        .filter((section): section is SelectedComponent => Boolean(section))
        .forEach(section => {
          if (nextSections[section.id]) return;
          nextSections[section.id] = section;
          nextOrder.push(section.id);
        });

      persistSections(nextOrder, nextSections);
      return { sections: nextSections, order: nextOrder };
    })
  };
});
