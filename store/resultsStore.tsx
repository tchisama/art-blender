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
  results: [],
  setResults: (result) => set({ results: result }),
}));

export default useResultsStore;
