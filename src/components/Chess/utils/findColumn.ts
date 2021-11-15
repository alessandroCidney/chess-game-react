export function findColumn (n: number) : number {
  while (n > 8) {
      n -= 8;
  };

  return n;
};
