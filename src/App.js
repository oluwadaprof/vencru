import "./App.css";
import SideNav from "./components/NavBar/SideNav";
import CreateRoutes from "./routes/routes";
// import NavBar from "./components/NavBar/index";

function App() {
  return (
    <div className="App relative">
        <SideNav/>
      <div className="pt-20">
        <CreateRoutes />
      </div>
    </div>
  );
}

export default App;
