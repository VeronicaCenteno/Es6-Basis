//Trar las dependencias del componente suma 
import { sumar, restar } from'./sumar.js'
import materias from './materias.js'

//1. Recorrido de arreglo: forEach 
materias.forEach((materia) =>{ 
    if(materia.profesor === 'Cristian'){
        console.log(` materia : ${materia.notas}`)
    }
})
//2.Convertir a un arreglo de profesores metoo map()
let profesores = materias.map(function(materia){
    return materia.profesor 
})
//3 Agregar una al arreglo de materias push ()
materias.push ( {
        id:4,
        name:"Cultura Fisica",
        profesor: "Luis Baquero",
        notas:[
            2.9,
            4.0
        ]   
    })
   const PHP = materias.find(function(materia){
        return materia.profesor === 'Cristian'
    })
    console.log(PHP)