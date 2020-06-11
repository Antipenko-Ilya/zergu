<?php 

require_once('../phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$adress = $_POST['adress'];
$data = json_decode($_POST['data']);

$array = [];
foreach ($data as &$value) {
    $newArr = [
        "Блюдо: ",
        $value->dish->text,
        " ",
        "Количество: ",
        $value->count,
        "<br/>"
        ];
    $newArr = implode("", $newArr);
    array_push($array, $newArr);
}
    
$array = implode("", $array);

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'ladasfeed@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'Ladosvent256Ladosvent256'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('ladasfeed@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('SdaniilS00@mail.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заказ с сайта';
$mail->Body    = '' .$name . ' сделал заказ. Его заказ:<br> ' .$array. '<br>Почта этого пользователя: ' .$email .'<br>Его телефон: ' .$phone .'<br>Его адрес: ' .$adress;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
   
}
?>