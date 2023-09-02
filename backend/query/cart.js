var config = require('../config/dbconfig');
const sql = require('mssql');
async function getCart(req) {
    try {
        let pool = await sql.connect(config);
        let order = await pool.request().query(`SELECT IMAGE, PNAME, CI.QUANTITY, P.PRICE, CI.TOTAL, CI.PRODUCT_ID  
        from CART_ITEM CI, SHOPPING_SESSION SS, PRODUCT P, PRODUCT_DETAILS PD
        WHERE CI.SESSION_ID = SS.ID and CI.SESSION_ID=${req} and PD.ID=CI.PRODUCT_ID and P.ID=PD.PID`);
        return order.recordset
    }
    catch (error) {
        return error
    }
}
async function addCart(req) {
    try {
        let pool = await sql.connect(config);
        let temp = await pool.request().query(`SELECT TOP 1 ID FROM CART_ITEM
        ORDER BY ID DESC;`)
        console.log(temp)
        let order = await pool.request()
        .input('PRODUCT_ID', sql.Char(5), req.PRODUCT_ID)
        .input('SESSION_ID', sql.Char(5), req.SESSION_ID)
        .input('QUANTITY', sql.Int, req.QUANTITY)
        .input('TOTAL', sql.Money, req.TOTAL)
        .execute(`addCart`);
        return "Successful"
    }
    catch (error) {
        return error
    }
}
async function updateProduct(req) {
    try {
        let pool = await sql.connect(config);
        let order = await pool.request()
        .input('PRODUCT_ID', sql.Char(5), req.PRODUCT_ID)
        .input('SESSION_ID', sql.Char(5), req.SESSION_ID)
        .input('QUANTITY', sql.Int, req.QUANTITY)
        .input('TOTAL', sql.Money, req.TOTAL)
        .execute(`updateCart`);
        return "Successful"
    }
    catch (error) {
        return error
    }
}
async function deleteProduct(req) {
    try {
        let pool = await sql.connect(config);
        let order = await pool.request()
        .input('PRODUCT_ID', sql.Char(5), req.PRODUCT_ID)
        .input('SESSION_ID', sql.Char(5), req.SESSION_ID)
        .execute(`deleteCart`);
        return "Successful"
    }
    catch (error) {
        return error
    }
}
async function deleteCart(req) {
    try {
        let pool = await sql.connect(config);
        let order = await pool.request()
        .input('PRODUCT_ID', sql.Char(5), req.PRODUCT_ID)
        .input('SESSION_ID', sql.Char(5), req.SESSION_ID)
        .execute(`deleteAllCart`);
        return "Successful"
    }
    catch (error) {
        return error
    }
}
module.exports = {
    getCart: getCart,
    addCart: addCart,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct,
    deleteCart: deleteCart
}