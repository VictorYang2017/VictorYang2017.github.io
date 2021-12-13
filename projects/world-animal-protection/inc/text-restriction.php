<?php
/**
 * Created by PhpStorm.
 * User: 845865276
 * Date: 17/04/2018
 * Time: 2:15 PM
 */

//Limiting the words
function limit_text($text, $limit) {
    if (str_word_count($text, 0) > $limit) {
        $words = str_word_count($text, 2);
        $pos = array_keys($words);
        $text = substr($text, 0, $pos[$limit]) . '...';
    }
    return $text;
}
?>