"use server";

import { BASE_API_URL } from "@/utils/Url";

export async function getGalleryImages() {
  "use cache";
  const res = await fetch(`${BASE_API_URL}/api/insta`);
  if (!res.ok) {
    throw new Error("Failed to fetch gallery images");
  }
  const data = await res.json();
  return data;
}
