import { useQuery } from 'react-query';
import { fetchPredicitonDate } from '../services/prediction_date';

export default function usePredictionDateQuery() {
    return useQuery<string>({
        queryKey: ['prediction_date'],
        queryFn: fetchPredicitonDate,
    });
}
