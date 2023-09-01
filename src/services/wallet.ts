import axiosInstance from "../axiosInstance";

export async function fetchWallet(): Promise<number> {
    try {
        const {data:{data, error, message}} = await axiosInstance.get('/wallet');
        if (error) throw new Error(message);
        return data.value;

    } catch (e) {
        console.error(e);
        return 0;
    }

}