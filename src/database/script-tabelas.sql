create database projeto_individual;
use projeto_individual;

create table usuario (
	idUsuario int primary key auto_increment,
    nome varchar(45),
    email varchar(45),
    senha varchar(45)
);

create table quiz (

	idQuiz int primary key auto_increment,
    tipo varchar(45),
    quantidadeQuestoes int    
    
);

insert into quiz (tipo, quantidadeQuestoes) values
	('Acertos', 15);

create table tentativaQuiz (

	idTentativaQuiz int auto_increment,
    fkUsuario int,
    fkQuiz int,
    pontuacaoQuiz int,
	taxaAcertosQuiz int,
    tempoTentativaQuiz int,
    dataTentativaQuiz datetime default current_timestamp,
    constraint fkUsuarioTentativa foreign key (fkUsuario) references usuario(idUsuario),
    constraint fkQuizTentativa foreign key (fkQuiz) references quiz(idQuiz),
	constraint pkComposta primary key (idTentativaQuiz, fkUsuario, fkQuiz)
);

create table tentativaMinigame (

    idTentativaMinigame int auto_increment,
    fkUsuario int,
    pontuacaoMinigame int,
    tempoTentativaMinigame int,
    dataTentativaMinigame datetime default current_timestamp,
	constraint fkUsuarioTentativaMinigame foreign key (fkUsuario) references usuario(idUsuario),
    constraint pkComposta primary key (idTentativaMinigame, fkUsuario)
    
); 