import React, { useContext, useEffect, useState } from 'react'
import MainContext from '../../context/Context'
import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import { Helmet } from 'react-helmet'

const Add = () => {

    const {products,setProducts,deleteHandler}=useContext(MainContext)
    const [searchTitle,setSearchTitle]=useState('')
    const [sortType, setSortType] = useState('asc');

    const sortByAsc = () => {
        const sortedData = [...products].sort((a, b) => a.title.localeCompare(b.title));
        setProducts(sortedData);
      };
    
    const sortByDesc = () => {
        const sortedData = [...products].sort((a, b) => b.title.localeCompare(a.title));
        setProducts(sortedData);
      };

    const handleSearchChange=(e)=>{
        setSearchTitle(e.target.value)
    }

    const sortByPriceDescending = () => {
      setProducts([...products.sort((a, b) => b.price - a.price)]);
    };
    
    const sortByPriceAscending = () => {
      setProducts([...products.sort((a, b) => a.price - b.price)]);
    };

    const filteredProduct=products.filter(
        (product)=>
        product &&
        product.title && 
       typeof product.title ==='string' && 
       product.title.toLowerCase().includes(searchTitle.toLowerCase())
    )

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async()=>{
        try{
            const res= await axios.get("http://localhost:8085/datalarim")
            setProducts(res.data)
        }catch(error){
            console.log(error)
        }
    }

    const handleSubmit=async(values,{resetForm})=>{
        try{
            const res = await axios.post("http://localhost:8085/datalarim",values)
            alert("successfully added",values)
            fetchData()
            resetForm()
        }catch(error){
            console.log(error)
        }
    }

    const initialvalues={
        title:'',
        desc:'',
        img:'',
        price:''
    }

  return (
    <div className="form-container">
        <Helmet>
            <title>add</title>
        </Helmet>
        <Formik initialValues={initialvalues} onSubmit={handleSubmit}>
            <Form>
                <div className="form-group">
                    <label htmlFor="title">title</label><br />
                    <Field type="text" id="title" name="title" />
                </div>

                <div className="form-group">
                    <label htmlFor="desc">desc</label><br />
                    <Field type="text" id="desc" name="desc" />
                </div>

                <div className="form-group">
                    <label htmlFor="img">img</label><br />
                    <Field type="text" id="img" name="img" />
                </div>

                <div className="form-group">
                    <label htmlFor="price">price</label><br />
                    <Field type="number" id="price" name="price" />
                </div>

                <button type='submit' className=' btn btn-danger'>add</button>
            </Form>
        </Formik>

        <input 
        type="text" 
        name="" id="" 
        value={searchTitle}
        placeholder='search by name'
        onChange={handleSearchChange}
        />
        <button onClick={()=>sortByPriceAscending()}>ASC</button>
        <button onClick={()=>sortByPriceDescending()}>DESC</button>
        <button onClick={()=>sortByAsc()}>Sort A-Z</button>
        <button onClick={()=>sortByDesc()}>Sort Z-A</button>

        <table>
            <thead>
                <tr>
                    <th>title</th>
                    <th>price</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    filteredProduct.map((item,index)=>{
                        return <tr key={index}>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>
                                <button className='btn btn-danger' onClick={()=>deleteHandler(item._id)}>delete</button>
                            </td>
                            
                        </tr>
                    })
                
                }
            </tbody>
        </table>
    </div>
  )
}

export default Add