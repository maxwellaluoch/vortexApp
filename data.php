<?php
$db = mysqli_connect('192.168.0.13','root','999poo666','rmsdatabase');
$sql = "SELECT AccountNumber,Company,AccountBalance FROM customer";
$results = $db->query($sql);
$data = array();
while($customer = mysqli_fetch_assoc($results)) {
    $data[] = $customer;
}
echo json_encode($data);
