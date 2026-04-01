<?php
$conn = new mysqli("localhost", "root", "", "test");

$msg = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Vulnerable query
    $sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $msg = "Login Successful (Vulnerable)";
    } else {
        $msg = "Login Failed";
    }
}
?>

<!DOCTYPE html>
<html>
<body>

<h2>SQL Injection Vulnerable</h2>

<form method="POST">
    Username: <input type="text" name="username"><br><br>
    Password: <input type="text" name="password"><br><br>
    <input type="submit">
</form>

<p><?php echo $msg; ?></p>

</body>
</html>