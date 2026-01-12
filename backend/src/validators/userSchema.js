import {z} from 'zod'

export const userSignUpSchema = z.object( {
    email: z.string().email(),
    username: z.string().min(3).max(30),
    password: z.string()
});