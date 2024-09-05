import "../App.css";
import { NavLink, Outlet } from "react-router-dom";
import { fetchFilms } from "../utils/api";
import { useEffect } from "react";
import useDataStore from "../stores/useDataStore";

//TODO: Add localStorage for data and favoriteFilms

export default function Root() {
  const { setData, setLoading, loading, error, setError } = useDataStore();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchFilms();
        setData(result);
      } catch (err) {
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading)
    return <p style={{ color: "red", fontSize: "32px" }}>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      <header className="header">
        <h1>Fetch from API practice</h1>
        <div className="btn-wrapper">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active btn" : "btn")}
          >
            Home
          </NavLink>
          <NavLink
            to="/fav"
            className={({ isActive }) => (isActive ? "active btn" : "btn")}
          >
            My Favorites
          </NavLink>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
