import { redirect } from "next/navigation";

// Redirect to the default locale's 404 page
export default function NotFound() {
  redirect("/404");
}
