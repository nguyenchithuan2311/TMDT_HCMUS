var config = require('../config/dbconfig');
const sql = require('mssql');
async function getProducts() {
    try {
        let pool = await sql.connect(config);
        let order = await pool.request().query(`SELECT * from PRODUCT P, PRODUT_CATEGORY_DETAILS PCD WHERE P.ID = PCD.PID`);
        return order.recordset
    }
    catch (error) {
        return error
    }
}
async function getProduct(req) {
    try {
        let pool = await sql.connect(config);
        let order = await pool.request()
        .input('ID',sql.Char(5), req)
        .query(`SELECT * from PRODUCT P, PRODUCT_CATEGORY_DETAILS PCD WHERE P.ID = PCD.PID AND P.ID = @ID`);
        return order.recordset
    }
    catch (error) {
        return error
    }
}
async function searchProduct(req) {
    try {
        let pool = await sql.connect(config);
        let order = await pool.request()
        .input('INPUT',sql.Char(5), req)
        .query(`SELECT * from PRODUCT P, PRODUCT_CATEGORY_DETAILS PCD WHERE P.ID = PCD.PID AND P.NAME LIKE '%${req}%'`);
        return order.recordset
    }
    catch (error) {
        return error
    }
}
async function createProduct(req) {
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
        .query(`INSERT INTO PRODUCT VALUES(@ID,@PNAME,@DESCRIPT,@SKU
              ,@CATE_ID,@PRICE, @QUANTITY, @DISCOUNT_ID,@CREATED_AT,@MODIFIED_AT);`);
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
    getProduct: getProducts,
    getProduct: getProduct,
    createProduct: createProduct,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct,
    searchProduct: searchProduct
}