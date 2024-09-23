import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons';
import { ShowLogin } from './Navebar';
import { useMutation ,gql} from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { AddlToken } from '../Redux/Auth';
import Cookies from 'js-cookie';


const saveToken = (token) => {
  Cookies.set('authToken', token, { expires: 7 });
}



const LOGIN_MUTATION = gql`
  mutation adduser($user: Logininput!) {
    signIn(login: $user) {
      accessToken
    }
  }
`

export const Login = () => {
    
    const dispatch = useDispatch()

    const [login, { loading, error, data }] = useMutation(LOGIN_MUTATION);

    const handleSubmit = (event) => {

        event.preventDefault();
    
        const {email,password} = event.target.elements;

        if(!email || !password){
          return null
        }
        

        login({
            variables: {
              user: {
                email: email.value,
                password: password.value
              }
            }
          })
          .then(response => {
            console.log('Success');
            dispatch(AddlToken({"token":response.data.signIn.accessToken,"auth":true}))
            ShowLogin()
            
          })
          .catch(err => {
            console.error('Error:', err);
        });

        
    };



    


    
  return (
    <>
    <div className="w-full h-[100vh]  text-black relative bg-transparent login z-50 bg-black" >
        <div className="w-full h-full flex justify-center items-center">
            <form onSubmit={handleSubmit} className="md:p-10 p-8 border border-spacing-1 border-gray-300 shadow-2xl flex flex-col gap-16 rounded-xl bg-white">
                <div className="flex justify-end">
                        <div className="w-[3rem] h-[3rem] bg-red-500 px-3 py-3 rounded-full text-center text-white hover:text-black hover:bg-red-800">
                            <FontAwesomeIcon icon={faX} className="text-2xl cursor-pointer"  onClick={ShowLogin}/>
                        </div>
                </div>
                <div className="flex flex-col gap-8">
                    <div>
                        <input type="text" defaultValue={"Abse@Gmail.com"} name='email' placeholder='Email' className="h-[3rem] rounded-full px-3 py-2 w-[24rem] bg-white outline-none border border-spacing-1 border-black" />
                    </div>
                    <div>
                        <input type="password" defaultValue={"12345678"} name='password' placeholder='Password' className="h-[3rem] rounded-full px-3 py-2 w-[24rem] bg-white outline-none border border-spacing-1 border-black" />
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="px-3 py-2 rounded-full bg-green-500 text-xl uppercase font-bold w-[8rem] text-white flex justify-center cursor-pointer hover:shadow-xl hover:bg-orange-700 hover:text-black">Login</button>
                    </div>
                </div>
                {
                error && <div className="text-center text-xl capitalize font-bold text-red-500">
                    <h2>email or password incorrect</h2>
                </div>
                }   
            </form>
           
        </div>
    </div>
    </>
  )
}
