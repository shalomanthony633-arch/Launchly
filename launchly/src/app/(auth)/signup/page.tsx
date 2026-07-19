import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { SignupForm } from "@/components/marketing/signup-form";

export const metadata = {
  title: "Sign up — Launchly",
};

export default function SignupPage() {
  return (
    <Card>
      <CardContent className="p-7">
        <h1 className="text-xl font-semibold tracking-tight text-ink-950">
          Create your account
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Start building your website in minutes.
        </p>

        <div className="mt-6">
          <SignupForm />
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-primary-600 hover:text-primary-700"
          >
            Log in
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
