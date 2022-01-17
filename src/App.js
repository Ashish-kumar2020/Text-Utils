
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
function App() {
  return (
    <>
      <Navbar title="textUtils" home="home"/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below"/>
      </div>
      <About/>
    </>
  );
}

export default App;
