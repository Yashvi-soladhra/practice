-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: project1
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `languageknowns`
--

DROP TABLE IF EXISTS `languageknowns`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `languageknowns` (
  `lkid` int NOT NULL AUTO_INCREMENT,
  `candid` int NOT NULL,
  `language` varchar(255) NOT NULL,
  `canread` tinyint DEFAULT NULL,
  `canwrite` tinyint DEFAULT NULL,
  `canspeak` tinyint DEFAULT NULL,
  PRIMARY KEY (`candid`,`language`),
  UNIQUE KEY `lkid_UNIQUE` (`lkid`),
  KEY `languageknowns_ibfk_2` (`language`),
  CONSTRAINT `languageknowns_ibfk_1` FOREIGN KEY (`candid`) REFERENCES `basicdetails` (`candid`),
  CONSTRAINT `languageknowns_ibfk_2` FOREIGN KEY (`language`) REFERENCES `optionmaster` (`option_value`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `languageknowns`
--

LOCK TABLES `languageknowns` WRITE;
/*!40000 ALTER TABLE `languageknowns` DISABLE KEYS */;
INSERT INTO `languageknowns` VALUES (1,1,'hindi',1,0,0),(2,2,'hindi',1,0,0),(3,3,'hindi',0,1,0);
/*!40000 ALTER TABLE `languageknowns` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-28 13:17:29