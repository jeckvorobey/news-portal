import { ref, Ref } from "vue";
import { useFetch } from "@/use/fetch";

interface News {
  count: number;
  news: OneNews[];
}

interface OneNews {
  news: {
    _id: string;
    title: string;
    description: string;
  };
}

type UsableNews = Promise<{ news: Ref<News | undefined> }>;
type UsableOneNews = Promise<{ oneNews: Ref<OneNews | undefined> }>;

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
  const { response: oneNews, request } = useFetch<OneNews>(
    `http://localhost:3001/${id}`
  );
  await request();

  return { oneNews };
}
