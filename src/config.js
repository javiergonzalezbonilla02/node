//config puerto del servidor
export const PORT = process.env.port || 3300;
 
//config datos de la conexion a la BBDD
export const host = process.env.db_host  || 'localhost';
export const user = process.env.db_user || 'root';
export const password = process.env.db_password || '';
export const database = process.env.db_name || 'userlogin';
export const port = process.env.db_port || 3306;