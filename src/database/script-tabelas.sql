create database projeto_individual;
use projeto_individual;

create table usuario (
	idUsuario int primary key auto_increment,
    nome varchar(45),
    email varchar(45),
    senha varchar(45)
);

create table pontuacaoQuiz (

	idPontuacao int primary key auto_increment,
    ultimaPontuacao int,
    maiorPontuacao int,
    fkUsuario int unique,
    constraint fkPontuacaoUsuario foreign key (fkUsuario) references usuario(idUsuario)

);