// b12432-��������ģ��
var strVar = "";
var not3appbiaoqians="�ڸв���158����һ����ƣ�16���Ʋ���99����װ����52�� ��ںã�168����ζ������371���۸���ˣ�147��";
var not3appbiaoqian=not3appbiaoqians.split("|");
var not3appdianhuas="159****7834[$a$]153****9432[$a$]131****2587[$a$]139****8756[$a$]155****9235[$a$]153****7753[$a$]135****9455[$a$]";
var not3appcitys="�Ĵ��ɶ�[$a$]�㽭����[$a$]�����γ�[$a$]����Ȫ��[$a$]�����Ͼ�[$a$]��������[$a$][$a$]";
var not3appstars="[$a$][$a$][$a$][$a$][$a$][$a$][$a$]";
var not3apppingjias="�������ֺã����ę́���ý��ܣ�[$a$]�����г�����ę́�Ѿ�������2100�ˣ���������۸�������2�����̫�������ˣ�[$a$]����Ǳ������Կ���̬��д����Ϣ��û�뵽�ͷ����˵绰����������������ˣ�������[$a$]�����ę́��ֻѡ�����ң�ר������֤�� ������ɣ���������һ��ȣ�Ҳ���ÿڸ������[$a$]���ƽ���ǰ���������������һ�䣬�����յ���û�����ֱ���ûؼң��ؼҴ򿪰�װ������ȷ����ģ���л�̼ҳ��Ŵ��ͣ������ֶ�2�䣡[$a$]����ę́������ƣ��ղ�2���ٺȣ��������ã��������Ǽ�ȥ��[$a$]��ٷǳ�������һ�¶���4�䣬���������[$a$]";
var not3apptupians="http://imgcdn.not3.com/not3files/8590/not3index/2019512193543969.jpg[$a$]http://imgcdn.not3.com/not3files/8590/not3index/2019512193528689.jpg[$a$]http://imgcdn.not3.com/not3files/8590/not3index/2019512193516743.jpg[$a$]http://imgcdn.not3.com/not3files/8590/not3index/201951219356546.jpg[$a$]http://imgcdn.not3.com/not3files/8590/not3index/2019512193448342.jpg[$a$][$a$][$a$]";
var not3apptaocans="������A��53�����ę́��1��6ƿ 4600Ԫ[$a$]������A��53�����ę́��2��12ƿ  9000Ԫ[$a$]������A��53�����ę́��1��6ƿ 4600Ԫ[$a$]������C��53�����ę́��3��18ƿ  13000Ԫ[$a$]������A��53�����ę́��2��12ƿ  9000Ԫ[$a$]������A��53�����ę́��2��12ƿ  9000Ԫ[$a$]������D��53�����ę́��4��24ƿ   17000Ԫ[$a$]";

var not3appdianhua=not3appdianhuas.split("[$a$]");
var not3appcity=not3appcitys.split("[$a$]");
var not3apppingjia=not3apppingjias.split("[$a$]");
var not3apptupian=not3apptupians.split("[$a$]");
var not3appstar=not3appstars.split("[$a$]");
var not3apptaocan=not3apptaocans.split("[$a$]");

