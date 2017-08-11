import { User } from './user';
import { Question } from './question';


export class Answer{
 _id:string;
 answertitle: string;
 sdetails:string;
 like:number;
 user: User;
 question:Question;
}
