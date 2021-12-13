<?php
// Call get category banner function
include 'inc/get-category-banner.php';
$banner_image_url_value = get_url_category_value($_SERVER["REQUEST_URI"]);
// Current post category
$current_category = get_the_category()[0]->slug;
get_header(); ?> 
<div class="animal-category-main-container">
    <div class="animal-category-page-banner-section grid-container full">
        <div class="animal-category-page-banner" style="background-image:url(<?php echo bloginfo('template_url').'/dist/assets/images/'.$banner_image_url_value.'-banner.jpg'?>);"></div>
    </div>
    <div class="animal-category-page-heading-section grid-container full">
        <div class="animal-category-page-heading grid-x align-center align-middle">
            <h4>What happen to the animals!</h4>
        </div>
    </div>
    <div class="animal-category-page-content-section grid-container full">
        <div class="animal-category-page-content grid-container">
            <?php 
            // Check if there are any posts to display
            if ( have_posts() ) : ?>
            <div class="animal-category-page-content--contents">
                <?php
                // The Loop
                while ( have_posts() ) : the_post(); ?>
                <div class="individual-contents grid-x align-center">
                    <div class="articles-featured-image" style="background-image:url(<?php the_post_thumbnail_url(); ?>);"></div>
                    <div class="individual-posts">
                        <h2><?php the_title(); ?></h2>
                        <div class="posts-date-category">
                            <span class="posts-date"><?php the_time('F jS, Y') ?></span>
                            <span class="posts-category"><?php echo ucfirst($current_category); ?></span>
                        </div>

                        <div class="entry">
                        <?php echo wp_trim_words( get_the_content(), 37 ); ?>
                        </div>
                        <a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>"><div class="individual-posts-button grid-x align-center align-middle">
                            <button class="individual-posts-button--button cell align-bottom" type="button">Read more</button>
                        </div></a>
                    </div>
                </div>

                <?php endwhile; 

                else: ?>
                <h6>This animal currently doesn't need help.</h6>

                <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
</div>
<?php get_footer(); ?>


