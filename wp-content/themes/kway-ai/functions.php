<?php
function kway_ai_scripts() {
    wp_enqueue_style('kway-ai-style', get_stylesheet_uri());
    wp_enqueue_script('kway-ai-script', get_template_directory_uri() . '/js/main.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'kway_ai_scripts');

// Add more WordPress functions as needed