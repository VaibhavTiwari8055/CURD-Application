import logo from './logo.svg';
import './App.css';
import Create from './Components/Create';
import { Route, Routes } from 'react-router-dom';
import Read from './Components/Read';
import Update from './Components/Update';


function App() {
  return (
    <div className="container">
    <Routes>
     <Route exact path='/' element={<Read/>}> </Route>
     <Route exact path='/Create' element={<Create/>}></Route>
     <Route exact path='/update' element={<Update/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
