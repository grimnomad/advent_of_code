function concatDigits(first: number, last: number): number {
  return first * 10 + last;
}

function findDigits(input: string): number {
  const regex = /(?=(one|two|three|four|five|six|seven|eight|nine|1|2|3|4|5|6|7|8|9))/g;
  const map: Record<string, string> = { "one": "1", "two": "2", "three": "3", "four": "4", "five": "5", "six": "6", "seven": "7", "eight": "8", "nine": "9" };

  const values = input.matchAll(regex);

  const arr = [...values].map((value) => value[1])

  const numbers = arr.reduce<number[]>((result, value) => {
    const num = Number(value);

    if (Number.isNaN(num)) return [...result, Number(map[value])];

    return [...result, num]
  }, []);

  const first = numbers[0];
  const last = numbers[numbers.length - 1];

  if (!last) return concatDigits(first, first);

  return concatDigits(first, last);
}

// real input needed
const lines = [
  "two1nine",
  "eightwothree",
  "abcone2threexyz",
  "xtwone3four",
  "4nineeightseven2",
  "zoneight234",
  "7pqrstsixteen"
];

const sum = lines.reduce((result, line) => result + findDigits(line), 0);

console.log(sum);