import Main from "./main.js";
import Footer from "./footer.js";
import { useEffect } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "./assets/css/style.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="App">
      <Main />
      <Footer />
    </div>
  );
}

export default App;
