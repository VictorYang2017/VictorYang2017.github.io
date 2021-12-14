<?php
// Current post category
$current_post_category = get_the_category()[0]->slug;;
get_header(); ?>
<div class="animal-detail-page-main-container">
	<div class="animal-detail-page-banner-section grid-container full">
        <div class="animal-detail-page-banner" style="background-image:url(<?php echo bloginfo('template_url').'/dist/assets/images/'.$current_post_category.'-banner.jpg'?>);"></div>
    </div>
    <div class="animal-detail-page-heading-section grid-container full">
        <div class="animal-detail-page-heading grid-x align-center align-middle">
            <h4><?php the_title(); ?></h4>
        </div>
    </div>
	<div class="animal-detail-page-content-section grid-container full">
		<div class="animal-detail-page-content grid-container">
			<?php if ( have_posts() ) : ?>
				<?php while ( have_posts() ) : the_post(); ?>
					<?php the_content(); ?>
				<?php endwhile; ?>
			<?php endif; ?>
		</div>
	</div>
	<div class="animal-detail-page-petition-donate-shop-section grid-container">
		<div class="animal-detail-page-petition-donate-shop-heading">
			<h5>Help our best friend<h5>
		</div>
		<div class="animal-detail-page-petition-donate-shop-contents grid-x">
			<div class="animal-detail-page-petition-donate-shop--petition">
				<form action="<?php echo get_permalink()?>">
					<div class="petition-first-last-name">
						<input type="text" name="first-name" placeholder="First name">
						<input type="text" name="last-name" placeholder="Last name">
					</div>
					<div class="petition-email">
						<input type="text" name="email" placeholder="Email">
					</div>
					<div class="petition-address">
						<input type="text" name="address" placeholder="Address">
					</div>
					<div class="petition-button">
						<input type="submit" value="Sign the petition">
					</div>
				</form>
			</div>
			<div class="animal-detail-page-petition-donate-shop--petition--donate-shop">
				<a href="<?php echo site_url().'/donate' ?>"><div class="animal-detail-page-donate-button">
					<h5>Donate</h5>
				</div></a>
				<a href="<?php echo site_url().'/shop' ?>"><div class="animal-detail-page-shop-button">
					<h5>Shop</h5>
				</div></a>
			</div>
		</div>
	</div>
</div>

<?php get_footer();
