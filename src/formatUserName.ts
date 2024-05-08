const titles = ['Mr.', 'Mrs.', 'Ms.', 'Dr.', 'Prof.'];
const suffixes = ['Jr.', 'Sr.', 'II', 'III', 'IV', 'V'];

// Helper function to find and remove an item from the parts array
function extractFromParts(parts: string[], items: string[]): string {
  const index = parts.findIndex(part => items.includes(part));
  return index !== -1 ? parts.splice(index, 1)[0] : '';
}

export const formatUserName = (fullName: string): string => {
  let parts = fullName.split(' ');
  let title = extractFromParts(parts, titles);
  let suffix = extractFromParts(parts, suffixes);
  let lastName = parts.pop() || ''; // Safe fallback with || '' in case of empty array
  let firstName = parts.join(' ');

  lastName += suffix ? ` ${suffix}` : '';
  let formattedName = `${lastName}, ${firstName}`;
  if (title) {
    formattedName += ` (${title})`;
  }

  return formattedName;
};
