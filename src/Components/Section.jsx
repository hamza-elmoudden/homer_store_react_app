import { Login } from "./Login"


export const Section = () => {
    return (
        <>
            <section className="sect text-black z-20">
                <div className='img w-full h-full absolute z-20'>
                    <div className="w-full h-full flex items-end py-10 px-10">
                        <div className="md:w-[28rem] w-full h-[20rem]  flex flex-col  justify-center items-center gap-[4rem]">
                            <div className="space-y-[1rem]">
                                <h2 className="md:text-2xl text-sm capitalize opacity-35">Spring Collection</h2>
                                <h1 className="md:text-5xl text-4xl uppercase font-bold">CAMELUS</h1>
                            </div>
                            <div className="uppercase flex gap-[4rem] md:flex-row flex-col">
                                <div className="px-3 py-2 border border-spacing-1 border-black w-[20rem] md:w-[7rem] text-center cursor-pointer hover:bg-black hover:text-white">MEN</div>
                                <div className="px-3 py-2 border border-spacing-1 border-black w-[20rem] md:w-[7rem] text-center cursor-pointer hover:bg-black hover:text-white">HOme</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
