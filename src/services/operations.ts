import axiosInstance from "../axiosInstance";
import { NewWalletOperation, WalletOperation } from "../lib/types";

export  async function fetchWalletOperationsByMonth (year: number, month: number): Promise<WalletOperation[]> {
    try {
    const {data:{data, error, message}} = await axiosInstance.get(`/wallet_operation/get_all_from_month?year=${year}&month=${month}`);
      if (error) throw error;
      console.log(message);
      console.log(data);
      return data;
    }
    catch (e) {
      console.error('error fetching wallet operations:', e);
      return [];
    }
  }

export async function createWalletOperation (walletOperation: NewWalletOperation): Promise<WalletOperation> {
    try {
        const { data: {data, error } } = await axiosInstance
            .post(`/wallet_operation/create`, walletOperation);
        if (error) throw error;

        return data as WalletOperation;
    }
    catch (e) {
        console.error('error creating wallet operation:', e);
        throw e;
    }
}
