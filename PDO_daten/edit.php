<?php
include('dbconn.php');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="shortcut icon" href="mysql_dolfin.png">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <title>Eine Datei Editen</title>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-md-12 mt-4">
                <div class="card">
                    <!-- überschrift -->
                    <div class="card-header">
                        <h3>Editierung der Daten
                            <a href="index.php" class="btn btn-danger float-end">Zurück</a>
                        </h3>
                    </div>
                    <div class="card-body">
                        <?php
                        if (isset($_GET['id'])) {
                            $id = $_GET['id'];

                            $query = "SELECT * FROM posts2 WHERE id=:id LIMIT 1";
                            $statement = $conn->prepare($query);
                            $data = [':id' => $id];
                            $statement->execute($data);

                            $result = $statement->fetch(PDO::FETCH_OBJ);
                        }
                        ?>

                        <form action="code.php" method="POST">

                            <input type="hidden" name="id" max="2147483647" value="<?= $result->id ?>">
                            <!-- name -->
                            <div class="mb-3">
                                <label for="name">Name</label>
                                <input type="text" name="name" min="1" max="30" value="<?= $result->name ?>" class="form-control" />
                            </div>
                            <!-- age -->
                            <div class="mb-3">
                                <label for="age">Age</label>
                                <input type="number" name="age" min="6" max="100" value="<?= $result->age ?>" class="form-control" />
                            </div>
                            <!-- gender -->
                            <div class="mb-3">
                                <label>Gender</label>
                                <select name="gender" id="gender" value="<?= $result->$gender; ?>" class="form-control">
                                    <option value="male">male</option>
                                    <option value="female">female</option>
                                    <option value="unkown">unkown</option>
                                </select>
                            </div>
                            <!-- Speichern / Submit -->
                            <div class="mb-3">
                                <button type="submit" name="edit" class="btn btn-primary">Speichern</button>
                            </div>
                        </form>
                        <!-- cardbody -->
                    </div>
                    <!-- card -->
                </div>
                <!-- col -->
            </div>
            <!-- row -->
        </div>
        <!-- container -->
    </div>
    <!-- boostrap bundle -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
</body>

</html>