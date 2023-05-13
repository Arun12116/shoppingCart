import React from 'react'
import { useEffect } from "react"
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { SetProduct } from '../Redux/Action/Action'
import axios from "axios"

const Product = () => {

    // const product = useSelector((state) => state)
    const Dispatch = useDispatch();
    // console.log(Dispatch);

    const featch = async () => {

        const response = await axios.get("https://fakestoreapi.com/products").catch((error) => {
            console.log(error);
        })
        Dispatch(SetProduct(response.data))
        console.log(response.data);
    }
    useEffect(() => {

        featch();


    }, [])
    // console.log(product);
    return (
        <>

            <Card />




        </>
    )
}

export default Product