import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

let sanityClient: ReturnType<typeof createClient> | null = null;

if (projectId && dataset) {
  sanityClient = createClient({
    projectId,
    dataset,
    apiVersion: "2026-02-21",
    useCdn: false,
  });
} else {
  // eslint-disable-next-line no-console
  console.warn(
    "Sanity client disabled: Missing NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET.",
  );
}

export { sanityClient };
