import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Placeholder({
  title,
  description,
  icon,
  action,
}: {
  title: string;
  description: string;
  icon?: React.ReactNode;
  action?: { to: string; label: string };
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center space-y-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary">
          {icon}
        </div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
        {action && (
          <div className="pt-2">
            <Button asChild>
              <Link to={action.to}>{action.label}</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
