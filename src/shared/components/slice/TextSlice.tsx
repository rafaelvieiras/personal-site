import { PrismicRichText } from "@prismicio/react";

export default function TextSlice({ slice }) {
  return <PrismicRichText field={slice.primary.texto} />;
}
