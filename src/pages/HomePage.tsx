import Card from "../components/Card";
import useDataStore from "../stores/useDataStore";

function HomePage() {
  const { data } = useDataStore();
  return (
    <div className="grid">
      {data.map((film) => (
        <Card key={film.id} film={film} />
      ))}
    </div>
  );
}

export default HomePage;
