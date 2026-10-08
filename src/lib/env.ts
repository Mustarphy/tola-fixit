function parseSiteUrl(value: string | undefined): URL | undefined {
  if (!value) return undefined;

  try {
    return new URL(value);
  } catch {
    throw new Error(
      `SITE_URL must be an absolute URL such as https://www.example.com. Received "${value}".`,
    );
  }
}

export const siteUrl = parseSiteUrl(process.env.SITE_URL);
