import imgone from "../assets/banner-7.jpg"
import imgtow from "../assets/banner-6.jpg"



export const Latest = () => {
  return (
    <>
        <div className=" container mx-auto text-black py-10">
            <div className="flex xl:gap-[5%] xl:flex-row flex-col gap-6">
                <div className="xl:w-[50%] w-full">
                    <img src={imgone} className="w-full h-full" alt="banner_5" />
                </div>
                <div className="xl:w-[50%] w-full">
                    <img src={imgtow} className="w-full h-1/2" alt="banner_4" />
                    <div className="w-full h-full space-y-5 pt-20">
                        <div className="md:text-3xl text-xl font-bold">
                            <h2>Latest Of This Season</h2>
                            <h2>For Women</h2>
                        </div>
                        <div className="font-serif text-amber-700">
                            <h2>UP TO 45% OFF</h2>
                        </div>
                        <div className="px-3 py-2 border border-spacing-1 border-black hover:bg-amber-700 w-fit hover:text-white cursor-pointer"> 
                            <h2>SHOP COLLECTION</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
