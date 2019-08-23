<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/8/22
 * Time: 16:32
 */

header("Content-type: text/html; charset=utf-8");
require_once "../config.php";


try {
    global $config;
    $host = $config['db']['host'];
    $dbname = $config['db']['dbname'];
    $user = $config['db']['user'];
    $pass = $config['db']['pass'];
    $charset = $config['db']['charset'];
    $table = "order";

    $dbh = new PDO("mysql:host=$host;dbname=$dbname;charset=$charset", $user, $pass);
    $mySQL = "SELECT * FROM $dbname.$table ORDER BY orderid DESC;";
    $stm = $dbh->query($mySQL);
    $r = $stm->fetchAll();


    echo "<table border='1'>";
    echo "<tr>";
    echo "<td>订单号</td>";
    echo "<td>时间</td>";
    echo "<td>产品</td>";
    echo "<td>not3chanpin</td>";
    echo "<td>数量</td>";
    echo "<td>姓名</td>";
    echo "<td>电话</td>";
    echo "<td>省</td>";
    echo "<td>市</td>";
    echo "<td>区</td>";
    echo "<td>地址</td>";
    echo "<td>zfbewm</td>";
    echo "<td>wxewm</td>";
    echo "<td>zfbprice</td>";
    echo "<td>价格</td>";
    echo "<td>付款</td>";
    echo "<td>留言</td>";
    echo "<td>来源URL</td>";
    echo "<td>当前URL</td>";
    echo "<td>click_id</td>";
    echo "<td>搜索关键字</td>";
    echo "<td>not3tuijian</td>";
    echo "<td>ip</td>";
    echo "</tr>";
    foreach ($r as $item) {
        echo "<tr>";
        echo "<td>" . $item["orderid"] . "</td>";
        echo "<td>" . $item["time"] . "</td>";
        echo "<td>" . $item["product"] . "</td>";
        echo "<td>" . $item["not3chanpin"] . "</td>";
        echo "<td>" . $item["mun"] . "</td>";
        echo "<td>" . $item["name"] . "</td>";
        echo "<td>" . $item["mob"] . "</td>";
        echo "<td>" . $item["province"] . "</td>";
        echo "<td>" . $item["city"] . "</td>";
        echo "<td>" . $item["area"] . "</td>";
        echo "<td>" . $item["address"] . "</td>";
        echo "<td>" . $item["zfbewm"] . "</td>";
        echo "<td>" . $item["wxewm"] . "</td>";
        echo "<td>" . $item["zfbprice"] . "</td>";
        echo "<td>" . $item["price"] . "</td>";
        echo "<td>" . $item["pay"] . "</td>";
        echo "<td>" . $item["guest"] . "</td>";
        echo "<td>" . $item["fromurl"] . "</td>";
        echo "<td>" . $item["nowurl"] . "</td>";
        echo "<td>" . $item["click_id"] . "</td>";
        echo "<td>" . $item["keyword"] . "</td>";
        echo "<td>" . $item["not3tuijian"] . "</td>";
        echo "<td>" . $item["ip"] . "</td>";
        echo "</tr>";
    }

    echo "</table>";

//    var_dump($r);


//    foreach ($r as $item) {
//        foreach ($item as $k => $v) {
//            echo $k."=".$v."<br/>";
//
//        }
//            echo "<br/><br/><br/>";
//    }


} catch (PDOException $e) {
    $dbh = null;
//    echo "DB Error:" . $e->getMessage() . "<br/>";
    $result = "非常抱歉，查询失败！";
}


