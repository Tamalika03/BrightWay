import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpen, ShieldCheck, Headphones, MessagesSquare, Mic, Trophy, HeartHandshake, Sparkles } from "lucide-react";

export default function Index() {
  return (
    <div className="bg-gradient-to-b from-background to-muted/50">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-1/3 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 text-xs font-medium rounded-full border px-2.5 py-1 text-foreground/80 bg-background/60 w-fit">
              <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              BrightWay for Teens — Learn, Feel, Respect
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Learn what’s right. Share what you feel.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl">
              BrightWay helps teenagers understand consent, boundaries, respect, and healthy relationships — and gives a stigma‑free space to express feelings without hesitation. Grow with empathy, responsibility, and confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" aria-label="Join BrightWay and start learning">
                <Link to="/learn">Join Now</Link>
              </Button>
              <Button asChild variant="secondary" size="lg" aria-label="Explore the Learning Hub" className="bg-gradient-to-r from-[hsl(var(--logo-start))] to-[hsl(var(--logo-end))] text-white hover:opacity-90">
                <Link to="/learn">Explore Learning</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" aria-label="Learn more about BrightWay">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4" role="list" aria-label="Safety and privacy highlights">
              <SafetyItem icon={<ShieldCheck className="h-4 w-4" aria-hidden="true" />} label="Anonymous by default" />
              <SafetyItem icon={<HeartHandshake className="h-4 w-4" aria-hidden="true" />} label="Supportive moderation" />
              <SafetyItem icon={<Headphones className="h-4 w-4" aria-hidden="true" />} label="AI guidance — private" />
            </div>
          </div>
          <div className="grid gap-4 md:gap-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <BookOpen className="h-5 w-5 text-primary" aria-hidden="true" />
                  Start with consent
                </CardTitle>
                <CardDescription>Clear, practical lessons with quizzes to build confidence and empathy.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 w-2/5 rounded-full bg-primary" aria-label="Progress 40%" aria-valuemin={0} aria-valuemax={100} aria-valuenow={40} role="progressbar" />
                </div>
                <div className="mt-4 flex gap-2">
                  <Badge label="Consent Aware" />
                  <Badge label="Empathy Builder" />
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <MessagesSquare className="h-5 w-5 text-accent" aria-hidden="true" />
                  Share without judgment
                </CardTitle>
                <CardDescription>Mood tags and supportive reactions help you express and feel heard.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {['Anxious','Curious','Guilty','Learning','Calm'].map((m)=> (
                  <span key={m} className="rounded-full bg-accent/10 text-accent px-3 py-1 text-xs">{m}</span>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Feature icon={<BookOpen className="h-5 w-5" aria-hidden="true" />} title="Learning Hub" desc="Reproductive health education, consent, harassment, and relationships — clear and respectful." />
          <Feature icon={<MessagesSquare className="h-5 w-5" aria-hidden="true" />} title="Safe Space" desc="Anonymous, stigma‑free discussions with supportive reactions and guidelines." />
          <Feature icon={<Headphones className="h-5 w-5" aria-hidden="true" />} title="AI Chat" desc="Gentle, private guidance with quick prompts and voice/text input." />
          <Feature icon={<Mic className="h-5 w-5" aria-hidden="true" />} title="Podcasts" desc="On‑the‑go learning with transcripts and multilingual options." />
        </div>
      </section>

      {/* Badge teaser */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-2xl border bg-card p-6 md:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-xl font-semibold">Grow with gentle motivation</h2>
              <p className="text-muted-foreground mt-1">Earn respectful badges as you learn — no pressure, just progress.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge icon={<ShieldCheck className="h-4 w-4" aria-hidden="true" />} label="Consent Aware" />
              <Badge icon={<HeartHandshake className="h-4 w-4" aria-hidden="true" />} label="Empathy Builder" />
              <Badge icon={<Trophy className="h-4 w-4" aria-hidden="true" />} label="Growth Mindset" />
            </div>
          </div>
        </div>
      </section>

      {/* Safety note */}
      <section className="bg-muted/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="rounded-xl border bg-background p-6 md:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-lg font-semibold">Privacy-first, always</h2>
                <p className="text-muted-foreground mt-1 max-w-2xl">Anonymous by default. Clear disclaimers. Tools to report or block. If you’re in immediate danger or need urgent help, please contact local authorities or trusted services.</p>
              </div>
              <div className="flex gap-3">
                <Button asChild variant="secondary" className="bg-gradient-to-r from-[hsl(var(--logo-start))] to-[hsl(var(--logo-end))] text-white hover:opacity-90">
                  <Link to="/chat" aria-label="Open AI Chat for support">Talk to AI Support</Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link to="/about" aria-label="Read privacy and safety information">Privacy & Safety</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <Card className="h-full hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-primary/15 to-accent/15 text-primary">
            {icon}
          </span>
          <span>{title}</span>
        </CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
    </Card>
  );
}

function Badge({ label, icon }: { label: string; icon?: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs shadow-sm">
      {icon}
      {label}
    </span>
  );
}

function SafetyItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-lg border bg-background/70 px-3 py-2 text-sm shadow-sm">
      <span className="text-muted-foreground">{icon}</span>
      <span className="font-medium">{label}</span>
    </div>
  );
}
