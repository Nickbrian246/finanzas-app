export function TextShortedNextWhiteSpace(text, startIndex){
  let textShort = text;
  const start = startIndex ?? 180
  if (text.length > start) {
    const spaceIndex = text.indexOf(" ", start);
    if (spaceIndex !== -1) {
      textShort = text.substring(0, spaceIndex);
    }
  }
  return textShort.concat("...");

}