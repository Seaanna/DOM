function idCheck(id)
{
  var array= [];


  if (id.length >=6 && !id.includes("!") && !id.includes("#") && !id.includes("$")){
    array.push("Valid: True");
  }
  if (!(id.length >= 6)) {
    array.push("Valid: False, reason: User ID too short. [User ID must be at least 6 characters]");
  }
  if (id.includes("!") || id.includes("#") || id.includes("$")){
    array.push("Valid: False, reason: User ID cannot contain '!', '#' or '$'.");
  }
  document.getElementById("outPut").innerHTML = (array);
}




function getId(){
  var userId = document.getElementById("userNameBox").value;
  idCheck(userId);
}


function pwCheck(pw) {
  var pwLength = "";
  var pwIncludes = "";
  var pwIncludesNum = "";
  var pwUpLow = "";
  if (!(pw.length >= 6)) {
    pwLength = ("Valid: False, reason: Password too short. [Password must be at least 6 characters]");
  }
  if (!(pw.includes("!") || pw.includes("#") || pw.includes("$"))) {
    pwIncludes = ( "Valid: False, reason: Password must include '!', '#' or '$'.");
  }
  if (!(pw.includes("1") || pw.includes("2") || pw.includes("3") || pw.includes("4") || pw.includes("5") || pw.includes("6") || pw.includes("7") || pw.includes("8") || pw.includes("9")
  || pw.includes("0"))) {
    pwIncludesNum = ("Valid: False, reason: Password must include at least one number.");
  }
  if (pw == pw.toUpperCase() || pw == pw.toLowerCase()){
    pwUpLow = ("Valid: False, reason: Password must include at least one upper case letter and at least one lower case letter.");
  }
document.getElementById("outPut").innerHTML = (pwLength + " " + pwIncludes + " " + pwIncludesNum + " " + pwUpLow);

  if ((pwLength == "") && (pwIncludes == "") && (pwIncludesNum == "") && (pwUpLow == "")) {
    document.getElementById("outPut").innerHTML = ("PW works");
  }

}


function getPass(){
  var userPass = document.getElementById("passwordBox").value;
  pwCheck(userPass);
}
