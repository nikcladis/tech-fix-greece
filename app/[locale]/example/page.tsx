import { notFound } from "next/navigation";

export default function ExamplePage() {
  const shouldShow404 = true; // Your logic here

  if (shouldShow404) {
    notFound(); // This will trigger the not-found.tsx
  }

  return <div>Content</div>;
}
