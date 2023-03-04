import { formatDate } from "./serviceUtils"

export const storeName = {
  name: 'Joy and Supply Store'
}
export const buttonTitle = ['View All', 'See details'];

export const TOP5PERFORMINGCOLLECTIONS = 'Top 5 Performing Collections';
export const ACTIVENONACTIVECOLLECTION = 'Active vs. Inactive Collections';
export const COLLECTIONPAYMENTMETHOD = 'Collections by Payment Methods';
export const TOTALCOLLECTIONS = 'Total Collections';
export const TOTALTRANSACTIONS = 'Total Transactions';
export const TOTALPAYOUT = 'Total Payout';
export const TOTALPAID = 'Total Paid';
export const UPCOMINGFPXPAYOUT = 'Upcoming FPX Payout';
export const COLLECTIONDATE = 'Collection Date';

export const collectionStatement = (date: string) => {
  return `Expected to reach your bank account on ${formatDate(date, 'short')}`
}

export const subscribeButton = {
  current: 'Current Plan',
  subscribe: 'Subscribe Plan'
}

export const menuItems = [
  {
    id: 1,
    label:
      'Dashboard',
    icon: '/images/icons/home.svg',
    link: '/'
  },
  {
    id: 2,
    label:
      'Billing',
    icon: '/images/icons/payout.svg',
    link: '/billing'
  },
  // { 
  //   id: 3, 
  //   label: 'Payment Form', 
  //   icon: '/images/icons/payout.svg', 
  //   link: '/paymentform' 
  // },
  {
    id: 4,
    label: 'Subscription',
    icon: '/images/icons/payout.svg',
    link: '/subscription'
  },
]

export const menuFooterItems = [
  {
    id: 5,
    label: 'Account Setting',
    icon: '/images/icons/settings.svg',
    link: '/'
  },
  {
    id: 6,
    label: 'Support',
    icon: '/images/icons/redirect.svg',
    link: '/'
  },
  {
    id: 7,
    label: 'FAQ',
    icon: '/images/icons/redirect.svg',
    link: '/'
  }
]

