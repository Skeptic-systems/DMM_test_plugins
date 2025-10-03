import type { PluginManifest } from "@/plugins/types";
import { locals } from "./locals";

export const manifest: PluginManifest = {
  "id": "background",
  "nameKey": "plugins.background.title",
  "descriptionKey": "plugins.background.description",
  "version": "1.0.0",
  "author": "official",
  "homepageUrl": "https://example.com/background",
  "icon": "public/icon.svg"
};

export default manifest;

export { locals };


