import {createPool} from 'mysql2/promise'
import {host, user, password, port, database} from '../config.js';
 
export const pool = createPool({
    host: host,
    user: user,
    password: password,
    database: database,
    port: port
});
