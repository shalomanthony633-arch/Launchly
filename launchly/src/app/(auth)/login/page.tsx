import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { LoginForm } from "@/components/marketing/login-form";

export const metadata = {
  title: "Log in — Launchly",
};

export default function LoginPage() {
  return (
    <Card>
      <CardContent className="p-7">
        <h1 className="text-xl font-semibold tracking-tight text-ink-950">
          Welcome back
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Log in to manage your websites.
        </p>

        <div className="mt-6">
          <LoginForm />
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-primary-600 hover:text-primary-700"
          >
            Sign up
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
