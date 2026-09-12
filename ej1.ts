//defino la interfaz Equipo para tipar los equipos

interface Equipo {
    nombre: string;
    tipo: string;
    estado: string;
}

class Inventario{
    equipos: Equipo[] = []

    private static instancia: Inventario;
    private constructor() {
    }

    public static obtenerInstancia(): Inventario {
        if (!Inventario.instancia){
            Inventario.instancia = new Inventario()
        }
        return Inventario.instancia;
    }


    // Agregar un método agregarEquipo para añadir equipos y un método listarEquipos para devolver la lista completa de equipos registrados.

    agregarEquipo(nombre: string, tipo: string, estado: string){
        const nuevoEquipo = {
            nombre, 
            tipo, 
            estado
        }
        this.equipos.push(nuevoEquipo)
    }

    listarEquipos(){
        return this.equipos
    }
}

const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");
console.log(inventario.listarEquipos());
// [{ nombre: "Notebook HP", tipo: "Portátil", estado: "disponible" }]
