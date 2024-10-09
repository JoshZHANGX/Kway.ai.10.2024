<?php
/*
Template Name: Home Page
*/

get_header();
?>

<main id="main-content">
    <!-- Include your home page sections here -->
    <?php get_template_part('template-parts/hero'); ?>
    <?php get_template_part('template-parts/services'); ?>
    <?php get_template_part('template-parts/about'); ?>
    <?php get_template_part('template-parts/contact'); ?>
</main>

<?php get_footer(); ?>