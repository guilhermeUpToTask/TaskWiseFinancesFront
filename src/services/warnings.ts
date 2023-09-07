import type { Annotation } from '../lib/types';
import { WARNING_TIME_INTERVAL } from '../lib/constants';
import axiosInstance from '../axiosInstance';

export async function fetchWarnings(): Promise<Annotation[]> {
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

export async function fetchAllWarningsForPredDate(): Promise<Annotation[]>  {
    try {
        const { data: { data, error, message } } = await axiosInstance
            .get(`annotation/get_all_warnings_for_prediction_date`);
        if (error) throw new Error(message)

        return data;

    } catch (e) {
        console.error(e);
        return [];
    }
}
