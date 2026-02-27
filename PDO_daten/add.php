<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="shortcut icon" href="mysql_dolfin.png">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <title>Ein MySQL PDO Login Formular</title>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-md-12 mt-4">
                <div class="card">
                    <!-- überschrift -->
                    <div class="card-header">
                        <h3>PHP PDO CRUD mit einem Fomular
                            <a href="index.php" class="btn btn-danger float-end">Zurück</a>
                        </h3>
                    </div>
                    <div class="card-body">
                        <form action="code.php" method="POST">
                            <!-- name -->
                            <div class="mb-3">
                                <label>Name</label>
                                <input type="text" name="name" min="1" max="30" class="form-control" />
                            </div>
                            <!-- age -->
                            <div class="mb-3">
                                <label>Age</label>
                                <input type="number" name="age" min="6" max="100" class="form-control" />
                            </div>
                            <!-- gender -->
                            <div class="mb-3">
                                <label>Gender</label>
                                <select name="gender" class="form-control">
                                    <option value="male">male</option>
                                    <option value="female">female</option>
                                </select>
                            </div>
                            <!--Hinzufügen / submit -->
                            <div class="mb-3">
                                <button type="submit" name="hinzu" class="btn btn-primary">Hinzufügen</button>
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