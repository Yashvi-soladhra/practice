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
-- Table structure for table `Studentmasterr`
--

DROP TABLE IF EXISTS `Studentmasterr`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Studentmasterr` (
  `studentid` int NOT NULL,
  `student_name` varchar(50) DEFAULT NULL,
  `student_address` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`studentid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Studentmasterr`
--

LOCK TABLES `Studentmasterr` WRITE;
/*!40000 ALTER TABLE `Studentmasterr` DISABLE KEYS */;
INSERT INTO `Studentmasterr` VALUES (1,'yashvi','to:manavader'),(2,'aarju','to:rajkot'),(3,'bansi','to:junagadh'),(4,'yash','to:surat'),(5,'aru','to:ahemdabad'),(6,'ansi','to:rajkot'),(7,'vishu','to:surat'),(8,'abhi','to:ahemdabad'),(9,'parth','to:rajkot'),(10,'yaspal','to:surat'),(11,'kusum','to:bhayavader'),(12,'yashika','to:rajkot'),(13,'priya','to:ahemdabad'),(14,'diksha','to:junagadh'),(15,'hardiya','to:rajkot'),(16,'suvarna','to:amd'),(17,'nandini','to:rajkot'),(18,'yesha','to:surat'),(19,'rupali','to:zinzeri'),(20,'akhil','to:ahemdabad'),(21,'viki','to:zinzeri'),(22,'smit','to:ahemdabad'),(23,'raj','to:ahemdabad'),(24,'sneha','to:ahemdabad'),(25,'mina','to:ahemdabad'),(26,'bina','to:ahemdabad'),(27,'fena','to:ahemdabad'),(28,'smit','to:rajkot'),(29,'raj','to:rajkot'),(30,'sneha','to:rajkot'),(31,'neha','to:rajkot'),(32,'sawati','to:rajkot'),(33,'rina','to:rajkot'),(34,'bhumi','to:surat'),(35,'vishva','to:surat'),(36,'gita','to:surat'),(37,'lata','to:surat'),(38,'shree','to:surat'),(39,'nath','to:bhavnagar'),(40,'bhim','to:mhesana'),(41,'chottu','to:modasha'),(42,'grishama','to:surat'),(43,'charmi','to:mhesana'),(44,'meet','to:modasha'),(45,'milan','to:bhavnagar'),(46,'rana','to:mhesana'),(47,'mehta','to:modasha'),(48,'mihir','to:surat'),(49,'liza','to:mhesana'),(50,'urvi','to:modasha'),(51,'vibha','to:zinzeri'),(52,'vayshali','to:ahemdabad'),(53,'man','to:ahemdabad'),(54,'krupali','to:ahemdabad'),(55,'sawati','to:ahemdabad'),(56,'tulvi','to:ahemdabad'),(57,'fenil','to:ahemdabad'),(58,'mona','to:rajkot'),(59,'khushi','to:rajkot'),(60,'palav','to:rajkot'),(61,'drashti','to:rajkot'),(62,'margee','to:rajkot'),(63,'pal','to:rajkot'),(64,'y','to:manavader'),(65,'pal','to:rajkot'),(66,'palav','to:junagadh'),(67,'pinal','to:surat'),(68,'rucha','to:ahemdabad'),(69,'prenshi','to:rajkot'),(70,'pinu','to:surat'),(71,'prexa','to:ahemdabad'),(72,'parth','to:rajkot'),(73,'prushti','to:surat'),(74,'kusum','to:bhayavader'),(75,'yashika','to:amhemdabad'),(76,'ruta','to:ahemdabad'),(77,'diksha','to:junagadh'),(78,'hardiya','to:rajkot'),(79,'ukta','to:amd'),(80,'yamini','to:rajkot'),(81,'yesha','to:surat'),(82,'uvi','to:zinzeri'),(83,'akshay','to:ahemdabad'),(84,'sivam','to:manavader'),(85,'stavan','to:rajkot'),(86,'krutik','to:junagadh'),(87,'krutika','to:surat'),(88,'neer','to:ahemdabad'),(89,'neel','to:rajkot'),(90,'sanket','to:surat'),(91,'kunj','to:ahemdabad'),(92,'krunal','to:rajkot'),(93,'krisha','to:surat'),(94,'om','to:bhayavader'),(95,'rajkumar','to:amhemdabad'),(96,'riya','to:ahemdabad'),(97,'raha','to:junagadh'),(98,'','to:rajkot'),(99,'ukta','to:amd'),(100,'yamini','to:rajkot'),(101,'kunj','to:ahemdabad'),(102,'krunal','to:rajkot'),(103,'krisha','to:surat'),(104,'om','to:bhayavader'),(105,'rajkumar','to:amhemdabad'),(106,'riya','to:ahemdabad'),(107,'raha','to:junagadh'),(108,'','to:rajkot'),(109,'ukta','to:amd'),(110,'yamini','to:rajkot'),(111,'yamini','to:rajkot'),(112,'yamini','to:rajkot'),(113,'yamini','to:rajkot'),(116,'Marinna','.@yopmail.com'),(117,'Monika','.@yopmail.com'),(118,'Netty','.@yopmail.com'),(119,'Caritta','.@yopmail.com'),(120,'Ermengarde','.@yopmail.com'),(121,'Glenda','.@yopmail.com'),(122,'Gerianna','.@yopmail.com'),(123,'Norine','.@yopmail.com'),(124,'Vivia','.@yopmail.com'),(125,'Quintina','.@yopmail.com'),(126,'Olwen','.@yopmail.com'),(127,'Benita','.@yopmail.com'),(128,'Ofilia','.@yopmail.com'),(129,'Dede','.@yopmail.com'),(130,'Tressa','.@yopmail.com'),(131,'Hermione','.@yopmail.com'),(132,'Lory','.@yopmail.com'),(133,'Amalie','.@yopmail.com'),(134,'Abbie','.@yopmail.com'),(135,'Christal','.@yopmail.com'),(136,'Kayla','.@yopmail.com'),(137,'Viviene','.@yopmail.com'),(138,'Jinny','.@yopmail.com'),(139,'Cyndie','.@yopmail.com'),(140,'Melanie','.@yopmail.com'),(141,'Marguerite','.@yopmail.com'),(142,'Brooks','.@yopmail.com'),(143,'Gwyneth','.@yopmail.com'),(144,'Ellette','.@yopmail.com'),(145,'Quintina','.@yopmail.com'),(146,'Randa','.@yopmail.com'),(147,'Rivalee','.@yopmail.com'),(148,'Lesly','.@yopmail.com'),(149,'Jolyn','.@yopmail.com'),(150,'Millie','.@yopmail.com'),(151,'Tani','.@yopmail.com'),(152,'Ardenia','.@yopmail.com'),(153,'Kenna','.@yopmail.com'),(154,'Cherrita','.@yopmail.com'),(155,'Mellicent','.@yopmail.com'),(156,'Rubie','.@yopmail.com'),(157,'Jorry','.@yopmail.com'),(158,'Ofilia','.@yopmail.com'),(159,'Cherrita','.@yopmail.com'),(160,'Merrie','.@yopmail.com'),(161,'Amelia','.@yopmail.com'),(162,'Di','.@yopmail.com'),(163,'Rosaline','.@yopmail.com'),(164,'Aurelie','.@yopmail.com'),(165,'Jaime','.@yopmail.com'),(166,'Liana','.@yopmail.com'),(167,'Marinna','.@yopmail.com'),(168,'Minda','.@yopmail.com'),(169,'Nikki','.@yopmail.com'),(170,'Marcy','.@yopmail.com'),(171,'Jessy','.@yopmail.com'),(172,'Gloria','.@yopmail.com'),(173,'Coral','.@yopmail.com'),(174,'Cissiee','.@yopmail.com'),(175,'Christy','.@yopmail.com'),(176,'Vere','.@yopmail.com'),(177,'Gabi','.@yopmail.com'),(178,'Sean','.@yopmail.com'),(179,'Belinda','.@yopmail.com'),(180,'Agnese','.@yopmail.com'),(181,'Paola','.@yopmail.com'),(182,'Angela','.@yopmail.com'),(183,'Mignon','.@yopmail.com'),(184,'Lesly','.@yopmail.com'),(185,'Elyssa','.@yopmail.com'),(186,'Dulcinea','.@yopmail.com'),(187,'Regina','.@yopmail.com'),(188,'Sarette','.@yopmail.com'),(189,'Teddie','.@yopmail.com'),(190,'Jenilee','.@yopmail.com'),(191,'Jacquetta','.@yopmail.com'),(192,'Molli','.@yopmail.com'),(193,'Kassey','.@yopmail.com'),(194,'Cherrita','.@yopmail.com'),(195,'Cacilie','.@yopmail.com'),(196,'Paulita','.@yopmail.com'),(197,'Brynna','.@yopmail.com'),(198,'Roxane','.@yopmail.com'),(199,'Talya','.@yopmail.com'),(200,'yamini','to:rajkot');
/*!40000 ALTER TABLE `Studentmasterr` ENABLE KEYS */;
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