function GetDateStr(AddDayCount) { 
var dd = new Date(); 
dd.setDate(dd.getDate()+AddDayCount);//��ȡAddDayCount�������� 
var y = dd.getFullYear(); 
var m = dd.getMonth()+1;//��ȡ��ǰ�·ݵ����� 
var d = dd.getDate(); 
return y+"-"+m+"-"+d; }

    strVar += "<style>\n";
        strVar += ".not3comment{margin:0;padding:0;font:12px/150% tahoma,arial,Microsoft YaHei,Hiragino Sans GB,\"\\u5b8b\\u4f53\",sans-serif}.mt{background-color:#f7f7f7;border:1px solid #eee;padding:10px;font:700 14px \"microsoft yahei\"}.not3comment .tag-list{height:22px;overflow:hidden}.not3comment .tag-list span{display:inline-block;line-height:20px;padding:0 9px;border:1px solid #e0e0e0;border-radius:2px;margin-right:10px;margin-bottom:10px;color:#999;cursor:pointer}.not3comment .not3comment-info{overflow:hidden;zoom:1;padding:25px 0}.not3comment .not3comment-info .not3comment-percent{width:90px;padding:15px 0 0 40px;float:left}.not3comment .not3comment-info .percent-tit{font-size:12px;color:#666;font-weight:400}.not3comment .not3comment-info .percent-con{line-height:110%;font-size:45px;color:#E4393C;font-family:arial}.not3comment .not3comment-info .percent-con span{font-size:23px}.not3comment .not3comment-info .percent-info{margin-left:90px}.not3comment .not3comment-info .percent-info .tag-list{height:auto;overflow:visible}.not3comment .not3comment-info .percent-rate{padding-top:15px;height:60px;overflow:hidden;zoom:1}.not3comment .not3comment-info .inner-rate{height:10px;overflow:hidden;border-radius:5px;background:#e4393c}.not3comment .not3comment-info .rate-info{color:#e4393c}.not3comment .not3comment-info .rate-info span{color:#999;float:right}.not3comment .not3comments-list{min-height:93px}.not3comment .not3comments-list .ui-page-wrap{text-align:right;padding-top:15px}.not3comment .not3comment-item{zoom:1;padding:15px;border-bottom:1px solid #ddd}.not3comment .not3comment-item .tag-list{padding-bottom:12px}.not3comment .not3comment-item .tag-list span{cursor:text}.not3comment .not3comment-item .tag-list span:hover{color:#999;border-color:#e0e0e0}@media screen and (max-width:481px){.not3comment .not3comment-item .user-column{margin-bottom:10px}.not3comment .not3comment-item .user-column div{display:inline}.J-pic-view-wrap img{max-width:90%;margin-bottom:10px}.not3comment .not3comment-info .percent-con{font-size:25px}}@media screen and (min-width:481px){.not3comment .not3comment-item .user-column{width:80px;float:left}.not3comment .not3comment-item .not3comment-column{margin-left:90px}.J-pic-view-wrap img{max-width:500px;margin-bottom:10px}}.not3comment .not3comment-item .user-info{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.not3comment .not3comment-item .user-info img{border-radius:50%;margin-right:5px}.not3comment .not3comment-item .user-level{padding-top:3px}.not3comment .not3comment-item .user-level span{color:#088000;margin-right:8px}.not3comment .not3comment-item .not3comment-star{width:78px;height:14px;background:url(https://img.alicdn.com/imgextra/i4/398223532/TB2M7f4aTIlyKJjSZFrXXXn2VXa_!!398223532.png) no-repeat}.not3comment .not3comment-item .star0{background-position:-80px 0}.not3comment .not3comment-item .star1{background-position:-64px 0}.not3comment .not3comment-item .star2{background-position:-48px 0}.not3comment .not3comment-item .star3{background-position:-32px 0}.not3comment .not3comment-item .star4{background-position:-16px 0}.not3comment .not3comment-item .star5{background-position:0 0}.not3comment .not3comment-item .not3comment-con{font-size:14px;line-height:180%;color:#333}.not3comment .not3comment-item .order-info{float:left;color:#999}.not3comment .not3comment-item .order-info span{margin-right:20px}.not3comment .not3comment-item .pic-list{padding-bottom:15px}.not3comment .not3comment-item .pic-list img{border:1px solid #e2e2e2;padding:1px;margin-right:6px}.not3comment .not3comment-item .pic-list .current img{border:2px solid #e53e41;padding:0}.not3comment .not3comment-item .pic-view{position:relative;border:1px solid #e3e3e3;margin:7px 0 11px;float:left}.not3comment .not3comment-item .not3comment-time{color:#999;clear:both}.not3comment .not3comment-item .append-time{color:#999}.not3comment .not3comment-message:after{content:\".\";height:0;visibility:hidden;display:block;clear:both}.J-thumb-img img{width:40px;height:40px;cursor:pointer}.user-info img{width:25px;height:25px}\n";
    strVar += "<\/style>\n";
    strVar += "<div class=\"not3comment\">\n";
    strVar += "	<div class=\"mt\">��Ʒ����<\/div>\n";
    strVar += "	<div class=\"mc\">\n";
    strVar += "		<div class=\"not3comment-info J-not3comment-info\" style=\"border-bottom: 1px solid #ddd;\">\n";
    strVar += "			<div class=\"not3comment-percent\">\n";
    strVar += "				<strong class=\"percent-tit\">������<\/strong>\n";
    strVar += "				<div class=\"percent-con\">\n";
    strVar += "					"+99.9+"<span>%<\/span>\n";
    strVar += "				<\/div>\n";
    strVar += "			<\/div>\n";
    strVar += "			<div class=\"percent-info\">\n";
    strVar += "				<div class=\"tag-list\">\n";
