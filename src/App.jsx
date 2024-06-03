import NavBar from "./component/NavBar/NavBar"
import SecondNavBar from "./component/SecondNavBar/SecondNavBar"



function App() {

  return (
    <>
     <div className="mb-24">
     <NavBar/>
     </div>
     <div className="my-72 h-[100vh]">
     <SecondNavBar/>
     </div>
    
    </>
  )
}

export default App
