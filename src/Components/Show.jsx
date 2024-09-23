import { Coverflow } from "./Coverflow"



export const Show = () => {

 

  return (
    <>
      <section className="py-20 text-black container mx-auto">
        <div>
          <Coverflow />
          <div className="flex md:justify-end">
            <div className="text-xl capitalize w-fit">
              <h2 className="cursor-pointer hover:text-blue-500">See All</h2>
              <div className="w-full h-[2px] bg-black rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
