import { LayoutTemplate } from "lucide-react";
import { EmptyState } from "@/components/dashboard/empty-state";

export const metadata = {
  title: "Templates — Launchly",
};

export default function TemplatesPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight text-ink-950">
        Templates
      </h1>
      <p className="mt-1 text-sm text-slate-500">
        Restaurant, Barber Shop, and Hotel templates will be selectable here.
      </p>

      <div className="mt-6">
        <EmptyState
          icon={LayoutTemplate}
          title="Template gallery coming soon"
          description="Template selection and the site builder ship in the next development phase."
        />
      </div>
    </div>
  );
}
