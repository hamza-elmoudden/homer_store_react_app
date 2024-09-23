import { useEffect } from "react"
import { Footer } from "../Components/Footer"
import { List } from "../Components/List"
import { ListProducts } from "../Components/ListProducts"
import { Navebar } from "../Components/Navebar"
import { useQuery } from "@apollo/client"
import { useDispatch } from "react-redux"
import { Get_Products } from "./Home"
import { AddProd } from "../Redux/Products"




export const Productes = () => {
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
    <ListProducts/>
    <List/>
    <Footer/>
    </>
  )
}
