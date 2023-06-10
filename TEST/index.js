import fs from "fs";
import inquirer from "inquirer";
import { exit } from "process";
import readline from "readline"
import {exec} from "child_process";





    async function getBranch(){
        try{
       const query1= await  inquirer.prompt([
                {
                    type: 'input',
                    name: 'choice_of_proceeding',
                    message: 'NodeForce CLI will create file structures on this working folder and install dependencies.Proceed?[y/n]'
                }
            ])
            let choice_of_proceeding;
            choice_of_proceeding = await query1.choice_of_proceeding

            if(choice_of_proceeding=='y'){ await fs.writeFileSync("hello3.js", choice_of_proceeding + "Yes",(err=>console.log("err!")));
            
            var yourscript = exec('sh create-folder-struct.sh',
                (error, stdout, stderr) => {
                    console.log(stdout);
                    console.log(stderr);
                    if (error !== null) {
                        console.log(`exec error: ${error}`);
                    }
                });
            }
            else exit(1);

















        } catch(error){
           
                console.error(error);
            };
        }
        
        await getBranch();


    // await getName();
    // const data =fs.readFileSync("hello2.js",'utf-8',(err)=>console.log(err))
    // console.log(data + `\nhe\nllo
    // World!`)
             // progress=fs.readFileSync("hello3.js","utf-8",err=>console.log(err));