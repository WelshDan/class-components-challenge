import "./App.css";
import ContentAPIHooks from './components/ContentAPIHooks';
import Sidebar from './components/Sidebar';
import NavBarForm from './components/NavBarForm';
import PostItemAPI from './components/PostItemAPI';

function App() {
  return <div className="App">
    <NavBarForm />
    <Sidebar />
    <ContentAPIHooks />
    </div>
}

export default App;