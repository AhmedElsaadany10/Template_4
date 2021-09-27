let flip=document.querySelector("#signup");
       let form1=document.querySelector("#form1");
       let flip2=document.querySelector("#signin");
       let form2=document.querySelector("#form2");
       let Form=document.getElementById("f1");
       let password=document.querySelector("#password");
       let password2=document.querySelector("#password2");
       let arrayOfBackground=["images/Signin.gif","images/Securelogin.gif","images/Forms.gif"];
        flip2.onclick=function(){
            form1.classList.toggle("hidden");     
            form2.classList.toggle("hidden");  
            changeBackground();         
        }
        flip.onclick=function(){
            form2.classList.toggle("hidden");    
            form1.classList.toggle("hidden");   
            changeBackground();   
        }
        function changeBackground(){
            if(form1.className=="hidden"){
                Form.style.backgroundImage="url('images/Forms.gif')";
            }
            if(form2.className=="hidden"){
                Form.style.backgroundImage="url('images/Signin.gif')";
            }
        }
        password.addEventListener("focus", focus, true);
        password.addEventListener("blur", blur, true);

        password2.addEventListener("focus", focus, true);
        password2.addEventListener("blur", blur, true);

        function focus(){
            Form.style.backgroundImage="url('images/Securelogin.gif')";
        }
        function blur(){
            changeBackground();
        }
        window.onload=function(){
            Form.classList.toggle("fade");
        }
        function ToLogin(){
             form1.classList.toggle("hidden");     
            form2.classList.toggle("hidden");  
            changeBackground();     
        }
        