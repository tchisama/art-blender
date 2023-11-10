import create from 'zustand';

interface AppState {
  module: string;
  prompt: string;
  size :string;
  n:number;
  setSize: (size: string) => void;
  setModule: (module: string) => void;
  setPrompt: (prompt: string) => void;
  setN: (n: number) => void; 
}

const usePromptStore = create<AppState>((set) => ({
  size:"1024x1024",
  module: 'anime',
  prompt: '',
  n:1,
  setSize: (size) => set({ size }),
  setModule: (module) => set({ module }),
  setPrompt: (prompt) => set({ prompt }),
  setN: (n) => set({ n }),
}));

export default usePromptStore;
