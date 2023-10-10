import * as z from "zod";

export const DishValidation = z.object({
  name: z.string(),
  description: z.string(),
  price: z.coerce.number(),
});



