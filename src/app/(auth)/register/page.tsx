import { Metadata } from "next";
import { AuthTabs } from "@/components/auth/AuthTabs";
import { RegisterForm } from "@/components/auth/RegisterForm";

export const metadata: Metadata = { title: "Sign Up — SupportFlow AI" };

export default function RegisterPage() {
  return (
    <div>
      <AuthTabs />
      <RegisterForm />
    </div>
  );
}
