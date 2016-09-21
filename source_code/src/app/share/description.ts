import {Platform} from "./platform";

export class Description{
  constructor(private title:string, private score:string, private publisher:string, private short_desciption:string, platforms:Platform[], private thumb:string){}
}
