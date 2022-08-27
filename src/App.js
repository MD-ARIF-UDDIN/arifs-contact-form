
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
    <Contact/>

    <ToastContainer />
    </div>
  );
}

export default App;
