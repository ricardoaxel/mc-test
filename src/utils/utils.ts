export const formatNumberToPrice = (total: number) =>
  `$${Number(total).toLocaleString('en', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
