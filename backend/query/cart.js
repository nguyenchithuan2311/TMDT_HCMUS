var config = require('../config/dbconfig');
const sql = require('mssql');
async function getCart(req) {
    try {
        let pool = await sql.connect(config);
        let order = await pool.request().query(`SELECT IMAGE, PNAME, CI.QUANTITY, P.PRICE, SS.TOTAL  
                                                from CART_ITEM CI, SHOPPING_SESSION SS, PRODUCT P, PRODUCT_DETAILS PD
                                                WHERE CI.SESSION_ID = SS.ID`);
        return order.recordset
    }
    catch (error) {
        return error
    }
}

async function addCart(req) {
    try {
        let pool = await sql.connect(config);
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
        .input('ID', sql.Char(5), req.ID)
        .input('PNAME', sql.Char(5), req.USER_ID)
        .input('DESCRIPT', sql.Decimal, req.TOTAL)
        .input('SKU', sql.Int, req.POINT)
        .input('CATE_ID', sql.Char(5), req.PAYMENT_ID)
        .input('PRICE', sql.NChar(20), req.STATUS)
        .input('QUANTITY', sql.Char(5), req.PAYMENT_ID)
        .input('DISCOUNT_ID', sql.NChar(20), req.STATUS)
        .input('CREATED_AT', sql.DateTime, req.CREATED_AT)
        .input('MODIFIED_AT', sql.DateTime, req.MODIFIED_AT)
        .query(`UPDATE ORDER_DETAILS SET PNAME = @PNAME, DESCRIPT = @DESCRIPT,
                SKU = @SKU, CATE_ID = @CATE_ID, PRICE = @PRICE, QUANTITY = @QUANTITY, DISCOUNT_ID = @DISCOUNT_ID
                ,CREATED_AT = @CREATED_AT, MODIFIED_AT = @MODIFIED_AT
                WHERE ID = @ID`);
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
        .input('ID', sql.Char(5), req)
        .query(`DELETE FROM PRODUCT
                WHERE ID = @ID;`);
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
}