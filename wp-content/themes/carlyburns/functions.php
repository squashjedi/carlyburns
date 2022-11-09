<?php

function carlyburns_files()
{
    wp_enqueue_script('main-npurdy-js', get_theme_file_uri('/build/index.js'), null, null, true);
    wp_enqueue_style('photoswipe-styles', get_theme_file_uri('/src/modules/PhotoSwipe/photoswipe.css'));
    wp_enqueue_style('main-carlyburns-styles', get_theme_file_uri('/style.css'));
}
add_action('wp_enqueue_scripts', 'carlyburns_files');

function carlyburns_features()
{
    add_theme_support( 'title-tag' );
}
add_action('after_setup_theme', 'carlyburns_features');

