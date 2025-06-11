/**
 * Parses Markdown badge syntax and converts it to HTML
 * Supports syntax: [![alt text](image url)](link url)
 *
 * @param markdownString - The markdown string containing badge syntax
 * @returns HTML string with converted badges
 *
 * @example
 * ```ts
 * const badgeMarkdown = "[![Netlify Status](https://api.netlify.com/api/v1/badges/123/deploy-status)](https://app.netlify.com/sites/example)"
 * const html = parseMarkdownBadge(badgeMarkdown)
 * // Returns: '<a href="..." target="_blank" rel="noopener noreferrer"><img src="..." alt="..." /></a>'
 * ```
 */
export function parseMarkdownBadge(markdownString: string): string {
  // Regular expression to match Markdown badge syntax: [![alt text](image url)](link url)
  const badgeRegex = /\[!\[([^\]]*)\]\(([^)]+)\)\]\(([^)]+)\)/g;

  return markdownString.replace(badgeRegex, (match, altText, imageUrl, linkUrl) => {
    // Sanitize inputs to prevent XSS
    const sanitizedAltText = altText.replace(/"/g, '&quot;');
    const sanitizedImageUrl = imageUrl.trim();
    const sanitizedLinkUrl = linkUrl.trim();

    return `<a href="${sanitizedLinkUrl}" target="_blank" rel="noopener noreferrer" class="inline-block">
              <img src="${sanitizedImageUrl}" alt="${sanitizedAltText}" class="max-h-6" />
            </a>`;
  });
}

/**
 * Checks if a string contains Markdown badge syntax
 *
 * @param markdownString - The string to check
 * @returns boolean indicating if badge syntax is present
 */
export function hasMarkdownBadge(markdownString: string): boolean {
  const badgeRegex = /\[!\[([^\]]*)\]\(([^)]+)\)\]\(([^)]+)\)/;
  return badgeRegex.test(markdownString);
}

/**
 * Extracts badge information from Markdown badge syntax
 *
 * @param markdownString - The markdown string containing badge syntax
 * @returns Array of badge objects with alt text, image URL, and link URL
 */
export function extractBadgeInfo(markdownString: string): Array<{
  altText: string;
  imageUrl: string;
  linkUrl: string;
}> {
  const badgeRegex = /\[!\[([^\]]*)\]\(([^)]+)\)\]\(([^)]+)\)/g;
  const badges: Array<{ altText: string; imageUrl: string; linkUrl: string }> = [];

  let match;
  while ((match = badgeRegex.exec(markdownString)) !== null) {
    badges.push({
      altText: match[1],
      imageUrl: match[2],
      linkUrl: match[3],
    });
  }

  return badges;
}
