import { User } from './user';
import { Answer } from './answer';


export class Question{
 _id:string;
 questiontitle: string;
 desc:string;
 user: User;
 answers:[Answer];
}
