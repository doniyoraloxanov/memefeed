import useSWR from "swr";
import { fetcher } from "./fetcher";

function useUser(id: any) {
  const { data, error, isLoading } = useSWR(`/api/users/${id}`, fetcher);

  return {
    users: data,
    isLoading,
    isError: error,
  };
}

export { useUser };
