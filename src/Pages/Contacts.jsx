import { Brand } from "../Components/Brand"
import { ContactForm } from "../Components/ContactForm"
import { Footer } from "../Components/Footer"
import { Latest } from "../Components/Latest"
import { List } from "../Components/List"
import { Navebar } from "../Components/Navebar"




export const Contacts = () => {
  return (
    <>
    <Navebar/>
    <ContactForm/>
    <Brand/>
    <Latest/>
    <List/>
    <Footer/>
    </>
  )
}
