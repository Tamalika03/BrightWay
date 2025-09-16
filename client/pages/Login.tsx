import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mx-auto max-w-md">
        <Card className="shadow-soft">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Welcome back</CardTitle>
            <CardDescription>Login to continue your BrightWay journey.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4" onSubmit={(e)=>e.preventDefault()} aria-label="Login form">
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input id="email" name="email" type="email" required autoComplete="email" className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="password" className="text-sm font-medium">Password</label>
                <input id="password" name="password" type="password" required autoComplete="current-password" className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded border" />
                  Remember me
                </label>
                <Link to="#" className="text-primary hover:underline">Forgot password?</Link>
              </div>
              <Button type="submit" className="w-full">Login</Button>
            </form>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              New here? <Link to="/signup" className="text-primary hover:underline">Create an account</Link>
            </p>
            <p className="mt-3 text-[12px] text-muted-foreground">
              By continuing you agree to our privacy-first approach. Your identity is never shown to other users unless you choose to share it.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
