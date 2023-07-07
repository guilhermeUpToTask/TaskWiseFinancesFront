import dayjs from "dayjs";
import type { IAnotation } from "../../lib/types";
import * as ANN_CONSTANTS from  "../../lib/constants/annotations";
const data : IAnotation[] = [
    {
        name: 'Energy Bill',
        id:1,
        color:'#FF0000',
        description: '',
        type: ANN_CONSTANTS.BILL_TYPE,
        value: 100.00,
        date: dayjs('2023-06-01'),
        repeat: 'never',
        status: ANN_CONSTANTS.PENDENT_STATUS,
    },
    {
      name: 'Daily Payment',
      id:2,
      color:'green',
      description: '',
      type: ANN_CONSTANTS.PAYMENT_TYPE,
      value: 90.00,
      date: dayjs('2023-06-01'),
      repeat: 'never',
      status: ANN_CONSTANTS.PENDENT_STATUS,
  },
  {
    name: 'Water Bill',
    id:3,
    color:'#FF0000',
    description: '',
    type: ANN_CONSTANTS.BILL_TYPE,
    value: 110.00,
    date: dayjs('2023-06-12'),
    repeat: 'never',
    status: ANN_CONSTANTS.PENDENT_STATUS,
},
{
  name: 'Energy Bill',
  color:'red',
  id:4,
  description: '',
  type: ANN_CONSTANTS.BILL_TYPE,
  value: 70,
  date: dayjs('2023-06-25'),
  repeat: 'never',
  status:ANN_CONSTANTS.PENDENT_STATUS,
},
]

export default data;