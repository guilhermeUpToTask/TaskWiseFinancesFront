
import { useQuery } from 'react-query';
import { fetchWallet } from '../services/wallet';

export default function useWalletQuery() {
    return useQuery<number>({
        queryKey: ['wallet'],
        queryFn: fetchWallet,
    });
}
