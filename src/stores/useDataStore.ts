import { create } from "zustand";
import { Film } from "../types/films";

interface DataState {
  data: Film[];
  loading: boolean;
  error: string | null;
  setData: (data: Film[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

const useDataStore = create<DataState>((set) => ({
  data: [],
  loading: true,
  error: null,
  setData: (data) => set({ data }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));

export default useDataStore;
