import useSWR from "swr";
import { fetcher } from "src/utils/fetcher";

export const useComments = () => {
  const {data, error} = useSWR("https://jsonplaceholder.typicode.com/comments", fetcher);

  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};