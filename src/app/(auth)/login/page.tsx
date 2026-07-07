import { Metadata } from "next";
import { AuthTabs } from "@/components/auth/AuthTabs";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = { title: "Log In — SupportFlow AI" };

export default function LoginPage() {
  return (
    <div>
      <AuthTabs />
      <LoginForm />
    </div>
  );
}
