import { BASE_API_URL } from "@/utils/Url";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/login/"],
    },
    sitemap: `${BASE_API_URL}/sitemap.xml`,
  };
}
