import axios from 'axios';
import data from '../CalendarSystem/fakeAnotations';
import { Annotation } from '../../lib/types';

export default  async function fetchWarnings (): Promise<Annotation[] > {
    return data;
}