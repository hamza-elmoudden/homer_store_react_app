import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCartShopping, faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { AddlToken, Logout } from '../Redux/Auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sotre, getdata } from './Sotre';
import {Login} from "./Login"
import Cookies from 'js-cookie';



  
const getToken = () => {
    const token = Cookies.get('authToken');
    return token;
}
  
  
const removeToken = () => {
    Cookies.remove('authToken');
}

export const ShowLogin = () => {

    const Loign = document.querySelector(".login")
    Loign.classList.toggle("showlogin")
}

export const Navebar = () => {
    const tokencookis = getToken()
    const [showbar, setshowbar] = useState(true)    

    const shownav = () => {
        const nav = document.querySelector(".navsm")
        nav.classList.toggle("shownav")
        showbar ? setshowbar(false) : setshowbar(true)
    }

    const showcard = () => {
        const card = document.querySelector(".card")
        card.classList.toggle("showcard")
    }

    const LogoutClick = () => {
        const card = document.querySelector(".card")
        card.classList.remove("showcard")
        dispatch(Logout())
        removeToken()
    }

    const auth = useSelector((state) => state.auth.Auth)
    const dispatch = useDispatch()

    if(tokencookis){
        dispatch(AddlToken({"token":tokencookis,"auth":true}))
    }
    
    const data = getdata(tokencookis)
    
    // console.log(data.Getcard.list.length)
    return (
        <>
            <div className="overflow-x-hidden fixed w-full z-30">
                <nav className="py-5 bg-black">
                    <div className="md:container mx-auto w-[90%]">
                        <div className='flex md:flex-row flex-col items-center justify-between md:gap-[25%] xl:gap-[50%]   space-y-10 md:space-y-0'>
                            <div className="text-2xl uppercase hover:text-red-500 font-serif cursor-pointer">
                                <h2>homer</h2>
                            </div>
                            <div className="text-xl flex gap-20 md:items-center w-full justify-between">
                                <div className="md:flex gap-10 items-center hidden">
                                    <Link to={"/"} className="cursor-pointer hover:text-red-500">Home</Link>
                                    <Link to={"/productes"} className="cursor-pointer hover:text-red-500">Producte</Link>
                                    <Link to={"/contacts"} className="cursor-pointer hover:text-red-500">Contacts</Link>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <div>
                                        {
                                            !auth ? <div className="flex w-[7rem] justify-between items-center capitalize border border-spacing-1 border-white px-3 py-2 rounded-full cursor-pointer bg-green-500 hover:text-orange-600 hover:bg-white" onClick={ShowLogin}>
                                                <h2>login</h2>
                                                <div>
                                                    <FontAwesomeIcon icon={faUser} />
                                                </div>
                                            </div> :
                                                <>
                                                    <div className="flex gap-8 items-center">
                                                        <div className="relative cursor-pointer" onClick={showcard}>
                                                            { data &&
                                                                <div className="w-[1rem] h-[1rem] bg-red-500 absolute top-[-0.9rem] right-0 flex justify-center items-center rounded-full ">   
                                                                <div className="  text-sm ">{data.Getcard.list.length}</div>
                                                                </div>
                                                                  
                                                            }
                                                            <FontAwesomeIcon className="text-3xl" icon={faCartShopping} />
                                                        </div>
                                                        <div className="flex w-[7rem] justify-between items-center capitalize border border-spacing-1 border-white px-3 py-2 rounded-full cursor-pointer bg-red-500 hover:text-orange-600 hover:bg-white" onClick={LogoutClick}>
                                                            <h2>Logout</h2>
                                                            <div>
                                                                <FontAwesomeIcon icon={faUser} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                        }
                                    </div>
                                    <div className="text-3xl md:hidden block cursor-pointer" onClick={shownav}>
                                        {showbar ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faX} />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="fixed right-[-100rem] navsm md:hidden top-[8.5rem] navsm z-50  w-[66%] h-[100vh] block bg-black text-white">
                    <div className="pt-20">
                        <div className="flex flex-col gap-10 items-center text-white text-2xl uppercase">
                            <Link to={"/"}  className="cursor-pointer hover:text-red-500">Home</Link>
                            <Link to={"/productes"} className="cursor-pointer hover:text-red-500">Producte</Link>
                            <Link to={"/contacts"} className="cursor-pointer hover:text-red-500">Contacts</Link>
                        </div>
                    </div>
                </div>
                <Sotre/>
                <Login/>
            </div>
        </>
    )
}
