<?php
  $myPDO = new PDO('C:\xampp\htdocs\vortex\vortex.db');
  $result = $myPDO->query("SELECT * FROM customer");
  foreach($result as $row)
    {
        print $row['Company'] . "\n";
    }

 ?>
