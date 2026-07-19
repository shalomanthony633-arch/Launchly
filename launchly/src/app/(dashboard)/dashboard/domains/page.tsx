import { Link2 } from "lucide-react";
import { EmptyState } from "@/components/dashboard/empty-state";

export const metadata = {
  title: "Domains — Launchly",
};

export default function DomainsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight text-ink-950">
        Domains
      </h1>
      <p className="mt-1 text-sm text-slate-500">
        Manage the address your websites publish to.
      </p>

      <div className="mt-6">
        <EmptyState
          icon={Link2}
          title="No domains connected"
          description="Every website will get a free yourbusiness.launchly.site address. Custom domain support is a planned future feature."
        />
      </div>
    </div>
  );
}
