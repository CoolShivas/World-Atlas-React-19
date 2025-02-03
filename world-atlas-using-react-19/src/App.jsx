import "./App.css";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import CountryPage from "./pages/CountryPage";
import AboutPage from "./pages/AboutPage";

const App = () => {
  return (
    <div>
        <h1>Hello World</h1>      
        <HomePage></HomePage>
        <ContactPage></ContactPage>
        <CountryPage></CountryPage>
        <AboutPage></AboutPage>
    </div>
  )
}

export default App;