import { PageProps } from "./../../.next/types/app/page";
import { PageProps } from "./../../.next/types/app/books/[id]/[slug]/page";
export interface IBook {
  id: string;
  title: string;
  coverUri: string;
  authors: IAuthor[];
  price: string;
  rating: number;
}

export interface IBookDetails extends IBook {
  id: string;
  title: string;
  coverUri: string;
  authors: IAuthor[];
  price: string;
  rating: number;
  publisher: string;
  physicalPrice: number;
  descriptions: string;
  numberOfPages: string;
  pageProps?: any;
  data?: any;
}

export interface IAuthor {
  id: number;
  firstName: string;
  lastName: string;
  type: number;
  slug: string;
}

export interface IBooksResponse {
  bookList: {
    books: IBook[];
  };
  hasMore: boolean;
  nextOffset: string;
  pageParam?: string | undefined;
}
