import { favCardProps } from "../types/favCardProps";
import useFavoritesStore from "../stores/useFavoritesStore";

const FavCard: React.FC<favCardProps> = ({ film, number }) => {
  const {
    favorites,
    addFavorite,
    removeFavorite,
    moveFavoriteUp,
    moveFavoriteDown,
  } = useFavoritesStore((state) => ({
    favorites: state.favoriteFilms,
    addFavorite: state.addFilmToFavorites,
    removeFavorite: state.removeFilmFromFavorites,
    moveFavoriteUp: state.rankFilmHigher,
    moveFavoriteDown: state.rankFilmLower,
  }));

  const isFavorite = favorites.some((fav) => fav.id === film.id);

  const handleLikeClick = () => {
    if (isFavorite) {
      removeFavorite(film.id);
    } else {
      addFavorite(film);
    }
  };

  const handleMoveUp = () => {
    moveFavoriteUp(film.id);
  };
  const handleMoveDown = () => {
    moveFavoriteDown(film.id);
  };

  return (
    <div className="card">
      <div className="like-icon">
        <p>{number}</p>
        <button onClick={handleMoveUp}>Move Up</button>
        <button onClick={handleMoveDown}>Move Down</button>
        <svg
          onClick={handleLikeClick}
          xmlns="http://www.w3.org/2000/svg"
          fill={isFavorite ? "pink" : "none"}
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </div>
      <div className="card-header">
        <h2 className="film-title">
          {film.title} - <span className="film-year">{film.release_date}</span>
        </h2>
      </div>
      <img className="film-poster" src={film.image} alt="" />
    </div>
  );
};

export default FavCard;
