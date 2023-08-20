 import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
 import { getApiConfiguration } from './store/homeSlice'
  
import { fetchDataFromApi } from './utils/api'
function App() {
        const dispatch=useDispatch();
        useEffect(()=>{
          apiTesting();
        },[]);
  const apiTesting=()=>{
      fetchDataFromApi("/movie/popular").then((res)=>{
         console.log(res);
        dispatch(getApiConfiguration(res));

      });
    
  }
  return <div className="App">Movietime</div>
}

export default App
