create table estudiantes (
	id int auto_increment,
	dni varchar(64),
	nombre varchar(64),
	apellido varchar(64),
	email varchar(128),
	primary key (id)
);

create table profesores (
	id int auto_increment,
	dni varchar(64),
	nombre varchar(64),
	apellido varchar(64),
	email varchar(128),
	profesion varchar(128),
	telefono varchar(64),
	primary key (id)
);

create table cursos (
	id int auto_increment primary key,
	nombre varchar(64),
	descripcion text,
	profesor_id int,
	constraint cursos_ibfk_1 foreign key (profesor_id) references profesores(id)
);

create table cursos_estudiantes (
	curso_id int,
	estudiante_id int,
	primary key (curso_id, estudiante_id)
);

alter table CursosExpressJs.cursos_estudiantes
	add constraint cursos_estudiantes_estudiantes_FK
	foreign key (estudiante_id) references CursosExpressJs.estudiantes(id);

alter table CursosExpressJs.cursos_estudiantes
	add constraint cursos_estudiantes_cursos_FK
	foreign key (curso_id) references CursosExpressJs.cursos(id);
