var config = require('../config/dbconfig');
const sql = require('mssql');
async function login(req) {
    try {
        let pool = await sql.connect(config);
        let user = await pool.request().query(`SELECT * from USER_INFO where username='${req.body.username}' and pass='${req.body.password}'`);
        if(user.recordset.length==1)
        {
            return ['success',user.recordset[0].ID]
        }
        else return ['fail',null]
    }
    catch (error) {
        return error
    }
}

module.exports = {
    login: login,
}