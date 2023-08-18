CREATE PROCEDURE updateUser @Name nchar(10), @Email char(40), @add nchar(100), @tel char(15), @id char(5)
AS
update USER_INFO set FIRST_NAME = @Name, USERNAME = @Email, TEL = @tel where ID = @id
update USER_ADD set @add = ADDR_LINE1 WHERE USER_ID = @id
GO;

CREATE PROCEDURE updateProduct @Name nchar(40), @Brand char(20), @Size int, @Price money, @Color nchar(10), @Gender Char(6), @Category Char(40), @Image Varbinary(Max),@id char(5)
AS
update PRODUCT set PNAME = @Name, PRICE = @Price, GENDER = @Gender, IMAGE = @Image where ID = @id
update product set product.CATE_ID = (select pc.id from PRODUCT_CATEGORY pc where pc.name = @Category) where product.id = @id
update PRODUCT_DETAILS set SIZE = @Size, COLOR = @Color where PID = @id