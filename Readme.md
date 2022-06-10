#Project Merchant-servicess API
---
This repository contains the full code and documentation for Merchant-servicess.

## Contents
1. Architecture Diagram
2. Entity Relationship Diagram

## 1. Architecture Diagram
![Architecture Diagram](../Mini%20Project%20Merchant%20Services_Tb%20Fauzan%20Rachman/img/Architecture-Diagram.jpg)

Penjelasan:
Pada gambar architecture diagram diatas browser  berinteraksi dengan REST API Account untuk melakukan login lalu akan diteruskan ke database Account.

Setelah itu browser akan meminta request ke REST API untuk mengakses Product service nanti akan diteruskan ke database product service, lalu akan di respon berupa data product yang ada di database


## 2. Entity Relationship Diagram
![Entity Relationship Diagram](../Mini%20Project%20Merchant%20Services_Tb%20Fauzan%20Rachman/img/ERD-Diagram.jpg)

Penjelasan:
Pada mini project yang dikembangkan hanya berinteraksi dengan 2 table saja, yiatu; user, dan product.

table user memiliki relasi yaitu 1 ke banyak karena 1 user dapat memiliki banyak product