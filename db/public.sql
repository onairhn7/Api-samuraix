-- Active: 1705370176782@@localhost@5432@api_samuraix@public


create table tbl_bando
(
    id serial primary key,
    nombre varchar(500),
    creado TIMESTAMP DEFAULT current_timestamp
);



create table tbl_samurai
(
    id serial primary key,
    nombre varchar (500),
    ataque varchar (500),
    id_bando int REFERENCES tbl_bando(id),
    creado TIMESTAMP DEFAULT current_timestamp
);

create table tbl_estiloPelea
(
    id serial primary key,
    nombre_estilo varchar (300),
    poder_estilo numeric,
    fecha_union TIMESTAMP DEFAULT current_timestamp
);


select a.id,
    a.nombre as nombre_samurai,
    a.ataque,
    b.nombre as nombre_bando
    from tbl_samurai a 
    inner join tbl_bando b 
    on a.id_bando=b.id



select * from tbl_samurai