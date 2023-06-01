export default function getYearFromDate(dateString) {
  const year = new Date(dateString).getFullYear();
  return year;
}
