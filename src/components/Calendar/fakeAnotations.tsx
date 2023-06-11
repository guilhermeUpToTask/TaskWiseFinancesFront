import dayjs from "dayjs";
import type { IAnotation } from "../../lib/types";
  
const data : IAnotation[] = [
    {
        name: 'Energy Bill',
        id:1,
        color:'red',
        description: '',
        type: 'bills',
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
      type: 'income',
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
    type: 'bills',
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
  type: 'bills',
  value: 70,
  date: dayjs('2023-06-25'),
  repeat: 'never',
  status: 'pendent',
},
]

export default data;