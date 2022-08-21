import { ref, Ref } from "vue";
import { useFetch } from "@/use/fetch";

interface News {
  message?: string;
  count?: number | null;
  news: ItemNews | undefined;
}

export interface OneNews {
  news: ItemNews | undefined;
}

interface AddNews {
  message: string;
  news: ItemNews | undefined;
}

interface ItemNews {
  _id?: string | string[];
  title: string;
  description: string;
}

type UsableNews = Promise<{ news: Ref<News | undefined> }>;
type UsableOneNews = Promise<{ oneNews: Ref<OneNews | undefined> }>;
type UsableAddNews = Promise<{ addNews: Ref<AddNews | undefined> }>;

export async function useNews(): UsableNews {
  const loading: Ref<boolean> = ref(false);

  const { response: news, request } = useFetch<News>("http://localhost:3001/");

  if (!loading.value) {
    await request();
    loading.value = true;
  }

  return { news };
}

export async function useOneNews(id: string | string[]): UsableOneNews {
  const loading: Ref<boolean> = ref(false);

  const { response: oneNews, request } = useFetch<OneNews>(
    `http://localhost:3001/${id}`
  );
  if (!loading.value) {
    await request();
    loading.value = true;
  }

  return { oneNews };
}

export async function useRemoveNews(id: string | string[]): UsableNews {
  const { response: news, request } = useFetch<News>(
    `http://localhost:3001/${id}`,
    <RequestInit>{
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  await request();

  return { news };
}

export async function useAddNews(newsData: ItemNews): UsableAddNews {
  const { response: addNews, request } = useFetch<AddNews>(
    `http://localhost:3001/create`,
    <RequestInit>{
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(newsData),
    }
  );
  await request();

  return { addNews };
}

export async function useUpdateNews(newsData: ItemNews): UsableAddNews {
  const id = newsData._id;
  const { response: addNews, request } = useFetch<AddNews>(
    `http://localhost:3001/${id}`,
    <RequestInit>{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(newsData),
    }
  );
  await request();

  return { addNews };
}
