//Will be used later for default error display, for now looks like a normal useQuery Function
import { useQuery, QueryFunction, QueryKey } from 'react-query';

export default function useDataQuery<TData>(
  queryKey: QueryKey,
  queryFn: QueryFunction<TData>
) {
  return useQuery<TData>({
    queryKey,
    queryFn,
  });
}