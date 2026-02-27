<?php
session_start();
include('dbconn.php');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="shortcut icon" href="mysql_dolfin.png">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit & Delete Data form Website</title>
</head>

<body>
    <!-- macht alles in ein container -->
    <div class="container">
        <div class="row">
            <div class="col-md-12 mt-4">
                <!-- success -->
                <?php if (isset($_SESSION['message'])) : ?>
                    <h5 class="alert alert-success"><?= $_SESSION['message']; ?></h5>
                    <a href="index.php" class="btn btn-danger float-end">X</a>
                <?php
                    unset($_SESSION['message']);
                endif;
                ?>
                <!-- failed -->
                <?php if (isset($_SESSION['messageee'])) : ?>
                    <h5 class="alert alert-danger"><?= $_SESSION['messageee']; ?></h5>
                    <a href="index.php" class="btn btn-danger float-end">X</a>
                <?php
                    unset($_SESSION['messageee']);
                endif;
                ?>
                <div class="card">
                    <div class="card-header">
                        <!-- überschrift -->
                        <h3>Editieren & Löschen der Daten</h3>
                        <a href="add.php" class="btn btn-primary float-end">Add</a>
                    </div>
                    <div class="card-body">
                        <!-- table-striped = cool background color -->
                        <table class="table table-borderd table-striped">
                            <!-- catergory label -->
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php
                                $query = "SELECT * FROM posts2";
                                $statement = $conn->prepare($query);
                                $statement->execute();
                                $statement->setFetchMode(PDO::FETCH_OBJ);      //FETCH_OBJ = $row->$example;
                                $result = $statement->fetchAll();              //FETCH_ASSOC = $row['$example'];
                                // rows
                                if ($result) {
                                    foreach ($result as $row) {
                                ?>
                                        <tr>
                                            <td><?= $row->id;     ?></td>
                                            <td><?= $row->name;   ?></td>
                                            <td><?= $row->age;    ?></td>
                                            <td><?= $row->gender; ?></td>
                                            <!-- edit -->
                                            <td>
                                                <a href="edit.php?id=<?= $row->id; ?>" class="btn btn-primary">Edit</a>
                                            </td>
                                            <!-- delete -->
                                            <td>
                                                <form action="code.php" method="POST">
                                                    <button type="submit" name="delete" value="<?= $row->id; ?>" class="btn btn-danger">Delete</button>
                                                </form>
                                            </td>
                                        </tr>
                                    <?php
                                    }
                                } else {
                                    ?> <tr>
                                        <!-- wenn keine daten angegeben sende das aus / error -->
                                        <td colspan="4">Nichts gefunden sorry :c</td>
                                    </tr>
                                <?php
                                }
                                ?>
                            </tbody>
                        </table>
                        <!-- cardbody -->
                    </div>
                    <!-- card -->
                </div>
                <!-- col -->
            </div>
            <!-- row -->
        </div>
        <!-- contaier -->
    </div>
    <!-- boostrap bundle -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
</body>

</html>
<!-- fun fact: at 10001 charachters it doesn't continue load the next charachters -->