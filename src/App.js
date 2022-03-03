import TravelData from "./components/TravelData";
import NavBar from "./components/NavBar";
import Header1 from "./components/Header1";
console.log(TravelData);
function App() {
  const MytourPlaces = TravelData.map((tour) => (
    <NavBar
      key={tour.id}
      title={tour.title}
      location={tour.location}
      googleMapsUrl={tour.googleMapsUrl}
      startDate={tour.startDate}
      endDate={tour.endDate}
      imageUrl={tour.imageUrl}
      description={tour.description}
    />
  ));
  console.log(MytourPlaces);
  return (
    <div className="container">
      <Header1 />
      {MytourPlaces}
    </div>
  );
}

export default App;
