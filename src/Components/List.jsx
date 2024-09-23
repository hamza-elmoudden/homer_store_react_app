import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck,faWallet,faLaptop,faShieldVirus } from '@fortawesome/free-solid-svg-icons';


export const List = () => {
  return (
    <>
    <div className="container mx-auto py-8 text-black">
        <div className="flex xl:justify-between flex-wrap gap-10  justify-center">
            <div className="flex gap-6 items-center">
                <div className="text-3xl">
                    <FontAwesomeIcon icon={faTruck} />
                </div>
                <div className="space-y-2">
                    <h2 className="text-2xl capitalize">Free Shipping</h2>
                    <p className="opacity-60 font-bold">Standard shipping for orders</p>
                </div>
            </div>
            <div className="flex gap-6 items-center">
                <div className="text-3xl">
                <FontAwesomeIcon icon={faWallet} />
                </div>
                <div className="space-y-2">
                    <h2 className="text-2xl capitalize">Money Guarantee</h2>
                    <p className="opacity-60 font-bold">Within 30 days</p>
                </div>
            </div>
            <div className="flex gap-6 items-center">
                <div className="text-3xl">
                    <FontAwesomeIcon icon={faLaptop} />
                </div>
                <div className="space-y-2">
                    <h2 className="text-2xl capitalize">Online Support</h2>
                    <p className="opacity-60 font-bold">24 hours a day, 7 days a week</p>
                </div>
            </div>
            <div className="flex gap-6 items-center">
                <div className="text-3xl">
                <FontAwesomeIcon icon={faShieldVirus} />
                </div>
                <div className="space-y-2">
                    <h2 className="text-2xl capitalize">Flexible Payment</h2>
                    <p className="opacity-60 font-bold">Multiple Credit Cards</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
