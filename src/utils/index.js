const slugify = (string) => {
  if (string) {
    return string
      .trim()
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(":", "")
      .replace("&", "and")
      .replace("(", "")
      .replace(")", "")
      .replace(".", "")
  } else {
    throw console.error("error with slugify");
  }
}