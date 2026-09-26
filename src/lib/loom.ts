export interface LoomMeta {
  title: string;
  thumbnailUrl: string | null;
  /** Loom's animated GIF preview of the recording. */
  previewUrl: string | null;
  width: number;
  height: number;
}

/** Fetched at build time. A failed lookup falls back to a plain 16:9 poster. */
export async function getLoomMeta(loomId: string): Promise<LoomMeta> {
  const fallback: LoomMeta = { title: "", thumbnailUrl: null, previewUrl: null, width: 16, height: 9 };
  try {
    const res = await fetch(
      `https://www.loom.com/v1/oembed?url=https://www.loom.com/share/${loomId}`,
      { cache: "force-cache" }
    );
    if (!res.ok) return fallback;
    const data = await res.json();
    return {
      title: data.title ?? "",
      // oEmbed returns an animated GIF preview; the JPG at the same path is ~4x smaller.
      thumbnailUrl: data.thumbnail_url?.replace(/\.gif$/, ".jpg") ?? null,
      previewUrl: data.thumbnail_url ?? null,
      width: data.thumbnail_width ?? 16,
      height: data.thumbnail_height ?? 9,
    };
  } catch {
    return fallback;
  }
}
