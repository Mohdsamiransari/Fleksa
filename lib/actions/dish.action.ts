"use server";

import { revalidatePath } from "next/cache";
import Dish from "../models/dish.model";
import { connectToDB } from "../mongoose";



interface Params {
  name: String;
  description?: String;
  price: Number;
  path: string;
}

// create dish
export async function createDish({ name, description, price, path }: Params) {
  try {
    connectToDB();

    await Dish.create({
      name,
      description,
      price,
    });

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`An error occured while creating dish ${error.message}`);
  }
}

export async function fetchDishes() {
  try {
    connectToDB();

    const dish = await Dish.find();

    return dish
  } catch (error: any) {
    throw new Error(`An error occured while getting all dishes ${error.message}`);
  }
}

export async function fetchDishesById(dishId: String) {
  try {
    connectToDB();

    const dish = await Dish.findById(dishId);
    return dish;
  } catch (error: any) {
    throw new Error(`An error occured while getting a single dish ${error.message}`);
  }
}

interface updateDishData extends Params {
  dishId: String;
}

export async function updateDish({
  dishId,
  name,
  description,
  price,
  path,
}: updateDishData) {
  try {
    connectToDB();
    const dish = await Dish.findByIdAndUpdate(dishId, {
      name,
      description,
      price,
    });

    await dish.save();

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`An error occured while updating dish ${error.message}`);
  }
}

export async function deleteDish(dishId: String, path: string) {
  try {
    connectToDB();

    console.log(dishId);
    await Dish.findByIdAndDelete(dishId);

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`An error occured while deleting dish ${error.message}`);
  }
}
