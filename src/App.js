import FieldForm from "./components/FieldForm/FieldForm";
import MainTitle from "./components/MainTitle/MainTitle";
import Header from "./components/Header/Header";
import ChooseTaxopark from "./components/ChooseTaxopark/ChooseTaxopark";
import SubmitRequest from "./components/SubmitRequest";
import 'react-phone-input-2/lib/style.css'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <MainTitle />
      <ChooseTaxopark />
      {/* <SubmitRequest /> */}
      <FieldForm />
    </div>
  );
}

export default App;
