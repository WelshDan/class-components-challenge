import css from './App.css';
import Content from './components/Content';
import UncontrolledForm from './components/UncontrolledForm';
import NavBarForm from './components/NavBarForm';
import SideBar from './components/Sidebar';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className={css.App}>
        <SearchBar />
        <Content />
        <UncontrolledForm />
        <SideBar />
        <NavBarForm />
    </div>
  );
}

export default App;