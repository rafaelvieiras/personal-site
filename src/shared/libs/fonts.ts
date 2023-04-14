import { Montserrat, Roboto, Ubuntu } from "next/font/google";

export const roboto = Roboto({
  weight: ["700", "400", "300", "100"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const montserrat = Montserrat({
  weight: ["700", "500", "400", "300", "100"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const ubuntu = Ubuntu({
  weight: ["700", "400", "500", "300"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});
