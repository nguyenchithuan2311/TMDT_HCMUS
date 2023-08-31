USE QL_BANHANG
GO;
CREATE PROCEDURE updateUser @Name nchar(10), @Email char(40), @add nchar(100), @tel char(15), @id char(5)
AS
update USER_INFO set FIRST_NAME = @Name, USERNAME = @Email, TEL = @tel where ID = @id
update USER_ADD set @add = ADDR_LINE1 WHERE USER_ID = @id
GO;

CREATE PROCEDURE updateProduct @PName nchar(40), @Brand char(20), @Size int, @Price money, @Color nchar(10), @Gender Char(6), @Category Char(40),@id char(5)
AS
update PRODUCT set PNAME = @PName, PRICE = @Price, GENDER = @Gender where ID = @id
update product set product.CATE_ID = (select pc.id from PRODUCT_CATEGORY pc where pc.name = @Category) where product.id = @id
update PRODUCT_DETAILS set SIZE = @Size, COLOR = @Color where PID = @id
go;

CREATE PROCEDURE addCart @SESSION_ID CHAR(5), @PRODUCT_ID CHAR(5), @QUANTITY INT, @TOTAL MONEY
AS
	IF EXISTS (SELECT PRODUCT_ID FROM CART_ITEM WHERE PRODUCT_ID = @PRODUCT_ID AND @SESSION_ID = SESSION_ID) 
BEGIN
   UPDATE CART_ITEM SET QUANTITY = QUANTITY + @QUANTITY, TOTAL = TOTAL + @TOTAL
END
ELSE
BEGIN
    INSERT INTO CART_ITEM(ID, PRODUCT_ID, SESSION_ID, QUANTITY, TOTAL) VALUES((SELECT COUNT(*) FROM CART_ITEM)+1, @PRODUCT_ID, @SESSION_ID, @QUANTITY, @TOTAL)
END 
  UPDATE SHOPPING_SESSION SET TOTAL = (SELECT SUM(TOTAL) FROM CART_ITEM CI WHERE SESSION_ID = @SESSION_ID) WHERE ID = @SESSION_ID

exec addCart @SESSION_ID = '1', @PRODUCT_ID = '1', @QUANTITY = 1, @TOTAL = 100
go;