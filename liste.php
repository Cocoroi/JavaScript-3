<?php

$systemPlanets =
    [
        "Solaire" => ["Terre", "Mars", "Venus"],
        "Alpha" => ["A1", "A2", "A3", "A4"],
        "Omega" => ["O1", "O2"]
    ];
if(isset($_GET['liste'])) {
    $systemes = json_encode(array_keys($systemPlanets));
    echo $systemes;
    die;
} else if(isset($_GET['systeme'])) {
    $retourJSON = json_encode($systemPlanets[$_GET['systeme']]);
    echo $retourJSON;
    die;
}

