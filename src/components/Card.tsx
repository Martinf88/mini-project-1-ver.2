import { cardProps } from "../types/cardProps";
import useFavoritesStore from "../stores/useFavoritesStore";

const Card: React.FC<cardProps> = ({ film }) => {
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore(
    (state) => ({
      favorites: state.favoriteFilms,
      addFavorite: state.addFilmToFavorites,
      removeFavorite: state.removeFilmFromFavorites,
    })
  );

  const isFavorite = favorites.some((fav) => fav.id === film.id);

  const handleLikeClick = () => {
    if (isFavorite) {
      removeFavorite(film.id);
    } else {
      addFavorite(film);
    }
  };

  return (
    <div className="card">
      <div className="like-icon" onClick={handleLikeClick}>
        <svg
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
        <p className="director"> Director: {film.director} </p>
        <p className="producer">Producer: {film.producer}</p>
      </div>
      <img className="film-poster" src={film.image} alt="" />
      <div className="card-body">
        <p> {film.description} </p>
      </div>
    </div>
  );
};

export default Card;
