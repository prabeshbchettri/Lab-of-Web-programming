<?php
session_start();

$msg = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email']; // No CSRF protection
    $msg = "Email changed to: " . $email;
}
?>

<!DOCTYPE html>
<html>
<body>

<h2>CSRF Vulnerable</h2>

<form method="POST">
    New Email: <input type="email" name="email">
    <input type="submit">
</form>

<p><?php echo $msg; ?></p>

</body>
</html>