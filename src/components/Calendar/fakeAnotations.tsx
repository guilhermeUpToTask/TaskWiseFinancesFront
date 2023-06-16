import dayjs from "dayjs";
import type { IAnotation } from "../../lib/types";
import { BILL_TYPE, INCOMING_TYPE } from "../../lib/constants/annotations";

const data : IAnotation[] = [
    {
        name: 'Energy Bill',
        id:1,
        color:'red',
        description: '',
        type: BILL_TYPE,
        value: 100.00,
        date: dayjs('2023-06-01'),
        repeat: 'never',
        status: 'pendent',
    },
    {
      name: 'Daily Payment',
      id:2,
      color:'green',
      description: '',
      type: INCOMING_TYPE,
      value: 90.00,
      date: dayjs('2023-06-01'),
      repeat: 'never',
      status: 'pendent',
  },
  {
    name: 'Water Bill',
    id:3,
    color:'red',
    description: '',
    type: BILL_TYPE,
    value: 110.00,
    date: dayjs('2023-06-12'),
    repeat: 'never',
    status: 'pendent',
},
{
  name: 'Energy Bill',
  color:'red',
  id:4,
  description: '',
  type: BILL_TYPE,
  value: 70,
  date: dayjs('2023-06-25'),
  repeat: 'never',
  status: 'pendent',
},
]

export default data;