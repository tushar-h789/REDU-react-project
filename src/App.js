
import ActiveUsers from "./components/ActiveUsers";
import Banner from "./components/Banner";
import CreativePeople from "./components/CreativePeople";
import HappyUsers from "./components/HappyUsers";
import Navbar from "./components/Navbar";
import NewBooks from "./components/NewBooks";
import UpdateForm from "./components/UpdateForm";

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <NewBooks/>
      <ActiveUsers/>
      <HappyUsers/>
      <UpdateForm/>
      <CreativePeople/>
    </>
  );
}

export default App;
