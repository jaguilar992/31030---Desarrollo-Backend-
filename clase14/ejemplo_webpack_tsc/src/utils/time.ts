export function getTime () {
  return {
    time: new Date().toLocaleString(),
    timestamp: Date.now()
  }
}

export const suma = (a: number, b: number) => {
  return a + b;
}