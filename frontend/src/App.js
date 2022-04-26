import './App.css';
import { 
  Route,
  Routes
} from 'react-router-dom';
import Landing from './pages/Landing/Landing.js';
import Signup from './pages/Signup/Signup.js';
import Signin from './pages/Signin/Signin';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Landing/>} />
        <Route exact path='/signup' element={<Signup/>} />
        <Route exact path='/signin' element={<Signin/>} />
        {/*<Route exact path='/home' element={<Home/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
