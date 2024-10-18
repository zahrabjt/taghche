import { fetchHandler } from "@/lib";
import { IBooksResponse } from "@/types";
import { IBookDetails } from "@/types/interface";

const getBooks = async ({
  pageParam = "0-0-0-16",
}): Promise<IBooksResponse> => {
  const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL_V2}`;

  const response = await fetchHandler(
    baseUrl,
    `/everything?filters={"list":[{"type":21,"value":0},{"type":6,"value":-30000},{"type":3,"value":-2925},{"type":3,"value":-28},{"type":50,"value":0}]}&offset=${pageParam}&trackingData=110160240&order=1`
  );
  return response.data;
};

const getBookDetails = async (
  id: string,
  slug: string
): Promise<IBookDetails> => {
  const baseUrl = decodeURI(
    "https://taaghche.com/_next/data/vNs-cDfb1f9S1Z7gHdBTg/book"
  );

  const encodedTitle = encodeURIComponent(slug);

  const response = await fetchHandler(baseUrl, `/${id}/${encodedTitle}.json`);
  return response.data;
};

export { getBooks, getBookDetails };
