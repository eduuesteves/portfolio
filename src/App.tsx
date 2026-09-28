
import { Footer } from "./components/layout/Footer/Footer";
import { Header } from "./components/layout/Header/Header";
import { Home } from "./pages/Home";
import "./styles/App.scss";

export function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;