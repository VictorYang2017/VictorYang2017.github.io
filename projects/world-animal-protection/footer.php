<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the "off-canvas-wrap" div and all content after.
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */
?>

<footer>
    <div class="footer-container">
        <div class="secondary-third-navigation">
            <div class="secondary-navigation"><nav><?php wp_nav_menu(array('theme_location' => 'secondary_menu')); ?></nav></div>
            <div class="third-navigation"><nav><?php wp_nav_menu(array('theme_location' => 'third_menu')); ?></nav></div>
        </div>
        <div class="social-media-links">
            <div class="social-media-links--facebook">
                <i class="fab fa-facebook-f fa-4x"></i>
            </div>
            <div class="social-media-links--youtube">
                <i class="fab fa-youtube fa-4x"></i>
            </div>
        </div>
        <div class="secondary-logo">
            <img src="<?php echo bloginfo('template_url').'/dist/assets/images/client-logo.png'?>">
		</div>
    </div>
</footer>

<?php if ( get_theme_mod( 'wpt_mobile_menu_layout' ) === 'offcanvas' ) : ?>
	</div><!-- Close off-canvas content -->
<?php endif; ?>

<?php wp_footer(); ?>
</body>
</html>