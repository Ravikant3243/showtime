 import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
 import { getApiConfiguration } from './store/homeSlice'
  
import { fetchDataFromApi } from './utils/api'
 import Home from './pages/home/Home'
 import Details from './pages/details/Details'
  import Explore from './pages/explore/Explore'
  import Pagenotfound from './pages/404/Pagenotfound'
  import SerachResult from './pages/serachResult/SerachResult'
  import {BrowserRouter,Routes,Route} from "react-router-dom"
   import Footer from './components/footer/Footer'
   import Header from './components/header/Header'
    import useFetch from './hooks/useFetch'
function App() {
        const dispatch=useDispatch();
         const {url}=useSelector((state)=>state.home);
          console.log(url);
        useEffect(()=>{
          apiTesting();
        },[]);
  const apiTesting=()=>{
      fetchDataFromApi("/movie/popular").then((res)=>{
         console.log(res);
        dispatch(getApiConfiguration(res));

      });
    
  }
  return (
<BrowserRouter>
  {/* <Header/> */}
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/:mediaType/:id" element={<Details/>}/>
    <Route path="/search/:query" element={<SerachResult/>}/>
    <Route path="/explore/:mediaType" element={<Explore/>}/>
    <Route path="*" element={<Pagenotfound/>}/>
  </Routes>
  {/* <Footer/> */}
</BrowserRouter>
  )
}

export default App
