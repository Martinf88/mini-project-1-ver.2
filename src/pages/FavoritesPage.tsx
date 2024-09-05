import "../App.css";
import useFavoritesStore from "../stores/useFavoritesStore";
import FavCard from "../components/FavCard";

function FavoritesPage() {
  const { favorites } = useFavoritesStore((state) => ({
    favorites: state.favoriteFilms,
  }));
  return (
    <div className="fav-page">
      <header className="fav-page-header">
        <h2>My Ranking</h2>
      </header>
      <div className="grid">
        {favorites.map((film, index) => (
          <FavCard key={film.id} film={film} number={index + 1} />
        ))}
      </div>
    </div>
  );
}

export default FavoritesPage;
