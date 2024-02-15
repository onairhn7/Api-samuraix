-- Active: 1705370176782@@localhost@5432@api_samuraix@public

create table tbl_samurai
(
    id serial primary key,
    nombre varchar (500),
    ataque varchar (300),
    creado TIMESTAMP DEFAULT current_timestamp
);

insert into tbl_samurai
(nombre, ataque)
values
('kenchin', 'hiten'),
('makoto', 'mugen'),
('sanosuke', 'punio')

select * from tbl_samurai