<?php
// Call text-restriction function
include 'inc/text-restriction.php';
// Customizer
$donation_page_section_content_customizer = limit_text(get_theme_mod('worldanimalprotection_donation_form_content_setting'), 80);
$donation_page_section_end_content_customizer = limit_text(get_theme_mod('worldanimalprotection_donation_form_end_content_setting'), 40);
?>
<?php get_header(); ?>
<div class="donation-form-page-main-container">
    <div class="donation-form-page-heading-section grid-container full">
        <div class="donation-form-page-heading--heading grid-container">
            <h6>Donation information</h6>
        </div>
        <div class="donation-form-page-heading--content grid-container">
            <p><?php echo $donation_page_section_content_customizer ?></p>
        </div>
    </div>
    <div class="donation-form-page-content-section grid-container full">
        <div class="donation-form-page-content grid-container">
            <form method="POST" action="<?php echo get_permalink(); ?>">
                <div class="grid-container">
                    <div class="donation-form-price-to-donate grid-x grid-padding-x">
                        <div class="medium-12 large-12 cell">
                            <label>How much would you like to donate?</label>
                            <input type="number" max="2500" placeholder="$100" required>
                        </div>
                    </div>
                    <div class="donation-form-first-last-name grid-x grid-padding-x">
                        <div class="medium-12 large-6 cell">
                            <input type="text" placeholder="First name" required>
                        </div>
                        <div class="medium-12 large-6 cell">
                            <input type="text" placeholder="Last name" required>
                        </div>
                    </div>
                    <div class="donation-form-email grid-x grid-padding-x">
                        <div class="medium-12 large-12 cell">
                            <input type="email" placeholder="Email" required>
                        </div>
                    </div>
                    <div class="donation-form-card-holder-name grid-x grid-padding-x">
                        <div class="medium-12  large-12 cell">
                            <input type="text" placeholder="Card holder name" required>
                        </div>
                    </div>
                    <div class="donation-form-card-number grid-x grid-padding-x">
                        <div class="medium-12 large-12 cell">
                            <input type="text" placeholder="Card number" required>
                        </div>
                    </div>
                    <div class="donation-form-card-ccv grid-x grid-padding-x">
                        <div class="medium-12 large-12 cell">
                            <input type="number" min="10" max="999" placeholder="CCV" required>
                        </div>
                    </div>
                    <div class="donation-form-card-expiry-month-year grid-x grid-padding-x">
                        <div class="medium-12 large-6 cell">
                            <input type="number" min="1" max="12" placeholder="Expiry month" required>
                        </div>
                        <div class="medium-12 large-6 cell">
                            <input type="number" min="1900" max="2050" placeholder="Expiry year" required>
                        </div>
                    </div>
                    <div class="donation-form-submit-button grid-x grid-padding-x">
                        <div class="medium-12 large-12 cell">
                            <input type="submit" value="Submit" required>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <div class="donation-form-page-ending-section grid-container full">
       <div class="donation-form-page-ending--information grid-container">
            <h6><?php echo $donation_page_section_end_content_customizer ?></h6>
       </div> 
    </div>
</div>


<?php get_footer(); ?>