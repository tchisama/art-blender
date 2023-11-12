import create from 'zustand';
export type res = {
    url:string,
    prompt:string
}
interface ResultsState {
  results: res[];
  setResults: (result: res[]) => void;
}

const useResultsStore = create<ResultsState>((set) => ({
  results: [
    {
      prompt: 'CCreate an illustration inspired by the vibrant energy of Japanese manga, featuring a charming feline with soft fur and sparkling eyes cheerfully leaping to engage in playful dynamics with a lively avian creature. The scene is set against a backdrop of an enchanting forest brimming with lush foliage. a beautiful interaction often seen in friendships of unusual pairs.reate an illustration inspired by the vibrant energy of Japanese manga, featuring a charming feline with soft fur and sparkling eyes cheerfully leaping to engage in playful dynamics with a lively avian creature. The scene is set against a backdrop of an enchanting forest brimming with lush foliage. In the air, soft pink sakura petals ',
      url: 'https://storage.googleapis.com/aiblenderstorage/2093408.png'    
    }
  ],
  setResults: (result) => set({ results: result }),
}));

export default useResultsStore;
