import axiosInstance from "../axiosInstance";
import { NewWalletOperation, WalletOperation } from "../lib/types";

export  async function fetchWalletOperationsByMonth (year: number, month: number): Promise<WalletOperation[]> {
    try {
    const {data:{data, error}} = await axiosInstance.get(`/wallet_operation/get_all_from_month?year=${year}&month=${month}`);
      if (error) throw error;
      
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

export async function deleteWalletOperation (operation_id:number): Promise<WalletOperation> {
  try {

      const { data: {data, error } } = await axiosInstance
          .delete(`/wallet_operation/delete/?operation_id=${operation_id}`);
      if (error) throw error;

      return data as WalletOperation;
  }
  catch (e) {
      console.error('error creating wallet operation:', e);
      throw e;
  }
}

