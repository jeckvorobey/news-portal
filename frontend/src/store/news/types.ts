export interface News {
  _id?: string | string[];
  title: string;
  description: string;
}

export interface NewsState {
  message?: string;
  count?: number | undefined;
  news: News[];
}
