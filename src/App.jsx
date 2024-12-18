import NavBar from "./component/NavBar/NavBar";
import SecondNavBar from "./component/SecondNavBar/SecondNavBar";
import ThirdMenu from "./component/ThirdMenu/ThirdMenu";

function App() {
  return (
    <>
      <div className="mb-24">
        <NavBar />
      </div>
      <div className="mt-72">
        <SecondNavBar />
      </div>
      <div className="mt-72">
        <ThirdMenu/>
      </div>
      
    </>
  );
}

export default App;
