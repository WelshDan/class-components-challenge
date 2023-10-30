import "./App.css";
import Sidebar from "./components/Sidebar";
import NavBarForm from "./components/NavBarForm";
import Content from "./components/Content";
import ContentHooks from "./components/ContentHooks";

function App() {
  return <div className="App">
    <NavBarForm />
    <Sidebar />
    <Content />
    <ContentHooks />
    </div>
}

export default App;