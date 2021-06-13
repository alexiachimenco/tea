<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$message = "TEADISCOUNT";
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
// отправляем сообщение
$success =mail('email', 'Получение скидки', $message , $headers);
if ($success) {
    // Отдаем 200 код ответа на http запрос
    http_response_code(200);
    echo "Письмо отправлено";
} else {
    // Отдаем ошибку с кодом 500 (internal server error).
    http_response_code(500);
    echo "Письмо не отправлено";
}

} else {
    // Если это не POST запрос - возвращаем код 403 (действие запрещено)
    http_response_code(403);
    echo "Данный метод запроса не поддерживается сервером";
}