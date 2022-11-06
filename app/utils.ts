export const getFormattedDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
