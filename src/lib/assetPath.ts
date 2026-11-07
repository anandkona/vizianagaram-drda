/**
 * Resolve local public assets correctly on both localhost and GitHub Pages.
 * Next.js basePath is applied automatically by next/link and next/image,
 * but raw CSS url() and other string-based asset references need this prefix.
 */
export function assetPath(path: string): string {
  if (!path) return path;
  if (/^(https?:|data:|blob:|#)/i.test(path)) return path;

  const normalized = path.startsWith("/") ? path : `/${path}`;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  if (!basePath || normalized === basePath || normalized.startsWith(`${basePath}/`)) {
    return normalized;
  }

  return `${basePath}${normalized}`;
}
