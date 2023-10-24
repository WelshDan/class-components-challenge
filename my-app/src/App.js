import css from './App.css';
import Content from './components/Content';
import NavBarForm from './components/NavBarForm';
import SideBar from './components/Sidebar';

function App() {
  return (
    <div className={css.App}>
        <NavBarForm />
        <SideBar />
        <Content />
    </div>
  );
}

export default App;