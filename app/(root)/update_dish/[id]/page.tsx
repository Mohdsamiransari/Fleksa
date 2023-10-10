"use server"

import UpdateForm from "@/components/UpdateForm"
import { fetchDishesById } from "@/lib/actions/dish.action"






const page = async({ params }: { params: { id: string } }) => {

  const dish = await fetchDishesById(params.id)
  
  
  
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <UpdateForm dishName={dish.name} description={dish.description} price={dish.price} dishId={params.id}/>
    </section>
  )
}

export default page