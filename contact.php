<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // POST 방식으로 전송된 데이터를 변수에 저장
    $name = htmlspecialchars($_POST['Name']); // HTML 폼에서 'Name'으로 전송됨
    $email = htmlspecialchars($_POST['email']); // HTML 폼에서 'email'로 전송됨
    $message = htmlspecialchars($_POST['message']); // HTML 폼에서 'message'로 전송됨

    // 폼 데이터를 처리하는 추가 로직 (예: 데이터베이스에 저장하거나 이메일로 전송)
    
    // 처리된 데이터 출력
    echo "Name: " . $name . "<br>";
    echo "Email: " . $email . "<br>";
    echo "Message: " . $message . "<br>";

    // 추가 처리 로직을 여기에 추가할 수 있습니다.
} else {
    // POST 요청이 아닌 경우에는 오류 메시지 출력
    echo "Invalid request method.";
}
?>
