export interface News {
  _id: string | string[];
  title: string;
  description: string;
}

export interface NewsState {
  count: number;
  news: News[];
}
