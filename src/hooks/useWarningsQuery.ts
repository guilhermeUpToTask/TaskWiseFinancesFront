import { useQuery } from 'react-query';
import { Annotation } from '../lib/types';
import { fetchWarnings } from '../services/warnings';

export default function useWarningsQuery() {
    return useQuery<Annotation[]>('warnings', fetchWarnings);
}