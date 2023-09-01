
import { useQuery } from 'react-query';
import fetchWallet from '../components/Wallet/fetchWallet';

export default function useWalletQuery() {
    return useQuery<number>({
        queryKey: ['wallet'],
        queryFn: fetchWallet,
    });
}
