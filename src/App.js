import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Containers/HomePage/HomePage";
import SecondPage from "./Containers/SecondPage/SecondPage";
import ThirdPage from "./Containers/ThirdPage/ThirdPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">

          <Route exact index element={<HomePage />} />
          
          <Route path="booking" element={<SecondPage />} />
          <Route path="termsandconditions" element={<ThirdPage />} />
          </Route>
          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
