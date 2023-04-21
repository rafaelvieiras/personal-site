import { NextApiRequest, NextApiResponse } from "next";
import {
  addTagToContact,
  createContact,
  findTag,
} from "../../../shared/libs/activeCampaign";
const validateEmail = (email: string) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      res.status(400).json({ message: "Invalid request" });
      return;
    }
    try {
      if (!validateEmail(email)) {
        res
          .status(400)
          .json({ error: "EMAIL_INVALID", message: "Email Inválido" });
        return;
      }

      const contact = await createContact(name, email, phone);

      if (!contact) {
        throw new Error("Invalid request on contact.");
      }

      console.log("Contato Salvo: ", contact);

      const tag = await findTag("iniciou-compra-do-ebook");
      if (!tag) {
        throw new Error("Invalid request on tag.");
      }
      const tagData = await addTagToContact(contact.id, tag.id);
      if (!tagData) {
        throw new Error(`Invalid request on tag ${tag.id}.`);
      }
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "AC_PROBLEM", message: "Problem on Active Campaign" });
      return;
    }
    // const result = await sendContactToSlack(name, email, message);
    res.status(201).json({ message: "Success" });
  } else {
    res.status(404).json({ message: "Not found" });
  }
}
