import {z} from "zod";

export const usernameValidation = z
    .string()
    .min(2, "Username must be of 2 characters")
    .max(20, "Username must not be more than 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special characters")

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Invalid email Address"}),
    password: z.string().min(6, {message: "Password must be atleast og 6 characters"}).max(20, {message: "Password must not be more than 20 characters"})
})