import { useQuery } from 'react-query';
import { fetchAllAnnotations } from '../services/annotations';
import type { Annotation } from '../lib/types';

export default function useAllAnnotations() {
    return useQuery<Annotation[]>({
        queryKey: ['annotations'],
        queryFn: () => fetchAllAnnotations(),
    });
}