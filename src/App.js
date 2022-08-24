import logo from './logo.svg';
import './App.css';
import './components/navbar/navbar'
import NavbarBoots from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarBoots></NavbarBoots>
      </header>
    </div>
  );
}

export default App;
