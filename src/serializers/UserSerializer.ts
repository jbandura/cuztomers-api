import { Deserializer, Serializer } from 'jsonapi-serializer';
import User from '../entities/User';

interface Data {
  attributes: Attributes;
  id: string;
  type: string;
}
interface Attributes {
  email: string;
  firstName: string;
  lastName: string;
} 

export interface SerializedUser {
  data: Data | any[];
}

const fieldsToSerialize = {
  contact: [
    'email',
    'firstName',
    'lastName',
  ],
};

export function serializeUsers(data: User[]|User): SerializedUser {
  if (!data) return { data: [] };

  return new Serializer('users', {
    attributes: [...fieldsToSerialize.contact],
    keyForAttribute: 'camelCase',
  }).serialize(data);
}

export function deserializeUser(data: SerializedUser) {
  return new Deserializer({ keyForAttribute: 'camelCase' }).deserialize(data);
}