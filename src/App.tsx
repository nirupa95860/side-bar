import './App.css';
import Bagroun from './components/Bagroun';
import SideBar from './components/SideBar';
import { BrowserRouter as Router,  Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
          <SideBar />
          <Bagroun/>
      </Router>
    </div>
  );
}

export default App;
