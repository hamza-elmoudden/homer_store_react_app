import { Brand } from "../Components/Brand"
import { Footer } from "../Components/Footer"
import { Latest } from "../Components/Latest"
import { List } from "../Components/List"
import { Navebar } from "../Components/Navebar"
import { Section } from "../Components/Section"
import { Show } from "../Components/Show"
import { useDispatch, useSelector } from "react-redux"
import { useQuery, gql } from "@apollo/client"
import { useEffect, useState } from "react"
import { AddProd } from "../Redux/Products"


export const Get_Products = gql`
    query findProd{
        Producte{
            _id
            title
            price
            descraption
            image_one
            image_tow
            image_three
        }
}
`

export const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(Get_Products);
 

  useEffect(() => {
    if (data) {
      dispatch(AddProd(data.Producte));
    }
  }, [data]);

 
  
  
  
  return (
    <>
      <Navebar/>
      <Section/>
      <Show/>
      <Brand/>
      <Latest/>
      <List/>
      <Footer/>
    </>
  )
}
