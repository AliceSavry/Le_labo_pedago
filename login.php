<?php
session_start();

// Connexion à la base de données
$host = "localhost";
$dbname = "authentification";
$username_db = "root"; // Remplace par ton identifiant de base de données
$password_db = "";     // Remplace par ton mot de passe de base de données

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username_db, $password_db);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erreur de connexion : " . $e->getMessage());
}

// Récupération des données du formulaire
$username = $_POST['username'];
$password = $_POST['password'];

// Vérification des identifiants
$stmt = $pdo->prepare("SELECT * FROM utilisateurs WHERE username = :username");
$stmt->bindParam(":username", $username);
$stmt->execute();
$user = $stmt->fetch();

if ($user && password_verify($password, $user['password'])) {
    // Connexion réussie
    $_SESSION['username'] = $username;
    header("Location: dashboard.php"); // Redirige vers une page protégée
    exit;
} else {
    // Échec de la connexion
    echo "<h3>Identifiant ou mot de passe incorrect.</h3>";
}
?>
