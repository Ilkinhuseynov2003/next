import './App.css';
import Banner from './components/Banner';
import Header from './components/Header/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='w-[80%] m-auto border-[2px] border-black'>

      <Banner/>
      </div>
     
    </div>
  );
}

export default App;
