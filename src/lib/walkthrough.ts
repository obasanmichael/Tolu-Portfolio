import { type ProjectDetail } from "@/types";
import { getLoomMeta, type LoomMeta } from "./loom";

/** Poster and size for a walkthrough, wherever it's hosted. Drive has no animated preview. */
export async function getWalkthroughMeta(detail: ProjectDetail): Promise<LoomMeta> {
  if (detail.loomId) return getLoomMeta(detail.loomId);
  return {
    title: "",
    thumbnailUrl: `https://lh3.googleusercontent.com/d/${detail.driveId}=w1280`,
    previewUrl: null,
    width: 16,
    height: 10,
  };
}

export function walkthroughEmbedUrl(detail: ProjectDetail): string {
  return detail.loomId
    ? `https://www.loom.com/embed/${detail.loomId}?autoplay=1&hide_owner=true&hide_share=true&hideEmbedTopBar=true`
    : `https://drive.google.com/file/d/${detail.driveId}/preview`;
}
