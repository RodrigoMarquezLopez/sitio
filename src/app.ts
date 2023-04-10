import express, { Application } from "express";
import morgan from "morgan";
import path from "path"
import dotenv from "dotenv";
dotenv.config();

import indexRouter from "./routes/index.route";


const app: Application = express();

var options = { beautify: true };

//settings
app.set("port", process.env.PORT || 4000);
app.engine('jsx', require('express-react-views').createEngine(options));
app.set("view engine","jsx");
app.set('views', path.join(__dirname, './views'));


/***
 * Para que el servidor entienda el motor de platillas, ejes reqiere una carpeta de viws 
 * path = biblioteca de node para obetenr rutas y directorios y saber lo del sistema operativo
 * _dirname= donde estoy ubicado 
 */

//middlewares
app.use(morgan("dev"));
app.use(express.json()); //Extended para enviar a imagenes
app.use(express.urlencoded({extended:true}));
//Formulario y json son distintos pues json es texto plano y el formulario manda archivos
app.use(express.static(path.join(__dirname,'./public')));

/**
 * Archivos que no se van a cambiar y que permiten que el proyecto funcione,assets
 * css es estatico, los estaticos deben de ser publicos y son archivos que se pueden 
 * exponer y consultar desde una uri
 */


//routes
app.use("/", indexRouter);


export default app;
