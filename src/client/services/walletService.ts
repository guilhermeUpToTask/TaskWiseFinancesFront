
import axiosInstance from "../../axiosInstance"
import { request as __request } from "../core/request"

export default class WalletService {
    public static readWallet():Promise<number>{
        return __request({
            method:'GET',
            url:'/wallet'
        }, axiosInstance)
    }
}