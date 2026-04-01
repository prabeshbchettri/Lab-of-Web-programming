<?php
session_start();

// Generate CSRF token
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

$msg = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    if (!hash_equals($_SESSION['csrf_token'], $_POST['csrf_token'])) {
        die("CSRF attack detected!");
    }

    $email = htmlspecialchars($_POST['email']);
    $msg = "Email changed to: " . $email;
}
?>

<!DOCTYPE html>
<html>
<body>

<h2>CSRF Secure</h2>

<form method="POST">
    <input type="hidden" name="csrf_token" value="<?php echo $_SESSION['csrf_token']; ?>">
    New Email: <input type="email" name="email">
    <input type="submit">
</form>

<p><?php echo $msg; ?></p>

</body>
</html>