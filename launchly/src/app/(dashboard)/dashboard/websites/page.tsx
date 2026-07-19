import { Globe } from "lucide-react";
import { EmptyState } from "@/components/dashboard/empty-state";

export const metadata = {
  title: "My Websites — Launchly",
};

export default function WebsitesPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight text-ink-950">
        My Websites
      </h1>
      <p className="mt-1 text-sm text-slate-500">
        Manage the websites you&apos;ve created.
      </p>

      <div className="mt-6">
        <EmptyState
          icon={Globe}
          title="No websites yet"
          description="The website builder is coming in the next phase. Once it ships, your published sites will appear here."
        />
      </div>
    </div>
  );
}
