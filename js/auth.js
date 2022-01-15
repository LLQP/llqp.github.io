var hashcode =
  "df73440a833e4e8f9358a070e77d4767844a3725d34d5b65a6777ec635ad7a5a";
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let passcode = getCookie("passcode");
  if (passcode != "") {
  } else {
    passcode = prompt("请输入访问口令：", "");
  }

  if (passcode != "" && passcode != null) {
    var hash = CryptoJS.SHA256(passcode).toString(CryptoJS.enc.Base64);
    if (hash.toUpperCase() == hashcode.toUpperCase()) {
      setCookie("passcode", passcode, 30);
    } else {
      alert("密码错误，请发邮件到 bekecc@hotmail.com 索取访问口令！");
      window.stop();
      window.location.replace("/");
    }
  }else{
    window.stop();
    window.location.replace("/");
  }
}