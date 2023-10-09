<?php 
    header('Content-Type: text/html; charset=utf-8');

    // проверяем что пришел POST запрос с JSONом
    if ($_SERVER["REQUEST_METHOD"] == "POST" && $_SERVER["CONTENT_TYPE"] == "application/json") {
        $postData = file_get_contents('php://input');  
        //  преобразуем пришедший json в формат асоциативного массива
        $data = json_decode($postData, true);
        // преобразуем асоциативный массив в json
        echo json_encode($data);
    }
?>

