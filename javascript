<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="javascript.css">  
        <script src="https://code.jquery.com/jquery-3.6.0.js"></script>         
    </head>
    <body>
        <h1>Javascript</h1>
        <p id="demo">Thông tin cá nhân.</p>
        <button type="button" onclick="ten()">Tên</button> 
        <button type="button" onclick="ngaysinh()">Ngày Sinh</button> 
        <button type="button" onclick="gioitinh()">Giới Tính</button> 
        <script src="javascript.js"></script>           
    </body>
</html>
  <style>
    html{
    background-color: #9e9e9e;
}
body{
    text-align: center;
}
/* button{
    background-color: aqua;
    padding: 10px 20px;
    margin: 20px;
    border-radius: 30px;
    cursor: pointer;
    font-weight: bold;
} */

#demo{
    font-weight: bold;
    background-image: linear-gradient(45deg,  #e53935, #ffff00);
    padding: 50px;
    width: 300px;
    margin: 0 auto;
    border-radius: 30px;
    font-size: 20px;
}
button {
    border: 4em;
    cursor: pointer;
    outline: none;
    font-size: 16px;
    -webkit-transform: translate(0);
    transform: translate(0);
    background-image: linear-gradient(45deg, #ffff00, #e53935);
    padding: 10px 20px;
    border-radius: 65px;
    box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.438);
    -webkit-transition: box-shadow 0.25s;
    transition: box-shadow 0.6s;
    color: rgb(0, 0, 0);
    margin: 20px;
    font-weight: bold;
  }
  
  button .text {
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(45deg, #ffff00, #e53935);
  }
  
  button:after {
    content: "";
    border-radius: 18px;
    position: absolute;
    margin: 4px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    background: #fff;
  }
  </style>
  <script>
  
  button:hover {
    background-image: linear-gradient(-45deg, #ffff00, #e53935);
    box-shadow: 0 12px 24px rgba(128, 128, 128, 0.1);
  }
    function ten() {
    document.getElementById("demo").innerHTML = "Hoàng Vỹ";
  }
function ngaysinh() {
    document.getElementById("demo").innerHTML = "28/08/2003";
  }
function gioitinh() {
    document.getElementById("demo").innerHTML = "Nam";
  }
</scirpt> 
d
