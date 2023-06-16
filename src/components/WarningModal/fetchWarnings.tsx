import axios from 'axios';
import data from '../Calendar/fakeAnotations';
import { IAnotation } from '../../lib/types';

export default  async (): Promise<IAnotation[] > => {
    return data;
}