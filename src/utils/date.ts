/**
 * Format YYYY-MM date string to readable format (e.g., "2020-10" -> "Oct 2020")
 */
export const formatDate = (date: string): string => {
  if (date === "Present") return "Present";
  const [year, month] = date.split("-");
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${months[parseInt(month) - 1]} ${year}`;
};

/**
 * Format period from start and end dates
 */
export const formatPeriod = (start: string, end: string): string =>
  `${formatDate(start)} – ${formatDate(end)}`;
