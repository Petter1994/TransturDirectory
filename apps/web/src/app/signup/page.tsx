import { Metadata } from "next";
import SignUpContent from '@/components/Auth/SignUp/SignUpContent'

export const metadata: Metadata = {
  title: "Sign Up Page | TransturDirectory",
  description: "This is Sign Up Page for TransturDirectory",
  // other metadata
};

const SignupPage = () => {
  return (
    <>
     <SignUpContent/>
    </>
  );
};

export default SignupPage;
