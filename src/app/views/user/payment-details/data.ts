const visa = 'assets/images/element/visa.svg'
const masterCard = 'assets/images/element/mastercard.svg'

export type PaymentCardType = {
  companyLogo?: string
  number: number
  validDate: string
  variant?: string
}

const paymentCards: PaymentCardType[] = [
  {
    companyLogo: visa,
    number: 1569,
    validDate: '12/26',
    variant: 'primary',
  },
  {
    companyLogo: masterCard,
    number: 5620,
    validDate: '02/35',
    variant: 'danger',
  },
]

export { paymentCards }
