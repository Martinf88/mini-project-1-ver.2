import { create } from "zustand";
import { Film } from "../types/films";

interface FavoriteFilmsState {
  favoriteFilms: Film[];
  addFilmToFavorites: (film: Film) => void;
  removeFilmFromFavorites: (filmId: number) => void;
  rankFilmHigher: (filmId: number) => void;
  rankFilmLower: (filmId: number) => void;
  //TODO: Add state to rank film by typing in rank manually.
}

const useFavoritesStore = create<FavoriteFilmsState>((set) => ({
  favoriteFilms: [],

  addFilmToFavorites: (film) =>
    set((currentState) => ({
      favoriteFilms: [...currentState.favoriteFilms, film],
    })),

  removeFilmFromFavorites: (filmId) =>
    set((state) => ({
      favoriteFilms: state.favoriteFilms.filter((film) => film.id !== filmId),
    })),

  rankFilmHigher: (filmId) =>
    set((state) => {
      const filmIndex = state.favoriteFilms.findIndex(
        (film) => film.id === filmId
      );
      if (filmIndex > 0) {
        const updatedFavoriteFilms = [...state.favoriteFilms];
        [updatedFavoriteFilms[filmIndex], updatedFavoriteFilms[filmIndex - 1]] =
          [
            updatedFavoriteFilms[filmIndex - 1],
            updatedFavoriteFilms[filmIndex],
          ];
        return { favoriteFilms: updatedFavoriteFilms };
      }
      return state;
    }),

  rankFilmLower: (filmId) =>
    set((state) => {
      const index = state.favoriteFilms.findIndex((film) => film.id === filmId);
      if (index < state.favoriteFilms.length - 1) {
        const updatedFavorites = [...state.favoriteFilms];
        [updatedFavorites[index], updatedFavorites[index + 1]] = [
          updatedFavorites[index + 1],
          updatedFavorites[index],
        ];
        return { favoriteFilms: updatedFavorites };
      }
      return state;
    }),
}));

export default useFavoritesStore;
