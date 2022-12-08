export type AddressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

export type ContactType = {
  name: string;
  email: string;
  address: AddressType;
  id: string;
};

export type PostType = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type SocialType = {
  id: number;
  icon: string;
  path: string;
};
