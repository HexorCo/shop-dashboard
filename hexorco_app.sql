-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-08-2023 a las 00:03:06
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hexorco_app`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articles`
--

CREATE TABLE `articles` (
  `article_id` int(11) NOT NULL,
  `article_name` text NOT NULL,
  `article_price` text NOT NULL,
  `article_desc` text NOT NULL,
  `article_stock` text NOT NULL,
  `article_img` text NOT NULL DEFAULT 'img/shop/',
  `article_category` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `articles`
--

INSERT INTO `articles` (`article_id`, `article_name`, `article_price`, `article_desc`, `article_stock`, `article_img`, `article_category`) VALUES
(2, 'vintage t-shirt', '24.99', 'cotton t-shirt with vintage print and round neckline.', '150', 'img/shop/TQK9uI.png', 't-shirt'),
(4, 'Performance Sport Shorts', '34.99', 'Breathable sport shorts with elastic waistband and modern design.', '80', 'img/shop/sport_shorts.png', 'shorts'),
(7, 'beach shorts', '29.99', 'printed beach shorts with elastic waistband.', '80', 'img/shop/xYtOdA.png', 'shorts'),
(8, 'Knit Sweater', '49.99', 'Hand-knitted knit sweater with round neck and cable pattern.', '60', 'img/shop/knit_sweater.png', 'sweater'),
(10, 'Skinny Jeans', '64.99', 'Skinny fit jeans with distressed effect and back pockets.', '100', 'img/shop/skinny_jeans.png', 'pants'),
(11, 'floral blouse', '29.99', 'lightweight blouse with floral print and long sleeves.', '120', 'img/shop/moQjUH.png', 'blouse'),
(12, 'Hooded Sweatshirt', '44.99', 'Comfortable hooded sweatshirt with front pockets.', '90', 'img/shop/hoodie.png', 'hoodie'),
(13, 'Elegant Evening Dress', '69.99', 'Elegant evening dress with lace details and a tailored fit.', '70', 'img/shop/elegant_dress.png', 'dress'),
(14, 'Sporty Sneakers', '54.99', 'Comfortable sporty sneakers with cushioned sole and modern design.', '150', 'img/shop/sneakers.png', 'shoes'),
(15, 'straw hat', '19.99', 'handwoven straw hat with wide brim for sun protection.', '0', 'img/shop/straw_hat.png', 'accessory');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `category_name` text NOT NULL,
  `category_img` text NOT NULL DEFAULT 'img/category/'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO `category` (`category_id`, `category_name`, `category_img`) VALUES
(22, 't-shirt', 'img/category/t2kw1y.png'),
(23, 'pants', 'img/category/HDgJ91.png'),
(24, 'shorts', 'img/category/uSjdid.png'),
(35, 'accessory', 'img/category/WXTSKD.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `invoice`
--

CREATE TABLE `invoice` (
  `invoice_id` int(11) NOT NULL,
  `invoice_product` text NOT NULL,
  `invoice_price` text NOT NULL,
  `user_account` text NOT NULL,
  `invoice_promo` text NOT NULL,
  `invoice_discount` text NOT NULL,
  `invoice_status` text NOT NULL,
  `invoice_account_email` text NOT NULL,
  `invoice_account_id` text NOT NULL,
  `invoice_client_name` text NOT NULL,
  `invoice_payment_id` text NOT NULL,
  `invoice_payment_price` text NOT NULL,
  `invoice_payment_created` text NOT NULL,
  `invoice_payment_updated` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `invoice`
--

INSERT INTO `invoice` (`invoice_id`, `invoice_product`, `invoice_price`, `user_account`, `invoice_promo`, `invoice_discount`, `invoice_status`, `invoice_account_email`, `invoice_account_id`, `invoice_client_name`, `invoice_payment_id`, `invoice_payment_price`, `invoice_payment_created`, `invoice_payment_updated`) VALUES
(1, 'iphone1 13 pro max', '1322', 'test@hexorco.com', 'tech', '', '0', '', '', '', '', '0', '', ''),
(2, 'ipad', '1823', 'Admin123@hexorco.com', '', '', '1', '', '', '', '', '', '', ''),
(3, 'air pod', '258', 'user@hexorco.com', '', '', '2', '', '', '', '', '', '', ''),
(4, 'Ipad SX', '769', '', '', '', '1', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `list_ip`
--

CREATE TABLE `list_ip` (
  `visit_ip` text NOT NULL,
  `visit_id` int(11) NOT NULL,
  `visit_navigator` text NOT NULL DEFAULT 'none'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `list_ip`
--

INSERT INTO `list_ip` (`visit_ip`, `visit_id`, `visit_navigator`) VALUES
('14.255.64.24', 1, 'fx'),
('14.254.34.24', 2, 'ch'),
('14.255.64.24', 3, 'ex'),
('14.255.64.24', 4, 'none'),
('14.255.64.24', 5, 'fr'),
('14.255.64.24', 6, 'ch'),
('14.255.64.24', 7, 'ch'),
('14.255.64.24', 8, 'fr'),
('123.12.23.42', 9, 'ex'),
('23.244.11.23', 10, ''),
('14.255.64.24', 11, ''),
('14.255.64.24', 12, ''),
('14.255.64.24', 13, 'ch'),
('14.255.64.24', 14, 'ex'),
('123.123.123.11', 17, 'ch'),
('::1', 26, 'ch'),
('127.0.0.1', 27, 'ch');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `promo`
--

CREATE TABLE `promo` (
  `promo_id` int(11) NOT NULL,
  `promo_name` text NOT NULL,
  `promo_limits` text NOT NULL,
  `promo_discount` text NOT NULL,
  `promo_used` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `promo`
--

INSERT INTO `promo` (`promo_id`, `promo_name`, `promo_limits`, `promo_discount`, `promo_used`) VALUES
(4, 'hexorco', '', '50', ''),
(5, 'test', '', '23', ''),
(6, 'tech', '', '80', ''),
(7, 'tv', '', '89', ''),
(8, '1223123', '', '12', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_email` text NOT NULL,
  `user_pass` text NOT NULL,
  `user_name` text DEFAULT NULL,
  `user_country` text DEFAULT NULL,
  `user_state` text DEFAULT NULL,
  `user_adress1` text DEFAULT NULL,
  `user_adress2` text DEFAULT NULL,
  `user_postalcode` text DEFAULT NULL,
  `user_phone` text DEFAULT NULL,
  `user_status` text DEFAULT '0',
  `user_join` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`user_id`, `user_email`, `user_pass`, `user_name`, `user_country`, `user_state`, `user_adress1`, `user_adress2`, `user_postalcode`, `user_phone`, `user_status`, `user_join`) VALUES
(2, 'admin@hexorco.com', '12345', 'Mohanna Nabhan Alguier', 'Venezuela', 'Leipzig', 'Fritz-Hanschmann-Straße 13', '', '04317', '+4915774544653', '1', '08-05-2023');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_dashboard`
--

CREATE TABLE `users_dashboard` (
  `user_id` int(11) NOT NULL,
  `user_email` text NOT NULL,
  `user_pass` text NOT NULL,
  `user_rank` text NOT NULL,
  `user_created` text NOT NULL,
  `user_ip` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users_dashboard`
--

INSERT INTO `users_dashboard` (`user_id`, `user_email`, `user_pass`, `user_rank`, `user_created`, `user_ip`) VALUES
(1, 'admin@hexorco.com', '123', '3', '', '::1'),
(7, 'admin2@hexorco.com', '123', '1', '', ''),
(8, 'admin7@hexorco.com', '123', '0', '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `visits`
--

CREATE TABLE `visits` (
  `visit_year` text NOT NULL,
  `visit_january` text NOT NULL DEFAULT '0',
  `visit_february` text NOT NULL DEFAULT '0',
  `visit_march` text NOT NULL DEFAULT '0',
  `visit_april` text NOT NULL DEFAULT '0',
  `visit_may` text NOT NULL DEFAULT '0',
  `visit_june` text NOT NULL DEFAULT '0',
  `visit_july` text NOT NULL DEFAULT '0',
  `visit_august` text NOT NULL DEFAULT '0',
  `visit_september` text NOT NULL DEFAULT '0',
  `visit_october` text NOT NULL DEFAULT '0',
  `visit_november` text NOT NULL DEFAULT '0',
  `visit_december` text NOT NULL DEFAULT '0',
  `visit_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `visits`
--

INSERT INTO `visits` (`visit_year`, `visit_january`, `visit_february`, `visit_march`, `visit_april`, `visit_may`, `visit_june`, `visit_july`, `visit_august`, `visit_september`, `visit_october`, `visit_november`, `visit_december`, `visit_id`) VALUES
('2023', '0', '0', '0', '0', '0', '0', '0', '2', '0', '0', '0', '0', 7);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`article_id`);

--
-- Indices de la tabla `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indices de la tabla `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`invoice_id`);

--
-- Indices de la tabla `list_ip`
--
ALTER TABLE `list_ip`
  ADD PRIMARY KEY (`visit_id`);

--
-- Indices de la tabla `promo`
--
ALTER TABLE `promo`
  ADD PRIMARY KEY (`promo_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- Indices de la tabla `users_dashboard`
--
ALTER TABLE `users_dashboard`
  ADD PRIMARY KEY (`user_id`);

--
-- Indices de la tabla `visits`
--
ALTER TABLE `visits`
  ADD PRIMARY KEY (`visit_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `articles`
--
ALTER TABLE `articles`
  MODIFY `article_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de la tabla `invoice`
--
ALTER TABLE `invoice`
  MODIFY `invoice_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `list_ip`
--
ALTER TABLE `list_ip`
  MODIFY `visit_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `promo`
--
ALTER TABLE `promo`
  MODIFY `promo_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users_dashboard`
--
ALTER TABLE `users_dashboard`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `visits`
--
ALTER TABLE `visits`
  MODIFY `visit_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
