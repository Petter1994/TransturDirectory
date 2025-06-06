"use client";
import { useFormStatus } from "react-dom";

export default function SignUpBtn() {
  const { pending } = useFormStatus();
  return (
    <>
      <button
        type="submit"
        aria-disabled={pending}
        className="shadow-submit dark:shadow-submit-dark bg-primary hover:bg-primary/90 flex w-full items-center justify-center rounded-xs px-9 py-4 text-base font-medium text-white duration-300">
        {pending ? "Cargando" : "Registrar"}
      </button>
    </>
  );
}