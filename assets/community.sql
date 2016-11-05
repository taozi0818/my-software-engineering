-- MySQL dump 10.13  Distrib 5.7.9, for linux-glibc2.5 (x86_64)
--
-- Host: localhost    Database: community
-- ------------------------------------------------------
-- Server version	5.5.47-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `elec`
--

DROP TABLE IF EXISTS `elec`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `elec` (
  `house` int(10) NOT NULL,
  `expense` decimal(7,2) DEFAULT '0.00',
  `status` varchar(255) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `house_UNIQUE` (`house`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `elec`
--

LOCK TABLES `elec` WRITE;
/*!40000 ALTER TABLE `elec` DISABLE KEYS */;
INSERT INTO `elec` VALUES (1,0.00,'ENABLE',1,'2016-04-20 20:20:20','2016-05-18 18:21:29'),(2,0.00,'ENABLE',2,'2016-04-20 20:20:20','2016-05-14 14:44:16'),(3,0.00,'ENABLE',3,'0000-00-00 00:00:00','2016-10-24 23:41:40'),(4,0.00,'ENABLE',4,'0000-00-00 00:00:00','2016-05-13 00:53:13');
/*!40000 ALTER TABLE `elec` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `house`
--

DROP TABLE IF EXISTS `house`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `house` (
  `detailAdd` varchar(255) NOT NULL,
  `owner` int(10) DEFAULT NULL,
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `elecStatus` int(10) NOT NULL,
  `proStatus` int(10) NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `house`
--

LOCK TABLES `house` WRITE;
/*!40000 ALTER TABLE `house` DISABLE KEYS */;
INSERT INTO `house` VALUES ('3单元101',4,1,'0000-00-00 00:00:00',1,1,'2016-05-14 16:37:03'),('3单元102',2,2,NULL,2,2,NULL),('3单元103',3,3,'0000-00-00 00:00:00',3,3,NULL),('3单元104',4,4,'0000-00-00 00:00:00',4,4,NULL);
/*!40000 ALTER TABLE `house` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `person`
--

DROP TABLE IF EXISTS `person`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `person` (
  `name` varchar(255) NOT NULL,
  `sex` varchar(255) NOT NULL,
  `nation` varchar(255) NOT NULL,
  `education` varchar(255) DEFAULT NULL,
  `work` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `identity` varchar(18) NOT NULL,
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `birthday` date DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `house` int(10) NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `identity` (`identity`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `person`
--

LOCK TABLES `person` WRITE;
/*!40000 ALTER TABLE `person` DISABLE KEYS */;
INSERT INTO `person` VALUES ('31231231','男','dasda','小学','','daxue ','12313123','12312312312313',1,'1899-03-31','0000-00-00 00:00:00',2,'2016-05-18 21:38:27'),('测试2 ','女','汉族','高中','矿工','黄金矿公司','18800020002','452323199990909111',2,'2016-05-10','2000-00-00 00:00:00',4,'2016-05-02 16:17:51'),('测试4','女','壮族','高中','工人','工地','1880000000','312312',4,'2016-05-12','2016-05-01 00:00:00',1,'2016-05-02 17:12:45'),('测试7','女','壮族','高中','工人','工地','18800000009','75678',7,'1995-01-02','2016-05-01 00:00:00',2,NULL),('测试8','女','壮族','高中','工人','工地','18800000008','8678',8,'1995-01-02','2016-05-01 00:00:00',3,NULL),('测试9','女','壮族','高中','工人','工地','18800002070','55',71,'0000-00-00','2016-05-01 00:00:00',4,NULL),('测试9','女','壮族','高中','工人','工地','188000010070','434',72,'0000-00-00','2016-05-01 00:00:00',4,NULL),('测试9','女','壮族','高中','工人','工地','18800090070','333',73,'0000-00-00','2016-05-01 00:00:00',4,NULL),('测试9','女','壮族','高中','工人','工地','1','131231',74,'0000-00-00','2016-05-01 00:00:00',4,NULL),('测试9','女','壮族','高中','工人','工地','31232131','23',75,'0000-00-00','2016-05-01 00:00:00',4,NULL),('测试9','女','壮族','高中','工人','工地','1321','33',76,'0000-00-00','2016-05-01 00:00:00',4,NULL),('测试9','女','壮族','高中','工人','工地','31231','222',77,'0000-00-00','2016-05-01 00:00:00',4,NULL),('测试9','女','壮族','高中','工人','工地','111111111','111',78,'0000-00-00','2016-05-01 00:00:00',4,NULL),('测试9','女','壮族','高中','工人','工地','323','1',79,'0000-00-00','2016-05-01 00:00:00',4,NULL),('测试9','女','壮族','高中','工人','工地','188000020070','2',80,'0000-00-00','2016-05-01 00:00:00',4,NULL),('测试9','女','壮族','高中','工人','工地','4234','3',81,'0000-00-00','2016-05-01 00:00:00',4,NULL),('测试9','女','壮族','高中','工人','工地','444','4',82,'0000-00-00','2016-05-01 00:00:00',4,NULL),('tyt','男','dasda',NULL,NULL,NULL,'213123123123123','12312312312313213',83,NULL,'2016-05-15 17:22:02',1,'2016-05-15 17:22:02'),('1231231313','男','1312','高中','在职','123123123','123123122131313','1312313123123',84,'2016-06-08','2016-05-15 17:23:31',1,'2016-05-15 17:23:31');
/*!40000 ALTER TABLE `person` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `property`
--

DROP TABLE IF EXISTS `property`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `property` (
  `house` int(10) NOT NULL,
  `expense` decimal(7,2) DEFAULT '0.00',
  `status` varchar(255) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `house_UNIQUE` (`house`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `property`
--

LOCK TABLES `property` WRITE;
/*!40000 ALTER TABLE `property` DISABLE KEYS */;
INSERT INTO `property` VALUES (1,0.00,'ENABLE',1,'2016-04-20 20:20:20','2016-05-14 15:22:39'),(2,0.00,'ENABLE',2,'2016-04-20 20:20:20','2016-05-14 14:46:30'),(3,8.88,'ENABLE',3,'0000-00-00 00:00:00',NULL),(4,0.00,'ENABLE',4,NULL,NULL);
/*!40000 ALTER TABLE `property` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `status` (
  `houseid` int(11) NOT NULL,
  `elec` int(11) DEFAULT NULL,
  `property` int(11) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `houseid` (`houseid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` VALUES (1,1,1,1,'2016-05-02 13:00:00','2016-05-02 13:00:00'),(2,2,2,2,'2016-05-02 13:00:00','2016-05-02 13:00:00'),(3,3,3,3,'2016-05-02 13:00:00','2016-05-02 13:00:00'),(4,4,4,4,'2016-05-02 13:00:00','2016-05-02 13:00:00'),(5,5,5,5,'2016-05-02 13:00:00','2016-05-02 13:00:00');
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT '0',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'tyt','202cb962ac59075b964b07152d234b70',1,'0000-00-00 00:00:00','2016-05-18 21:59:17'),(2,'3单元103','e10adc3949ba59abbe56e057f20f883e',0,'0000-00-00 00:00:00',NULL),(3,'3单元101','e10adc3949ba59abbe56e057f20f883e',0,NULL,'2016-05-18 18:22:43'),(4,'3单元102','e10adc3949ba59abbe56e057f20f883e',0,'0000-00-00 00:00:00',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-11-05 20:30:33
