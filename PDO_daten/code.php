<?php
session_start();
//connect
include('dbconn.php');

//DELETE

// index.php / delete
if (isset($_POST['delete'])) {
    $id = $_POST['delete'];

    try {
        $query = "DELETE FROM posts2 WHERE id=:id";
        $statement = $conn->prepare($query);

        $data = [':id' => $id];

        $query_execute = $statement->execute($data);
        //wenn funkzuniert
        if ($query_execute) {
            $_SESSION['message'] = "Successfully Deleted!";
            header('Location: index.php');
            exit(0);
        } else {
            //wenn nicht funkzuniert
            $_SESSION['messageee'] = "Did not Deleted!";
            header('Location: index.php');
            exit(0);
        }
    } catch (PDOException $e) {
        echo $e->getMessage();
    }
}
//UPDATE

//edit.php / index.php
if (isset($_POST['edit'])) {
    $id = $_POST['id'];
    $name = $_POST['name'];
    $age = $_POST['age'];
    $gender = $_POST['gender'];

    try {
        //wenn das formulare leer ist sende das
        if (empty($name) || empty($age) || empty($gender)) {
            $_SESSION['messageee'] = "Bitte füllen Sie das Formular aus!";
            header('Location: index.php');
            exit(0);
        } else {
            //wenn besondere zeichen benutzt werde code
            if (strlen($name) >= 30  || !preg_match("/^[a-zA-Z- '\s]+$/", $name)) {
                $_SESSION['messageee'] = "Ungültiger Name. Benutze keine Besonderen Zeichen!";
                header('Location: index.php');
                exit(0);
            }
        }
        $query = "UPDATE posts2 SET name=:name, age=:age, gender=:gender WHERE id=:id LIMIT 1";
        $statement = $conn->prepare($query);

        $data = [
            ':name' => $name,
            ':age' => $age,
            ':gender' => $gender,
            ':id' => $id
        ];
        $query_execute = $statement->execute($data);
        //wenn funkzuniert
        if ($query_execute) {
            $_SESSION['message'] = "Updated Successfully!";
            header('Location: index.php');
            exit(0);
        } else {
            //wenn nicht funkzuniert
            $_SESSION['messageee'] = "Failed to Update!";
            header('Location: index.php');
            exit(0);
        }
    } catch (PDOException $e) {
        echo $e->getMessage();
    }
}
//INSERT

//add.php / index.php
if (isset($_POST['hinzu'])) {
    $name = $_POST['name'];
    $age = $_POST['age'];
    $gender = $_POST['gender'];
    //wenn das formular leer abgesendet wird sende das aus
    if (empty($name) || empty($age) || empty($gender)) {
        $_SESSION['messageee'] = "Bitte füllen Sie das Formular aus!";
        header('Location: index.php');
        exit(0);
    } else {
        //wenn besondere zeichen benutzt oder wenn der name zu lang ist wird der code ausgeführt
        if (strlen($name) >= 30  || !preg_match("/^[a-zA-Z- '´`\s]+$/", $name)) {
            $_SESSION['messageee'] = "Ungültiger Name. Benutzt keine besonderen Zeichen!";
            header('Location: index.php');
            exit(0);
        }
    }
    $query = "INSERT INTO posts2 (name, age, gender) VALUES (:name, :age, :gender)";
    $query_run = $conn->prepare($query);

    $data = [
        ':name' => $name,
        ':age' => $age,
        ':gender' => $gender
    ];

    $query_execute = $query_run->execute($data);
    //wenn funkzuniert
    if ($query_execute) {
        $_SESSION['message'] = "Successfully Sent!";
        header('Location: index.php');
        exit(0);
    }
}
