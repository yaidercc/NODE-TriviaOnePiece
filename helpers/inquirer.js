
// Recursos

const inquirer=require("inquirer");
const questions=require("./questions");

// Variables
const questionsObj=[];
/**
 * Ciclo para formar la estructura del questionsObj basado en las preguntas del objeto del archivo questions.
 */
questions.map(item=>{
    questionsObj.push(
        {
            type:'list',
            name: 'option',
            message: item.question,
            correctOption:item.correctOption,
            choices:item.options
        }
    )
})

/**
 * Funcion que mostrara cada una de las preguntas que estan en questionsObj
 * @param {*} i indice para acceder a una pregunta del questionsObj.
 * @returns {Array} [longitud del questionsObj, objeto con los puntajes]
 */
const questionsTrivia=async(i)=>{
    console.clear();
    const correctAnswer={};
    let {option} =await inquirer.prompt(questionsObj[i]);
    option==questionsObj[i].correctOption
        ? correctAnswer[(i+1)]="Correcta".green
        : correctAnswer[(i+1)]="Incorrecta".red;
    return [questionsObj.length,correctAnswer];
}

module.exports={
    questionsTrivia
}