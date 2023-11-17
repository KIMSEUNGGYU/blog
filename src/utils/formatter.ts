const DateFormat = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
} as const;

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('ko-KR', DateFormat);
}
