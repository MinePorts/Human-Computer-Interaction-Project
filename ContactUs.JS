function validation(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var region=document.getElementById("region").value;
    var Message=document.getElementById("Message").value;
    var agreement=document.getElementById("agreement");
    if(name.length < 3){
        alert("Name must be at least 3 characters");
    }else if(email.length < 11){
        alert("Please fill your email");
    }else if(!email.endsWith("@gmail.com")){
        alert("Email must be end with @gmail.com");
    }else if(region === ""){
        alert("Please select your region");
    }else if(Message.length < 10){
        alert("Message must be at least 10 characters");
    }else if(!agreement.checked){
        alert("Terms and Condition must be checked");
    }else{
        alert("Submited");
    }
}