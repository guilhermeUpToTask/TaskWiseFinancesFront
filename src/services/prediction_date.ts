import axiosInstance from "../axiosInstance";

export async function fetchPredicitonDate(): Promise<string> {
    try {
        const { data: { data, error, message } } = await axiosInstance.get('/prediction_date');
        if (error) throw new Error(message);
        return data.current_date;

    } catch (e) {
        console.error(e);
        return '';
    }

}

export async function updatePredictionDate(current_date: string): Promise<string> {
    try {
        const { data: { data, error, message } } =
            await axiosInstance.post('/prediction_date', { current_date });
        if (error) throw new Error(message);

        return data.current_date;

    } catch (e) {
        console.error(e);
        return '';
    }

}