import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom"
import { SelectedProduct } from '../Redux/Action/Action';
import { useSelector } from "react-redux"
const ProductDeatiles = () => {
  const { id } = useParams();
  // console.log(id);
  const dispatch = useDispatch();

  const single = useSelector((state) => state.singleproduct)


  console.log(single);
  const featchData = async () => {

    const response = await axios.get(`https://fakestoreapi.com/products/${id}`).catch((error) => {
      console.log(error);
    })
    dispatch((SelectedProduct(response.data)))
    // console.log(response.data);
  }
  useEffect(() => {

    featchData();
  }, [])

  return (
    <>
      <div className="Container" style={{ display: 'flex', width: "100%", height: "100vh",justifyContent:"center",alignItems:"center" }}>
  
    <div className="box" style={{ width: "30vw", height: "50vh", display:"flex",flexDirection:"column", alignItems:"center", boxShadow:"0px 0px 5px black"}}>
        <div className="img">
        <img src={single.image} alt="img" style={{ width:"10vw", height:"20vh", padding:"1rem"}}/>
        </div>
        <div className="para" style={{alignItems:"center",padding:"1rem"}}>
        <h2>Title:{single.title}</h2>
        <p>$:{single.price}</p>
        <p>Decription:{single.description}</p>
        </div>
        </div>
      
       
      </div>

    </>
  )
}

export default ProductDeatiles