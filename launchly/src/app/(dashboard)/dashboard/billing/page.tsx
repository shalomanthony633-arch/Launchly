import { CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Billing — Launchly",
};

export default function BillingPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight text-ink-950">
        Billing
      </h1>
      <p className="mt-1 text-sm text-slate-500">
        Manage your plan and payment details.
      </p>

      <Card className="mt-6">
        <CardContent className="flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-success-50 text-success-600">
              <CreditCard className="h-5 w-5" strokeWidth={2} />
            </div>
            <div>
              <p className="text-sm font-medium text-ink-900">
                You&apos;re on the Free plan
              </p>
              <p className="mt-0.5 text-sm text-slate-500">
                Paid plans and billing history will appear here once pricing
                ships.
              </p>
            </div>
          </div>
          <Button variant="secondary" size="sm" disabled>
            Upgrade plan
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
