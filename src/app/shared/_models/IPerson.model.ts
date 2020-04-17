import { IAddress } from './IAddress.model';

export interface IPerson {
  id?: number;
  firstName?: string;
  lastName?: string;
  emailAddress: string;
  createdDtm?: Date;
  createdBy?: string;
  active?: boolean;
  address?: IAddress[];
}

