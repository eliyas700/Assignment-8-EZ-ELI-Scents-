import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import Header from './Components/Header/Header';
import AllProducts from './Components/AllProducts/AllProducts';
import Questions from './Questions/Questions';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AllProducts></AllProducts>
      <Questions></Questions>
      <Footer></Footer>
    </div>
  );
}

export default App;
