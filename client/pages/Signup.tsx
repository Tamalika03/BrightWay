import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Signup() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mx-auto max-w-md">
        <Card className="shadow-soft">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Create your account</CardTitle>
            <CardDescription>Join BrightWay — stigma‑free learning and support.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4" onSubmit={(e)=>e.preventDefault()} aria-label="Sign up form">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium">Display name (optional)</label>
                <input id="name" name="name" type="text" className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input id="email" name="email" type="email" required autoComplete="email" className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="password" className="text-sm font-medium">Password</label>
                <input id="password" name="password" type="password" required autoComplete="new-password" className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="confirm" className="text-sm font-medium">Confirm password</label>
                <input id="confirm" name="confirm" type="password" required className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <Button type="submit" className="w-full">Get Started</Button>
            </form>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Already have an account? <Link to="/login" className="text-primary hover:underline">Login</Link>
            </p>
            <p className="mt-3 text-[12px] text-muted-foreground">
              You can stay anonymous. We will never show your email or personal details publicly.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
