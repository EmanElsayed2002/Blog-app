import { IUser } from './user.model';

export interface IPost {
  userData: IUser;
  TextBody: string;
  src: string;
  isLiked: boolean;
  createdDate: Date;
  createdBy: string;
}
