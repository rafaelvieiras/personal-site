import { BlogImage } from "@/shared/interfaces/BlogImage";
import Image from "next/image";

export default function ImageSlice({ slice }) {
  const image = slice.primary.image as BlogImage;
  return (
    <div className="relative">
      <Image
        src={image.url}
        alt={image.alt || "Imagem de ilustração"}
        width={image.dimensions.width}
        height={image.dimensions.height}
        loading="lazy"
        className="w-full h-full object-cover"
      />
      {image.alt && (
        <div className="absolute bottom-0 left-0 right-0 bg-neutral-900 bg-opacity-50 text-white italic text-sm p-2">
          {image.alt}
        </div>
      )}
    </div>
  );
}
