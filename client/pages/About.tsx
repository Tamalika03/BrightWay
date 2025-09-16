import Placeholder from "@/components/Placeholder";
import { ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <Placeholder
      title="About & Contact"
      description="BrightWay’s mission is to foster awareness, empathy, and responsibility. Here you’ll find our mission, privacy & safety summary, and an anonymous contact form with urgent abuse reporting."
      icon={<ShieldCheck className="h-6 w-6" aria-hidden="true" />}
      action={{ to: "/learn", label: "Start learning" }}
    />
  );
}
