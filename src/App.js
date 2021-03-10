import './css/App.css';
import Header from './Header/Header'
import Card from './Card/Card'
import Footer from './Footer/Footer'

function App() {
  return (
    <div className="App">
      {/*Header*/}
      <Header/>
      {/*Tinder Cards*/}
      <Card/>
      {/*Footer*/}
      <Footer/>
    </div>
  );
}

export default App;
