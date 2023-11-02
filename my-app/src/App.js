import "./App.css";
import ContentAPI from './components/ContentAPI';
import Sidebar from './components/Sidebar';
import NavBarForm from './components/NavBarForm';
import PostItemAPI from './components/PostItemAPI';

function App() {
  return <div className="App">
    <NavBarForm />
    <Sidebar />
    <ContentAPI />
    </div>
}

export default App;