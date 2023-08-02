USE master
GO
IF DB_ID('QL_BANHANG') IS NOT NULL
	DROP DATABASE QL_BANHANG
GO

CREATE DATABASE QL_BANHANG
GO

USE QL_BANHANG
GO 

CREATE TABLE USER_INFO(
	ID CHAR(5),
	USERNAME CHAR(40) UNIQUE,
	PASS CHAR(12),
	CUST_TYPE INT,
	FIRST_NAME NCHAR(10),
	LAST_NAME NCHAR(20),
	TEL CHAR(15) UNIQUE,
	ACCPOINT INT,
	POINT INT,
	CREATED_AT DATE,
	MODIFIED_AT DATE,
	PRIMARY KEY(ID)
)

CREATE TABLE USER_ADD(
	ID CHAR(5),
	USER_ID CHAR(5),
	ADDR_LINE1 NCHAR(100),
	CITY NCHAR(20),
	POSTAL_CODE CHAR(6)
	PRIMARY KEY(ID)
)

CREATE TABLE USER_PAYMENT(
	ID CHAR(5),
	USER_ID CHAR(5),
	PAYMENT_TYPE CHAR(20),
	PROVIDER CHAR(20),
	ACCOUNT_NO CHAR(20),
	EXPIRY DATE,
	PRIMARY KEY(ID)
)

CREATE TABLE PRODUCT(
	ID CHAR(5),
	PNAME NCHAR(40),
	DESCRRIPT NTEXT,
	SKU CHAR(10),
	CATE_ID CHAR(5),
	PRICE MONEY,
	QUANTITY INT,
	DISCOUNT_ID CHAR(5),
	IMAGE VARBINARY(MAX),
	CREATED_AT DATE,
	MODIFIED_AT DATE,
	--DELETED_AT DATE,
	PRIMARY KEY(ID)
)

CREATE TABLE PRODUCT_CATEGORY(
	ID CHAR(5),
	NAME CHAR(40),
	DESCRIPT NTEXT,
	CREATED_AT DATE,
	MODIFIED_AT DATE,
	--DELETED_AT DATE
	PRIMARY KEY(ID)
)

CREATE TABLE DISCOUNT(
	ID CHAR(5),
	DIS_NAME NCHAR(20),
	DESCRIPT TEXT,
	DIS_PERCENT DECIMAL(3,2),
	ACTIVE BIT,
	CREATED_AT DATE,
	MODIFIED_AT DATE,
	--DELETED_AT DATE,
	PRIMARY KEY(ID)

)

CREATE TABLE CART_ITEM(
	ID CHAR(5),
	SESSION_ID CHAR(5),
	PRODUCT_ID CHAR(5),
	QUANTITY INT,
	CREATED_AT DATETIME,
	MODIFIED_AT DATETIME,
	PRIMARY KEY(ID)
)

CREATE TABLE SHOPPING_SESSION(
	ID CHAR(5),
	USER_ID CHAR(5),
	TOTAL DECIMAL,
	CREATED_AT DATETIME,
	MODIFIED_AT DATETIME,
	PRIMARY KEY(ID)
)

CREATE TABLE ORDER_DETAILS(
	ID CHAR(5),
	USER_ID CHAR(5),
	TOTAL DECIMAL,
	POINT INT,
	PAYMENT_ID CHAR(5),
	STATUS NCHAR(20),
	CREATED_AT DATETIME,
	MODIFIED_AT DATETIME,
	PRIMARY KEY(ID)
)

CREATE TABLE ORDER_ITEMS(
	ID CHAR(5),
	ORDER_ID CHAR(5),
	PRODUCT_ID CHAR(5),
	QUANTITY INT,
	CREATED_AT DATETIME,
	MODIFIED_AT DATETIME,
	PRIMARY KEY(ID)
)

CREATE TABLE POINT_HISTORY (
	ID CHAR(5),
	USER_ID CHAR(5),
	ORDER_ID CHAR(5),
	AMOUNT INT,
	CREATED_AT DATETIME
)
ALTER TABLE USER_ADD
ADD 
	CONSTRAINT FK_UA_UI
	FOREIGN KEY (USER_ID)
	REFERENCES USER_INFO(ID)

ALTER TABLE USER_PAYMENT
ADD 
	CONSTRAINT FK_UP_UI
	FOREIGN KEY (USER_ID)
	REFERENCES USER_INFO(ID)

ALTER TABLE SHOPPING_SESSION
ADD 
	CONSTRAINT FK_SS_UI
	FOREIGN KEY (USER_ID)
	REFERENCES USER_INFO(ID)

ALTER TABLE CART_ITEM
ADD 
	CONSTRAINT FK_CI_SS
	FOREIGN KEY (SESSION_ID)
	REFERENCES SHOPPING_SESSION(ID),

	CONSTRAINT FK_CI_P
	FOREIGN KEY (PRODUCT_ID)
	REFERENCES PRODUCT(ID)

ALTER TABLE PRODUCT
ADD 
	CONSTRAINT FK_P_PC
	FOREIGN KEY (CATE_ID)
	REFERENCES PRODUCT_CATEGORY(ID),

	CONSTRAINT FK_P_D
	FOREIGN KEY (DISCOUNT_ID)
	REFERENCES DISCOUNT(ID)

ALTER TABLE ORDER_DETAILS
ADD 
	CONSTRAINT FK_OD_UI
	FOREIGN KEY (USER_ID)
	REFERENCES USER_INFO(ID),

	CONSTRAINT FK_OD_UP
	FOREIGN KEY (PAYMENT_ID)
	REFERENCES USER_PAYMENT(ID)

ALTER TABLE ORDER_ITEMS
ADD 
	CONSTRAINT FK_OI_OD
	FOREIGN KEY (ORDER_ID)
	REFERENCES ORDER_DETAILS(ID),

	CONSTRAINT FK_OI_P
	FOREIGN KEY (PRODUCT_ID)
	REFERENCES PRODUCT(ID)

ALTER TABLE POINT_HISTORY
ADD
	CONSTRAINT FK_PH_UI
	FOREIGN KEY (USER_ID)
	REFERENCES USER_INFO(ID),

	CONSTRAINT FK_PH_OD
	FOREIGN KEY (ORDER_ID)
	REFERENCES ORDER_DETAILS(ID)