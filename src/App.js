import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import Header from './Components/Header/Header';
import AllProducts from './Components/AllProducts/AllProducts';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AllProducts></AllProducts>
    </div>
  );
}

export default App;
