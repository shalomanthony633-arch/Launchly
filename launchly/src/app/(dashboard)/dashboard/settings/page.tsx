import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Settings — Launchly",
};

export default async function SettingsPage() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight text-ink-950">
        Settings
      </h1>
      <p className="mt-1 text-sm text-slate-500">
        Manage your account information.
      </p>

      <Card className="mt-6 max-w-lg">
        <CardContent className="p-6">
          <h2 className="text-sm font-medium text-ink-900">
            Account details
          </h2>

          <div className="mt-4">
            <Label htmlFor="settings-name">Full name</Label>
            <Input
              id="settings-name"
              defaultValue={session?.user?.name ?? ""}
              disabled
            />
          </div>

          <div className="mt-4">
            <Label htmlFor="settings-email">Email</Label>
            <Input
              id="settings-email"
              defaultValue={session?.user?.email ?? ""}
              disabled
            />
          </div>

          <p className="mt-3 text-xs text-slate-400">
            Editing account details will be enabled in a future update.
          </p>

          <Button className="mt-5" size="sm" disabled>
            Save changes
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
