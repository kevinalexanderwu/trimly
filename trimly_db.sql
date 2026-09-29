-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 25, 2026 at 03:18 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `trimly_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `salon_id` bigint(20) UNSIGNED NOT NULL,
  `hairstylist_id` bigint(20) UNSIGNED DEFAULT NULL,
  `booking_date` date NOT NULL,
  `booking_time` time NOT NULL,
  `total_price` decimal(12,2) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'upcoming',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`id`, `salon_id`, `hairstylist_id`, `booking_date`, `booking_time`, `total_price`, `status`, `created_at`, `updated_at`) VALUES
(1, 3, 5, '2026-07-19', '13:00:00', 385000.00, 'cancelled', '2026-08-11 05:06:56', '2026-08-11 05:44:53'),
(2, 3, 5, '2026-08-21', '17:00:00', 205000.00, 'completed', '2026-08-18 07:55:51', '2026-08-18 08:30:41'),
(3, 1, 1, '2026-08-19', '14:00:00', 350000.00, 'completed', '2026-08-19 05:17:01', '2026-08-19 06:33:28'),
(4, 1, 1, '2026-07-19', '11:00:00', 350000.00, 'cancelled', '2026-08-19 05:17:02', '2026-08-19 05:17:15'),
(5, 2, 3, '2026-07-19', '14:30:00', 95000.00, 'completed', '2026-08-19 05:17:43', '2026-08-19 05:17:57'),
(6, 18, 35, '2026-07-19', '13:00:00', 330000.00, 'completed', '2026-08-19 06:09:50', '2026-08-19 06:11:00'),
(7, 3, 5, '2026-07-19', '13:00:00', 420000.00, 'completed', '2026-08-19 06:10:18', '2026-08-19 06:10:28'),
(8, 2, 3, '2026-07-19', '13:00:00', 130000.00, 'completed', '2026-08-19 06:33:45', '2026-08-19 06:33:50'),
(9, 1, 1, '2026-07-19', '15:00:00', 200000.00, 'completed', '2026-08-19 06:38:12', '2026-08-19 06:38:18'),
(10, 1, 1, '2026-07-19', '13:00:00', 250000.00, 'completed', '2026-08-19 06:43:09', '2026-08-19 06:43:21'),
(11, 1, 1, '2026-07-19', '13:00:00', 250000.00, 'upcoming', '2026-08-19 06:50:01', '2026-08-19 06:50:01'),
(12, 2, 3, '2026-07-19', '15:00:00', 40000.00, 'upcoming', '2026-08-19 06:50:15', '2026-08-19 06:50:15'),
(13, 3, 5, '2026-07-19', '15:00:00', 90000.00, 'completed', '2026-08-19 06:50:54', '2026-08-19 06:51:35'),
(14, 3, 5, '2026-07-19', '10:00:00', 85000.00, 'upcoming', '2026-08-19 06:51:50', '2026-08-19 06:51:50'),
(15, 1, 1, '2026-07-19', '15:00:00', 400000.00, 'upcoming', '2026-08-19 07:04:23', '2026-08-19 07:04:23'),
(16, 3, 5, '2026-07-19', '13:00:00', 150000.00, 'completed', '2026-08-19 07:05:19', '2026-08-23 21:51:26'),
(17, 2, 3, '2026-07-19', '15:00:00', 55000.00, 'completed', '2026-08-19 07:07:59', '2026-08-19 07:08:06'),
(18, 2, 3, '2026-07-19', '15:00:00', 145000.00, 'completed', '2026-08-19 07:08:19', '2026-08-19 07:37:08'),
(19, 17, 33, '2026-07-20', '11:30:00', 375000.00, 'completed', '2026-09-09 05:52:09', '2026-09-09 05:52:23'),
(20, 3, 5, '2026-08-21', '14:00:00', 205000.00, 'completed', '2026-09-09 06:12:40', '2026-09-09 06:12:58'),
(21, 3, 5, '2026-08-22', '15:00:00', 205000.00, 'completed', '2026-09-09 07:07:28', '2026-09-09 07:07:43');

-- --------------------------------------------------------

--
-- Table structure for table `booking_services`
--

CREATE TABLE `booking_services` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `booking_id` bigint(20) UNSIGNED NOT NULL,
  `service_id` bigint(20) UNSIGNED NOT NULL,
  `price` decimal(12,2) NOT NULL,
  `duration` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `booking_services`
--

INSERT INTO `booking_services` (`id`, `booking_id`, `service_id`, `price`, `duration`, `created_at`, `updated_at`) VALUES
(1, 1, 11, 85000.00, '60 min', '2026-08-11 05:06:56', '2026-08-11 05:06:56'),
(2, 1, 12, 300000.00, '150 min', '2026-08-11 05:06:56', '2026-08-11 05:06:56'),
(3, 2, 11, 85000.00, '60 min', '2026-08-18 07:55:51', '2026-08-18 07:55:51'),
(4, 2, 13, 120000.00, '75 min', '2026-08-18 07:55:51', '2026-08-18 07:55:51'),
(5, 3, 1, 100000.00, '60 min', '2026-08-19 05:17:01', '2026-08-19 05:17:01'),
(6, 3, 2, 250000.00, '120 min', '2026-08-19 05:17:01', '2026-08-19 05:17:01'),
(7, 4, 1, 100000.00, '60 min', '2026-08-19 05:17:02', '2026-08-19 05:17:02'),
(8, 4, 2, 250000.00, '120 min', '2026-08-19 05:17:02', '2026-08-19 05:17:02'),
(9, 5, 8, 55000.00, '45 min', '2026-08-19 05:17:43', '2026-08-19 05:17:43'),
(10, 5, 9, 40000.00, '30 min', '2026-08-19 05:17:43', '2026-08-19 05:17:43'),
(11, 6, 76, 80000.00, '60 min', '2026-08-19 06:09:50', '2026-08-19 06:09:50'),
(12, 6, 77, 250000.00, '150 min', '2026-08-19 06:09:50', '2026-08-19 06:09:50'),
(13, 7, 12, 300000.00, '150 min', '2026-08-19 06:10:18', '2026-08-19 06:10:18'),
(14, 7, 13, 120000.00, '75 min', '2026-08-19 06:10:18', '2026-08-19 06:10:18'),
(15, 8, 9, 40000.00, '30 min', '2026-08-19 06:33:45', '2026-08-19 06:33:45'),
(16, 8, 10, 90000.00, '75 min', '2026-08-19 06:33:45', '2026-08-19 06:33:45'),
(17, 9, 1, 100000.00, '60 min', '2026-08-19 06:38:12', '2026-08-19 06:38:12'),
(18, 9, 4, 100000.00, '60 min', '2026-08-19 06:38:12', '2026-08-19 06:38:12'),
(19, 10, 2, 250000.00, '120 min', '2026-08-19 06:43:09', '2026-08-19 06:43:09'),
(20, 11, 2, 250000.00, '120 min', '2026-08-19 06:50:01', '2026-08-19 06:50:01'),
(21, 12, 9, 40000.00, '30 min', '2026-08-19 06:50:15', '2026-08-19 06:50:15'),
(22, 13, 15, 90000.00, '60 min', '2026-08-19 06:50:54', '2026-08-19 06:50:54'),
(23, 14, 11, 85000.00, '60 min', '2026-08-19 06:51:50', '2026-08-19 06:51:50'),
(24, 15, 2, 250000.00, '120 min', '2026-08-19 07:04:23', '2026-08-19 07:04:23'),
(25, 15, 3, 150000.00, '90 min', '2026-08-19 07:04:23', '2026-08-19 07:04:23'),
(26, 16, 14, 150000.00, '90 min', '2026-08-19 07:05:19', '2026-08-19 07:05:19'),
(27, 17, 8, 55000.00, '45 min', '2026-08-19 07:07:59', '2026-08-19 07:07:59'),
(28, 18, 8, 55000.00, '45 min', '2026-08-19 07:08:19', '2026-08-19 07:08:19'),
(29, 18, 10, 90000.00, '75 min', '2026-08-19 07:08:19', '2026-08-19 07:08:19'),
(30, 19, 73, 250000.00, '150 min', '2026-09-09 05:52:09', '2026-09-09 05:52:09'),
(31, 19, 75, 125000.00, '90 min', '2026-09-09 05:52:09', '2026-09-09 05:52:09'),
(32, 20, 11, 85000.00, '60 min', '2026-09-09 06:12:40', '2026-09-09 06:12:40'),
(33, 20, 13, 120000.00, '75 min', '2026-09-09 06:12:40', '2026-09-09 06:12:40'),
(34, 21, 11, 85000.00, '60 min', '2026-09-09 07:07:28', '2026-09-09 07:07:28'),
(35, 21, 13, 120000.00, '75 min', '2026-09-09 07:07:28', '2026-09-09 07:07:28');

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `favorites`
--

CREATE TABLE `favorites` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `salon_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `favorites`
--

