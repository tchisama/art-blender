import create from 'zustand';

interface AppState {
  width: number;
  height: number;
  module: string;
  prompt: string;
  n:number;
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
  setModule: (module: string) => void;
  setPrompt: (prompt: string) => void;
  setN: (n: number) => void; 
}

const usePromptStore = create<AppState>((set) => ({
  width: 1000,
  height: 1000,
  module: 'anime',
  prompt: '',
  n:1,
  setWidth: (width) => set({ width }),
  setHeight: (height) => set({ height }),
  setModule: (module) => set({ module }),
  setPrompt: (prompt) => set({ prompt }),
  setN: (n) => set({ n }),
}));

export default usePromptStore;
