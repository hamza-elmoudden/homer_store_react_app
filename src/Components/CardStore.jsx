import { useDispatch, useSelector } from "react-redux"
import { gql, useMutation } from '@apollo/client';
import { getdata } from "./Sotre";
import { AddCard } from "../Redux/Card";
import { useEffect } from "react";


export const DELETE_CARD_MUTATION = gql`
  mutation deletecard($id: CardInput!) {
     Deletocard(id: $id) {
      _id
      list {
        _id
      }
    }
  }
`;

export const CardStore = ({ store }) => {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.Token)
  const [card, { loading, error, data }] = useMutation(DELETE_CARD_MUTATION,
      { 
        context: {
          headers: {
              authorization: token ? `Bearer ${token}` : "",
        },
    },
  }
    );


  const remove_card= ()=>{

  card({
      variables: {
        id: {
          id: store && store._id,
          
        }
      }
    })
    
  }
  const Data = getdata(token)

  useEffect(() => {
      if (Data) {
          dispatch(AddCard(Data.Getcard))
      }
  },[Data])

    return (
        <div key={store && store._id} className="border border-spacing-1 border-black flex gap-4 items-center py-2 px-1 justify-between">
            <div className="w-[8rem] h-[8rem] rounded-full overflow-hidden">
                <img src={store ? store.image_one : "Store"} className="w-full h-full" alt="producte" />
            </div>
            <div className="w-1/2 space-y-[2px] capitalize">
                <h2 className="text-xl font-serif">{store ? store.title : "Titile Card Producte"}</h2>
                <p className="line-clamp-2 text-sm opacity-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsa iusto eaque.</p>
                <h2>Pirce : {store ? store.price : "100$"}$</h2>
            </div>
            <div>
                <div className="px-3 py-2 rounded-lg bg-red-500 text-white cursor-pointer hover:bg-black" onClick={remove_card}>Remove</div>
            </div>
        </div>
    )
}
