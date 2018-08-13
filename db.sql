-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 13, 2018 at 10:51 AM
-- Server version: 5.7.23-0ubuntu0.16.04.1
-- PHP Version: 7.0.30-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `devis`
--

-- --------------------------------------------------------

--
-- Table structure for table `add_contacts`
--

CREATE TABLE `add_contacts` (
  `id` int(11) NOT NULL,
  `konfname` varchar(255) DEFAULT NULL,
  `konfNachname` varchar(255) DEFAULT NULL,
  `konfStrasse` varchar(255) DEFAULT NULL,
  `konfPlz` varchar(255) DEFAULT NULL,
  `konfTel` varchar(255) DEFAULT NULL,
  `konfMail` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `add_contacts`
--

INSERT INTO `add_contacts` (`id`, `konfname`, `konfNachname`, `konfStrasse`, `konfPlz`, `konfTel`, `konfMail`) VALUES
(20, 'fdfddfd', 'dfdfdf', 'dfdfdfdf', 'dfdf', 'dfdfdfdf', 'fdff'),
(22, 'Nairi', 'Karapetyan', 'name', '1212', '0155555', 'a@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `follow_contacts`
--

CREATE TABLE `follow_contacts` (
  `id` int(11) NOT NULL,
  `broname` varchar(255) DEFAULT NULL,
  `broNachName` varchar(255) DEFAULT NULL,
  `broStrasse` varchar(255) DEFAULT NULL,
  `broStadt` varchar(255) DEFAULT NULL,
  `broTel` varchar(255) DEFAULT NULL,
  `broMail` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `follow_contacts`
--

INSERT INTO `follow_contacts` (`id`, `broname`, `broNachName`, `broStrasse`, `broStadt`, `broTel`, `broMail`) VALUES
(1, 'Asanet', 'sdsdsd', 'asss', 'sdsdsd', '03545', 'a@gmial.com'),
(2, 'assssas', 'sdsdsd', 'sass', 'sdsdssd', 'saddsd', 'as@gmial.com'),
(3, 'Asanet', '2323', 'ccxcc', 'vffvc', '21', 'bc@gmail.com'),
(4, 'Asanet', '2323', 'ccxcc', 'vffvc', '21', 'ba@gmail.com'),
(5, 'ghg', 'hjhjhj', 'hghh', 'hjhhj', '686686', 'A@gmail.com'),
(6, 'uyu', 'klk./.,,..,', 'yuyu', 'hyuj', '2323265', 'a@mail.ru'),
(7, 'hjhj', 'hjhj', 'hjhh', 'hjhjhj', '+9+999', 'g@gmail.com'),
(8, 'hjhj', 'hjhj', 'hjhh', 'hjhjhj', '+9+999', 'j@gmail.com'),
(9, 'hjjh', '6+6', 'jkjk', '66666666666666', '+66+56', 'n@mail.ru'),
(10, 'gh', 'm', 'jkjk', 'jk', '36535', 'v@gmail.com'),
(11, 'gh', 'm', 'jkjk', 'jk', '36535', 'k@gmail.com'),
(12, 'hgghgh', 'gfgf', 'gfgfgf', 'fggf', '6565', 'c@gmail.com'),
(13, '', '', '', '', '', ''),
(14, '', '', '', '', '', ''),
(15, '', '', '', '', '', ''),
(16, '', '', '', '', '', ''),
(17, 'bjk', 'jkjkjk', 'jkk', 'kjkj', 'fgfg', 'nmbnkj'),
(18, '', '', '', '', '', ''),
(19, '', '', '', '', '', ''),
(20, 'Asanet', 'Hayrapetyan', 'name', '211212', '025555', 'a@gmial.com'),
(21, 'Asanet', 'dsddsd', 'asaas', 'dsdssdd', 'asasasas', 'a@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `new_contacts`
--

CREATE TABLE `new_contacts` (
  `id` int(11) NOT NULL,
  `broName` varchar(255) NOT NULL,
  `broNachName` varchar(255) NOT NULL,
  `broStrasse` varchar(255) NOT NULL,
  `broStadt` varchar(255) NOT NULL,
  `broTel` int(255) NOT NULL,
  `broMail` varchar(255) NOT NULL,
  `broDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `new_contacts`
--

INSERT INTO `new_contacts` (`id`, `broName`, `broNachName`, `broStrasse`, `broStadt`, `broTel`, `broMail`, `broDate`) VALUES
(1, '', '', '', '', 0, '', '0000-00-00'),
(2, 'hjjh', 'jkjkjk', 'gfgfgf', 'nmn', 0, 'klkl', '0000-00-00'),
(3, 'hjjh', 'jkjkjk', 'gfgfgf', 'nmn', 0, 'klkl', '0000-00-00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `add_contacts`
--
ALTER TABLE `add_contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `follow_contacts`
--
ALTER TABLE `follow_contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `new_contacts`
--
ALTER TABLE `new_contacts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `add_contacts`
--
ALTER TABLE `add_contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT for table `follow_contacts`
--
ALTER TABLE `follow_contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT for table `new_contacts`
--
ALTER TABLE `new_contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
