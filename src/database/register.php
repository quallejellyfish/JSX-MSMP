<?php

session_start();

// Include the PDO connection file
include("PDO.php");

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

$data = file_get_contents("php://input");

file_put_contents("debug.log", "Raw Data: " . $data . "\n", FILE_APPEND);

$decodedData = json_decode($data, true);

file_put_contents("debug.log", "Decoded Data: " . print_r($decodedData, true), FILE_APPEND);

if (empty($decodedData['username']) || empty($decodedData['email']) || empty($decodedData['password'])) {
    echo json_encode(['success' => false, 'error' => 'Missing required fields']);
    exit;
}

$passwordHash = password_hash($decodedData['password'], PASSWORD_DEFAULT);
$sql = "INSERT INTO users (username, email, password) VALUES (:username, :email, :password)";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':username', $decodedData['username']);
$stmt->bindParam(':email', $decodedData['email']);
$stmt->bindParam(':password', $passwordHash);

if ($stmt->execute()) {
    echo json_encode(['success' => true]);
} else {
    $errorInfo = $stmt->errorInfo();
    file_put_contents("debug.log", "SQL Error: " . print_r($errorInfo, true) . "\n", FILE_APPEND);
    echo json_encode(['success' => false, 'error' => 'Failed to register user']);
}
