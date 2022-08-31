import './App.css';
import Movies from './Component/movies';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Search from './Component/Search';
function App() {
  return (
    <BrowserRouter>
<Routes>
<Route path='/' element={<Movies></Movies>}></Route>
<Route path='/search' element={<Search/>}></Route>
</Routes>
</BrowserRouter>
 
  );
}

export default App;
