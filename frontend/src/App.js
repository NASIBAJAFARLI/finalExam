
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import MainContext from './context/Context';
import Add from './pages/Add/Add';
import Basket from './pages/Basket/Basket';
import Wishlist from './pages/Wishlist/Wishlist';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import Detail from './pages/Detail/Detail';

function App() {
    const [products,setProducts]=useState([])
    const [error,setError]=useState("")
    const [loading,setLoading]=useState(true)
    const [filteredData,setFilteredData]=useState([])
    const [wishlistItems,setWishlistItems]=useState(
      localStorage.getItem("wishlistItems")?JSON.parse(localStorage.getItem("wishlistItems")):[]
    )

    useEffect(()=>{
      axios.get("http://localhost:8085/datalarim").then((res)=>{
        setProducts(res.data)
        setLoading(false)
      }).catch((error)=>{
        setError(error)
        setLoading(false)
      })
    },[])

    const deleteHandler=(id)=>{

      axios.delete(`http://localhost:8085/datalarim/${id}`).then((res)=>{
        const deletedData=products.filter((item)=>item._id !=id)
        setProducts(deletedData)
        setFilteredData(deletedData)
      })

    }

    

    const addToWishlist=(item)=>{
      const target= wishlistItems.find((wishlistItems)=>wishlistItems._id===item._id)
      if(target){
        alert("item wishlistde var")
      }else{
        setWishlistItems([...wishlistItems,item])
        localStorage.setItem("wishlistItems",JSON.stringify([...wishlistItems,item]))
        alert("successfully added")
      }
    }

    const removeFromWishlist=(id)=>{
      const uptadetWishlist=wishlistItems.filter((item)=>item._id !==id)
      setWishlistItems(uptadetWishlist)
      localStorage.setItem("wishlistItems",JSON.stringify(uptadetWishlist))
    }

    const data={
      products,setProducts,filteredData,setFilteredData,
      wishlistItems,setWishlistItems,addToWishlist,deleteHandler,removeFromWishlist
    }


    

  return (


    <div className="App">
      <MainContext.Provider value={data}>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add' element={<Add/>} />
        <Route path='/basket' element={<Basket/>} />
        <Route path='/wishlist' element={<Wishlist/>} />
        <Route path='/:id' element={<Detail/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
      </MainContext.Provider>
    </div>
  );
}

export default App;