INSERT INTO `favorites` (`id`, `user_id`, `salon_id`, `created_at`, `updated_at`) VALUES
(3, 1, 2, '2026-09-09 07:08:07', '2026-09-09 07:08:07');

-- --------------------------------------------------------

--
-- Table structure for table `hairstylists`
--

CREATE TABLE `hairstylists` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `salon_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `specialty` varchar(255) NOT NULL,
  `rating` decimal(2,1) NOT NULL DEFAULT 0.0,
  `reviews` int(11) NOT NULL DEFAULT 0,
  `experience` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `bio` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `hairstylists`
--

INSERT INTO `hairstylists` (`id`, `salon_id`, `name`, `specialty`, `rating`, `reviews`, `experience`, `image`, `bio`, `created_at`, `updated_at`) VALUES
(1, 1, 'Nadia Putri', 'Hair Coloring & Styling', 4.9, 87, '7 years', 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400', 'Specialist in modern hair coloring, styling and personalized looks.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(2, 1, 'Raka Pratama', 'Haircut & Styling', 4.8, 64, '5 years', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', 'Passionate hairstylist specializing in modern cuts and everyday styling.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(3, 2, 'Dimas Wijaya', 'Fade & Taper', 4.9, 126, '8 years', 'https://images.unsplash.com/photo-1622296089863-eb7fc7c0a9c6?w=400', 'Specialist in clean fades, tapers and modern men hairstyles.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(4, 2, 'Ardi Saputra', 'Classic Cut', 4.8, 93, '6 years', 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400', 'Experienced stylist known for classic cuts and precise finishing.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(5, 3, 'Citra Amelia', 'Hair Treatment', 4.9, 118, '9 years', 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400', 'Specialist in hair treatments and personalized hair care.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(6, 3, 'Maya Sari', 'Color & Styling', 4.8, 76, '6 years', 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400', 'Creative stylist specializing in coloring and contemporary hairstyles.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(7, 4, 'Kevin Pratama', 'Fade & Taper', 4.9, 142, '7 years', 'https://images.unsplash.com/photo-1599351431202-1e0f0c7c6a2b?w=400', 'Known for detailed fades, tapers and sharp finishing.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(8, 4, 'Fajar Nugraha', 'Classic & Modern Cut', 4.8, 104, '6 years', 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400', 'Specialist in classic cuts combined with modern styling.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(9, 5, 'Alya Maharani', 'Color & Treatment', 4.9, 71, '8 years', 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400', 'Specialist in hair coloring and restorative treatments.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(10, 5, 'Rina Kartika', 'Hair Styling', 4.8, 59, '5 years', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400', 'Experienced in elegant styling for everyday and special occasions.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(11, 6, 'Bagas Ramadhan', 'Fade & Modern Cut', 4.8, 97, '6 years', 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400', 'Specialist in fades, textured cuts and modern hairstyles.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(12, 6, 'Rizky Maulana', 'Classic Cut', 4.7, 83, '5 years', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', 'Focuses on clean classic cuts and personalized styling.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(13, 7, 'Jessica Tan', 'Hair Coloring', 4.9, 92, '8 years', 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400', 'Specialist in dimensional hair color and modern styling.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(14, 7, 'Vania Putri', 'Hair Treatment', 4.8, 68, '6 years', 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400', 'Specializes in healthy hair treatments and styling.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(15, 8, 'Rangga Saputra', 'Fade & Taper', 4.9, 156, '8 years', 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=400', 'Expert in fades, tapers and sharp modern hairstyles.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(16, 8, 'Andika Putra', 'Classic Cut', 4.8, 109, '6 years', 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400', 'Specializes in classic cuts and clean styling.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(17, 9, 'Sarah Amelia', 'Hair Coloring', 4.8, 73, '6 years', 'https://images.unsplash.com/photo-1595956553066-fe24a8c33395?w=400', 'Creative stylist specializing in hair coloring and styling.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(18, 9, 'Dewi Lestari', 'Hair Treatment', 4.7, 61, '5 years', 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400', 'Focuses on hair health, treatments and natural styling.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(19, 10, 'Michelle Grace', 'Color & Styling', 4.9, 84, '9 years', 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400', 'Experienced in premium hair coloring and styling.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(20, 10, 'Kevin Adrian', 'Haircut & Styling', 4.8, 72, '7 years', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', 'Specializes in modern haircuts and personalized styling.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(21, 11, 'Ilham Fauzi', 'Fade & Taper', 4.9, 134, '7 years', 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400', 'Specialist in sharp fades and modern taper cuts.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(22, 11, 'Rian Setiawan', 'Classic Cut', 4.8, 91, '5 years', 'https://images.unsplash.com/photo-1599351431202-1e0f0c7c6a2b?w=400', 'Known for clean classic cuts and detailed finishing.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(23, 12, 'Putri Ananda', 'Hair Coloring', 4.9, 103, '7 years', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400', 'Specialist in contemporary colors and hair transformations.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(24, 12, 'Mira Anggraini', 'Treatment & Styling', 4.8, 79, '6 years', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400', 'Focuses on healthy hair treatments and modern styling.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(25, 13, 'Nina Prameswari', 'Hair Styling', 4.9, 52, '5 years', 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400', 'Specialist in modern styling and event-ready looks.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(26, 13, 'Clara Wijaya', 'Color & Treatment', 4.8, 47, '6 years', 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400', 'Creative stylist focused on coloring and hair treatments.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(27, 14, 'Bima Prakoso', 'Fade & Taper', 4.8, 88, '6 years', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', 'Specializes in fades, tapers and textured hairstyles.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(28, 14, 'Yoga Pratama', 'Classic Cut', 4.7, 63, '5 years', 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400', 'Known for precise classic cuts and clean finishes.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(29, 15, 'Aurelia Putri', 'Color & Styling', 4.9, 74, '7 years', 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400', 'Specialist in modern coloring and personalized styling.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(30, 15, 'Melisa Kartika', 'Hair Treatment', 4.8, 58, '6 years', 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400', 'Focuses on hair care, treatment and healthy styling.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(31, 16, 'Bella Maharani', 'Hair Styling', 4.8, 44, '5 years', 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400', 'Specialist in elegant everyday and occasion styling.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(32, 16, 'Fina Wulandari', 'Hair Treatment', 4.7, 39, '5 years', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400', 'Passionate about healthy hair treatments and care.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(33, 17, 'Aisyah Rahma', 'Hair Treatment', 4.9, 91, '7 years', 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400', 'Specialist in hair care and treatment services.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(34, 17, 'Nabila Sari', 'Hair Styling', 4.8, 67, '6 years', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400', 'Experienced in modest and elegant hairstyle styling.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(35, 18, 'Tania Putri', 'Color & Styling', 4.9, 63, '6 years', 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400', 'Creative stylist specializing in coloring and styling.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(36, 18, 'Dina Amelia', 'Hair Treatment', 4.8, 55, '5 years', 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400', 'Focuses on restorative treatments and healthy hair.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(37, 19, 'Livia Anggraini', 'Hair Coloring', 4.8, 69, '6 years', 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400', 'Specialist in hair color and contemporary styling.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(38, 19, 'Maya Putri', 'Hair Treatment', 4.7, 51, '5 years', 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400', 'Specializes in hair care and treatment services.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(39, 20, 'Fikri Ramadhan', 'Fade & Taper', 4.9, 121, '7 years', 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400', 'Specialist in fades, tapers and modern men hairstyles.', '2026-08-09 06:18:18', '2026-08-09 06:18:18'),
(40, 20, 'Hendra Saputra', 'Classic Cut', 4.8, 94, '6 years', 'https://images.unsplash.com/photo-1599351431202-1e0f0c7c6a2b?w=400', 'Experienced barber specializing in classic and modern cuts.', '2026-08-09 06:18:18', '2026-08-09 06:18:18');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2026_08_07_143723_create_salons_table', 1),
(5, '2026_08_09_120651_create_services_table', 1),
(6, '2026_08_09_122415_create_hairstylists_table', 1),
(7, '2026_08_10_150613_create_bookings_table', 2),
(8, '2026_08_10_150634_create_booking_services_table', 2),
(9, '2026_08_18_153231_create_reviews_table', 3),
(10, '2026_08_19_144718_create_favorites_table', 4),
(11, '2026_08_20_052604_add_phone_to_users_table', 5),
(12, '2026_08_20_062443_create_personal_access_tokens_table', 6),
(13, '2026_08_20_132513_add_user_id_to_favorites_table', 7);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` text NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 2, 'trimly-mobile', 'a52069f960511a1e2384b6872285db51719aea6b52a539f1f3f014c167a8b961', '[\"*\"]', NULL, NULL, '2026-08-19 23:49:00', '2026-08-19 23:49:00'),
(2, 'App\\Models\\User', 1, 'trimly-mobile', '5154e8ef4a8ca8290ca66a2b51cd319d4499b3acacb04550622792076750f964', '[\"*\"]', NULL, NULL, '2026-08-20 00:12:00', '2026-08-20 00:12:00'),
(3, 'App\\Models\\User', 1, 'trimly-mobile', 'afbe8a3259fbd84f832e247c6c61526f4f9c4bfa5ee387d3eb4bea6ed0fd78ed', '[\"*\"]', '2026-08-20 05:19:58', NULL, '2026-08-20 04:39:31', '2026-08-20 05:19:58'),
(4, 'App\\Models\\User', 1, 'trimly-mobile', '51b2da4cfdf9422fa6169e8efccfb4afd4a42d78641039c08167a8ac354ef9e7', '[\"*\"]', '2026-08-20 06:13:33', NULL, '2026-08-20 05:42:34', '2026-08-20 06:13:33'),
(5, 'App\\Models\\User', 1, 'trimly-mobile', '4cdb81b345a606b875e741a985c878626db5904ec2a5a7f520805a6cbf606b75', '[\"*\"]', '2026-08-20 06:34:29', NULL, '2026-08-20 06:33:47', '2026-08-20 06:34:29'),
(6, 'App\\Models\\User', 1, 'trimly-mobile', '1acc8dbd5f96524fe699d8c8a15116f53ca4a58ebda5ea700010a6ba7e9bd71b', '[\"*\"]', '2026-08-21 22:13:15', NULL, '2026-08-21 22:01:22', '2026-08-21 22:13:15'),
(7, 'App\\Models\\User', 1, 'trimly-mobile', 'f24943deba0b61f6f798491338bbcf5171a8290948a196803f46dbfa7153b630', '[\"*\"]', '2026-08-21 22:39:39', NULL, '2026-08-21 22:38:35', '2026-08-21 22:39:39'),
(8, 'App\\Models\\User', 1, 'trimly-mobile', 'f0d8df145abbdd2e3acb8abbfd886e3bb80ddcb5a5a7b18379cc3bc36a9ba47d', '[\"*\"]', NULL, NULL, '2026-08-22 06:08:18', '2026-08-22 06:08:18'),
(10, 'App\\Models\\User', 1, 'trimly-mobile', 'e366551a9bfaee9b0e67bd013e95570905a47efb5fecc4fec8d58cd28b61458c', '[\"*\"]', '2026-08-23 21:53:58', NULL, '2026-08-22 06:49:39', '2026-08-23 21:53:58'),
(13, 'App\\Models\\User', 1, 'trimly-mobile', '8c94efec6b159ca21fc1adafec97ac8662d2864ae5f64e8007dbd381c26fb9af', '[\"*\"]', '2026-08-26 02:20:10', NULL, '2026-08-23 22:20:35', '2026-08-26 02:20:10'),
(14, 'App\\Models\\User', 1, 'trimly-mobile', '2b7d02a65d9ca2eb7761a883b2fa570a37ac427fc226d5ff2e327c58b439312f', '[\"*\"]', '2026-09-09 05:39:31', NULL, '2026-08-26 02:20:26', '2026-09-09 05:39:31'),
(15, 'App\\Models\\User', 1, 'trimly-mobile', '93fd1916b5fc8e1daaf7b44e25562386d494cf1f2d30f7b383793b9882f6e72b', '[\"*\"]', '2026-09-09 05:48:01', NULL, '2026-09-09 05:39:55', '2026-09-09 05:48:01'),
(16, 'App\\Models\\User', 1, 'trimly-mobile', 'f812145451b32a6e87c40370dc72393bc8b654a54d511010375b992219da8fe8', '[\"*\"]', '2026-09-09 05:54:07', NULL, '2026-09-09 05:48:55', '2026-09-09 05:54:07'),
(17, 'App\\Models\\User', 1, 'trimly-mobile', '17ef0e5ff07be3d8757c749ce40a3bbb4fcec1918c0bdd9b8da745b178afc8f6', '[\"*\"]', '2026-09-09 06:11:49', NULL, '2026-09-09 06:11:21', '2026-09-09 06:11:49'),
(18, 'App\\Models\\User', 1, 'trimly-mobile', '32728bfbf74259cef26a611282fa4337fec15c2d3f28d1d56b28a09f733b4f18', '[\"*\"]', '2026-09-09 06:49:23', NULL, '2026-09-09 06:12:11', '2026-09-09 06:49:23'),
(19, 'App\\Models\\User', 1, 'trimly-mobile', '57546b445d73500cd8b56924d7fe2d7cddec89b731cba603f4830e720873f1a2', '[\"*\"]', '2026-09-09 06:51:40', NULL, '2026-09-09 06:49:42', '2026-09-09 06:51:40'),
(20, 'App\\Models\\User', 1, 'trimly-mobile', '180790b26c63f578fcc918bcc69282144e1c08954aef2cf33ef902ed87f04db7', '[\"*\"]', '2026-09-09 07:06:43', NULL, '2026-09-09 06:51:59', '2026-09-09 07:06:43'),
(22, 'App\\Models\\User', 1, 'trimly-mobile', '467f8488b6cdc7a772c46ba1843bc8214aaff5f5fc5a7648e3d3336537ebc7b5', '[\"*\"]', '2026-09-12 00:59:54', NULL, '2026-09-12 00:59:04', '2026-09-12 00:59:54');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `booking_id` bigint(20) UNSIGNED NOT NULL,
  `salon_id` bigint(20) UNSIGNED NOT NULL,
  `hairstylist_id` bigint(20) UNSIGNED DEFAULT NULL,
  `rating` tinyint(3) UNSIGNED NOT NULL,
  `comment` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `booking_id`, `salon_id`, `hairstylist_id`, `rating`, `comment`, `created_at`, `updated_at`) VALUES
