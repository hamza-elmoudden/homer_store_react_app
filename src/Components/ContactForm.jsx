import React from 'react'

export const ContactForm = () => {
  return (
    <>
        <div className="py-20 container mx-auto flex justify-center text-black">
            <form action="" className="pt-20 space-y-8 ">
                <div className=" grid xl:grid-cols-2 grid-cols-1 gap-5">
                    <input type="text" name="" id="" className="w-[27rem] h-[2.5rem] px-3 py-2 rounded-lg border border-spacing-1 border-black bg-white outline-none" placeholder="First Name"/>
                    <input type="text" name="" id="" className="w-[27rem] h-[2.5rem] px-3 py-2 rounded-lg border border-spacing-1 border-black bg-white outline-none" placeholder="Last Name"/>
                </div>
                <div>
                    <input type="text" className="w-full h-[2.5rem] px-3 py-2 rounded-lg border border-spacing-1 border-black bg-white outline-none" placeholder='Email'/>
                </div>
                <div>
                    <textarea name="" id="" rows="10" className="w-full border border-spacing-1 border-black bg-white px-8 py-2 outline-none" placeholder="Description"></textarea>
                </div>
                <div className="flex justify-center">
                    <button className="px-4 py-2 rounded-lg text-2xl capitalize bg-blue-500 text-white hover:shadow-2xl hover:bg-red-500">Submite</button>
                </div>
            </form>
        </div>
    </>
  )
}
