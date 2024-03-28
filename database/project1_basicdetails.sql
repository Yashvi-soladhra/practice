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
-- Table structure for table `basicdetails`
--

DROP TABLE IF EXISTS `basicdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `basicdetails` (
  `candid` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(60) NOT NULL,
  `lname` varchar(60) NOT NULL,
  `designation` varchar(60) NOT NULL,
  `email` varchar(100) NOT NULL,
  `dob` date NOT NULL,
  `phone` bigint NOT NULL,
  `gender` varchar(255) NOT NULL,
  `reln_status` varchar(255) NOT NULL,
  `address` varchar(100) NOT NULL,
  `city` varchar(60) NOT NULL,
  `state` varchar(60) NOT NULL,
  `zipcode` int NOT NULL,
  PRIMARY KEY (`candid`),
  KEY `gender` (`gender`),
  KEY `reln_status` (`reln_status`),
  KEY `fk_basicdetails_1_idx` (`gender`,`reln_status`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `basicdetails`
--

LOCK TABLES `basicdetails` WRITE;
/*!40000 ALTER TABLE `basicdetails` DISABLE KEYS */;
INSERT INTO `basicdetails` VALUES (1,'yashvi','soladhra','devloper','yashvi12@gmail.com','2000-12-10',9909184595,'Female','Unmerried','to:sardargagdh dis:dhoraji','junsgadh','Rajsthan',362640),(2,'priya','soladhra','devloper','yashvi152@gmail.com','2000-12-10',9909184595,'Female','Unmerried','to:sardargagdh dis:dhoraji','junsgadh','Rajsthan',362640),(3,'vishva','kundariya','devloper','vishva12@gmail.com','2000-12-10',6354132992,'Female','Unmerried','to:sardargagdh dis:dhoraji','junagadh','Rajsthan',362640);
/*!40000 ALTER TABLE `basicdetails` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-28 13:17:30
