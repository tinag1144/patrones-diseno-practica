// Ejercicio 2: Implementar Patrón Factory Method para Crear Equipos
// Objetivo: Utilizar el patrón Factory Method para crear diferentes tipos de equipos.

// Crear una clase EquipoFactory con un método crearEquipo que, basado en el tipo de equipo ("Notebook", "Desktop", "Servidor"), devuelva una instancia de la clase adecuada.

// Crear clases específicas para cada tipo de equipo (Notebook, Desktop, Servidor), cada una con sus propias propiedades (Ej.: ram, procesador).

// Estas clases deben extenderse de una clase abstracta común que declare el método detalles(), para que crearEquipo devuelva siempre un tipo uniforme sin importar el equipo concreto que construya.
// Ejemplo de salida esperada:

// const factory = new EquipoFactory();
// const Notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
// console.log(Notebook.detalles());
// Tipo: Notebook, Nombre: Dell XPS, RAM: 16GB, Procesador: i7

abstract class Equipo {
    nombre: string;
    ram: string;
    procesador: string;

    constructor(
        nombre: string,
        ram: string,
        procesador: string
    ) {
        this.nombre = nombre,
        this.procesador = procesador,
        this.ram = ram
    }

    abstract detalles(): string
}

class Notebook extends Equipo{

    detalles(): string{
        return (`Tipo: Notebook, Nombre: ${this.nombre}, Ram: ${this.ram}, Procesador: ${this.procesador}`)
    }
}

class Desktop extends Equipo{

    detalles(): string{
        return (`Tipo: Desktop, Nombre: ${this.nombre}, Ram: ${this.ram}, Procesador: ${this.procesador}`)
    }
}

class Servidor extends Equipo{

    detalles(): string{
        return(`Tipo: Servidor, Nombre: ${this.nombre}, Ram: ${this.ram}, Procesador: ${this.procesador}`)
    }
}

class EquipoFactory {

    crearEquipo( 
        tipo: string,
        nombre: string,
        ram: string,
        procesador: string,
    ): Equipo{

        if (tipo === "Notebook") {
            return new Notebook(nombre, ram, procesador)
        } else 
            if (tipo === "Desktop") {
                return new Desktop(nombre, ram, procesador)
            } else 
                if (tipo === "Servidor") {
                    return new Servidor(nombre, ram, procesador)
                } else {
                    throw new Error("Tipo de equipo no válido")
                }

    }
}



const factory = new EquipoFactory();
const notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log(notebook.detalles());