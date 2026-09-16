export const formatText = (text: string): string => {
  return text.replace(
    /\[([^\]]+)\]/g,
    '<span class="text-yellow-600 font-bold">[$1]</span>',
  );
};
