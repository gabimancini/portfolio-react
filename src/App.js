import { BrowserRouter } from "react-router-dom";
import Routing from "./routes/Routing";
import Header from '../src/sections/Header';
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routing/>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
