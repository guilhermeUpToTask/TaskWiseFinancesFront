import axiosInstance from '../../axiosInstance';
import { Annotation } from '../../lib/types';

export default async function fetchAnnotationsByMonth (year: number, month: number): Promise<Annotation[]> {
    try {
      const {data:{data, error, message}} = await axiosInstance
      .get(`/annotation/get_all_from_month?year=${year}&month=${month}`);
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
  