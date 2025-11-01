const listaEmpleados = [
    { id: 1, nombre: "Juan", area: "Ventas", salario: 2400 },
    { id: 2, nombre: "Marta", area: "Ventas", salario: 2600 },
    { id: 3, nombre: "Luis", area: "TI", salario: 4000 },
    { id: 4, nombre: "Ana", area: "Recursos Humanos", salario: 3000 },
];
function gestionarEmpleados(empleados) {
    const areas = {};
    for (const empleado of empleados) {
    const { area, nombre, salario } = empleado;
    if (!areas[area]) {
        areas[area] = {
        empleados: [],
        totalSalario: 0,
        cantidad: 0
        };
    }
    areas[area].empleados.push(nombre);
    areas[area].totalSalario += salario;
    areas[area].cantidad += 1;
    }
    const resultado = {};
    for (const area in areas) {
    const data = areas[area];
    const promedio = data.totalSalario / data.cantidad;
    resultado[area] = {
        empleados: data.empleados,
        promedio: promedio
        };
    }
    return resultado;
}
console.log(gestionarEmpleados(listaEmpleados));
