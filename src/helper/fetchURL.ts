interface IData {
  ok: boolean;
  result: {
    code: string;
    short_link: string;
    full_short_link: string;
    short_link2: string;
    full_short_link2: string;
    share_link: string;
    full_share_link: string;
    original_link: string;
  };
}

export default async function fetchURL(longUrl: string) {
  const response = await fetch(
    `https://api.shrtco.de/v2/shorten?url=${longUrl}`
  );
  const data: IData = await response.json();
  return data;
}
