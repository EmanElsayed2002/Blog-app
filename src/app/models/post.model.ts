import { IUser } from './user.model';

export interface IPost {
  id: number;
  userData: IUser;
  TextBody: string;
  src: string;
  isLiked: boolean;
  createdDate: Date;
}
