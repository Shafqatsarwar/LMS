import { Person } from "./Person";
export class Student extends Person{
        email:string;
   constructor (first_name:string,last_name:string,age:number,email:string)
   {
    super(first_name,last_name,age);
    this.email = email;
}


getFullName():string{
        return this.first_name +' '+ this.last_name
        }   
}

