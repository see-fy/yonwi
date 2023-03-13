import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";

function Home() {
  const user = useSelector(selectUser);
    return (
      <div>
        <Header isLogged={user ? "true" : "false"} />
        <Body />
        <Footer />
      </div>
    );
  }
  
  export default Home;
  