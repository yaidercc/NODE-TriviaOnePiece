require("colors");
const {questionsTrivia} = require("./helpers/inquirer");

const main=async()=>{
    let i=0,leng=0,resp=[],answers=[];
    
    do{
        resp=await questionsTrivia(i);
        leng=resp[0];
        answers.push(resp[1]);
        i++;
    }while(i<leng);


    console.clear();
    console.log("Resultados: \n")
    answers.map(item=>{
        console.log(`${Object.keys(item)}: Respuesta ${Object.values(item)}`);
    })
}


main()