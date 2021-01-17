const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivos, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivos(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconosido');

};





//console.log(process.argv);

//  let argv = process.argv;

//console.log('limite', argv.limite);