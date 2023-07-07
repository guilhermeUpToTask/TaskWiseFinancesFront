import axios from 'axios';
import data from '../CalendarSystem/fakeAnotations';
import { IAnotation } from '../../lib/types';

export default  async function fetchWarnings (): Promise<IAnotation[] > {
    return data;
}