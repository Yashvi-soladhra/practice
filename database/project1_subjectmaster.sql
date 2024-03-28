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
-- Table structure for table `subjectmaster`
--

DROP TABLE IF EXISTS `subjectmaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subjectmaster` (
  `subjectid` int NOT NULL,
  `Subjectname` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`subjectid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subjectmaster`
--

LOCK TABLES `subjectmaster` WRITE;
/*!40000 ALTER TABLE `subjectmaster` DISABLE KEYS */;
INSERT INTO `subjectmaster` VALUES (1,'java'),(2,'android'),(3,'aws'),(4,'python'),(5,'.net'),(6,'c#'),(7,'java'),(8,'android'),(9,'aws'),(10,'python'),(11,'.net'),(12,'c#'),(13,'java'),(14,'android'),(15,'aws'),(16,'python'),(17,'.net'),(18,'c#'),(19,'java'),(20,'android'),(21,'aws'),(22,'python'),(23,'.net'),(24,'c#'),(25,'java'),(26,'android'),(27,'aws'),(28,'python'),(29,'.net'),(30,'c#'),(31,'java'),(32,'android'),(33,'aws'),(34,'python'),(35,'.net'),(36,'c#');
/*!40000 ALTER TABLE `subjectmaster` ENABLE KEYS */;
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
