import { cn } from "@/lib/utils";
import Image from "next/image";

interface ErrorLayoutProps {
  image: "404" | "error";
  title: string;
  description: string;
  children: React.ReactNode;
}

export function ErrorLayout({
  image,
  title,
  description,
  children,
}: ErrorLayoutProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center px-4">
      <div className="relative w-[300px] h-[300px] mb-8">
        <Image
          src={`/images/${image}.png`}
          alt={title}
          fill
          className="object-contain"
          priority
        />
      </div>
      <h1
        className={cn(
          "text-4xl font-bold",
          image === "404" ? "text-primary" : "text-destructive"
        )}
      >
        {title}
      </h1>
      <p className="mt-2 text-muted-foreground max-w-lg">{description}</p>
      <div className="mt-8">{children}</div>
    </main>
  );
}
