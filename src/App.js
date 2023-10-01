import BcgImg from "./Components/Icons/top-image.png";
import "./App.css";
import Navbar from "./Components/navbar";
import Introduction from "./Components/contentOne";
import Moreinf from "./Components/restoffront";

function App() {
  return (
    <div className="relative">
      <div
        className="min-h-screen bg-cover bg-center absolute top-0 left-0 right-0"
        style={{
          backgroundImage: `url(${BcgImg})`,
        }}
      >
        <Navbar className="z-10" />
        <Introduction className="z-10" />
      </div>
      <Moreinf className="z-20" />
    </div>
  );
}

export default App;

//To commit next changes
//git remote add origin https://github.com/Abhinav1341/tcf-front.git
//git branch -M main
//git push -u origin main
