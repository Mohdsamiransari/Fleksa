
"use client"
import Image from "next/image";
import Link from "next/link";
import DeleteDish from "./DeleteDish";

interface Props {
  id: String;
  name: String;
  description: String;
  price: String;
}

const Card = ({ id, name, description, price }: Props) => {

  
  return (
    <div className=" h-[26rem] rounded-xl bg-white flex flex-col text-black">
      {/* <img src={Pasta} alt="" className='w-full h-[75%] object-cover rounded-t-xl'/> */}
      <Image
        src="/assets/Pasta.jpg"
        alt="dish"
        width={500}
        height={500}
        className="w-full h-[75%] object-cover rounded-t-xl"
      />

      <div className="basis-2/5 p-3 grid">
        <h2 className="font-semibold">{name}</h2>
        <p className="text-xs ">{description}</p>
        <div className="text-xs font-normal flex items-center justify-between">
          <p className="">
            {price}
            <span>Rs</span>{" "}
          </p>
          <p>4.5 / 5</p>
        </div>
        <div className="flex items-center justify-between text-sm text-white">
          <Link
            href={`/update_dish/${id}`}
            className="bg-blue-700 px-3 py-1 rounded-md"
          >
            Update
          </Link>
          <DeleteDish dishId={id}/>
        </div>
      </div>
    </div>
  );
};

export default Card;
