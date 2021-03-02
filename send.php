<?php
$phone = $_POST['phone'];
if(empty($phone)) {
?>
<html>
<head><meta http-equiv="content-type" content="text/html;charset=UTF-8" /><title>Спасибо!</title>

    
    </head>
    
    
    
<body style="color: rgb(0, 0, 0); max-width: 980px; min-width: 300px; width: auto; margin: 0px auto; background-color: rgb(255, 255, 255); font-family: pt sans,arial;">
<br><br>
<center style="padding: 15px 30px; border: 3px solid rgb(63, 63, 63); background-color: rgb(255, 161, 161);">
<h1 style="font-size: 1.4rem;">Вы не ввели необходимые данные!<br>
Вернитесь на сайт и заполните контакнутю форму.<br>
</h1></center><br><br>
<a style="display: inline-block;height: 53px;height: 5.3rem;margin: 0px 0 0px;padding: 0 24px; font-size: 1.8rem; letter-spacing: 0.02em; line-height: 53px; line-height: 5.3rem; text-align: center; text-decoration: none; color: black; transition: background-color 0.2s ease-out 0s; border-radius: 7px; text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.5); -webkit-box-shadow: inset 0px -3px 0px 0px rgba(50, 50, 50, 0.2); -moz-box-shadow: inset 0px -3px 0px 0px rgba(50, 50, 50, 0.2); box-shadow: inset 0px -3px 0px 0px rgba(50, 50, 50, 0.2); background: rgb(196, 255, 161); width:500px;margin:0 auto;display:block; border: 1px solid #ccc;" href="./" class='hover'>
Вернуться на сайт</a>
</body>
</html>
<?
}else {
	
$email2="SmurtGlass@yandex.ru"; // ----------------------------------------- почта, куда отправляем письмо
$headers  =  'MIME-Version: 1.0' . "\r\n";
	$headers .=  'Content-type: text/html; charset=UTF-8' . "\r\n";
	$headers .=  'To: <'.$email2.'>, '."\r\n";
	$headers .=  'From: <site.ru>' . "\r\n"; // ---------------------- адрес отправителя, это заголовок письма, менять не обязательно
$subject2    = "Гибкое стекло [заказ обратной связи с сайта]"; // ----------------------------------------- заголовок
$message2    = "
<br>Имя: ".$_POST['name']."
<br>Телефон: ".$_POST['phone']."

<br>IP-адрес посетителя: ".@$_SERVER['REMOTE_ADDR']."
<br>Время заказа: ".date('Y-m-d H:i:s').";
";
$mail=mail($email2, $subject2, $message2, $headers);
if($mail==true){
?>
<html>
<head><meta http-equiv="content-type" content="text/html;charset=UTF-8" /><title>Спасибо!</title></head>
<body style="color: rgb(0, 0, 0); max-width: 980px; min-width: 300px; width: auto; margin: 0px auto; background-color: rgb(255, 255, 255); 'Montserrat', sans-serif;">
<br><br>
<center style="width: 100%; background: linear-gradient(161.68deg, #F8F8F8 -5.85%, #F7F7F7 102.75%); text-align: center; padding: 50px 0px 50px 0px; position: fixed; overflow: scroll; top: 0px; bottom: 0px; right: 0px; left: 0px;">
<h2 style="font-size: 32px; font-weight: 700;">Спасибо!<br>Ваша заявка принята</h2>
<div style="margin-top: 44px;">Оператор свяжется с вами в ближайщее время.Рабочие часы с 9:00 до 20:00.<br>Заявки после 20:00 обрабатываются на следующий день!</div>
<p style="font-size: 16px; font-weight: 500; margin-top: 78px;">Вы указали следующие данные для обратной связи:</p>
<div style="margin-top: 25px; text-align: center; font-weight: 300">Имя:
<?php
 echo $_POST['name'];
 ?><br>
 Телефон:
 <?php
 echo $_POST['phone'];
 ?>
</center><br><br>
<a style="margin-top: 78px; background: linear-gradient(102.53deg, #F05937 -32.27%, #F08343 131.59%); box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.075); border-radius: 4px; width: 80%; height: 76px; font-size: 20px; font-weight: 500; color: #fff; border: none;" href="./" class='hover'>
Вернуться на сайт</a>
<!-- ниже код метрики (для отслеживания конверсии) -->
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1074620846061508');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=1074620846061508&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->
<!-- выше код метрики -->
<style>
.hover:hover {
	background:#9FD083 !important;
	transition:all .3s ease-in-out;
}
</style>
    



    
    
</body>
</html>
<?
}else{
    echo "no";
}
}
?>
