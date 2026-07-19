import Link from "next/link";
import { Logo } from "@/components/ui/logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="hero-glow flex min-h-screen flex-col items-center justify-center px-6 py-12">
      <Link href="/" className="mb-8" aria-label="Launchly home">
        <Logo />
      </Link>
      <div className="w-full max-w-[400px]">{children}</div>
    </div>
  );
}
