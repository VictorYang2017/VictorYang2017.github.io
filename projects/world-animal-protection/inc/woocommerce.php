<?php
/**
 * Basic WooCommerce support
 * For an alternative integration method see WC docs
 * http://docs.woothemes.com/document/third-party-custom-theme-compatibility/
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */

/*
 * Woocommerce setup
 */
function worldanimalprotection_woocommerce_setup(){
    add_theme_support('woocommerce');
    add_theme_support('wc-product-gallery-zoom');
    add_theme_support('wc-product-gallery-lightbox');
    add_theme_support('wc-product-gallery-slider');

    // Remove related products
    remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_related_products', 20 );

    add_filter('woocommerce_product_related_posts_query', '__return_empty_array', 100);

}
add_action('after_setup_theme','worldanimalprotection_woocommerce_setup');




/*
 * Add "woocommerce active' class to body tag
 */
function worldanimalprotection_woocommerce_active_body_class(){
    $classes[] = 'woocommerce-active';
    return $classes;
}

add_filter('body_class', 'worldanimalprotection_woocommerce_active_body_class');





remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10);
remove_action( 'woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10);

add_action('woocommerce_before_main_content', 'my_theme_wrapper_start', 10);
add_action('woocommerce_after_main_content', 'my_theme_wrapper_end', 10);

function my_theme_wrapper_start() {
  echo '<section id="world-animal-protection-woocommerce">';
}

function my_theme_wrapper_end() {
  echo '</section>';
}

// Remove woocommerce components
function worldanimalprotection_components_remove(){
    // Remove ordering dropdown
    remove_action( 'woocommerce_before_shop_loop', 'woocommerce_catalog_ordering', 30 );
    // Remove breadcrumb
    remove_action( 'woocommerce_before_main_content','woocommerce_breadcrumb', 20, 0);
    // Remove result count
    remove_action( 'woocommerce_before_shop_loop' , 'woocommerce_result_count', 20 );
    // Remove product meta
    remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40 );

}

add_action('after_setup_theme','worldanimalprotection_components_remove');

