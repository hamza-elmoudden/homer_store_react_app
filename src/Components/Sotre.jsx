import { useQuery, gql } from "@apollo/client";
import porducte from "../assets/banner-5.jpg"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AddCard } from "../Redux/Card";
import { CardStore } from "./CardStore";


export const Get_Store = gql`
    query getcard{
  Getcard{
    _id
    list{
      _id
      title
      descraption
      image_one
      price
    }
  }
}`

const OrderNow = () => {
    return (
        <>
            <div className="cursor-pointer hover:shadow-xl">
                <div className="bg-blue-500 h-[4rem] w-full text-2xl text-white flex justify-center items-center">
                    <h2>Order Now</h2>
                </div>
            </div>
        </>
    )
}

export const getdata = (token) => {
    const { loading, error, data } = useQuery(Get_Store, {
        context: {
            headers: {
                authorization: token ? `Bearer ${token}` : "",
            },
        },
    });

    return data
}

export const Sotre = () => {

    const dispatch = useDispatch()
    const token = useSelector((state) => state.auth.Token)


    // Ensure useQuery is always called
    const data = getdata(token)

    useEffect(() => {
        if (data) {
            dispatch(AddCard(data.Getcard.list))
        }
    }, [data])

    return (
        <>
            <div className="fixed left-[-100rem] gap-[6rem] space-y-10 justify-between z-50 xl:w-[50%]  md:w-[46%] h-[100vh]  bg-white text-black card overflow-y-scroll px-4">
                <div className="xl:pt-10 flex flex-col">
                    <div className="flex flex-col gap-10 xl:text-xl text-sm font-bold">
                        {
                            data && data.Getcard.list.map((store) => {
                                return (
                                    <CardStore store={store}/>
                                    )
                            })
                        }
                        {/* <OrderNow /> */}
                    </div>
                </div>
               { data && data.Getcard.list.length > 0 ? <OrderNow /> : <div className="text-center  text-xl xl:text-2xl opacity-55">
                <div>No Producte Add to Store</div>
               </div> 
               } 
            </div>
        </>
    )
}
