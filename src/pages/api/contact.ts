import { NextApiRequest, NextApiResponse } from "next";
import { sendContactToSlack } from "../../shared/libs/communication";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, message, captcha } = req.body;
    if (!name || !email || !message || !captcha) {
      res.status(400).json({ message: "Invalid request" });
      return;
    }
    try {
      const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
        {
          method: "POST",
        }
      );
      const data = await response.json();
      if (!data.success) {
        res.status(400).json({ message: "Invalid captcha" });
        return;
      }
    } catch (error) {
      res.status(500).json({ message: "Error validating captcha" });
      return;
    }
    const result = await sendContactToSlack(name, email, message);
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: "Not found" });
  }
}
