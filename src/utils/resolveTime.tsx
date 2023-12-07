const resolveTimeNumberDate = (time: number, date: string) => {
  // Example INPUT: 1 years -> OUTPUT: 1 year; 2 years -> 2 years
  if (time === 1) return `${date.slice(0, -1)}`;
  return `${date}`;
};

export { resolveTimeNumberDate };
