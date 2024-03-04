import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "../Components/Layout";
import { Home, NotFound } from "../Pages";

function App() {
  return (
    <div>
      <Header />
      <div className="pb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
