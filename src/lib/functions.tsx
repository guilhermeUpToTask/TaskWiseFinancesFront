import { IAnotation } from "./types";
import { Dayjs } from "dayjs";

export const filtherAnotations =  (anotations: IAnotation[] | undefined, date: Dayjs) => {
    if(anotations && anotations.length > 0){
        return anotations.filter(anotation => anotation.date.isSame(date, 'day'));
      }else{
        return undefined
      }
}