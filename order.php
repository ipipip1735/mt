<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/12/3
 * Time: 10:12
 */


date_default_timezone_set("Asia/Shanghai");


//var_dump($_POST);
//$orderid = trim($_POST["orderid"]);
$orderid = time();
$product = trim($_POST["product"]);
$mun = trim($_POST["mun"]);
$name = trim($_POST["name"]);
$mob = trim($_POST["mob"]);
$province = trim($_POST["province"]);
$city = trim($_POST["city"]);
if (isset($_POST["area"])) {
    $area = trim($_POST["area"]);
} else {
    $area = "";
}
$address = trim($_POST["address"]);
$zfbewm = trim($_POST["zfbewm"]);
$wxewm = trim($_POST["wxewm"]);
$zfbprice = trim($_POST["zfbprice"]);
$price = trim($_POST["price"]);
$pay = trim($_POST["pay"]);
if (isset($_POST["guest"])) {
    $guest = trim($_POST["guest"]);
} else {
    $guest = "";
}

if (isset($_POST["fromurl"])) {
    $fromurl = trim($_POST["fromurl"]);
} else {
    $fromurl = "";
}

if (isset($_POST["nowurl"])) {
    $nowurl = trim($_POST["nowurl"]);
} else {
    $nowurl = "";
}

if (isset($_POST["keyword"])) {
    $keyword = trim($_POST["keyword"]);
} else {
    $keyword = "";
}


//get ip
//if ($HTTP_SERVER_VARS["HTTP_X_FORWARDED_FOR"]) {
//    $ip = $HTTP_SERVER_VARS["HTTP_X_FORWARDED_FOR"];
//}
//elseif ($HTTP_SERVER_VARS["HTTP_CLIENT_IP"]) {
//    $ip = $HTTP_SERVER_VARS["HTTP_CLIENT_IP"];
//}
//elseif ($HTTP_SERVER_VARS["REMOTE_ADDR"]) {
//    $ip = $HTTP_SERVER_VARS["REMOTE_ADDR"];
//}
//elseif (getenv("HTTP_X_FORWARDED_FOR")) {
//    $ip = getenv("HTTP_X_FORWARDED_FOR");
//}
if (getenv("HTTP_CLIENT_IP")) {
    $ip = getenv("HTTP_CLIENT_IP");
} elseif (getenv("REMOTE_ADDR")) {
    $ip = getenv("REMOTE_ADDR");
} else {
    $ip = "Unknown";
}


//验证时间
if (isset($_COOKIE["lastgbooktime"]) && ((time() - $_COOKIE["lastgbooktime"]) < 10)) {
    // echo "interval is " . time() - $_COOKIE["lastgbooktime"]."\n";
    $result = "请不要频繁留言!";

}

//验证手机
if (!isset($result) && empty($mob)) {
    $result = "请留下您的手机号码，方便我们与您联系！";
} else {
    if (!preg_match("/^[01]\d{10}$/", $mob)) {
        $result = "手机号码不正确，请检查！";
    }
}


//--------------------------------
if (!isset($result)) {

    require_once "config.php";

    try {
        global $config;
        $host = $config['db']['host'];
        $dbname = $config['db']['dbname'];
        $user = $config['db']['user'];
        $pass = $config['db']['pass'];
        $charset = $config['db']['charset'];
        $table = "order";

        $dbh = new PDO("mysql:host=$host;dbname=$dbname;charset=$charset", $user, $pass);
        $mySQL = "INSERT INTO $dbname.$table(orderid, product, mun, name, mob, province, city, area, address, zfbewm, wxewm, zfbprice, price, pay, guest, fromurl, nowurl, keyword, ip, time) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, now())";
//        $mySQL = "INSERT INTO $dbname.$table(orderid, product, mun, name, mob, province, city, area, address, zfbewm, wxewm, zfbprice, price, pay, guest, fromurl, nowurl, keyword, ip) VALUES($orderid, '$product', '$mun', '$name', '$mob', '$province', '$city', '$area', '$address', '$zfbewm', '$wxewm', '$zfbprice', '$price', '$pay', '$guest', '$fromurl', '$nowurl', '$keyword', '$ip')";
//        die($mySQL);
//        echo $mySQL;
        $mySth = $dbh->prepare($mySQL);

        $mySth->bindValue(1, $orderid);
        $mySth->bindValue(2, $product);
        $mySth->bindValue(3, $mun);
        $mySth->bindValue(4, $name);
        $mySth->bindValue(5, $mob);
        $mySth->bindValue(6, $province);
        $mySth->bindValue(7, $city);
        $mySth->bindValue(8, $area);
        $mySth->bindValue(9, $address);
        $mySth->bindValue(10, $zfbewm);
        $mySth->bindValue(11, $wxewm);
        $mySth->bindValue(12, $zfbprice);
        $mySth->bindValue(13, $price);
        $mySth->bindValue(14, $pay);
        $mySth->bindValue(15, $guest);
        $mySth->bindValue(16, $fromurl);
        $mySth->bindValue(17, $nowurl);
        $mySth->bindValue(18, $keyword);
        $mySth->bindValue(19, $ip);

        $b = $mySth->execute();
        if ($b) {
            setcookie("lastgbooktime", time(), time() + 3600 * 24);
//            echo "ok";
        } else {
            $result = "非常抱歉，您留言未成功提交，请稍后再次尝试！";
        }

    } catch (PDOException $e) {
        $dbh = null;
//        echo "DB Error:" . $e->getMessage() . "<br/>";
        $result = "非常抱歉，您留言未成功提交，请稍后再次尝试！";
    }
}
?>
<!DOCTYPE HTML>
<html>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>茅台旗舰店</title>
<meta name="keywords" content="茅台旗舰店">
<meta name="description" content="茅台旗舰店">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

<!-- JQuery -->
<script charset="utf-8" src="http://www.yssp88.com/skin/v2/libraries/JQuery/jquery-3.1.0.js"></script>

<!-- 最新版本的 Bootstrap 核心 CSS 文件 -->
<link rel="stylesheet" href="http://www.yssp88.com/skin/v2/libraries/bootstrap/bootstrap-3.3.7/dist/css/bootstrap.css">
<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
<script src="http://www.yssp88.com/skin/v2/libraries/bootstrap/bootstrap-3.3.7/dist/js/bootstrap.js"></script>


<style>
    .outer {
        display: table;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }

    .middle {
        display: table-cell;
        vertical-align: middle;
    }

    .inner {
        margin-left: auto;
        margin-right: auto;
        width: 400px;
        text-align: center;
        /*whatever width you want*/
    }

</style>

<body>
<div class="outer">
    <div class="middle">
        <div class="inner">
            <?php
            if (isset($result)) {
                echo "<h1 style=\"color: crimson\">留言失败</h1>";
                echo "<p>$result</p>";
            } else {
                echo "<h1 style=\"color: green\">留言成功</h1>";
                echo "<p>我们将在24小时内与您联系！</p>";
            }
            ?>


        </div>
    </div>
</div>
</body>
</html>
<script>
    window.setTimeout(function () {
        <?php
        if (isset($result)) {
            echo "history.go(-1);";
        } else {
            echo "window.location.href=\"/\";";
        }
        ?>
    }, 2500);
</script>
