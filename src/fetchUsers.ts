import { formatUserName } from './formatUserName';

export interface User {
  id: number;
  formattedName: string;
  street: string;
  suite: string;
  zipcode: string;
}

export const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  return users.map((user: any) => ({
    id: user.id,
    formattedName: formatUserName(user.name),
    street: user.address.street,
    suite: user.address.suite,
    zipcode: user.address.zipcode
  })).sort((a: User, b: User) => a.formattedName.localeCompare(b.formattedName));
};
