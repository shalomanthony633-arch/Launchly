import { getServerSession } from "next-auth";
import { Globe, Activity, CreditCard, Users, Plus } from "lucide-react";
import { authOptions } from "@/lib/auth";
import { StatCard } from "@/components/dashboard/stat-card";
import { EmptyState } from "@/components/dashboard/empty-state";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Dashboard — Launchly",
};

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  const firstName = session?.user?.name?.split(" ")[0] ?? "there";

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-ink-950">
            Welcome back, {firstName}
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Here&apos;s what&apos;s happening with your websites.
          </p>
        </div>
        <Button size="md">
          <Plus className="h-4 w-4" />
          Create Website
        </Button>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Websites"
          value="0"
          icon={Globe}
          accent="primary"
        />
        <StatCard
          label="Website status"
          value="None live"
          icon={Activity}
          accent="neutral"
        />
        <StatCard
          label="Subscription"
          value="Free plan"
          icon={CreditCard}
          accent="success"
        />
        <StatCard
          label="Visitors (30d)"
          value="0"
          icon={Users}
          accent="neutral"
        />
      </div>

      <div className="mt-8">
        <h2 className="text-sm font-medium text-ink-900">Recent activity</h2>
        <div className="mt-3">
          <EmptyState
            icon={Activity}
            title="No activity yet"
            description="Once you create your first website, updates and publishes will show up here."
          />
        </div>
      </div>
    </div>
  );
}
