<?php
  if (isset($_POST['submit']))  {
  
    //Email information
    $admin_email = "qcwebdev@gmail.com";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
  
  //send email
  mail($admin_email, "New Form Submission", $name . ' - ' . $message . ' - ' . $phone, "From:" . $email);

//  To redirect form on a particular page
header("Location:success.html");


}
?>
    