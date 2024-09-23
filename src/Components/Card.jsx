import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import porducte from "../assets/banner-5.jpg"
import { useDispatch, useSelector } from 'react-redux';
import { useMutation ,gql} from '@apollo/client';
import { ShowLogin } from './Navebar';
import { getdata } from './Sotre';
import { AddCard } from '../Redux/Card';
import { useEffect } from 'react';


const  ADD_TO_CARD = gql`
    mutation addcard($card :  CardInput! )
    {
      addtocard(id:$card)
      {
        _id
        list{
          _id
        }
      }
    }
`

export const Card = (props) => {
  const dispatch = useDispatch()
  const {prod} = props
  const token = useSelector((state)=> state.auth.Token)
  const [addcard,{ loading, error, data }] = useMutation(ADD_TO_CARD,{
  
    context: {
      headers: {
          authorization: token ? `Bearer ${token}` : "",
      },
    },
  })

  const soredata = getdata(token)

  const sendcard = ()=>{

    if(!token){
      ShowLogin()
    }

    addcard({
      variables: {
        card: {
          id:prod && prod._id,
          
        }
      }
    }).then(response => {
      // console.log('Success: ',response.data);
      })
      .catch(err => {
        console.error('Error:', err);
    });

  }

  useEffect(()=>{
    if(soredata){
        dispatch(AddCard(soredata.Getcard))
    }
},[data])



  
  return (
    <>
      <section key={prod && prod._id} className="w-[70%] md:w-[24rem] h-[35rem] overflow-hidden cursor-pointer border border-spacing-1 border-black">
                <div className="relative h-[25rem]">
                    <div className="py-4 px-8 md:py-1 md:px-4 bg-red-700 w-fit absolute top-0 right-0 text-white">
                       -70%
                    </div>
                    <div  className="py-4 px-8 md:py-1 md:px-4 bg-green-500 w-fit absolute top-0 left-0 text-white">
                        New
                    </div>
                    <img  className="w-full h-full" src={prod ? prod.image_one : porducte} alt="Producte Not Found" />
                </div>
                <div>      
                <div className="px-2 py-6 space-y-10">
                   <div className="flex justify-between flex-wrap">
                    <h1 className="text-xl   capitalize line-clamp-2 w-1/2">{prod ? prod.title : "title Producet"}</h1>
                        <div className="py-2 flex justify-center items-center gap-1 text-yellow-500">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        </div>
                   </div>
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <h1 className="text-xl">{prod ? prod.price :"1000"} $</h1>
                        <div  className="text-xl capitalize hover:border border-white hover:border-black border-b-2 hover:border-t-0 hover:border-x-0 cursor-pointer" onClick={sendcard}>
                           + Add To Card
                        </div>
                    </div>
                </div>
                </div>
      </section>
    </>
  )
}
