import walletOperations from './fakeWalletOperations';
import { WalletOperation } from '../../lib/types';

export default async function fetchWalletOperations (): Promise<WalletOperation[]> {
    try {
      return walletOperations;
    }
    catch (e) {
      return [];
    }
  }
  