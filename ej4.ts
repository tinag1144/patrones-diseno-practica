// Ejercicio 4: Adaptador para Cambiar la Interfaz de Inventarios Viejos
// Objetivo: Implementar el patrón Adaptador para integrar una clase antigua de inventario con el nuevo sistema.

// Crear una clase InventarioViejo que tenga un método agregarItem.
// Definir explícitamente la interfaz Inventario (el contrato objetivo, con agregarEquipo y listarEquipos) que espera el sistema nuevo.
// Implementar una clase AdaptadorInventario que implemente esa interfaz y permita utilizar InventarioViejo (con su método agregarItem) donde el sistema nuevo espera un Inventario, traduciendo las llamadas internamente.
// Ejemplo de salida esperada:

// const inventarioViejo = new InventarioViejo();
// const adaptador = new AdaptadorInventario(inventarioViejo);
// adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
// console.log(adaptador.listarEquipos());
// // [{ nombre: "Servidor Dell", tipo: "Servidor", estado: "disponible" }]

interface Equipo {
    nombre: string;
    tipo: string;
    estado: string;
}

class InventarioViejo {
    private items: Equipo[] = [];

    agregarItem(nombre: string, tipo: string, estado: string): void {
        this.items.push({
            nombre,
            tipo,
            estado
        });
    }

    listarItems(): Equipo[] {
        return this.items;
    }
}


// Target: interfaz que espera el sistema nuevo
interface Inventario {
    agregarEquipo(nombre: string, tipo: string, estado: string): void;
    listarEquipos(): Equipo[];
}


// Adapter
class AdaptadorInventario implements Inventario {
    private inventarioViejo: InventarioViejo;

    constructor(inventarioViejo: InventarioViejo) {
        this.inventarioViejo = inventarioViejo;
    }

    agregarEquipo(nombre: string, tipo: string, estado: string): void {
        this.inventarioViejo.agregarItem(nombre, tipo, estado);
    }

    listarEquipos(): Equipo[] {
        return this.inventarioViejo.listarItems();
    }
}


// Uso

const inventarioViejo = new InventarioViejo();

const adaptador = new AdaptadorInventario(inventarioViejo);

adaptador.agregarEquipo(
    "Servidor Dell",
    "Servidor",
    "disponible"
);

console.log(adaptador.listarEquipos());