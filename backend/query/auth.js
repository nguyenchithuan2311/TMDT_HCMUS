var config = require('../config/dbconfig');
const sql = require('mssql');
async function getOrders(req) {
    try {
        let pool = await sql.connect(config);
        let user = await pool.request().query(`SELECT * from USER_INFO where username='${req.body.username}' and pass='${req.body.password}'`);
        if(user.recordset.length==1)
        {
            return 'success'
        }
        else return 'fail'
    }
    catch (error) {
        return error
    }
}
module.exports = {
    getOrders: getOrders
}

async function getListCustomers(req){
    try{
        let pool = await sql.connect(config);
        let user = await pool.request().query(`SELECT FIRST_NAME,LAST_NAME,TEL from USER_INFO`);
        if(user.recordset.length==1)
        {
            return 'success'
        }
        else return 'fail'
    }
    catch (error) {
        return error
    }
}

module.exports = {
    getListCustomers: getListCustomers
}