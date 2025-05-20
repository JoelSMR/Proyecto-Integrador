create database Sistema_notas
GO
use Sistema_notas
GO
--Establecemos los roles que va a manejar nuestro sistema de tablas
create table roles(
id int identity(1,1) primary key,
rol varchar(10) not null,
)

--Creamos una tabla usuarios la cual contenga la informaciond e cada usuario, y a su vez el rol 
--que este representa dentro de nuestra BD
create table usuarios (
id int identity(1,1) primary key,
primer_nombre varchar(15) not null,
segundo_nombre varchar(10),
primer_apellido varchar (10) not null,
segundo_apellido varchar (15),
)

create table rolesxusuario(
rolid int,
usuarioid int,
primary key (rolid,usuarioid),
Constraint FKrolid_usuarioid Foreign Key (rolid) references roles(id),
Constraint FKusuarioid_rolid Foreign Key (usuarioid) references usuarios(id)
)
--Creamos una tabla que contenga a nuestros estudiantes, para asi poder manejas las relaciones N a N
--Manejar una correcta integridad referencial
---Y Poder especificar parametros especializados para cada rol
create table maestros(
id int primary key,
Constraint FKusuarioid_maestro Foreign Key (id) references usuarios(id)
)

create table estudiantes(
id int primary key,
Constraint FKusuarioid_estudiante Foreign Key (id) references usuarios(id)
)

create table especialidades(
id int identity(1,1) primary key,
nombreEspecialidad varchar(40)
)

create table especialidadesxmaestro(
maestroid int,
especialidadid int,
Constraint FKmaestroid_especialidadid Foreign key (maestroid) references maestros(id),
Constraint FKespecialdiadid_maestroid Foreign Key (especialidadid) references especialidades(id)
)


create table materias(
id int identity(1,1) primary key,
nombre varchar(15) not null
)

create table sedes(
id int identity(1,1) primary key,
nombre varchar(20),
direccion varchar(50)
)

create table jornadas(
id int identity(1,1) primary key,
nombre varchar(30) not null
)

create table semestres(
id int identity(1,1) primary key,
numero varchar (2) not null
)

create table maestrosxmateria(
maestroid int not null,
materiaid int  not null,
primary key(maestroid,materiaid),
constraint FKmaestroid Foreign Key (maestroid) references maestros(id),
constraint FKmateriaid Foreign Key (materiaid) references materias(id)
)

create table estudiantesxjornada(
estudianteid int,
jornadaid int,
primary key (estudianteid, jornadaid),
constraint FKuestudianteid_jornadaid Foreign Key (estudianteid) references estudiantes(id),
constraint FKjornadaid_estudianteid foreign key (jornadaid) references jornadas(id)
)

create table grupos(
id int identity(1,1) primary key,
numero varchar(4) not null
)

create table estudiantexgrupo(
grupoid int ,
estudianteid int ,
primary key(grupoid, estudianteid),
constraint FKgrupoid_estudianteid Foreign Key (grupoid) references grupos(id),
constraint Fkestudianteid_grupoid Foreign Key (estudianteid) references estudiantes(id)
)

create table notasxmateriaxestudiante(
materiaid int,
estudianteid int,
nota varchar(1),
primary key (materiaid,estudianteid),
constraint FKmateriaid_estudianteid_nota Foreign Key (materiaid) references materias(id),
constraint FKestudianteid_materiaid_nota Foreign Key (estudianteid) references estudiantes(id)
)

create table gruposxsemestre (
grupoid int,
semestreid int,
primary key (grupoid,semestreid),
constraint FKgrupoid_semestreid Foreign Key (grupoid) references grupos(id),
constraint FKsemestreid_grupoid Foreign Key (semestreid) references semestres(id)
)

create table materiasxsede (
materiaid int,
sedeid int,
primary key (materiaid, sedeid),
constraint FKmateriaid_sedeid Foreign Key (materiaid) references materias(id),
constraint FKsedeid_materiaid Foreign Key (sedeid) references sedes(id)
)

create table gruposxjornada(
grupoid int,
jornadaid int,
primary key (grupoid, jornadaid),
constraint FKgrupoid_jornadaid foreign key (grupoid) references grupos(id),
constraint FKjornadaid_grupoid foreign key (jornadaid) references jornadas(id)
)