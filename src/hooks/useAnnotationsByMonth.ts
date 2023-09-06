import { useQuery } from 'react-query';
import { fetchAnnotationsByMonth } from '../services/annotations';
import { Dayjs } from 'dayjs';
import type { Annotation } from '../lib/types';

export default function useAnnotationsByMonth(currentMonth: Dayjs) {
    const year = currentMonth.year();
    const month = currentMonth.month() + 1;

    return useQuery<Annotation[]>({
        queryKey: ['annotations', year, month],
        queryFn: () => fetchAnnotationsByMonth(year, month),
    });
}