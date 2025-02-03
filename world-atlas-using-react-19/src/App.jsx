import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import CountryPage from "./pages/CountryPage";
import AboutPage from "./pages/AboutPage";


const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage></HomePage>,
  },
  {
    path:"about",
    element:<AboutPage></AboutPage>,
  },
  {
    path:"country",
    element:<CountryPage></CountryPage>,
  },
  {
    path:"contact",
    element:<ContactPage></ContactPage>,
  },
]);

const App = () => {
  return (
    // <div>
    //     <h1>Hello World</h1>      
    //     <HomePage></HomePage>
    //     <ContactPage></ContactPage>
    //     <CountryPage></CountryPage>
    //     <AboutPage></AboutPage>
    // </div>
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App;