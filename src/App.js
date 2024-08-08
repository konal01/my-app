import './App.css';
import Navbar from './components/Navbar.mjs';
import TextForm from './components/TextForm.js';

function App() {
  return (
   <>
   <Navbar title='drap down'/>
   <div className="container">
   <TextForm heading ="enter the text"/>
   </div>
   </>
  );
}

export default App;
