import { Outlet } from "react-router-dom";
import Header from "../Ui/Header";
import Footer from "../Ui/Footer";

const AppLayOut = () => {
  return (
    <div>
        <h1>Welcome to the AppLayout Page.</h1>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default AppLayOut;