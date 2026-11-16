import { areas } from "@/lib/areas";
import { site } from "@/lib/site";
export default function sitemap() {
  const p = ["", "/o-escritorio", "/advogada", "/areas-de-atuacao", "/contato", ...areas.map(a => `/areas-de-atuacao/${a.slug}`)];
  return p.map(u => ({ url: site.url + u }));
}
