var config = require('../config/dbconfig');
var moment = require('moment');
const sql = require('mssql');
async function login(req) {
    try {
        let pool = await sql.connect(config);
        let user = await pool.request().query(`SELECT * from USER_INFO where username='${req.body.username}' and pass='${req.body.password}'`);
        console.log(user.rowsAffected[0])
        if(user.rowsAffected[0]==1)
        {
            return ['success',user.recordset[0].ID]
        }
        else return 'fail'
    }
    catch (error) {
        return error
    }
}
async function register(req) {
    let pool = await sql.connect(config);
    let user = await pool.request().query('SELECT MAX(ID) AS ID FROM USER_INFO');
    let checkuser = await pool.request().query(`SELECT ID from USER_INFO where username='${req.body.username}' or tel='${req.body.tel}'`);
        if(checkuser.recordset.length==1)
        {
            
            return 'fail'
        }
    try {
        
        const date = new Date();
        const formattedDate = moment(date).format('YYYY-MM-DD');
        let order = await pool.request()
        .input('ID', sql.Char(5), String(user.recordset[0].ID+1))
        .input('USERNAME', sql.Char(50), req.body.username)
        .input('PASS', sql.Char(12), req.body.pass)
        .input('FIRST_NAME', sql.NChar(10), req.body.fName)
        .input('LAST_NAME', sql.NChar(20), req.body.lName)
        .input('TEL', sql.Char(15), req.body.tel)
        .input('CREATED_AT', sql.Date, formattedDate)
        .input('MODIFIED_AT', sql.Date, formattedDate)
        .query(`INSERT INTO USER_INFO (ID,USERNAME,PASS,FIRST_NAME,LAST_NAME,TEL,CREATED_AT,MODIFIED_AT) VALUES(@ID,@USERNAME,@PASS,@FIRST_NAME,@LAST_NAME,@TEL,@CREATED_AT,@MODIFIED_AT);`);
        console.log(req.body)
        return "Successful"
    }
    catch (error) {
        return error
    }
}
module.exports = {
    login: login,
    register: register
}

module.exports = {
    login: login,
}