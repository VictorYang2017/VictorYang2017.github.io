<?php 
// Call text-restriction function
include 'inc/text-restriction.php';
// Customizer
$sub_heading_section_content_customizer = limit_text(get_theme_mod('worldanimalprotection_sub_heading_setting'), 30);
$sub_heading_content_section_content_customizer = limit_text(get_theme_mod('worldanimalprotection_sub_heading_content_setting'), 150);
$end_page_information_section_content_customizer = limit_text(get_theme_mod('worldanimalprotection_end_information_content_setting'), 30);
?>
<?php get_header();?>
<div class="about-us-page-main-container">
    <div class="about-us-page-banner-section grid-container full">
        <div class="about-us-page-banner" style="background-image:url(<?php echo bloginfo('template_url').'/dist/assets/images/about-us-banner.jpg'?>);"></div>
    </div>
    <div class="about-us-page-heading-section grid-container full">
        <div class="about-us-page-heading grid-x align-center align-middle">
            <h4>Who are we?</h4>
        </div>
    </div>
    <div class="about-us-page-content-section grid-container full">
        <div class="about-us-page-content grid-container">
            <div class="about-us-page-content--sub-heading">
                <h6><?php echo $sub_heading_section_content_customizer ?></h6>
            </div>
            <div class="about-us-page-content--sub-heading-content">
                <p><?php echo $sub_heading_content_section_content_customizer ?></p>
            </div>
            <a href="<?php echo site_url().'/donate' ?>"><div class="about-us-page-content--donate-button">
                <button>Donate</button>
            </div></a>
            <div class="about-us-page-content--main-content">
                <div class="main-container">
                    <div class="main-grid">
                        <?php if ( have_posts() ) : ?>
                            <?php while ( have_posts() ) : the_post(); ?>
                                <?php the_content(); ?>
                            <?php endwhile; ?>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
            <div class="about-us-page-content--main-content-image">
                <div class="main-content-image-left"></div>
                <div class="main-content-image-right"></div>
            </div>
            <div class="about-us-page-content--end-information">
                <h6><?php echo $end_page_information_section_content_customizer ?></h6>
            </div>
            <a href="<?php echo site_url().'/donate' ?>"><div class="about-us-page-content--donate-button">
                <button>Donate</button>
            </div></a>
        </div>
    </div>
</div>
<?php get_footer(); ?>