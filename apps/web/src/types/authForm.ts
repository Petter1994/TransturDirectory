import {z} from 'zod'

export type AuthForm = {
  error?: {
    username?: string,
    email?: string,
    password?: string,
  }
  message?: string
} | undefined

export const AuthFormSchema = z.object({
  username: z.string().min(2,{message:'Al menos 2 caractares'}).trim(),
  email: z.string().email({message:'Email invalido'}).trim(),
  password: z.string().trim(),
})