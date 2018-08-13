<?php 
session_start();

class Controller
{
  function __construct()
  {
    if($_SERVER['REQUEST_METHOD'] == 'POST')
    {
      $tmp = $_POST['action'];

      $this->conn = new mysqli("localhost","root","123456","devis");
      call_user_func([$this,$tmp]);

    }else{
      exit ("no access");

    }
  }
  
  function registration()
  { 
    $errors =[];

    $broName     = $_POST['broName'];
    $broNachName  = $_POST['broNachName'];
    $broStrasse     = $_POST['broStrasse'];
    $broStadt    = $_POST['broStadt'];
    $broTel   = $_POST['broTel'];
    $broMail   = $_POST['broMail'];


   // if(!preg_match("#[0-9]+#",$broTel)) {
   //    $errors[] = "Your TELEPHONE Must Contain At Least 6 Number!";
   //  }
   //  if (!filter_var($broMail, FILTER_VALIDATE_EMAIL)) {
   //    $errors[]="Email field is invalid";
   //  }

// var_dump($_POST);
    if(empty($errors)){
      $this->conn->query("Insert into follow_contacts(broName,broNachName,broStrasse,broStadt,broMail,broTel) values('$broName','$broNachName','$broStrasse','$broStadt','$broMail','$broTel')") ;
      header('Location: merci2.php');
            echo "oho";

    }else{
      // echo json_encode($errors);
    }
  }


function entered()
  { 
    $errors =[];

    $konfName     = $_POST['konfName'];
    $konfNachname  = $_POST['konfNachname'];
    $konfStrasse     = $_POST['konfStrasse'];
    $konfPlz    = $_POST['konfPlz'];
    $konfTel   = $_POST['konfTel'];
    $konfMail   = $_POST['konfMail'];


   // if(!preg_match("#[0-9]+#",$broTel)) {
   //    $errors[] = "Your TELEPHONE Must Contain At Least 6 Number!";
   //  }
   //  if (!filter_var($broMail, FILTER_VALIDATE_EMAIL)) {
   //    $errors[]="Email field is invalid";
   //  }

// var_dump($_POST);
    if(empty($errors)){
      $this->conn->query("Insert into add_contacts(konfName,konfNachname,konfStrasse,konfPlz,konfTel,konfMail) values('$konfName','$konfNachname','$konfStrasse','$konfPlz','$konfTel','$konfMail')") ;
      header('Location: merci.php');
            echo "oho";

    }else{
      // echo json_encode($errors);
    }
  }

   function added()
  { 
    $errors =[];

    $broName     = $_POST['broName'];
    $broNachName  = $_POST['broNachName'];
    $broStrasse     = $_POST['broStrasse'];
    $broStadt    = $_POST['broStadt'];
    $broTel   = $_POST['broTel'];
    $broMail   = $_POST['broMail'];

// var_dump($_POST);
    if(empty($errors)){
      $this->conn->query("Insert into new_contacts(broName,broNachName,broStrasse,broStadt,broMail,broTel) values('$broName','$broNachName','$broStrasse','$broStadt','$broMail','$broTel')") ;
      header('Location: merci2.php');
            echo "oho";

    }else{
      // echo json_encode($errors);
    }
  }
}



$app = new Controller();


?>