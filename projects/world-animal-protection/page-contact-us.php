<?php get_header(); ?>
<div class="contact-page-main-container">
    <div class="contact-page-page-banner-section grid-container full">
        <div class="contact-page-banner" style="background-image:url(<?php echo bloginfo('template_url').'/dist/assets/images/contact-us-banner.jpg'?>);"></div>
    </div>
    <div class="contact-page-heading-section grid-container full">
        <div class="contact-page-heading grid-x align-center align-middle">
            <h4>Contact us</h4>
        </div>
    </div>
    <div class="contact-page-content-section grid-container full">
        <div class="contact-page-content grid-container">
            <div class="contact-details">
                <div class="contact-details--call">
                    <h6>Call us</h6>
                    <p>For general questions about World Animal Protection’s work, please call:</p>
                    <p> Toll free: 0800 500 9772  Or: +64 9 309 3901</p>
                </div>
                <div class="contact-details--email">
                    <h6>Email us</h6>
                    <p>General Email: info@worldanimalprotection.org.nz </p>
                </div>
                <div class="contact-details--write">
                    <h6>Write a letter to us</h6>
                    <p>Private Bag 93220  Parnell Auckland 1151  New Zealand  </p>
                </div>
                <div class="contact-details--update">
                    <h6>Update your details</h6>
                    <p>Email info@worldanimalprotection.org.nz with your new contact details </p>
                </div>
            </div>
            <div class="contact-form">
                <form id="contact-form--contact-page">
                    <div class="contact-form--first-last-name">
                        <input class="first-last-name--firstname" type="text" name="contactfirstname" placeholder="First name" require>
                        <input type="text" name="contactlastname" placeholder="Last name" require>
                    </div>
                    <div class="contact-form--email">
                        <input type="email" name="contactemail" placeholder="Email" require>
                    </div>
                    <div class="contact-form--comment">
                        <textarea name="comment" form="contact-form--contact-page" require>Enter text here...</textarea>
                    </div>
                    <div class="contact-form--submit">
                        <input type="submit" value="Submit">
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<?php get_footer(); ?>