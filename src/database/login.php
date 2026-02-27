<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

session_start();

// Include the PDO connection file
include("PDO.php");

function debug_log($message)
{
    file_put_contents('debug_login.log', date('[Y-m-d H:i:s] ') . $message . "\n", FILE_APPEND);
}

// Set headers for CORS and JSON response
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

debug_log("Received data: " . print_r($data, true) . "\n");

// Validate input
if (empty($data['usernameEmail']) || empty($data['password'])) {
    echo json_encode(['success' => false, 'error' => 'Missing username/email or password']);
    exit;
}

$usernameEmail = $data['usernameEmail'];
$password = $data['password'];

debug_log("Attempting to find user: $usernameEmail\n");

// Query to find user by username or email
$sql = "SELECT * FROM users WHERE username = :usernameEmail OR email = :usernameEmail";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':usernameEmail', $usernameEmail);
$stmt->execute();

$user = $stmt->fetch(PDO::FETCH_ASSOC);

debug_log("User found: " . ($user ? "Yes" : "No"));
if ($user) {
    debug_log("User data: " . print_r($user, true));
    debug_log("Stored hashed password: " . $user['password']);
    debug_log("Provided password: " . $password);
}

$response = [];

if ($user) {
    $passwordVerified = password_verify($password, $user['password']);
    debug_log("Password verification result: " . ($passwordVerified ? "Success" : "Failure"));
    debug_log("password_verify() function result: " . var_export($passwordVerified, true));

    if ($passwordVerified) {
        $_SESSION['username'] = $user['username'];
        $response = ['success' => true];
    } else {
        $response = ['success' => false, 'error' => 'Incorrect password', 'debug' => 'Password verification failed'];
    }
} else {
    $response = ['success' => false, 'error' => 'User not found', 'debug' => 'No user found with the provided username/email'];
}

debug_log("Session data: " . print_r($_SESSION, true));
debug_log("Response: " . json_encode($response));

echo json_encode($response);
