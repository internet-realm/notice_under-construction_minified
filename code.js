var emailVal;function getInputValue(){emailVal=document.getElementById("email").value}fetch("https://mufasa-cc.herokuapp.com/cat-image").then((function(e){console.log(e.status)})).catch((function(e){console.log("Something went wrong.",e)}));var errorMsg=document.getElementById("email-validate");function validateEmail(e){success.style.display="none",error.style.display="none",errorMsg.style.display="none";return!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)}var btn=document.getElementById("send");function sendData(){var e=document.getElementById("success"),t=document.getElementById("error");fetch("https://mufasa-cc.herokuapp.com/subscribe",{method:"POST",body:JSON.stringify({email:emailVal,subscription:!1}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(n){console.log(n.status),e.style.display="block",t.style.display="none"})).catch((function(t){console.log("Something went wrong.",t),e.style.display="none",t.style.display="block"}))}btn.onclick=function(){getInputValue(),validateEmail(emailVal)?(document.getElementById("email").value="",sendData(),errorMsg.style.display="none"):errorMsg.style.display="block"};