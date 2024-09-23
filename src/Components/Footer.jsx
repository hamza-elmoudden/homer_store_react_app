import pymant from "../assets/payment.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF,faInstagram,faTwitter,faLinkedin} from "@fortawesome/free-brands-svg-icons"


export const Footer = () => {
  return (
    <>
        <footer className="pt-10 pb-3 text-black">
            <div className="container mx-auto flex justify-around py-8 gap-9 md:flex-row flex-col">
                <div className="space-y-7 text-3Xl uppercase">
                    <h2 className="font-bold">SOCIAL MEDIA</h2>
                    <div className="flex gap-8 flex-row ">
                        <FontAwesomeIcon className="text-2xl cursor-pointer hover:text-red-500" icon={faFacebookF} />
                        <FontAwesomeIcon className="text-2xl cursor-pointer hover:text-red-500" icon={faInstagram} />
                        <FontAwesomeIcon className="text-2xl cursor-pointer hover:text-red-500" icon={faTwitter} />
                        <FontAwesomeIcon className="text-2xl cursor-pointer hover:text-red-500" icon={faLinkedin} />
                    </div>
                </div>
                <div className="space-y-7 text-3Xl uppercase">
                    <h2 className="font-bold">CUSTOMERS</h2>
                    <div className="flex gap-3 flex-col">
                        <h2 className="hover:text-red-500 cursor-pointer">Faqs</h2>
                        <h2 className="hover:text-red-500 cursor-pointer">Shipping</h2>
                        <h2 className="hover:text-red-500 cursor-pointer">Returns</h2>
                        <h2 className="hover:text-red-500 cursor-pointer">Terms</h2>
                    </div>
                </div>
                <div className="space-y-7 text-3Xl uppercase">
                    <h2 className="font-bold">HELP</h2>
                        <div className="flex gap-3 flex-col">
                            <h2 className="hover:text-red-500 cursor-pointer">About Us</h2>
                            <h2 className="hover:text-red-500 cursor-pointer">Our Creations</h2>
                            <h2 className="hover:text-red-500 cursor-pointer">Testimonials</h2>
                            <h2 className="hover:text-red-500 cursor-pointer">Journal</h2>
                        </div>
                </div>
            </div>
            <div className="flex justify-end px-4">
                <img src={pymant} alt="payment" />
            </div>
        </footer>
    </>
  )
}
