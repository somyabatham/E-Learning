
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Rajistration from './Pages/Rajistration';
  import FrontPage from "./Pages/FrontPage";
 import Login from './Pages/Login';
 import Mainpage from './Pages/Mainpage';
 import AllCources from './Pages/AllCources';
 import Tailwindc from "./Pages/Taillwindc"
 import Python from './Pages/Python';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<FrontPage />}></Route>
        <Route path='/Rajistration' element={<Rajistration />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Mainpage' element={<Mainpage />}></Route>
        <Route path='/AllCources' element={<AllCources />}></Route>
        <Route path='/Tailwindc' element={<Tailwindc />}></Route>
        <Route path='/Python' element={<Python />}></Route>
        
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