for(var i=0;i<not3appbiaoqian.length;i++){
    strVar += "					<span>"+not3appbiaoqian[i]+"<\/span>\n";
}
    strVar += "				<\/div>\n";
    strVar += "			<\/div>\n";
    strVar += "		<\/div>\n";
    strVar += "		<div class=\"J-not3comments-list not3comments-list ETab\">\n";
    strVar += "			<div class=\"tab-con\">\n";
    strVar += "				<div id=\"not3comment-0\" data-tab=\"item\">\n";
for(var i=0;i<not3appdianhua.length;i++){
if(not3appdianhua[i] != "" && not3appdianhua[i] != "undefined"){
    strVar += "                    <!--kaishi-->\n";
    strVar += "					<div class=\"not3comment-item\">\n";
    strVar += "						<div class=\"user-column\">\n";
    strVar += "							<div class=\"user-info\">\n";
    strVar += "								<img src=\"https://img.alicdn.com/imgextra/i3/398223532/TB2XNFoa2kmyKJjSZFmXXX1EFXa_!!398223532.gif\" class=\"avatar\"> <div>"+not3appdianhua[i]+"<\/div>\n";
    strVar += "							<\/div>\n";
    strVar += "							<div class=\"user-level\">\n";
    strVar += "								<span style=\"color:#e1a10a\">"+not3appcity[i]+"<\/span>\n";
    strVar += "							<\/div>\n";
    strVar += "						<\/div>\n";
    strVar += "						<div class=\"not3comment-column J-not3comment-column\">\n";
    strVar += "							<div class=\"not3comment-star star"+not3appstar[i]+"\">\n";
    strVar += "							<\/div>\n";
    strVar += "							<p class=\"not3comment-con\">\n";
    strVar += not3apppingjia[i]+"\n";
    strVar += "							<\/p>\n";
    strVar += "							<div class=\"pic-list J-pic-list\">\n";
if (not3apptupian[i] != "" && not3apptupian[i] != "undefined"){
    tupin=not3apptupian[i].split("[tu]");
    for(var j=0;j<tupin.length;j++){
        if (tupin[j].indexOf("http")>-1){
            strVar += "								<a name=\"showimg"+i+"\" class=\"J-thumb-img\"><img src='"+tupin[j]+"'><\/a>\n";
        }
    }
}
    strVar += "							<\/div>\n";
    strVar += "							<div id=\"showimg"+i+"\" class=\"J-pic-view-wrap clearfix\"><\/div>\n";
    strVar += "							<div class=\"not3comment-message\">\n";
    strVar += "								<div class=\"order-info\">\n";
    strVar += "									<span>"+not3apptaocan[i]+"<\/span><span>"+GetDateStr(-1)+"<\/span>\n";
    strVar += "								<\/div>\n";
    strVar += "							<\/div>\n";
    strVar += "						<\/div>\n";
    strVar += "					<\/div>\n";
    strVar += "                    <!--����-->\n";
}}
    strVar += "\n";
    strVar += "				<\/div>\n";
    strVar += "			<\/div>\n";
    strVar += "		<\/div>\n";
    strVar += "	<\/div>\n";
    strVar += "<\/div>\n";
    
$(document).ready(function(){
     $("#not3apppingjia").html(strVar);
	 $(".J-pic-list a").bind("click",function(){
			var o = $(this);
			if(!o.hasClass("current")){
				$(".J-pic-list a").removeClass("current");
				o.addClass("current");
			}
			$("#"+this.name).html(o.html());
		});
});
// e12432-��������ģ��
