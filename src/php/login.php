<?php
    // GitHub Pages doesn't support PHP

    $username = $_GET['name'];
    $password = $_GET['password'];
    
    $string = file_get_contents("login.json");
    $accounts = json_decode($string, true);

    $succeded = $accounts[$username] == $password;
    echo "<script>redirect($succeded);</script>";
?>

<script type="text/javascript">
    function redirect(logged) {
        localStorage.setItem('logged', logged);
        window.location.href = "./index.html";
    }
</script>