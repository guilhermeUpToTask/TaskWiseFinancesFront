import axiosInstance from '../../axiosInstance';
import { Annotation } from '../../lib/types';
import { WARNING_TIME_INTERVAL } from '../../lib/constants';



export default async function fetchWarnings(): Promise<Annotation[]> {
    try {
        const { data: { data, error, message } } = await axiosInstance
            .get(`annotation/get_all_warnings?time_interval=${WARNING_TIME_INTERVAL}`);
        if (error) throw new Error(message)

        return data;

    } catch (e) {
        console.error(e);
        return [];
    }
}