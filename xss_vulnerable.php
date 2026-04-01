<?php
$name = "";
if (isset($_GET['name'])) {
    $name = $_GET['name']; // No sanitization (vulnerable)
}
?>

<!DOCTYPE html>
<html>
<body>

<h2>XSS Vulnerable Example</h2>

<form method="GET">
    Enter Name: <input type="text" name="name">
    <input type="submit">
</form>

<p>Hello <?php echo $name; ?></p>

</body>
</html>