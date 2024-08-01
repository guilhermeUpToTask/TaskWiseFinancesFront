import dayjs, { Dayjs } from 'dayjs';
import axiosInstance from '../axiosInstance'
import type { Annotation, AnnConfirmPayload, NewAnnotation } from '../lib/types';

export async function fetchAnnotationsByMonth(year: number, month: number): Promise<Annotation[]> {
    try {
        const { data: { data, error } } = await axiosInstance
            .get(`/annotation/get_all_from_month?year=${year}&month=${month}`);
        if (error) throw error;

        return data as Annotation[];
    }catch (e) {
        console.error('fetch annotations error:', e);
        return [];
    }
}

export async function fetchAllAnnotations(): Promise<Annotation[]>{
    try{
        const { data: { data, error } } = await axiosInstance
            .get(`/annotation/all`)
        if (error) throw error;
            return data as Annotation[];
    }catch(e){
        console.error('fetch all Annotations Error:', e)
        return []
    }
}

export async function fetchAnnotationsByPagination(page:number, size:number): Promise<Annotation[]>{
    try{
        const { data: { data, error } } = await axiosInstance
            .get(`/annotation/get_by_page?page=${page}&size=${size}`)
        if (error) throw error;
            return data as Annotation[];
    }catch(e){
        console.error('fetch Annotations by pagination Error:', e)
        return []
    }
}

export async function createAnnotation(newAnnotation: NewAnnotation): Promise<NewAnnotation | null> {
    try {
        const { data: { data, error } } = await axiosInstance
            .post(`/annotation/create`, newAnnotation);
        if (error) throw error;

        return data as Annotation;
    }
    catch (e) {
        console.error('create annotation error:', e);
        throw e;
    }
}

export async function bulkCreateAnnotation(
    newAnnotation: NewAnnotation, quantity: number
): Promise<NewAnnotation | null> {
    try {

        const { data: { data, error } } = await axiosInstance
            .post(`/annotation/bulk_create`, { ...newAnnotation, quantity });
        if (error) throw error;

        return data as Annotation;
    }
    catch (e) {
        console.error('create annotation error:', e);
        throw e;
    }
}

export async function updateAnnotation(updatedAnnotation: Annotation): Promise<Annotation | null> {
    try {
        const { data: { data, error } } = await axiosInstance.put("/annotation/update", updatedAnnotation);
        if (error) throw new Error(error);

        return data as Annotation;

    } catch (e) {
        console.error('update annotation error:', e);
        throw e;
    }
}

export async function deleteAnnotation(annotationId: number): Promise<Annotation | null> {
    try {
        const { data: { data, error, message } } =
            await axiosInstance.delete(`/annotation/delete?annotation_id=${annotationId}`);
        if (error) throw new Error(message);

        return data as Annotation;

    } catch (e) {
        console.error('delete annotation error:', e);
        throw e;
    }
}

export async function bulkDeleteAnnotation(annotationIds: number[]): Promise<Annotation | null> {
    try {
        const encodedIds = encodeURIComponent(JSON.stringify(annotationIds));

        const { data: { data, error, message } } =
            await axiosInstance.delete(`/annotation/bulk_delete?annotation_ids=${encodedIds}`);

        console.log('message succes', message);
        if (error) throw new Error(message);

        return data as Annotation;

    } catch (e) {
        console.error('delete annotation error:', e);
        throw e;
    }
}

export async function confirmStatus(payload: AnnConfirmPayload): Promise<Annotation | null> {
    try {
        const { data: { data, error, message } } =
            await axiosInstance.put('/annotation/confirm_status', payload);
        if (error) throw new Error(message);

        return data as Annotation;

    } catch (e) {
        console.error('confirm status annotation error:', e);
        throw e;
    }
}

function filterPendentsOrExpiredAnns(annotations: Annotation[]): Annotation[] {
    return annotations.filter(annotation =>
        annotation.status === 'pendent' ||
        annotation.status === 'expired');
}
function filterAnnBeforeOrEqualToDate(annotations: Annotation[], date: Dayjs): Annotation[] {
    return annotations.filter(annotation =>
        dayjs(annotation.date).isBefore(date) || dayjs(annotation.date).isSame(date));
}
export function calculateFutureMoney(annotations: Annotation[], amount: number, day: Dayjs): number {

    const pendentsAnnotations = filterPendentsOrExpiredAnns(annotations);
    const annBeforeOrEqualToDate = filterAnnBeforeOrEqualToDate(pendentsAnnotations, day);

    if (annBeforeOrEqualToDate.length === 0) return amount;

    const reduceResult = annBeforeOrEqualToDate.reduce((acc, curr) => {
        // Assuming 'value' is a property of the 'Annotation' object
        return {
            value: (curr.annon_type === 'payment') ? acc.value + curr.value :
                acc.value - curr.value
        };
    }, { value: 0 });

    return amount + reduceResult.value;
}