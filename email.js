const btn = document.querySelector('button');
const inputs = document.querySelector('form');
btn.addEventListener("click", function(){
    Email.send({
         Host:"smtp.gmail.com",
         Username : "studactieeevnit@gmail.com" ,
         Password: "yhzbvyvzyhprdilt",
         To: "studactieeevnit@gmail.com",
         From : inputs.elements["email"].value,
         Subject : "Contact Form Response from website",
         Body: inputs.elements["name"].value + "<br>" + inputs.elements["phone"].value  + "<br>" + inputs.elements["message"].value

        
    }).then(function(response){
        if (response == 'OK') {
            alert("Mail sent successfully");
        }
        else {
            throw new Error ("Error: " + response.statusText);
        }
    });
});