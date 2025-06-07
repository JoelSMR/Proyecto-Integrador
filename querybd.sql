create database gestion_cesde
go
use gestion_cesde 
go

create table usuarios(id int identity(1,1) primary key,
                    primer_nombre varchar(20) not null,
                    segundo_nombre varchar(20) ,
                    primer_apellido varchar(20) not null ,
                    segundo_apellido varchar (20) not null,
                    cedula_ciudadania varchar(20),
                    nombre_usuario varchar(30),
                    contraseña_usuario varchar (30)
                    )
create table roles (id int primary key,
                    rol varchar(30)
                    )
create table rolesxusuario(usuario_id int,
                            rol_id int,
                            primary key (usuario_id, rol_id),
                            Foreign key (usuario_id) references usuarios (id),
                            Foreign key (rol_id) references roles (id)
                            )

create table materias (id int primary key,
						materia varchar(40)
						)

create table grupos( id int identity(1,1) primary key,
					grupo varchar(40)
					)

create table sedes (id int primary key,
					sede varchar(40)
					)
create table usuariosxmateria (profesor_id int,
                                    materia_id int,
                                    primary key (profesor_id, materia_id),
                                    Foreign key (profesor_id) references usuarios (id),
                                    Foreign key (materia_id) references materias (id)
                                    )

create table materiasxgrupo(            materia_id int,
										grupo_id int,
										Foreign Key (materia_id) references materias (id) ,
										Foreign Key (grupo_id) references grupos (id)
										)
create table notasxmateriaxestudiante (nota float,
										materia_id int,
										estudiante_id int,
										Foreign Key(materia_id) references materias (id),
										Foreign Key (estudiante_id) references usuarios (id)
										)

create table usuariosxgrupo (estudiante_id int,
								grupo_id int,
								foreign key (estudiante_id) references usuarios (id),
								foreign key (grupo_id) references grupos(id)
								)

create table sedexgrupos (sede_id int,
							grupo_id int,
							Foreign Key (sede_id) references sedes (id),
							Foreign Key ( grupo_id) references grupos (id)
							)

insert into usuarios (cedula_ciudadania,contraseña_usuario,nombre_usuario,primer_nombre,primer_apellido,segundo_nombre,segundo_apellido) 
values ('13245313','123','J','Juan','Santa','','Santa')

go
-- Paso 1: Crear login
CREATE LOGIN usuario_app
WITH PASSWORD = 'ClaveFuerte2024!';

-- Paso 2: Crear usuario en una base de datos específica
USE MiBaseDeDatos;
GO

CREATE USER usuario_app
FOR LOGIN usuario_app;

-- Paso 3: Dar permisos de lectura y escritura
ALTER ROLE db_datareader ADD MEMBER usuario_app;
ALTER ROLE db_datawriter ADD MEMBER usuario_app;