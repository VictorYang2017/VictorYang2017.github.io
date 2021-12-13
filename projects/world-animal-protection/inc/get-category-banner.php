<?php
// This function is getting the last value of the url(For the category page banner image)
function get_url_category_value($current_site_url){
    $current_site_url_array = explode('/', $current_site_url);
    array_pop($current_site_url_array);
    return end($current_site_url_array);
}

?>