import { Annotation} from "../lib/types";
import * as ANN_CONSTANTS from "../lib/constants/annotations";[

]
const fakeData : Annotation[] = [
    {
        name: 'Energy Bill',
        id:1,
        description: '',
        annon_type: ANN_CONSTANTS.BILL_TYPE,
        value: 100.00,
        date: '2023-06-01',
        repeat: 'never',
        status: ANN_CONSTANTS.EXPIRED_STATUS,
    },
    {
      name: 'Daily Payment',
      id:2,
      description: '',
      annon_type: ANN_CONSTANTS.PAYMENT_TYPE,
      value: 90.00,
      date: '2023-06-01',
      repeat: 'never',
      status: ANN_CONSTANTS.PENDENT_STATUS,
  },
  {
    name: 'Water Bill',
    id:3,
    description: '',
    annon_type: ANN_CONSTANTS.BILL_TYPE,
    value: 110.00,
    date: '2023-06-12',
    repeat: 'never',
    status: ANN_CONSTANTS.PENDENT_STATUS,
},
{
  name: 'Energy Bill',
  id:4,
  description: '',
  annon_type: ANN_CONSTANTS.BILL_TYPE,
  value: 70,
  date: '2023-06-25',
  repeat: 'never',
  status:ANN_CONSTANTS.PAYED_STATUS,
},
]

export default fakeData;