(1, 18, 2, 3, 5, 'Sangat baik, potongannya juga bagus', '2026-08-19 07:37:30', '2026-08-19 07:37:30'),
(2, 19, 17, 33, 5, NULL, '2026-09-09 05:52:41', '2026-09-09 05:52:41'),
(3, 20, 3, 5, 5, 'potongannya bagus banget dah gutjob', '2026-09-09 06:13:15', '2026-09-09 06:13:15'),
(4, 21, 3, 5, 5, 'very good haircut', '2026-09-09 07:07:56', '2026-09-09 07:07:56');

-- --------------------------------------------------------

--
-- Table structure for table `salons`
--

CREATE TABLE `salons` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `area` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `latitude` decimal(10,7) DEFAULT NULL,
  `longitude` decimal(10,7) DEFAULT NULL,
  `rating` decimal(2,1) NOT NULL DEFAULT 0.0,
  `reviews` int(11) NOT NULL DEFAULT 0,
  `starting_price` int(11) NOT NULL DEFAULT 0,
  `image` varchar(255) DEFAULT NULL,
  `tag` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `opening_hour` time NOT NULL DEFAULT '09:00:00',
  `closing_hour` time NOT NULL DEFAULT '20:00:00',
  `is_open` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `salons`
--

INSERT INTO `salons` (`id`, `name`, `area`, `address`, `city`, `latitude`, `longitude`, `rating`, `reviews`, `starting_price`, `image`, `tag`, `description`, `opening_hour`, `closing_hour`, `is_open`, `created_at`, `updated_at`) VALUES
(1, 'Seven the Salon', 'Bandung Wetan', 'Jl. Jawa No.3, Babakanciamis, Sumurbandung', 'Bandung', NULL, NULL, 4.9, 1032, 0, 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800', NULL, 'Premium beauty salon in central Bandung offering hair and beauty services.', '09:00:00', '20:00:00', 1, '2026-08-09 06:14:58', '2026-08-09 06:14:58'),
(2, 'Brocode Barbershop', 'Coblong', 'Jl. Pager Gunung No.13, Lebak Gede, Coblong', 'Bandung', NULL, NULL, 4.8, 2142, 0, 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800', NULL, 'Barbershop in the Lebak Gede area of Bandung.', '09:00:00', '20:00:00', 1, '2026-08-09 06:14:58', '2026-08-09 06:14:58'),
(3, 'Amaya Beauty & Wellness Salon', 'Bandung Wetan', 'Jl. Cihapit No.27, Cihapit, Bandung Wetan', 'Bandung', NULL, NULL, 4.8, 1067, 0, 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800', NULL, 'Beauty and wellness salon offering hair care, body treatments and facial services.', '09:00:00', '20:00:00', 1, '2026-08-09 06:14:58', '2026-08-09 06:14:58'),
(4, 'Golden Barbershop', 'Coblong', 'Jl. Dipati Ukur, Lebakgede, Coblong', 'Bandung', NULL, NULL, 4.9, 3316, 0, 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800', NULL, 'Popular barbershop located in the Dipati Ukur area.', '09:00:00', '20:00:00', 1, '2026-08-09 06:14:58', '2026-08-09 06:14:58'),
(5, 'La Maison Salon Bandung', 'Sukajadi', 'Jl. Dr. Setiabudi No.49, Pasteur, Sukajadi', 'Bandung', NULL, NULL, 4.9, 341, 0, 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800', NULL, 'Beauty salon located on Jalan Dr. Setiabudi.', '09:00:00', '20:00:00', 1, '2026-08-09 06:14:58', '2026-08-09 06:14:58'),
(6, 'The Cut Rumah Barber', 'Bandung Wetan', 'Jl. Lombok No.30A, Cihapit, Bandung Wetan', 'Bandung', NULL, NULL, 4.7, 1185, 0, 'https://images.unsplash.com/photo-1599351431202-1e0f0c7c6a2b?w=800', NULL, 'Professional barber offering haircut, styling, coloring and hair treatments.', '09:00:00', '20:00:00', 1, '2026-08-09 06:14:58', '2026-08-09 06:14:58'),
(7, 'Seven the Salon SG', 'Sukasari', 'Jl. Sirnagalih No.22, Cipedes, Sukasari', 'Bandung', NULL, NULL, 4.9, 461, 0, 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800', NULL, 'Kerastase salon in the Sukasari area of Bandung.', '09:00:00', '20:00:00', 1, '2026-08-09 06:14:58', '2026-08-09 06:14:58'),
(8, 'Captain Barbershop Bandung Cihampelas', 'Bandung Wetan', 'Jl. Cihampelas No.48A, Tamansari, Bandung Wetan', 'Bandung', NULL, NULL, 4.9, 2215, 0, 'https://images.unsplash.com/photo-1599351431618-0c8e4a6e9d8a?w=800', NULL, 'Barbershop located on Jalan Cihampelas.', '09:00:00', '20:00:00', 1, '2026-08-09 06:14:58', '2026-08-09 06:14:58'),
(9, 'Lexzi Salon', 'Bandung Wetan', 'Jl. Bengawan No.37, Cihapit, Bandung Wetan', 'Bandung', NULL, NULL, 4.5, 697, 0, 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800', NULL, 'Beauty salon in the Cihapit area.', '09:00:00', '20:00:00', 1, '2026-08-09 06:14:58', '2026-08-09 06:14:58'),
(10, 'Roger\'s Salon Dago', 'Coblong', 'Jl. Ir. H. Juanda No.97, Dago, Coblong', 'Bandung', NULL, NULL, 4.4, 367, 0, 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800', NULL, 'Salon offering hair, spa, beauty and wellness services.', '09:00:00', '20:00:00', 1, '2026-08-09 06:14:58', '2026-08-09 06:14:58'),
(11, 'CUKUR HADE BARBERSHOP - LENGKONG KECIL', 'Lengkong', 'Jl. Lengkong Kecil No.30A, Paledang, Lengkong', 'Bandung', NULL, NULL, 5.0, 2005, 0, 'https://images.unsplash.com/photo-1622288432450-277d0fef5ed0?w=800', NULL, 'Barbershop in the Lengkong Kecil area.', '09:00:00', '20:00:00', 1, '2026-08-09 06:14:58', '2026-08-09 06:14:58'),
(12, 'Hairzonestyle Bandung', 'Bojongloa Kidul', 'Jl. Leuwi Panjang No.15A, Muara Regency, Bojongloa Kidul', 'Bandung', NULL, NULL, 5.0, 2579, 0, 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800', NULL, 'Beauty salon located in the Bojongloa Kidul area.', '09:00:00', '20:00:00', 1, '2026-08-09 06:14:58', '2026-08-09 06:14:58'),
(13, 'Salon Smooch Beauty Bar Bandung', 'Lengkong', 'Jl. Gatot Subroto No.28 Lt.1, Malabar, Lengkong', 'Bandung', NULL, NULL, 4.9, 112, 0, 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=800', NULL, 'Beauty salon located on Jalan Gatot Subroto.', '09:00:00', '20:00:00', 1, '2026-08-09 06:14:58', '2026-08-09 06:14:58'),
(14, 'Barberkiehl Boutique Barbershop', 'Sukasari', 'Jl. Sukahaji No.121, Sukarasa, Sukasari', 'Bandung', NULL, NULL, 4.6, 341, 0, 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=800', NULL, 'Boutique barbershop in the Sukasari area.', '09:00:00', '20:00:00', 1, '2026-08-09 06:14:58', '2026-08-09 06:14:58'),
(15, 'Yucca Salon', 'Sumurbandung', 'Ruko Segitiga Emas, Jl. Gandapura, Merdeka, Sumurbandung', 'Bandung', NULL, NULL, 4.8, 572, 0, 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800', NULL, 'Beauty salon in the Gandapura area.', '09:00:00', '20:00:00', 1, '2026-08-09 06:14:58', '2026-08-09 06:14:58'),
(16, 'Sunshine Beauty Dago', 'Coblong', 'Lima Building, Jl. Dago No.169B Lantai 1, Lebak Siliwangi', 'Bandung', NULL, NULL, 4.7, 101, 0, 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800', NULL, 'Beauty salon located in the Dago area.', '09:00:00', '20:00:00', 1, '2026-08-09 06:14:58', '2026-08-09 06:14:58'),
(17, 'Hamima Salon Muslimah Dago', 'Coblong', 'Jl. Tubagus Ismail No.5F, Sekeloa, Coblong', 'Bandung', NULL, NULL, 5.0, 656, 0, 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800', NULL, 'Women-focused beauty salon in the Dago area.', '09:00:00', '20:00:00', 1, '2026-08-09 06:14:58', '2026-08-09 06:14:58'),
(18, 'Salon 808 Hair & Beauty Bandung', 'Batununggal', 'Jl. Batununggal Indah Raya No.194, Batununggal', 'Bandung', NULL, NULL, 4.9, 291, 0, 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800', NULL, 'Hair and beauty salon in Batununggal.', '09:00:00', '20:00:00', 1, '2026-08-09 06:14:58', '2026-08-09 06:14:58'),
(19, 'Princess Beauty Salon', 'Bojongloa Kaler', 'Jl. Terusan Pasirkoja No.168, Babakan Tarogong', 'Bandung', NULL, NULL, 4.8, 363, 0, 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=800', NULL, 'Beauty salon in the Bojongloa Kaler area.', '09:00:00', '20:00:00', 1, '2026-08-09 06:14:58', '2026-08-09 06:14:58'),
(20, 'Captain Barbershop Sumantri', 'Sukajadi', 'Jl. Prof. drg. Soeria Soemantri No.67-87, Sukawarna, Sukajadi', 'Bandung', NULL, NULL, 4.9, 1371, 0, 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800', NULL, 'Captain Barbershop branch in the Sukajadi area.', '09:00:00', '20:00:00', 1, '2026-08-09 06:14:58', '2026-08-09 06:14:58');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `salon_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `duration` varchar(255) NOT NULL,
  `popular` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `salon_id`, `name`, `price`, `duration`, `popular`, `created_at`, `updated_at`) VALUES
(1, 1, 'Haircut', 100000, '60 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(2, 1, 'Hair Coloring', 250000, '120 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(3, 1, 'Hair Treatment', 150000, '90 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(4, 1, 'Hair Styling', 100000, '60 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(5, 1, 'Hair Spa', 175000, '90 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(6, 2, 'Classic Haircut', 50000, '45 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(7, 2, 'Fade', 65000, '60 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(8, 2, 'Hair Styling', 55000, '45 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(9, 2, 'Beard Trim', 40000, '30 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(10, 2, 'Hair & Beard', 90000, '75 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(11, 3, 'Haircut', 85000, '60 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(12, 3, 'Hair Coloring', 300000, '150 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(13, 3, 'Creambath', 120000, '75 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(14, 3, 'Hair Treatment', 150000, '90 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(15, 3, 'Hair Styling', 90000, '60 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(16, 4, 'Classic Haircut', 50000, '45 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(17, 4, 'Skin Fade', 65000, '60 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(18, 4, 'Taper Cut', 60000, '50 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(19, 4, 'Beard Trim', 40000, '30 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(20, 4, 'Hair & Beard Combo', 90000, '75 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(21, 5, 'Haircut', 90000, '60 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(22, 5, 'Hair Coloring', 275000, '150 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(23, 5, 'Hair Treatment', 150000, '90 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(24, 5, 'Blow Styling', 80000, '45 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(25, 5, 'Hair Spa', 175000, '90 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(26, 6, 'Classic Haircut', 50000, '45 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(27, 6, 'Fade Cut', 65000, '60 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(28, 6, 'Hair Coloring', 150000, '120 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(29, 6, 'Hair Treatment', 100000, '75 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(30, 6, 'Beard Trim', 40000, '30 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(31, 7, 'Haircut', 100000, '60 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(32, 7, 'Hair Coloring', 250000, '150 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(33, 7, 'Hair Treatment', 150000, '90 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(34, 7, 'Hair Styling', 100000, '60 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(35, 8, 'Classic Haircut', 50000, '45 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(36, 8, 'Skin Fade', 65000, '60 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(37, 8, 'Taper', 60000, '50 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(38, 8, 'Beard Trim', 40000, '30 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(39, 9, 'Haircut', 80000, '60 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(40, 9, 'Hair Coloring', 250000, '150 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(41, 9, 'Hair Treatment', 130000, '90 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(42, 9, 'Hair Styling', 85000, '60 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(43, 10, 'Haircut', 100000, '60 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(44, 10, 'Hair Coloring', 300000, '150 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(45, 10, 'Hair Treatment', 175000, '90 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(46, 10, 'Hair Styling', 100000, '60 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(47, 10, 'Hair Spa', 175000, '90 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(48, 11, 'Classic Haircut', 40000, '40 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(49, 11, 'Fade', 55000, '50 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(50, 11, 'Taper', 50000, '45 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(51, 11, 'Beard Trim', 35000, '30 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(52, 12, 'Haircut', 75000, '60 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(53, 12, 'Hair Coloring', 250000, '150 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(54, 12, 'Hair Treatment', 125000, '90 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(55, 12, 'Hair Styling', 75000, '60 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(56, 13, 'Haircut', 85000, '60 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(57, 13, 'Hair Coloring', 275000, '150 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(58, 13, 'Hair Treatment', 150000, '90 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(59, 13, 'Hair Styling', 90000, '60 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(60, 14, 'Classic Haircut', 55000, '45 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(61, 14, 'Fade', 70000, '60 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(62, 14, 'Taper', 65000, '50 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(63, 14, 'Beard Trim', 40000, '30 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(64, 15, 'Haircut', 85000, '60 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(65, 15, 'Hair Coloring', 250000, '150 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(66, 15, 'Hair Treatment', 130000, '90 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(67, 15, 'Hair Styling', 85000, '60 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(68, 16, 'Haircut', 80000, '60 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(69, 16, 'Hair Coloring', 250000, '150 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(70, 16, 'Hair Treatment', 125000, '90 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(71, 16, 'Hair Styling', 80000, '60 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(72, 17, 'Haircut', 75000, '60 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(73, 17, 'Hair Coloring', 250000, '150 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(74, 17, 'Creambath', 100000, '75 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(75, 17, 'Hair Treatment', 125000, '90 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(76, 18, 'Haircut', 80000, '60 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(77, 18, 'Hair Coloring', 250000, '150 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(78, 18, 'Hair Treatment', 125000, '90 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(79, 18, 'Hair Styling', 80000, '60 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(80, 19, 'Haircut', 75000, '60 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(81, 19, 'Hair Coloring', 225000, '150 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(82, 19, 'Hair Treatment', 120000, '90 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(83, 19, 'Hair Styling', 75000, '60 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(84, 20, 'Classic Haircut', 50000, '45 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(85, 20, 'Skin Fade', 65000, '60 min', 1, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(86, 20, 'Taper', 60000, '50 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06'),
(87, 20, 'Beard Trim', 40000, '30 min', 0, '2026-08-09 06:15:06', '2026-08-09 06:15:06');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('48mZV5abhjqgWeUaO6Co6sSQPxrzyhsj4petE0rG', NULL, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Mobile Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiaHZpNzUySkZ1STd5aFFUdXlBb1o5cGFzR0xueEs2OE91QUJGTjlQMyI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8xMC4wLjIuMjo4MDAwIjtzOjU6InJvdXRlIjtOO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1787735105),
('DlyQfTLSwuflXfNjI7o5pTTSSiutxjqMQtYdq2dl', NULL, '192.168.110.169', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Mobile Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoib2pTdVl3V2JrVzZPSzc1bFdScDhEemZhOXVhTjV5bGVoYVhPZ3RFRyI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6Mjc6Imh0dHA6Ly8xOTIuMTY4LjExMC4yMDU6ODAwMCI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1788959390),
('dvcTVUiAquAxOlen3R80sFDjQHF8hn89jvLRI3ke', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Code/1.132.0 Chrome/148.0.7778.280 Electron/42.7.1 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNXRwSFhEN3lPUjN3bVdOajJoaW1jV1l1Rk9pOGNmTzYyTDNZUVlldSI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1786281671),
('e6io3DGnIkIY9gvpdYhdPmFfw9yLPahkyJcZUFhT', NULL, '192.168.110.169', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Mobile Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiVnJKMFp1UXlIQjFScjRmTWdFZHN0NDZBeERZNndtS3A0YVhMNnJQYSI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6Mjc6Imh0dHA6Ly8xOTIuMTY4LjExMC4yMDU6ODAwMCI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1789199876),
('gfqsYzX1lAD7f9cQqadN7WJabKuDpgSbnp6mxmK6', NULL, '192.168.110.234', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Mobile Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiSEtFcFJadkJhRTBlbjNad0ZtZWdVZFNPSE9mQ24ydGNTbTJCenZ1bSI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6Mjc6Imh0dHA6Ly8xOTIuMTY4LjExMC4yMDU6ODAwMCI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1787546364),
('IhyDv7puKkVv3zE6CV3xHstZSkOu7gcSbiSwWi75', NULL, '127.0.0.1', 'PostmanRuntime/7.54.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiYjM4bmNuZHZvVlk3N2s4bFU1bmtSWHZ5cXBhekpsQzE5MUE1dTdsNCI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1787069139),
('SJDAEo734cmupc4auBqRxp1dJbkNtTpbpuvBGcyF', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiOURtdllES2s3S3kzMjl2alJNZEZFaENGYVlBWEh5VXRSb2VOM1BZdyI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1786281673),
('uVjbK8pdWMfv4u1TFh1bwSJSqnOECsUvuaZgohOM', NULL, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Mobile Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNmdJR2Z6NEFaRFBNTXRiWm5QNDVoY0w1UkZGVzd4NERGSk5ON1NwMyI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8xMC4wLjIuMjo4MDAwIjtzOjU6InJvdXRlIjtOO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1787735118);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Hope', 'hope@gmail.com', '0897896453', NULL, '$2y$12$1Xa/LkcyLi8S8ngVidd/ZOCjerm.5i52.DDNpMx2gztpKdDxWDrfW', NULL, '2026-08-19 22:39:53', '2026-08-22 06:46:17'),
(2, 'Budi johnson', 'johnson@gmail.com', '081233432157', NULL, '$2y$12$GoYLP3QrzWrWOyx1WQcAL.AbRipEZxTzjLH5fNb7pnxpa.bsRfuLi', NULL, '2026-08-19 23:49:00', '2026-08-19 23:49:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bookings_salon_id_foreign` (`salon_id`),
  ADD KEY `bookings_hairstylist_id_foreign` (`hairstylist_id`);

--
-- Indexes for table `booking_services`
--
ALTER TABLE `booking_services`
  ADD PRIMARY KEY (`id`),
  ADD KEY `booking_services_booking_id_foreign` (`booking_id`),
  ADD KEY `booking_services_service_id_foreign` (`service_id`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_expiration_index` (`expiration`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_locks_expiration_index` (`expiration`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `favorites_salon_id_unique` (`salon_id`),
  ADD UNIQUE KEY `favorites_user_id_salon_id_unique` (`user_id`,`salon_id`);

--
-- Indexes for table `hairstylists`
--
ALTER TABLE `hairstylists`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hairstylists_salon_id_foreign` (`salon_id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`),
  ADD KEY `personal_access_tokens_expires_at_index` (`expires_at`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `reviews_booking_id_unique` (`booking_id`),
  ADD KEY `reviews_salon_id_foreign` (`salon_id`),
  ADD KEY `reviews_hairstylist_id_foreign` (`hairstylist_id`);

--
-- Indexes for table `salons`
--
ALTER TABLE `salons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`),
  ADD KEY `services_salon_id_foreign` (`salon_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `booking_services`
--
ALTER TABLE `booking_services`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `favorites`
--
ALTER TABLE `favorites`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `hairstylists`
--
ALTER TABLE `hairstylists`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `salons`
--
ALTER TABLE `salons`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bookings`
--
ALTER TABLE `bookings`
  ADD CONSTRAINT `bookings_hairstylist_id_foreign` FOREIGN KEY (`hairstylist_id`) REFERENCES `hairstylists` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `bookings_salon_id_foreign` FOREIGN KEY (`salon_id`) REFERENCES `salons` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `booking_services`
--
ALTER TABLE `booking_services`
  ADD CONSTRAINT `booking_services_booking_id_foreign` FOREIGN KEY (`booking_id`) REFERENCES `bookings` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `booking_services_service_id_foreign` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `favorites`
--
ALTER TABLE `favorites`
  ADD CONSTRAINT `favorites_salon_id_foreign` FOREIGN KEY (`salon_id`) REFERENCES `salons` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `favorites_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `hairstylists`
--
ALTER TABLE `hairstylists`
  ADD CONSTRAINT `hairstylists_salon_id_foreign` FOREIGN KEY (`salon_id`) REFERENCES `salons` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_booking_id_foreign` FOREIGN KEY (`booking_id`) REFERENCES `bookings` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `reviews_hairstylist_id_foreign` FOREIGN KEY (`hairstylist_id`) REFERENCES `hairstylists` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `reviews_salon_id_foreign` FOREIGN KEY (`salon_id`) REFERENCES `salons` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `services`
--
ALTER TABLE `services`
  ADD CONSTRAINT `services_salon_id_foreign` FOREIGN KEY (`salon_id`) REFERENCES `salons` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
