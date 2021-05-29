import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./components/MainPage";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/">
        <MainPage />
      </Route>
      <Footer />
    </Router>
  );
}

export default App;
