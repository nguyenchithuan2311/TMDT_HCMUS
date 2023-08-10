var config = require('../config/dbconfig');
const sql = require('mssql');


async function getListCustomers(){
    try{
        let pool = await sql.connect(config);
        let user = await pool.request().query(`SELECT FIRST_NAME,LAST_NAME,TEL from USER_INFO`);
        return user.recordset
    }
    catch (error) {
        return error
    }
}

async function getCustomer(req){
    try{
        let pool = await sql.connect(config);
        let user = await pool.request().query(`SELECT FIRST_NAME,LAST_NAME,TEL,CUST_TYPE from USER_INFO WHERE ID = '${req.body.id}'`);
        return user.recordset
    }
    catch (error) {
        return error
    }
}

async function updateCustomer(req) {
    try {
        let pool = await sql.connect(config);
        let flat = await pool.request()
        .input('ID', sql.Int, req.ID)
        .input('CUST_TYPE', sql.Int, req.CUST_TYPE)
        .input('FIRST_NAME', sql.NChar(10), req.FIRST_NAME)
        .input('LAST_NAME', sql.NChar(20), req.LAST_NAME)
        .input('TEL', sql.Char(15), req.TEL)
        .input('CREATED_AT', sql.Date, req.CREATED_AT)
        .input('MODIFIED_AT', sql.Date, req.MODIFIED_AT)

        .query(`UPDATE USER_INFO SET CUST_TYPE = @CUST_TYPE, FIRST_NAME = @FIRST_NAME, LAST_NAME = @LAST_NAME, TEL = @TEL, CREATED_AT = @CREATED_AT, MODIFIED_AT = @MODIFIED_AT
                WHERE ID = @ID`);
            
        return 'success'
    }
    catch (error) {
        return error
    }
}

async function deleteCustomer(req) {
    try {
        let pool = await sql.connect(config);
        let flat = await pool.request()
        .input('ID', sql.Int, req.ID)
        .query(`DELETE FROM USER_INFO
                WHERE ID = @ID;`);
        
        return 'success'
    }
    catch (error) {
        return error
    }
}

module.exports = {
    getListCustomers: getListCustomers,
    getCustomer:getCustomer,
    updateCustomer:updateCustomer,
    deleteCustomer:deleteCustomer
}


