import { useQuery } from 'react-query';
import { Annotation } from '../lib/types';
import { fetchAllWarningsForPredDate } from '../services/warnings';

export default function useWarningsByDate() {
    return useQuery<Annotation[]>({
        queryKey: ['warnings_by_date'],
        queryFn: () => fetchAllWarningsForPredDate(),
    });
}