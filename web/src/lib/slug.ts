export function slugify(input: string): string {
  return (input || '')
    .toLowerCase()
    .trim()
    .replace(/[\u0300-\u036f]/g, '')       // strip accents
    .replace(/[^a-z0-9\s-]/g, '')          // keep alnum/space/hyphen
    .replace(/\s+/g, '-')                  // spaces -> dash
    .replace(/-+/g, '-')                   // collapse dashes
}
