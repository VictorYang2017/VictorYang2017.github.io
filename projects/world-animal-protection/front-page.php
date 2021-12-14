<?php
// Call text-restriction function
include 'inc/text-restriction.php';
// Customizer
$world_animal_protection_section_content_customizer = limit_text(get_theme_mod('worldanimalprotection_world_animal_protection_setting'), 100);
$what_happen_to_the_animals_section_content_customizer = limit_text(get_theme_mod('worldanimalprotection_what_happen_to_the_animals_setting'), 100);
$banner_section_heading_customizer = limit_text(get_theme_mod('worldanimalprotection_banner_heading_setting'), 5);
$banner_section_content_customizer = limit_text(get_theme_mod('worldanimalprotection_banner_content_setting'), 50);
?>
<?php get_header(); ?>
<div class="home-page-main-container">
    <div class="home-page-hero-section">
        <div class="hero-image">
            <div class="hero-image-cover">
                <div class="hero-image--content-buttons">
                    <div class="hero-contents">
                        <h2><?php echo $banner_section_heading_customizer; ?></h2>
                        <p><?php echo $banner_section_content_customizer; ?></p>
                        <div class="hero-buttons">
                            <a href="<?php echo site_url().'/help-the-animals' ?>"><button type="button">Help the animals!</button></a>
                            <a href="<?php echo site_url().'/about-us' ?>"><button type="button">Donate</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="home-page-world-animal-protection-section">
        <div class="section grid-container">
            <div class="section-heading">
                <h4>World Animal Protection</h4>
            </div>
            <div class="section-content">
                <div class="section-content--paragraph">
                    <p><?php echo $world_animal_protection_section_content_customizer; ?></p>
                </div>
                <div class="section-content--buttons">
                    <a href="<?php echo site_url().'/donate' ?>"><button class="home-page-donate-button" type="button">Donate</button></a>
                    <a href="<?php echo site_url().'/about-us' ?>"><button class="home-page-about-us-button" type="button">About us</button></a>
                </div>

            </div>
        </div>
    </div>
    <div class="home-page-what-happen-to-the-animals-section">
        <div class="section grid-container">
            <div class="section-heading">
                <h4>What happen to the animals?<h4>
            </div>
            <div class="section-content">
                <div class="section-content--paragraph">
                    <p><?php echo $what_happen_to_the_animals_section_content_customizer; ?></p>
                </div>
                <div class="section-content--buttons">
                    <a href="<?php echo site_url().'/help-the-animals' ?>"><button class="home-page-help-the-animals-button" type="button">Help the animals</button></a>
                </div>
            </div>
        </div>
    </div>
    <div class="home-page-our-products-section">
        <div class="section grid-container">
            <div class="section-heading">
                <h4>Our products</h4>
            </div>
            <div class="section-contents">
                <!-- Come back to put the product in here -->
                <?php 
                    $args = array(
                        'post_type' => 'product',
                        'posts_per_page' => 2
                    );
                    $wc_products_loop = new WP_Query($args);
                    if($wc_products_loop->have_posts()){

                        while($wc_products_loop->have_posts()){
                            $wc_products_loop->the_post();
                            ?>
                            <div class="wc-our-products">
                                <a href="<?php echo get_permalink(get_page_by_path('product')->ID); ?>">
                                    <img alt="<?php the_title(); ?>" src="<?php the_post_thumbnail_url(); ?>">
                                    <h5><?php the_title(); ?></h5>
                                </a>
                            </div>
                            <?php
                        }
                    }
                ?>
            </div>
        </div>
    </div>
    <div class="home-page-subscribe-section">
        <div class="section grid-container">
            <div class="section-sub-heading">
                <h5>Aenean ornare vulputate nisi ut faucibus.<h5>
            </div>
            <div class="section-content">
                <form>
                    <div class="subscribe-first-last-name">
                        <input type="text" name="firstname" placeholder="First name">
                        <input type="text" name="lastname" placeholder="Last name">
                    </div>
                    <div class="subscribe-email-subscribe-button">
                        <input type="email" name"email" placeholder="Email">
                        <input class="submit" type="submit" value="Submit">
                    </div>
                </form>
            </div>
        </div>
    <div>

</div>
<?php get_footer(); ?>