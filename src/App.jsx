import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FetchDatafromapi } from "./utils/Api";
import { useDispatch, useSelector } from "react-redux";
import { getApiconfiguration,getGenres } from "./store/HomeSlice";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header"
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchresult/SearchResult";
import Explore from "./pages/explore/Explore";
import PagenotFound from "./pages/404/PagenotFound";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => {
    return state.Home;
  });


  useEffect(() => {
    FetchapiConfig();
    genrescall()
  }, []);

  const FetchapiConfig = () => {
    FetchDatafromapi("/configuration").then((res) => {
      const url = {
        backdrop : res.images.secure_base_url + "original",
        poster : res.images.secure_base_url + "original",
        profile : res.images.secure_base_url + "original",
      }
      dispatch(getApiconfiguration(url));
    });
  };

  const genrescall = async() =>{
    let promises=[]
    let allGenres={}
    let endPoint = ["tv","movie"]

    endPoint.forEach((url)=>{
      promises.push(FetchDatafromapi(`/genre/${url}/list`))
    })
    const data = await Promise.all(promises)
    data.map(({genres})=>{
      return genres.map((item)=>{
        return allGenres[item.id] = item;
      })
    })
    dispatch(getGenres(allGenres))
  }


  return ( 
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PagenotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
