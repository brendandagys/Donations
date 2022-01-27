export type User = {
  id: number
  firstName: string
  lastName: string
  email: string
}

const users: User[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'janedoe@example.com',
  },
  {
    id: 3,
    firstName: 'Usman',
    lastName: 'Shah',
    email: 'usmanshah@example.com',
  },
  {
    id: 4,
    firstName: 'Daniel',
    lastName: 'Wong',
    email: 'danielwong@example.com',
  },
  {
    id: 5,
    firstName: 'Sarah',
    lastName: 'Coppinger',
    email: 'sarahcoppinger@example.com',
  },
]

export default users
