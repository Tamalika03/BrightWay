import { useMemo, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { BookOpen, CheckCircle2, Filter, Shield, Gavel, HeartHandshake, Users, Mic } from "lucide-react";

type Module = {
  id: string;
  title: string;
  category: string;
  description: string;
  progress: number; // 0-100
  icon: JSX.Element;
  image: { src: string; alt: string };
};

const MODULES: Module[] = [
  { id: "sex-ed", title: "Reproductive Health Education", category: "Education", description: "Anatomy, consent, respect, and safe practices.", progress: 20, icon: <BookOpen className="h-5 w-5" aria-hidden="true" />, image: { src: "https://images.pexels.com/photos/7723534/pexels-photo-7723534.jpeg", alt: "Medical study desk with stethoscope and notes representing health education." } },
  { id: "consent", title: "Consent", category: "Core", description: "Understanding, asking, and honoring consent.", progress: 40, icon: <Shield className="h-5 w-5" aria-hidden="true" />, image: { src: "https://images.pexels.com/photos/20432481/pexels-photo-20432481.jpeg", alt: "Serene wooden walkway path representing guidance and direction." } },
  { id: "harassment", title: "Harassment", category: "Awareness", description: "Recognize, prevent, and respond responsibly.", progress: 10, icon: <Gavel className="h-5 w-5" aria-hidden="true" />, image: { src: "https://images.pexels.com/photos/5554667/pexels-photo-5554667.jpeg", alt: "Organized study desk representing clarity and awareness." } },
  { id: "abuse", title: "Abuse", category: "Awareness", description: "Legal and moral awareness to protect and support.", progress: 0, icon: <Users className="h-5 w-5" aria-hidden="true" />, image: { src: "https://images.pexels.com/photos/5712453/pexels-photo-5712453.jpeg", alt: "Open notebook and pen encouraging reflection and support." } },
  { id: "relationships", title: "Healthy Relationships", category: "Growth", description: "Empathy, communication, and accountability.", progress: 65, icon: <HeartHandshake className="h-5 w-5" aria-hidden="true" />, image: { src: "https://images.pexels.com/photos/2078266/pexels-photo-2078266.jpeg", alt: "Soft abstract gradient suggesting calm connection." } },
  { id: "podcasts", title: "Podcasts & YouTube", category: "Media", description: "Listen with transcripts and watch trusted videos.", progress: 0, icon: <Mic className="h-5 w-5" aria-hidden="true" />, image: { src: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg", alt: "Microphone and headphones representing podcasts." } },
];

const CATEGORIES = ["All", "Education", "Core", "Awareness", "Growth", "Media"] as const;

export default function Learning() {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");

  const filtered = useMemo(() => {
    if (category === "All") return MODULES;
    return MODULES.filter((m) => m.category === category);
  }, [category]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Learning Hub</h1>
        <p className="text-muted-foreground mt-1 max-w-2xl">Clear, practical modules with gentle quizzes and progress tracking. Learn at your pace — we’ll keep it supportive and stigma‑free.</p>
      </header>

      <div className="flex flex-wrap items-center gap-2 mb-6">
        <div className="inline-flex items-center gap-2 rounded-md border bg-background px-3 py-2 text-sm">
          <Filter className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          <span>Filter by</span>
        </div>
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`rounded-full border px-3 py-1 text-sm transition-colors ${category === c ? "bg-accent/15 text-foreground" : "hover:bg-accent/10"}`}
            aria-pressed={category === c}
            aria-label={`Filter category ${c}`}
          >
            {c}
          </button>
        ))}
      </div>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((m) => (
          <Card key={m.id} className="flex flex-col hover:shadow-md transition-shadow">
            <div className="p-4 pb-0">
              <AspectRatio ratio={16/9}>
                <img src={m.image.src} alt={m.image.alt} className="h-full w-full rounded-md object-cover" loading="lazy" />
              </AspectRatio>
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-primary/15 to-accent/15 text-primary">
                  {m.icon}
                </span>
                <span>{m.title}</span>
              </CardTitle>
              <CardDescription>{m.description}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              {m.id !== "podcasts" && (
                <>
                  <div className="h-2 w-full rounded-full bg-muted" aria-hidden="true">
                    <div
                      className="h-2 rounded-full bg-primary"
                      style={{ width: `${m.progress}%` }}
                      role="progressbar"
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={m.progress}
                      aria-label={`${m.title} progress ${m.progress}%`}
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{m.progress}% complete</span>
                    <Button size="sm" aria-label={`Continue ${m.title}`}>Continue</Button>
                  </div>
                </>
              )}
              {m.id === "podcasts" && (
                <div className="mt-3 flex items-center justify-end gap-2">
                  <Button asChild size="sm">
                    <a href="/podcasts">Open Podcasts</a>
                  </Button>
                  <Button asChild size="sm" variant="secondary">
                    <a href="https://www.youtube.com/@PlannedParenthood" target="_blank" rel="noopener noreferrer">Visit YouTube</a>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mt-10 rounded-xl border bg-card p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
            Quizzes are private. Your progress is only visible to you.
          </p>
          <Button variant="secondary" className="bg-gradient-to-r from-[hsl(var(--logo-start))] to-[hsl(var(--logo-end))] text-white hover:opacity-90">Take a quick readiness quiz</Button>
        </div>
      </section>

    </div>
  );
}
