import { FormData } from "@/components/sections/ContactSection";

export function sendEmail(data: FormData) {
  const apiEndpoint = "/api/email";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  }).then((res) => res.json());
}
