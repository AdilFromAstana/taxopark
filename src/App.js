import Header from "./components/Header/Header";
import "react-phone-input-2/lib/style.css";
import "./App.css";
import AppRouter from "./components/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <AppRouter />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
