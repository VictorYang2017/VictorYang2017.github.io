<?php
// All custom navigation codes are in this page
function worldanimalprotection_custom_navigation_setup(){
    register_nav_menus(
        array(
            'primary_menu' => esc_html__('Primary', 'worldanimalprotection'),
            'secondary_menu' => esc_html__('Secondary', 'worldanimalprotection'),
            'third_menu' => esc_html__('Third', 'worldanimalprotection')
        )
    );
}

add_action('init','worldanimalprotection_custom_navigation_setup');
?>