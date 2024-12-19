import "./App.css";
import AppPromotion from "./components/AppPromotion";
import CalculateIncome from "./components/CalculateIncome";
import ChooseTaxopark from "./components/ChooseTaxopark";
import Header from "./components/Header";
import SubmitRequest from "./components/SubmitRequest";
import TaxiParkCard from "./components/TaxiParkCard";

function App() {
  return (
    <div className="App">
      <Header />
      <ChooseTaxopark />
      <SubmitRequest />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <CalculateIncome />
        <TaxiParkCard />
        <TaxiParkCard />
        <AppPromotion />
      </div>
    </div>
  );
}

export default App;
