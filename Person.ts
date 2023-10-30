export class Person{
   public first_name:string;
    last_name:string;
    age:number;
    height?:number;
    constructor(first_name:string,last_name:string,age:number){
        this.first_name = first_name;
        this.last_name = last_name;
        this.age= age;
    }
    getFullName():string{
        return this.first_name
    }
}