import { useMemo, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, Search } from "lucide-react";

interface Episode { id: string; title: string; lang: "en" | "hi" | "bn" | "es"; src: string; transcript: string; }

const EPISODES: Episode[] = [
  { id: "e1", title: "Consent, clearly explained", lang: "en", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", transcript: "Consent is an ongoing conversation. It starts with asking, continues with listening, and includes the freedom to change your mind." },
  { id: "e2", title: "Boundaries and empathy", lang: "en", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", transcript: "Boundaries help us protect our energy and respect others. Empathy is practicing curiosity about another’s experience." },
  { id: "e3", title: "सहमति को समझना (Consent in Hindi)", lang: "hi", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", transcript: "सहमति का अर्थ है स्पष्ट, स्वेच्छा से दिया गया हाँ। यह किसी भी समय वा���स लिया जा सकता है।" },
];

export default function Podcasts() {
  const [q, setQ] = useState("");
  const [lang, setLang] = useState<Episode["lang"] | "all">("all");

  const filtered = useMemo(() => {
    return EPISODES.filter(e => (lang === "all" || e.lang === lang) && e.title.toLowerCase().includes(q.toLowerCase()));
  }, [q, lang]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight flex items-center gap-2"><Mic className="h-5 w-5 text-accent" aria-hidden="true" />Podcasts & Resources</h1>
        <p className="text-muted-foreground">Listen with transcripts and multilingual options. Search and filter resources that matter to you.</p>
      </header>

      <div className="flex flex-wrap items-center gap-2">
        <div className="relative">
          <Search className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search episodes" className="pl-8 pr-3 py-2 rounded-md border bg-background text-sm" />
        </div>
        <select value={lang} onChange={(e)=>setLang(e.target.value as any)} className="px-3 py-2 rounded-md border bg-background text-sm">
          <option value="all">All languages</option>
          <option value="en">English</option>
          <option value="hi">हिन्दी</option>
          <option value="bn">বাংলা</option>
          <option value="es">Español</option>
        </select>
      </div>

      <section className="grid gap-6 md:grid-cols-2">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="text-lg">Official YouTube resources</CardTitle>
            <CardDescription>Curated videos for awareness, empathy, and responsibility.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="bg-gradient-to-r from-[hsl(var(--logo-start))] to-[hsl(var(--logo-end))] text-white hover:opacity-90">
              <a href="https://www.youtube.com/@PlannedParenthood" target="_blank" rel="noopener noreferrer" aria-label="Open YouTube channel">Open YouTube</a>
            </Button>
          </CardContent>
        </Card>
        {filtered.map((e)=> (
          <Card key={e.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{e.title}</CardTitle>
              <CardDescription>Language: {labelForLang(e.lang)}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <audio controls className="w-full">
                <source src={e.src} type="audio/mpeg" />
              </audio>
              <details>
                <summary className="cursor-pointer text-sm font-medium">Transcript</summary>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.transcript}</p>
              </details>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Resource library</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Consent 101", href: "#" },
            { title: "Healthy relationships", href: "#" },
            { title: "Responding to harassment", href: "#" },
            { title: "Active listening", href: "#" },
            { title: "Apologizing well", href: "#" },
            { title: "Setting boundaries", href: "#" },
          ].map(r => (
            <Card key={r.title}>
              <CardHeader>
                <CardTitle className="text-base">{r.title}</CardTitle>
                <CardDescription>Curated article</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" asChild>
                  <a href={r.href} aria-label={`Open resource ${r.title}`}>Open</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

function labelForLang(l: Episode["lang"]) {
  switch(l) {
    case "en": return "English";
    case "hi": return "हिन्दी";
    case "bn": return "বাংলা";
    case "es": return "Español";
  }
}
