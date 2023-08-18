import { WalletOperation } from '../../lib/types';
import axiosInstance from '../../axiosInstance';

export default async function fetchWalletOperationsByMonth (year: number, month: number): Promise<WalletOperation[]> {
    try {
    const {data:{data, error, message}} = await axiosInstance.get(`/wallet_operation/get_all_from_month?year=${year}&month=${month}`);
      if (error) throw error;
      console.log(message);
      console.log(data);
      return data;
    }
    catch (e) {
      console.error(e);
      return [];
    }
  }
  