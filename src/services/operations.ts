import axiosInstance from "../axiosInstance";
import { WalletOperation } from "../lib/types";

export  async function fetchWalletOperationsByMonth (year: number, month: number): Promise<WalletOperation[]> {
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

export async function createWalletOperation (walletOperation: WalletOperation): Promise<boolean> {
    try {
        const { data: { error } } = await axiosInstance
            .post(`/wallet_operation/create`, walletOperation);
        if (error) throw error;

        return true;
    }
    catch (e) {
        console.error(e);
        return false;
    }
}
