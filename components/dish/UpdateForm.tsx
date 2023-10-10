"use client";

import { updateDish } from "@/lib/actions/dish.action";

import React from "react";
import { z } from "zod";
import { DishValidation } from "@/lib/validation/dish.validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  dishId: string;
  dishName: string;
  description: string;
  price: number;
}

const UpdateForm = ({ dishId, dishName, description, price }: Props) => {
  const router = useRouter();
  const path = usePathname();

  const form = useForm({
    resolver: zodResolver(DishValidation),
    defaultValues: {
      name: dishName || "",
      price: price || 0,
      description: description || "",
    },
  });
  const onSubmit = async (values: z.infer<typeof DishValidation>) => {
    await updateDish({
      dishId: dishId,
      name: values.name || dishName,
      description: values.description,
      price: values.price,
      path: path,
    });

    router.push("/");
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" w-5/12 h-4/5 border flex flex-row gap-10 p-10 mt-20 rounded-xl"
      >
       
        <div className="w-full flex flex-col justify-between  font-serif">
          <div className="flex flex-col gap-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Dish name"
                      {...field}
                      className="bg-transparent border rounded-md py-1 px-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Price"
                      {...field}
                      className="bg-transparent border rounded-md py-1 px-2"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Description"
                      {...field}
                      className="bg-transparent border rounded-md py-1 px-2"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            className="bg-blue-700 py-2 rounded-md hover:bg-blue-900"
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UpdateForm;
