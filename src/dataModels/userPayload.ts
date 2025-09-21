export interface UserPayload {
  name: string;
  job: string;
  skills: string[];
  address: Address;
}

export interface Address {
  street: string;
  city: string;
}