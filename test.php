<?php
$string23 = file_get_contents("data.txt", true);
$string23 =  json_decode($string23);

foreach ($string23 as &$value) {
    if($value->id == 12) {
        print_r($value);
    }
        
        print_r('<br>');

}
?>