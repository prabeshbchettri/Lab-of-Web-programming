<?php
$conn = new mysqli("localhost", "root", "", "test");

$msg = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Prepared statement (secure)
    $stmt = $conn->prepare("SELECT * FROM users WHERE username=? AND password=?");
    $stmt->bind_param("ss", $_POST['username'], $_POST['password']);
    $stmt->execute();

    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $msg = "Login Successful (Secure)";
    } else {
        $msg = "Login Failed";
    }
}
?>

<!DOCTYPE html>
<html>
<body>

<h2>SQL Injection Secure</h2>

<form method="POST">
    Username: <input type="text" name="username"><br><br>
    Password: <input type="text" name="password"><br><br>
    <input type="submit">
</form>

<p><?php echo $msg; ?></p>

</body>
</html>