import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

/**
 * sitemap.xmlを生成
 * 検索エンジンにサイト構造を伝える
 * （Cookie ベース i18n のため URL は / と /agenda のみ）
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/agenda`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
