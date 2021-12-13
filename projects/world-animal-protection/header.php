<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "container" div.
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */

?>
<!doctype html>
<html class="no-js" <?php language_attributes(); ?> >
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
		<link href="https://fonts.googleapis.com/css?family=Lato|Overlock|Signika" rel="stylesheet">
		<?php wp_head(); ?>
	</head>
	<body class="woocommerce" <?php body_class(); ?>>

	<?php if ( get_theme_mod( 'wpt_mobile_menu_layout' ) === 'offcanvas' ) : ?>
		<?php get_template_part( 'template-parts/mobile-off-canvas' ); ?>
	<?php endif; ?>


	<header class="grid-container full">
		<div class="responsive-primary-navigation title-bar" data-responsive-toggle="main-menu" data-hide-for="large">	
			<button class="menu-icon" type="button" data-toggle="main-menu"></button>
		</div>
		<div class="primary-navigation top-bar" id="main-menu">
			<div class="primary-logo cell large-4">
				<a href="<?php echo site_url(); ?>"><img src="<?php echo bloginfo('template_url').'/dist/assets/images/client-logo.png'?>"></a>
			</div>
			<div class="top-bar-right">
				<nav class="dropdown menu align-center" data-dropdown-menu><?php wp_nav_menu(array('theme_location' => 'primary_menu')); ?></nav>
			</div>
		</div>
	</header>
