import Card from "@/components/Card";
import Testimonials from "@/components/Testimonials";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";

import Link from "next/link";
import { fetchDishes } from "@/lib/actions/dish.action";

export default async function Home() {
  const dish = await fetchDishes();

  return (
    <>
      <section
        className="w-full h-screen bg-cover  font-serif "
        style={{ backgroundImage: `url(/assets/Hero_image.jpg)` }}
      >
        <h1 className="text-[5rem] w-3/6 mx-auto pt-52 text-center ">
          Check out our gourmet <span className=" text-amber-600">Menu:</span>
        </h1>
        <div className="mx-auto w-2/6 text-center  mt-10 ">
          <div className="flex flex-row items-center justify-between px-10">
            <div className="flex gap-2 items-center">
              <i>
                <AiOutlineClockCircle />
              </i>
              <p>9:00 - 20:00</p>
            </div>
            <div className="flex gap-2 items-center">
              <i>
                <MdOutlineLocationOn />
              </i>
              <p>Palitkovskala</p>
            </div>
          </div>
          <button className="mt-10 px-4 py-2 border-2  border-white">
            Look nenu
          </button>
        </div>
      </section>
      <section className="w-10/12 mx-auto mt-28 font-serif h-full">
        <h1 className="text-center text-4xl font-semibold ">
          You may like one of our dishes:
        </h1>
        <div className="flex flex-row justify-between items-center">
          <ul className="flex flex-row gap-8 my-10">
            <li>Pastas</li>
            <li>Burgers</li>
            <li>Pizzas</li>
            <li>Salads</li>
          </ul>
          <Link href="/new_dish" className="px-4 py-2 bg-blue-700 rounded-lg">
            Add dish
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-12">
          {dish.map((dishes) => (
            <Card
              key={dishes.id}
              id={dishes._id}
              name={dishes.name}
              description={dishes.description}
              price={dishes.price}
            />
          ))}
        </div>
      </section>
      <Testimonials />
    </>
  );
}
