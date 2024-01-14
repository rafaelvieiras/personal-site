export function sendContactToSlack(
  name: string,
  email: string,
  message: string
): Promise<any> {
  const payload = {
    text: `Novo contato de *${name} (${email})* no Site *rafaelvieiras.com*:\n${message}`,
  };
  return fetch(process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL ?? "", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}
