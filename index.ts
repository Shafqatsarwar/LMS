import inquirer from "inquirer";
import { Student} from "./Student";
//import number from "inquirer/lib/prompts/number";

type answersType = {first_name: string; last_name: string; age: number;email:string};
inquirer.prompt([
    {type: "string", name: "first_name",message: "Enter your 1st Name",},
    {type: "string", name: "last_name",message: "Enter your Last Name",},
    {type: "number", name: "age",message: "Enter your Age",choices:[10,20,30]},
    {type: "string", name: "email",message: "Enter your Email"}
    ])
    .then((answers: answersType) =>
    {
      for(let i:number = 0; i <= answers.age;i++) {
        if (answers.age = 10-30) {
            console.log("good");}
      else if(!Number(answers.age))
    (console.log("age not valid"));
        }
      const newstudent1= new Student(answers.first_name,answers.last_name,answers.age,answers.email);
      console.log('You are Logged in',newstudent1.getFullName()+"\n status Protected");
    })
    .catch((error:any) => {if (error.isTtyError){}
      else {}
    });


/*return
{newstudent1.getFullName()};


console.log('my Name is',newstudent1.getFullName());*/
