"use server";
import { AuthForm, AuthFormSchema } from "@/types/authForm";
import { BACKEND_URL } from "@/constants/constants";
import { redirect } from "next/navigation";


export async function signUp(state: AuthForm, formData: FormData) {
  const validationFields = AuthFormSchema.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password")
  });

  if (!validationFields.success) {
    return {
      error: validationFields.error.flatten().fieldErrors
    };
  }

  const response = await fetch(`${BACKEND_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(validationFields.data)
  });

  if (response.ok) {
    redirect("auth/signin");
  }
  else return {
    message: response.status === 409 ? 'The User is already registered.' : response.statusText,
  }

}