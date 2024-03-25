-- Active: 1705370176782@@localhost@5432@api_samuraix@public

drop table tbl_samurai;

create table tbl_bando
(
    id serial primary key,
    nombre varchar(500),
    creado TIMESTAMP DEFAULT current_timestamp
);



create table tbl_samurai
(
    id serial PRIMARY KEY,
    nombre varchar(500),
    ataque varchar(500),
    id_bando int,
    id_estilo_pelea int,
    id_sexo int,
    creado TIMESTAMP DEFAULT current_timestamp,
    constraint fk_id_bando FOREIGN key (id_bando) REFERENCES tbl_bando (id),
    constraint fk_id_estiloPelea FOREIGN key (id_estilo_pelea) REFERENCES tbl_estiloPelea (id),  -- Corrección aquí
    constraint fk_id_sexo FOREIGN key (id_sexo) REFERENCES tbl_sexo (id)
);


create table tbl_estiloPelea
(
    id serial primary key,
    nombre_estilo varchar (300),
    fecha_union TIMESTAMP DEFAULT current_timestamp
);

create table tbl_espada
(
    id serial primary key,
    nombre_espada varchar (300)
)

create table tbl_sexo
(
    id serial primary key,
    sexo varchar (100),
    fotoPerfil VARCHAR(255)
)

select a.id,
    a.nombre as nombre_samurai,
    a.ataque,
    b.nombre as nombre_bando
    from tbl_samurai a 
    inner join tbl_bando b 
    on a.id_bando=b.id


delete from tbl_estiloPelea where id is not null;

SELECT
  a.id,
  a.nombre AS nombre_samurai,
  a.ataque,
  b.nombre AS nombre_bando,
  e.nombre_estilo AS nombre_estilo_pelea,
  s.sexo AS nombre_sexo
FROM
  "public"."tbl_samurai" a
INNER JOIN
  "public"."tbl_bando" b ON a.id_bando = b.id
INNER JOIN
  "public"."tbl_estiloPelea" e ON a.id_estiloPelea = e.id
INNER JOIN
  "public"."tbl_sexo" s ON a.id_sexo = s.id;


SELECT table_name FROM information_schema.tables WHERE table_name = 'tbl_estiloPelea';



  INSERT INTO tbl_samurai (nombre, ataque, id_bando, id_estiloPelea, id_sexo)
VALUES ($1, $2, $3, $4, $5)
RETURNING *;



SELECT table_name FROM information_schema.tables WHERE table_name = 'tbl_samurai';


SELECT table_name, table_schema FROM information_schema.tables WHERE table_name = 'tbl_samurai';

SELECT table_name, table_schema FROM information_schema.tables WHERE table_name = 'tbl_samurai';


select * from tbl_samurai


SELECT
  a.id,
  a.nombre AS nombre_samurai,
  a.ataque,
  b.nombre AS nombre_bando,
  e.nombre AS nombre_estilo_pelea,
  s.sexo AS nombre_sexo
FROM
  tbl_samurai a
INNER JOIN
  tbl_bando b ON a.id_bando = b.id
INNER JOIN
  tbl_estilopelea e ON a.id_estilo_pelea = e.id
INNER JOIN
  tbl_sexo s ON a.id_sexo = s.id;
