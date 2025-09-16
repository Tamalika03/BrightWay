import { Link, NavLink, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Headphones, BookOpen, MessagesSquare, ShieldCheck, Languages } from "lucide-react";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Skip link for accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 z-50 bg-primary text-primary-foreground px-3 py-2 rounded-md"
      >
        Skip to content
      </a>

      <Header />

      <main id="main" className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2" aria-label="BrightWay home">
              <LogoMark />
              <span className="font-extrabold tracking-tight text-xl bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--logo-start))] to-[hsl(var(--logo-end))]">
                BrightWay
              </span>
            </Link>
            <nav aria-label="Primary" className="hidden md:flex md:items-center md:gap-1 ml-6">
              <NavItem to="/" end>Home</NavItem>
              <NavItem to="/about" icon={<ShieldCheck className="h-4 w-4" aria-hidden="true" />}>About</NavItem>
              <NavItem to="/learn" icon={<BookOpen className="h-4 w-4" aria-hidden="true" />}>Learning Hub</NavItem>
              <NavItem to="/community" icon={<MessagesSquare className="h-4 w-4" aria-hidden="true" />}>Community</NavItem>
              <NavItem to="/chat" icon={<Headphones className="h-4 w-4" aria-hidden="true" />}>Chatbot</NavItem>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="lang" className="sr-only">Language</label>
            <div className="relative hidden sm:block">
              <Languages className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
              <select
                id="lang"
                aria-label="Select language"
                className="appearance-none pl-8 pr-6 py-2 rounded-md text-sm border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                defaultValue="en"
              >
                <option value="en">English</option>
                <option value="hi">हिन्दी</option>
                <option value="bn">বাংলা</option>
                <option value="es">Español</option>
              </select>
            </div>
            <Button asChild size="sm" variant="ghost" aria-label="Login to BrightWay">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild size="sm" className="bg-gradient-to-r from-[hsl(var(--logo-start))] to-[hsl(var(--logo-end))] text-white hover:opacity-90" aria-label="Get started with BrightWay">
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavItem({ to, children, icon, end }: { to: string; children: React.ReactNode; icon?: React.ReactNode; end?: boolean }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        cn(
          "inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-accent/10 hover:text-foreground",
          isActive && "text-orange-600 font-semibold"
        )
      }
    >
      {icon}
      <span>{children}</span>
    </NavLink>
  );
}

function LogoMark({ small }: { small?: boolean }) {
  const size = small ? "h-8 w-8" : "h-9 w-9";
  return (
    <span className={cn("inline-flex items-center justify-center rounded-lg text-white shadow", size)} aria-hidden="true">
      <svg viewBox="0 0 64 64" className="h-full w-full" role="img" aria-label="BrightWay logo">
        <defs>
          <linearGradient id="bw-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(var(--logo-start, var(--primary)))" />
            <stop offset="100%" stopColor="hsl(var(--logo-end, var(--secondary)))" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="64" height="64" rx="14" fill="url(#bw-grad)" />
        <path d="M6 46c12-10 22-10 52 0" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.9" fill="none" />
        <path d="M10 40c10-6 20-6 44 0" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" fill="none" />
        <circle cx="32" cy="22" r="6" fill="white" opacity="0.95" />
        <path d="M32 10l2.2 4.4 4.8.7-3.5 3.4.8 4.8L32 21.4l-4.3 2.9.8-4.8-3.5-3.4 4.8-.7z" fill="hsl(var(--logo-end, var(--secondary)))" opacity="0.9" />
        <rect x="1" y="1" width="62" height="62" rx="15" fill="none" stroke="white" strokeOpacity="0.15" />
      </svg>
    </span>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <LogoMark small />
            <span className="font-bold">BrightWay</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Breaking the silence with empathy and education. A safe, stigma-free space to learn, share, and grow.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link className="hover:underline" to="/learn">Learning Hub</Link></li>
              <li><Link className="hover:underline" to="/community">Safe Space</Link></li>
              <li><Link className="hover:underline" to="/podcasts">Podcasts</Link></li>
              <li><Link className="hover:underline" to="/chat">AI Chat</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Trust & Safety</h3>
            <ul className="space-y-2 text-sm">
              <li><Link className="hover:underline" to="/about">About</Link></li>
              <li><a className="hover:underline" href="#" aria-label="Read community guidelines">Community Guidelines</a></li>
              <li><a className="hover:underline" href="#" aria-label="Privacy policy">Privacy</a></li>
              <li><a className="hover:underline" href="#" aria-label="Report urgent abuse">Report abuse</a></li>
            </ul>
          </div>
        </div>
        <div className="text-sm text-muted-foreground flex items-end md:items-start justify-between md:justify-end">
          <p className="md:text-right">© {new Date().getFullYear()} BrightWay. Be kind. Be curious. Be responsible.</p>
        </div>
      </div>
    </footer>
  );
}
