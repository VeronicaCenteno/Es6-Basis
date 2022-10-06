let colors = require ('colors')
const estudiantes1 = ["Juan Diego" , 
                        "Juan Camilo" ,
                        "Sebastian" , 
                        "Camilo" , 
                        "Salome"]

const estudiantes2 =[
                    "Mauricio",
                    "Jackson",
                    "Madero",
                    "Juan"]

//Operador spread(resto)
    const estudiante3 = [
        'Veronica',
        ...estudiantes1 ,
        'Paula',
        ...estudiantes2]

    console.log(estudiante3)
