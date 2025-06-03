create database gestion_cesde
go
use gestion_cesde 
go

create table estudiantes(id int identity(1,1) primary key,
						cedula varchar(30),
						primer_nombre varchar(30),
						segundo_nombre varchar(30),
						primer_apellido varchar(30),
						segundo_apellido varchar(30)
						)

create table maestros(id int identity(1,1) primary key,
						cedula varchar(30),
						primer_nombre varchar(30),
						segundo_nombre varchar(30),
						primer_apellido varchar(30),
						segundo_apellido varchar(30)
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

create table profesorxmateriaxgrupos(maestro_id int,
										materia_id int,
										grupo_id int,
										Foreign Key (maestro_id) references maestros (id) ,
										Foreign Key (materia_id) references materias (id) ,
										Foreign Key (grupo_id) references grupos (id)
										)
create table notasxmateriaxestudiante (nota float,
										materia_id int,
										estudiante_id int,
										Foreign Key(materia_id) references materias (id),
										Foreign Key (estudiante_id) references estudiantes (id)
										)

create table estudiantesxgrupo (estudiante_id int,
								grupo_id int,
								foreign key (estudiante_id) references estudiantes (id),
								foreign key (grupo_id) references grupos(id)
								)

create table sedexgrupos (sede_id int,
							grupo_id int,
							Foreign Key (sede_id) references sedes (id),
							Foreign Key ( grupo_id) references grupos (id)
							)
