import "./App.css";
import CreateRoutes from "./routes/routes";
import NavBar from "./components/NavBar/index";

function App() {
  return (
    <div className="App relative">
      <div className="fixed w-full bg-white">
        <NavBar />
      </div>
      <div className="pt-20">
        <CreateRoutes />
      </div>
    </div>
  );
}

export default App;
