const crearArrayConFrase = (arrayObjetivo) => {
    let arregloConPrimerObjeto = arrayObjetivo.slice(0, 1);
    let arregloConUltimoObjeto = arrayObjetivo.slice(-1);
    let primeraFrase = "Primera atención: " + arregloConPrimerObjeto[0].paciente + " - " + arregloConPrimerObjeto[0].prevision;
    let segundaFrase = "Última atención: " + arregloConUltimoObjeto[0].paciente + " - " + arregloConUltimoObjeto[0].prevision;
    let arregloFinalAImprimir = [primeraFrase, segundaFrase];
    return arregloFinalAImprimir;
};

const todosCardBody = document.querySelectorAll("p.mensajeConcatenado");
const primeraUltimaAtencionRadiologia = crearArrayConFrase(radiologia);
const primeraUltimaAtencionTraumatologia = crearArrayConFrase(traumatologia);
const primeraUltimaAtencionDental = crearArrayConFrase(dental);

todosCardBody[0].innerHTML = primeraUltimaAtencionRadiologia.join(" | ");
todosCardBody[1].innerHTML = primeraUltimaAtencionTraumatologia.join(" | ");
todosCardBody[2].innerHTML = primeraUltimaAtencionDental.join(" | ");


const cuerpoTablasARellenar = document.querySelectorAll("tbody");
const arregloConcatenadoAtenciones = [radiologia, traumatologia, dental]
for (let index = 0; index < cuerpoTablasARellenar.length; index++) {
    let arrayARecorrer = arregloConcatenadoAtenciones[index];
    console.log(arrayARecorrer);
    cuerpoTablasARellenar[index].innerHTML = imprimirInformacion(arrayARecorrer);
}

function imprimirInformacion(atenciones) {
    let stringInfo = '';
    atenciones.forEach(atencion => {
        stringInfo += '<tr><th scope="row" class="text-center">' + atencion.hora + '</th>';
        stringInfo += '<td class="text-center">' + atencion.especialista + '</td>';
        stringInfo += '<td class="text-center">' + atencion.paciente + '</td>';
        stringInfo += '<td class="text-center">' + atencion.rut + '</td>';
        stringInfo += '<td class="text-center">' + atencion.prevision + '</td>';
    });
    return stringInfo;
}