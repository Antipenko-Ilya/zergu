<?php 

require_once('../phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$adress = $_POST['adress'];
$method = $_POST['method'];

if ($method == 'delivery') {
    $method = 'Доставка'
} else {
    $method = 'Самовывоз'
}

$data = json_decode($_POST['data']);
$string23 = file_get_contents("data.txt", true);
$string23 = json_decode($string23);

$array = [];
foreach ($data as &$value) {

    foreach ($string23 as &$item) {
        if($item->id == $value->dish->id) {
            $value->dish->price = $item->price;
        }
    }

    $newArr = [
        "Блюдо: ",
        $value->dish->text,
        "—",
        "Цена: ",
        $value->dish->price,
        "  ",
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
$mail->Username = 'zergut-2016@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'dance400400'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('zergut-2016@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('traktir.zergut.the.best@gmail.com');      // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заказ с сайта';
$mail->Body    = '' .$name . ' сделал заказ. Его заказ:<br> ' .$array. '<br>Почта этого пользователя: ' .$email .'<br>Его телефон: ' .$phone .'<br>Его адрес: ' .$adress. '<br>Способ доставки: ' .$method;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
   
}
?>