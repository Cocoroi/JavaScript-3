<?php

$listPlanets = ["ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme",
    "1+-"];

if(isset($_POST['search'])){
    $response = [];
    foreach ($listPlanets as $value) {
        $in = stripos($value, $_POST['search']);
        if ($in !== false) {
            array_push($response, $value);
        }
    }
    echo json_encode($response);
    die;
}
