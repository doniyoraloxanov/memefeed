import useSWR from "swr";
import { fetcher } from "./fetcher";

function GetSingleUser(id?: string) {
  const { data, error, isLoading, mutate } = useSWR(
    id ? `/api/user/${id}` : undefined,
    fetcher
  );

  return {
    user: data,
    isLoading,
    isError: error,
    mutate,
  };
}

export { GetSingleUser };
