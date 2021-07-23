CREATE TABLE `Professores`IF NOT EXISTS (
  `id` int PRIMARY KEY,
  `nome` varchar(100),
  `disciplina_id` int,
  `turma_id` int
);

CREATE TABLE `Alunos`IF NOT EXISTS (
  `id` int PRIMARY KEY,
  `nome` varchar(100),
  `turma_id` int,
  `email` varchar(100)
);

CREATE TABLE `Disciplinas`IF NOT EXISTS (
  `id` int PRIMARY KEY,
  `nome` varchar(100)
);

CREATE TABLE `Turma`IF NOT EXISTS (
  `id` int PRIMARY KEY,
  `periodo` varchar(20),
  `ano` int
);

ALTER TABLE `Disciplinas` ADD FOREIGN KEY (`id`) REFERENCES `Professores` (`disciplina_id`);

ALTER TABLE `Turma` ADD FOREIGN KEY (`id`) REFERENCES `Professores` (`turma_id`);

ALTER TABLE `Turma` ADD FOREIGN KEY (`id`) REFERENCES `Alunos` (`turma_id`);
