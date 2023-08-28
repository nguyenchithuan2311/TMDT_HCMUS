var config = require('../config/dbconfig');
const sql = require('mssql');
async function getOrders() {
    try {
        let pool = await sql.connect(config);
        let order = await pool.request().query(`SELECT * from ORDER_DETAILS`);
        return order.recordset
    }
    catch (error) {
        return error
    }
}
async function getRevenue() {
    try {
        let pool = await sql.connect(config);
        let order = await pool.request().query(`SELECT id, total, created_at, modified_at from ORDER_DETAILS`);
        return order.recordset
    }
    catch (error) {
        return error
    }
}
async function getUOrder(req) {
    try {
        let pool = await sql.connect(config);
        let order = await pool.request()
        .input('USER_ID',sql.Char(5), req)
        .query(`SELECT * from ORDER_DETAILS where @USER_ID = USER_ID`);
        return order.recordset
    }
    catch (error) {
        return error
    }
}
async function createOrders(req) {
    try {
        let pool = await sql.connect(config);
        let order = await pool.request()
        .input('ID', sql.Char(5), req.ID)
        .input('USER_ID', sql.Char(5), req.USER_ID)
        .input('TOTAL', sql.Decimal, req.TOTAL)
        .input('POINT', sql.Int, req.POINT)
        .input('PAYMENT_ID', sql.Char(5), req.PAYMENT_ID)
        .input('STATUS', sql.NChar(20), req.STATUS)
        .input('CREATED_AT', sql.DateTime, req.CREATED_AT)
        .input('MODIFIED_AT', sql.DateTime, req.MODIFIED_AT)
        .query(`INSERT INTO ORDER_DETAILS VALUES(@ID,@USER_ID,@TOTAL,@POINT,@PAYMENT_ID,@STATUS,@CREATED_AT,@MODIFIED_AT);`);
        return "Successful"
    }
    catch (error) {
        return error
    }
}
async function updateOrders(req) {
    try {
        let pool = await sql.connect(config);
        let order = await pool.request()
        .input('ID', sql.Char(5), req.ID)
        .input('USER_ID', sql.Char(5), req.USER_ID)
        .input('TOTAL', sql.Decimal, req.TOTAL)
        .input('POINT', sql.Int, req.POINT)
        .input('PAYMENT_ID', sql.Char(5), req.PAYMENT_ID)
        .input('STATUS', sql.NChar(20), req.STATUS)
        .input('CREATED_AT', sql.DateTime, req.CREATED_AT)
        .input('MODIFIED_AT', sql.DateTime, req.MODIFIED_AT)
        .query(`UPDATE ORDER_DETAILS SET USER_ID = @USER_ID, TOTAL = @TOTAL,
                POINT = @POINT,PAYMENT_ID = @PAYMENT_ID, STATUS = @STATUS, CREATED_AT = @CREATED_AT, MODIFIED_AT = @MODIFIED_AT
                WHERE ID = @ID`);
        return "Successful"
    }
    catch (error) {
        return error
    }
}
async function deleteOrders(req) {
    try {
        let pool = await sql.connect(config);
        let order = await pool.request()
        .input('ID', sql.Char(5), req)
        .query(`DELETE FROM ORDER_DETAILS
                WHERE ID = @ID;`);
        return "Successful"
    }
    catch (error) {
        return error
    }
}
module.exports = {
    getOrders: getOrders,
    getRevenue: getRevenue,
    getUOrder: getUOrder,
    createOrders: createOrders,
    updateOrders: updateOrders,
    deleteOrders: deleteOrders
}