import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";
import { Card } from "./Card"


export const ListProducts = () => {
  const products = useSelector((state) => state.products[0]);

  return (
    <>
    <div className="text-black z-20  py-20">
    <div className="contrast-more: mx-auto py-20 ">
        <div className="py-20 flex justify-center">
            <div className="flex items-center gap-8 pt-10 xl:pt-0">
                <input type="text"  className="xl:w-[27rem] w-[18rem] h-[2.5rem] rounded-full bg-white border border-spacing-2 border-black outline-none px-5 py-1"/>
                <FontAwesomeIcon icon={faMagnifyingGlass}  className="xl:text-3xl text-2xl cursor-pointer px-3 py-2 bg-blue-500 shadow-lg text-white rounded-full"/>
            </div>
        </div>
        <div className="py-10 flex gap-2 justify-center flex-wrap">
          {
              products && products.map((prod)=>{
                return(
                  <Card  prod={prod}/>
                )
              })
            }
        </div>
    </div>
    </div>
    </>
  )
}
