export const randomItemInArray = <T>(itemArr: Readonly<T[]>): T => {
  return itemArr[Math.floor(Math.random() * itemArr.length)];
};

export const randomDateInRange = (startDate: Date, endDate: Date): Date => {
  const startTime = startDate.getTime();
  const endTime = endDate.getTime();
  const randomTime = startTime + Math.random() * (endTime - startTime);
  return new Date(randomTime);
};
