<?php
/* Website customizer codes are all in this file */ 
// Wordpress website customizer
function worldanimalprotection_customize_register($wp_customize){
    // Homepage 
    $wp_customize->add_section('worldanimalprotection_home_page_section',
    array(
        'title' => __('Home Page'),
        'priority' => 20
    ));
    $wp_customize->add_setting('worldanimalprotection_world_animal_protection_setting',
    array(
        'default' => 'Morbi mollis tempor mi, dictum laoreet augue blandit nec. Fusce at lacus ac nibh sagittis interdum. Morbi laoreet, urna eu ultrices placerat, turpis magna molestie nunc, a lobortis ligula enim sit amet sem. Fusce laoreet neque enim, at condimentum leo semper quis. Cras porttitor posuere massa sit amet sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ullamcorper mauris nisi, eu aliquet purus convallis in. Aenean magna orci, tincidunt dapibus facilisis et, semper eu mi.'
    ));
    $wp_customize->add_control('worldanimalprotection_world_animal_protection_ctrl',
    array(
        'type' => 'textarea',
        'section' => 'worldanimalprotection_home_page_section',
        'label' => __('World animal protection section content'),
        'settings' => 'worldanimalprotection_world_animal_protection_setting'
    ));

    $wp_customize->add_setting('worldanimalprotection_what_happen_to_the_animals_setting',
    array(
        'default' => 'Morbi mollis tempor mi, dictum laoreet augue blandit nec. Fusce at lacus ac nibh sagittis interdum. Morbi laoreet, urna eu ultrices placerat, turpis magna molestie nunc, a lobortis ligula enim sit amet sem. Fusce laoreet neque enim, at condimentum leo semper quis. Cras porttitor posuere massa sit amet sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ullamcorper mauris nisi, eu aliquet purus convallis in. Aenean magna orci, tincidunt dapibus facilisis et, semper eu mi.'
    ));
    $wp_customize->add_control('worldanimalprotection_what_happen_to_the_animals_ctrl',
    array(
        'type' => 'textarea',
        'section' => 'worldanimalprotection_home_page_section',
        'label' => __('What happen to the animals section content'),
        'settings' => 'worldanimalprotection_what_happen_to_the_animals_setting'
    ));

    $wp_customize->add_setting('worldanimalprotection_banner_heading_setting',
    array(
        'default' => 'Animals are our friend!'
    ));
    $wp_customize->add_control('worldanimalprotection_banner_heading_ctrl',
    array(
        'type' => 'text',
        'section' => 'worldanimalprotection_home_page_section',
        'label' => __('Banner section title'),
        'settings' => 'worldanimalprotection_banner_heading_setting'
    ));

    $wp_customize->add_setting('worldanimalprotection_banner_content_setting',
    array(
        'default' => 'Maecenas faucibus nunc nec sagittis posuere. Suspendisse nulla metus, luctus eu ante et, tincidunt mattis lorem. Suspendisse et lacus vitae lacus venenatis pellentesque. Maecenas nec urna quis ipsum pellentesque convallis. Suspendisse hendrerit sapien eu accumsan pellentesque.'
    ));
    $wp_customize->add_control('worldanimalprotection_banner_content_ctrl',
    array(
        'type' => 'textarea',
        'section' => 'worldanimalprotection_home_page_section',
        'label' => __('Banner section content'),
        'settings' => 'worldanimalprotection_banner_content_setting'
    ));

    // About us page
    $wp_customize->add_section('worldanimalprotection_about_us_page_section',
    array(
        'title' => __('About us page'),
        'priority' => 30
    ));
    $wp_customize->add_setting('worldanimalprotection_sub_heading_setting',
    array(
        'default' => 'Quisque ut enim at dui aliquet vulputate, cras ac metus ut leo placerat egestas sed a sem. Quisque ut enim at dui aliquet vulputate. In hac habitasse platea dictumst.'
    ));
    $wp_customize->add_control('worldanimalprotection_sub_heading_ctrl',
    array(
        'type' => 'textarea',
        'section' => 'worldanimalprotection_about_us_page_section',
        'label' => __('Sub-heading'),
        'settings' => 'worldanimalprotection_sub_heading_setting'
    ));

    $wp_customize->add_setting('worldanimalprotection_sub_heading_content_setting',
    array(
        'default' => 'Cras ac metus ut leo placerat egestas sed a sem. Quisque ut enim at dui aliquet vulputate. In hac habitasse platea dictumst. Aenean ornare vulputate nisi ut faucibus. Nullam malesuada vehicula odio ut consectetur. Quisque ut enim at dui aliquet vulputate. Aenean ornare vulputate nisi ut faucibus. Nullam malesuada vehicula odio ut consectetur. Quisque ut enim at dui aliquet vulputate.'
    ));
    $wp_customize->add_control('worldanimalprotection_sub_heading_content_ctrl',
    array(
        'type' => 'textarea',
        'section' => 'worldanimalprotection_about_us_page_section',
        'label' => __('Sub-heading content'),
        'settings' => 'worldanimalprotection_sub_heading_content_setting'
    ));

    $wp_customize->add_setting('worldanimalprotection_end_information_content_setting',
    array(
        'default' => 'Nullam malesuada vehicula odio ut consectetur. Quisque ut enim at dui aliquet vulputate.  Aenean ornare vulputate nisi ut faucibus. Nullam malesuada vehicula odio ut consectetur.'
    ));
    $wp_customize->add_control('worldanimalprotection_end_information_content_ctrl',
    array(
        'type' => 'textarea',
        'section' => 'worldanimalprotection_about_us_page_section',
        'label' => __('End page information'),
        'settings' => 'worldanimalprotection_end_information_content_setting'
    ));

    // Donation page
    $wp_customize->add_section('worldanimalprotection_donation_form_section',
    array(
        'title' => __('Donation page'),
        'priority' => 30
    ));
    $wp_customize->add_setting('worldanimalprotection_donation_form_content_setting',
    array(
        'default' => 'Cras ac metus ut leo placerat egestas sed a sem. Quisque ut enim at dui aliquet vulputate. In hac habitasse platea dictumst. Aenean ornare vulputate nisi ut faucibus. Nullam malesuada vehicula odio ut consectetur. Quisque ut enim at dui aliquet vulputate. Cras ac metus ut leo placerat egestas sed a sem. Quisque ut enim at dui aliquet vulputate.'
    ));
    $wp_customize->add_control('worldanimalprotection_donation_form_content_ctrl',
    array(
        'type' => 'textarea',
        'section' => 'worldanimalprotection_donation_form_section',
        'label' => __('Donation information'),
        'settings' => 'worldanimalprotection_donation_form_content_setting'
    ));

    $wp_customize->add_setting('worldanimalprotection_donation_form_end_content_setting',
    array(
        'default' => 'Quisque ut enim at dui aliquet vulputate. Cras ac metus ut leo placerat egestas sed a sem.'
    ));
    $wp_customize->add_control('worldanimalprotection_donation_form_end_content_ctrl',
    array(
        'type' => 'textarea',
        'section' => 'worldanimalprotection_donation_form_section',
        'label' => __('Important information(End)'),
        'settings' => 'worldanimalprotection_donation_form_end_content_setting'
    ));
}

add_action('customize_register', 'worldanimalprotection_customize_register');

?>