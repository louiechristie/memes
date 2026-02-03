const limit = (string: string, length: number, end = "..."): string => {
  return string.length <= length + 1
    ? string
    : `${string.substring(0, length)}${end}`;
};

export default limit;
