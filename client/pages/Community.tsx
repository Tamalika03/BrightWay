import { useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartHandshake, MessageSquarePlus, ShieldAlert, Flag, Ban, Smile, Headphones, ThumbsUp } from "lucide-react";

type Mood = "Anxious" | "Curious" | "Guilty" | "Learning" | "Calm" | "Grateful" | "Angry" | "Confused";

type Post = {
  id: string;
  mood: Mood;
  text: string;
  createdAt: number;
  reactions: { hug: number; listen: number; thanks: number };
};

const MOODS: Mood[] = ["Anxious", "Curious", "Guilty", "Learning", "Calm", "Grateful", "Angry", "Confused"];

export default function Community() {
  const [mood, setMood] = useState<Mood>("Learning");
  const [text, setText] = useState("");
  const [posts, setPosts] = useState<Post[]>([{
    id: "p1",
    mood: "Anxious",
    text: "I messed up a conversation about boundaries and feel terrible. How do I apologize meaningfully?",
    createdAt: Date.now() - 1000 * 60 * 60 * 3,
    reactions: { hug: 12, listen: 28, thanks: 6 },
  },{
    id: "p2",
    mood: "Learning",
    text: "Trying to understand consent better. Any resources that explain it clearly?",
    createdAt: Date.now() - 1000 * 60 * 60 * 8,
    reactions: { hug: 4, listen: 10, thanks: 22 },
  }]);

  const sorted = useMemo(() => [...posts].sort((a,b)=> b.createdAt - a.createdAt), [posts]);

  function submitPost() {
    if (!text.trim()) return;
    const newPost: Post = {
      id: Math.random().toString(36).slice(2),
      mood,
      text: text.trim(),
      createdAt: Date.now(),
      reactions: { hug: 0, listen: 0, thanks: 0 },
    };
    setPosts(prev=>[newPost, ...prev]);
    setText("");
  }

  function react(id: string, key: keyof Post["reactions"]) {
    setPosts(prev => prev.map(p => p.id === id ? { ...p, reactions: { ...p.reactions, [key]: p.reactions[key] + 1 } } : p));
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg"><MessageSquarePlus className="h-5 w-5 text-primary" aria-hidden="true" />Share anonymously</CardTitle>
            <CardDescription>Use mood tags to express how you feel. Be kind, be specific, and respect others.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-3" role="group" aria-label="Select a mood">
              {MOODS.map((m) => (
                <button
                  key={m}
                  onClick={() => setMood(m)}
                  className={`rounded-full border px-3 py-1 text-sm ${mood === m ? "bg-accent/15" : "hover:bg-accent/10"}`}
                  aria-pressed={mood === m}
                >
                  {m}
                </button>
              ))}
            </div>
            <label htmlFor="compose" className="sr-only">Share your thoughts</label>
            <textarea
              id="compose"
              value={text}
              onChange={(e)=>setText(e.target.value)}
              rows={4}
              placeholder="What's on your mind? Boundaries, consent, feelings…"
              className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <div className="mt-3 flex items-center justify-between">
              <p className="text-xs text-muted-foreground">Anonymous by default. You can report or block any harmful behavior.</p>
              <Button onClick={submitPost} aria-label="Post anonymously">Post</Button>
            </div>
          </CardContent>
        </Card>

        {sorted.map((p) => (
          <PostCard key={p.id} post={p} onReact={react} />)
        )}
      </div>

      <aside className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base"><ShieldAlert className="h-5 w-5 text-destructive" aria-hidden="true" />Crisis resources</CardTitle>
            <CardDescription>If you’re in immediate danger, contact local emergency services (112/911). BrightWay is not a crisis line.</CardDescription>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <p>• National emergency services: 112/911</p>
            <p>• Reach a trusted friend, family member, or counselor</p>
            <p>• Consider local helplines and professional support in your region</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Community guidelines</CardTitle>
            <CardDescription>Pinned</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Be respectful and avoid judgmental language.</li>
              <li>Ask for consent for sensitive topics; use content warnings.</li>
              <li>No harassment, hate speech, or personal attacks.</li>
              <li>Report harm; use block tools as needed.</li>
            </ul>
          </CardContent>
        </Card>
      </aside>
    </div>
  );
}

function PostCard({ post, onReact }: { post: Post; onReact: (id: string, key: keyof Post["reactions"]) => void }) {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-base flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-accent">A</span>
          <span className="font-semibold">Anonymous</span>
          <span className="ml-2 rounded-full bg-accent/10 text-accent px-2 py-0.5 text-xs">{post.mood}</span>
        </CardTitle>
        <CardDescription>{new Date(post.createdAt).toLocaleString()}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="leading-relaxed">{post.text}</p>
        <div className="flex flex-wrap items-center gap-2">
          <Reaction label="Hug" count={post.reactions.hug} onClick={() => onReact(post.id, "hug")} icon={<HeartHandshake className="h-4 w-4" aria-hidden="true" />} />
          <Reaction label="Listen" count={post.reactions.listen} onClick={() => onReact(post.id, "listen")} icon={<Headphones className="h-4 w-4" aria-hidden="true" />} />
          <Reaction label="Thanks" count={post.reactions.thanks} onClick={() => onReact(post.id, "thanks")} icon={<ThumbsUp className="h-4 w-4" aria-hidden="true" />} />
          <span className="ml-auto inline-flex items-center gap-3 text-xs text-muted-foreground">
            <button className="inline-flex items-center gap-1 hover:text-foreground" aria-label="Report post"><Flag className="h-3.5 w-3.5" /> Report</button>
            <span aria-hidden>•</span>
            <button className="inline-flex items-center gap-1 hover:text-foreground" aria-label="Block this user"><Ban className="h-3.5 w-3.5" /> Block</button>
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

function Reaction({ label, count, onClick, icon }: { label: string; count: number; onClick: () => void; icon: React.ReactNode }) {
  return (
    <button onClick={onClick} className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs hover:bg-accent/10">
      {icon}
      <span>{label}</span>
      <span className="text-muted-foreground">{count}</span>
    </button>
  );
}
