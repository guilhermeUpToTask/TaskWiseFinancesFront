import { useQuery } from 'react-query';
import { fetchAnnotationsByPagination } from '../services/annotations';
import type { Annotation } from '../lib/types';


export default function useAnnotationsByPage(props:{page: number, size:number}) {

    return useQuery<Annotation[]>({
        queryKey: ['annotations', props.page, props.size],
        queryFn: () => fetchAnnotationsByPagination(props.page, props.size),
    });
}