type InvoiceType = {
  id: number
  date: string
  amount: string
  status: 'paid' | 'pending' | 'cancelled'
}

const paymentHistory: InvoiceType[] = [
  {
    id: 2045896,
    date: '02 Dec 2022',
    amount: '3,999',
    status: 'paid',
  },
  {
    id: 124896,
    date: '01 Dec 2022',
    amount: '2,500',
    status: 'paid',
  },
  {
    id: 201547,
    date: '25 Nov 2022',
    amount: '4,140',
    status: 'pending',
  },
  {
    id: 145750,
    date: '24 Nov 2022',
    amount: '3,245',
    status: 'paid',
  },
  {
    id: 524780,
    date: '22 Nov 2022',
    amount: '1,825',
    status: 'cancelled',
  },
  {
    id: 47850,
    date: '20 Nov 2022',
    amount: '3,656',
    status: 'paid',
  },
]
export { paymentHistory }
