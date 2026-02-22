import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { sanityClient } from "./sanity.client";

export function urlForImage(source: SanityImageSource) {
  if (!sanityClient) return null;
  const builder = imageUrlBuilder(sanityClient);
  return builder.image(source).auto("format").fit("max");
}
