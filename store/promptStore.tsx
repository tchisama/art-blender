import create from 'zustand';

interface AppState {
  dallev: string;
  module: string;
  prompt: string;
  size :string;
  n:number;
  setDallev: (dallev:string) => void;
  setSize: (size: string) => void;
  setModule: (module: string) => void;
  setPrompt: (prompt: string) => void;
  setN: (n: number) => void; 
}

const usePromptStore = create<AppState>((set) => ({
  dallev:"dall-e-3",
  size:"1024x1024",
  module: 'anime',
  prompt: '',
  n:1,
  setSize: (size) => set({ size }),
  setDallev: (dallev) => set({ dallev }),
  setModule: (module) => set({ module }),
  setPrompt: (prompt) => set({ prompt }),
  setN: (n) => set({ n }),
}));

export default usePromptStore;
