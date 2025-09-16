import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Headphones, Mic, Send, ShieldCheck, Sparkles } from "lucide-react";

interface Message { id: string; role: "user" | "assistant"; content: string; }

const SUGGESTIONS = [
  "How do I apologize well?",
  "What is clear consent?",
  "I'm feeling anxious.",
  "How to set boundaries?",
];

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    { id: "m1", role: "assistant", content: "Hi. I’m here to support you with privacy-first guidance. What would you like to talk about today?" },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(()=>{ endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages.length]);

  function send(text?: string) {
    const content = (text ?? input).trim();
    if (!content) return;
    const user: Message = { id: Math.random().toString(36).slice(2), role: "user", content };
    setMessages(prev=>[...prev, user]);
    setInput("");
    // Simulated assistant reply
    setTimeout(()=>{
      const reply: Message = {
        id: Math.random().toString(36).slice(2),
        role: "assistant",
        content: "Thanks for sharing. Consider how the other person might feel and focus on empathy and responsibility. Would you like a short checklist?",
      };
      setMessages(prev=>[...prev, reply]);
    }, 500);
  }

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 space-y-4">
      <Card className="border-amber-300">
        <CardContent className="p-4 text-sm text-muted-foreground flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
          Anonymous by default. Conversations are not visible to others. If you’re in danger, contact local emergency services.
        </CardContent>
      </Card>

      <div className="flex flex-wrap gap-2" role="list" aria-label="Quick prompts">
        {SUGGESTIONS.map(s => (
          <button key={s} onClick={()=>send(s)} className="rounded-full border bg-background px-3 py-1 text-xs hover:bg-accent/10">
            {s}
          </button>
        ))}
      </div>

      <div className="rounded-xl border bg-card shadow-soft p-4 h-[60vh] flex flex-col">
        <div className="flex-1 space-y-3 overflow-auto pr-1" role="log" aria-live="polite">
          {messages.map(m => (
            <div key={m.id} className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${m.role === "user" ? "ml-auto bg-primary text-primary-foreground" : "bg-muted"}`}>
              {m.content}
            </div>
          ))}
          <div ref={endRef} />
        </div>
        <form className="mt-3 flex items-center gap-2" onSubmit={(e)=>{e.preventDefault(); send();}}>
          <label htmlFor="chat" className="sr-only">Message</label>
          <input
            id="chat"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            placeholder="Write a message…"
            className="flex-1 rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <Button type="button" variant="secondary" aria-label="Start voice input" className="bg-gradient-to-r from-[hsl(var(--logo-start))] to-[hsl(var(--logo-end))] text-white hover:opacity-90"><Mic className="h-4 w-4" /></Button>
          <Button type="submit" aria-label="Send message"><Send className="h-4 w-4" /></Button>
        </form>
      </div>
    </div>
  );
}
