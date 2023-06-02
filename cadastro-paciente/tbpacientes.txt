-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 10-Out-2022 às 02:17
-- Versão do servidor: 10.4.25-MariaDB
-- versão do PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `dbintclinica`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbpacientes`
--

CREATE TABLE `tbpacientes` (
  `nome` varchar(50) NOT NULL,
  `cpf` int(11) NOT NULL,
  `idade` int(3) DEFAULT NULL,
  `sexo` varchar(20) DEFAULT NULL,
  `plano` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tbpacientes`
--

INSERT INTO `tbpacientes` (`nome`, `cpf`, `idade`, `sexo`, `plano`) VALUES
('João Victor Venâncio', 485830098, NULL, 'Feminino', 'Íntegral Unity'),
('João Victor Venâncio', 485830098, NULL, 'Feminino', 'Íntegral Unity'),
('João Victor Venâncio', 485830098, NULL, 'Feminino', 'Íntegral Unity'),
('João Victor Venâncio', 485830098, NULL, 'Feminino', 'Íntegral Unity'),
('', 0, NULL, '', 'Íntegral Corporate'),
('', 0, NULL, '', 'Íntegral Corporate'),
('João Victor Venâncio', 69341, NULL, 'Homossexual', 'Íntegral Unity'),
('João Victor Venâncio', 2, NULL, 'Feminino', 'Íntegral Unity'),
('João Victor Venâncio', 485830098, NULL, 'Masculino', 'Íntegral Unity'),
('João Victor Venâncio', 485830098, NULL, 'Masculino', 'Íntegral Unity'),
('João Victor Venâncio', 485830098, NULL, 'Masculino', 'Íntegral Unity'),
('João Victor Venâncio', 485830098, NULL, 'Masculino', 'Íntegral Unity'),
('João Victor Venâncio', 485830098, NULL, 'Masculino', 'Íntegral Unity'),
('João Victor Venâncio', 485830098, NULL, 'Masculino', 'Íntegral Unity'),
('João Victor Venâncio', 485830098, NULL, 'Masculino', 'Íntegral Unity'),
('João Victor Venâncio', 485830098, NULL, 'Masculino', 'Íntegral Unity'),
('João Victor Venâncio', 485830098, NULL, 'Masculino', 'Íntegral Unity'),
('João Victor Venâncio', 485830098, NULL, 'Masculino', 'Íntegral Unity'),
('João Victor Venâncio', 485830098, NULL, 'Masculino', 'Íntegral Unity'),
('João Victor Venâncio', 485830098, NULL, 'Masculino', 'Íntegral Unity'),
('João Victor Venâncio', 485830098, NULL, 'Masculino', 'Íntegral Unity'),
('João Victor Venâncio', 485830098, NULL, 'Homossexual', 'Íntegral Unity'),
('Marcao meu pau na sua mão', 485830098, NULL, 'Homossexual', 'Íntegral Unity');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
