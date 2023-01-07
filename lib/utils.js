export const fetcher = (url) => fetch(url).then((res) => res.json());

export const URL = "https://example-apis.vercel.app/api/art";

export function getRandon(number) {
  return Math.floor(Math.random() * number);
}
