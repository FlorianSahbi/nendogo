export const slugify = (string) => (
  string
    .trim()
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(":", "")
    .replace("&", "and")
    .replace("(", "")
    .replace(")", "")
    .replace(".", "")
)
