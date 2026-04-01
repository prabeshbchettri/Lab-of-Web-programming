<?php
$name = "";
if (isset($_GET['name'])) {
    $name = htmlspecialchars($_GET['name'], ENT_QUOTES, 'UTF-8'); // Secure
}
?>

<!DOCTYPE html>
<html>
<body>

<h2>XSS Secure Example</h2>

<form method="GET">
    Enter Name: <input type="text" name="name">
    <input type="submit">
</form>

<p>Hello <?php echo $name; ?></p>

</body>
</html>