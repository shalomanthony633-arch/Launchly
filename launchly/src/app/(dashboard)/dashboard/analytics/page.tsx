import { BarChart3 } from "lucide-react";
import { EmptyState } from "@/components/dashboard/empty-state";

export const metadata = {
  title: "Analytics — Launchly",
};

export default function AnalyticsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight text-ink-950">
        Analytics
      </h1>
      <p className="mt-1 text-sm text-slate-500">
        Traffic and engagement across your published websites.
      </p>

      <div className="mt-6">
        <EmptyState
          icon={BarChart3}
          title="No data yet"
          description="Analytics will populate once you publish your first website and it starts receiving visitors."
        />
      </div>
    </div>
  );
}
