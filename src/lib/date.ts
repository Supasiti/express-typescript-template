export function fromUnixTime(unixtime: number): Date {
  return new Date(unixtime)
}

export function toUnixTime(date: Date): number {
  return date.valueOf()
}