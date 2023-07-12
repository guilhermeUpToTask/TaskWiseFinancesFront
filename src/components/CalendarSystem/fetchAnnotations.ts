import anotationsData from './fakeAnotations';
import { Annotation } from '../../lib/types';

export default async function fetchAnotations (): Promise<Annotation[]> {
    try {
      return anotationsData;
    }
    catch (e) {
      return [];
    }
  }
  