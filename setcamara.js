


var IE = document.all?true:false


if (!IE) document.captureEvents(Event.MOUSEMOVE)


document.onmousemove = getMouseXY;


var tempX = 0
var tempY = 0


function getMouseXY(e) {
  if (IE) { 
    tempX = event.clientX + document.body.scrollLeft
    tempY = event.clientY + document.body.scrollTop
  } else {  
    tempX = e.pageX
    tempY = e.pageY
  }  

  if (tempX < 0){tempX = 0}
  if (tempY < 0){tempY = 0}  

  document.Show.MouseX.value = tempX
  document.Show.MouseY.value = tempY
  return true
}

function a(){
  var x = document.createElement("IMG"); // 攝影機圖片
  x.setAttribute("src", "img/cam.jpg"); // 攝影機圖片位址
  x.setAttribute("width", "30");
  x.setAttribute("height", "20");
  
  document.body.appendChild(x);
  
  document.getElementById("tx").innerHTML=tempX; // 傳tx的值給html
  document.getElementById("ty").innerHTML=tempY; // 傳ty的值給html
  
  
  var pro = window.prompt("請輸入攝影機名稱： ")  //跳出輸入的視窗
  alert("新增成功");
  document.getElementById("pro").innerHTML=pro; //pro = 輸入的攝影機名字
 
  $(x).css({top: tempY, left: tempX, position:'absolute'});  // 根據使用者按下按鈕的座標設定攝影機位置
  
  var btn=document.createElement("BUTTON"); // 新增一個button 位置在攝影機的img x+30 y+5的位置
  var t=document.createTextNode(pro);  
    btn.appendChild(t);
	document.body.appendChild(btn);  
    $(btn).css({top: tempY-1, left: tempX+32
                , position:'absolute'});

}