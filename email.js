
const inputs = document.querySelector('form');
const btn = document.getElementById('message')
btn.addEventListener("click", function(){
    Email.send({
         Host:"smtp.gmail.com",
         Username : "studactieeevnit@gmail.com" ,
         Password: "yhzbvyvzyhprdilt",
         To: "studactieeevnit@gmail.com",
         From : inputs.elements["email"].value,
         Subject : "Contact Form Response from website",
         Body: inputs.elements["name"].value + "<br>" + inputs.elements["phone"].value  + "<br>" + document.querySelector('textarea').value

        
    }).then(function(response){
        // if (response == 'OK')
        if(1)
         {
            alert("Mail sent successfully");
        }
        else {
            throw new Error ("Error: " + response.statusText);
        }
    });
});