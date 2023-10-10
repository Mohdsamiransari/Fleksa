

const Testimonials = () => {
  return (
    <section className="w-10/12 mx-auto relative  font-serif mt-20">
        <h1 className="text-4xl font-semibold">What peoples say about us</h1>
        <p className="w-5/12 mt-8 text-sm">Come and join us as we endeour to recreate the magic of such emotions through our cuisine that is so quintessentially - Uptown!</p>
        <div className="w-full h-52 grid grid-cols-3 mt-20">
            <div className="relative h-full w-full">
                <div className=" bg-neutral-900 rounded-md shadow-lg shadow-neutral-700 w-4/5 h-4/5 p-4 ">
                    <div>
                        <h2 className="font-semibold">Ivan Petrov</h2>
                        <i></i>
                    </div>
                    <p className="w-3/5 text-sm mt-4">I liked it all very much. I will come here with my family. Recommended!</p>
                </div>
                <img src="" alt="" />
            </div>
            <div className="relative h-full w-full">
                <div className="bg-neutral-900 rounded-md shadow-lg shadow-neutral-700 w-4/5 h-4/5 p-4 ">
                    <div>
                        <h2 className="font-semibold">Ivan Petrov</h2>
                        <i></i>
                    </div>
                    <p className="w-3/5 text-sm mt-4">I liked it all very much. I will come here with my family. Recommended!</p>
                </div>
                <img src="" alt="" />
            </div>
            <div className="relative h-full w-full">
                <div className="bg-neutral-900 rounded-md shadow-lg shadow-neutral-700 w-4/5 h-4/5 p-4 ">
                    <div>
                        <h2 className="font-semibold">Ivan Petrov</h2>
                        <i></i>
                    </div>
                    <p className="w-3/5 text-sm mt-4">I liked it all very much. I will come here with my family. Recommended!</p>
                </div>
                <img src="" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Testimonials