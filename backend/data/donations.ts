export type Donation = {
  id: number
  userId: number
  amount: number
  tip: number
}

const donations: Donation[] = [
  {
    id: 1,
    userId: 3,
    amount: 5000,
    tip: 700,
  },
  {
    id: 2,
    userId: 5,
    amount: 25000,
    tip: 3000,
  },
  {
    id: 3,
    userId: 1,
    amount: 47000,
    tip: 5000,
  },
  {
    id: 4,
    userId: 3,
    amount: 35000,
    tip: 4500,
  },
  {
    id: 5,
    userId: 4,
    amount: 38000,
    tip: 5400,
  },
  {
    id: 6,
    userId: 2,
    amount: 60000,
    tip: 7000,
  },
  {
    id: 7,
    userId: 1,
    amount: 30000,
    tip: 4000,
  },
  {
    id: 8,
    userId: 5,
    amount: 12000,
    tip: 1200,
  },
  {
    id: 9,
    userId: 2,
    amount: 15000,
    tip: 1000,
  },
  {
    id: 10,
    userId: 4,
    amount: 17500,
    tip: 2000,
  },
]

export default donations
