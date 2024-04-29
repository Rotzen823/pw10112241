let express = require('express');
let mysql = require('mysql');
let cors = require('cors');

let app = express();
app.use(express.json());
app.use(cors());

//Conexion a MySQL
let conexion = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'pwdata',
    port: '3306'
});

//Nos conectamos a MySql
conexion.connect(function(error){
    if(error){
        throw error;
    }
    else{
        console.log('Conectado a la base de datos');
    }
});

//Rutas de acceso
app.get("/", function(req, res){
    res.send("Ruta de Inicios");
});

//Seleccionamos todos los clientes
app.get('/api/clientes', (req, res)=>{
    conexion.query('SELECT * FROM clientes', (error, filas) =>{
        if(error){
            throw error;
        }
        else{
            res.send(filas);
        }
    });

});
//Seleccionamos un Cliente en especifico
app.get('/api/clientes/:id', (req, res)=>{
    conexion.query('SELECT * FROM clientes WHERE id=?', [req.params.id], (error, filas) =>{
        if(error){
            throw error;
        }
        else{
            res.send(filas);
        }
    });
});

//Encender servidor
let puerto = 3000;
app.listen(puerto, function(){
    console.log("Servidor escuchado puerto: " + puerto);
});
