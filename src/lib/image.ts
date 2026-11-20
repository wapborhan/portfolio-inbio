export function getImageUrl(image?: string): string {
  if (!image) {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    return `${basePath}/images/portfolio/no-image.jpg`;
  }

  if (
    image.startsWith("http://") ||
    image.startsWith("https://") ||
    image.startsWith("data:")
  ) {
    return image;
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  let cleanPath = image.trim();

  if (cleanPath.startsWith("./")) {
    cleanPath = cleanPath.slice(2);
  }

  if (!cleanPath.startsWith("/")) {
    cleanPath = "/" + cleanPath;
  }

  // If path starts with /portfolio/ instead of /images/portfolio/, fix it
  if (cleanPath.startsWith("/portfolio/")) {
    cleanPath = "/images" + cleanPath;
  }

  // Normalize rexList.jpg to rexlist.jpg
  if (cleanPath.includes("rexList.jpg")) {
    cleanPath = cleanPath.replace("rexList.jpg", "rexlist.jpg");
  }

  // Prevent double basePath if image already started with basePath
  if (basePath && cleanPath.startsWith(basePath)) {
    return cleanPath;
  }

  return `${basePath}${cleanPath}`;
}
