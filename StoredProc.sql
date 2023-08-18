CREATE PROCEDURE updateUser @Name nchar(10), @Email char(40), @add nchar(100), @tel char(15), @id char(5)
AS
update USER_INFO set FIRST_NAME = @Name, USERNAME = @Email, TEL = @tel where ID = @id
update USER_ADD set @add = ADDR_LINE1 WHERE USER_ID = @id
GO;
