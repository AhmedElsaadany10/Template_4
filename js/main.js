let bar=document.querySelector("#bar");
        let menu=document.querySelector("#nav2");
        function toggle()
        {
            bar.classList.toggle("fa-times");
            menu.classList.toggle("hidden");     
        }

        function GoToContact()
        {
            window.location.href="#Contact";
        }
        function GoToProducts()
        {
            window.location.href="#Products";
        }
        function Discount(){
            window.location.href="#Discount";
        }
        
        function loader(){
            document.querySelector(".loader-container").classList.toggle("fadeout");
        }
        setTimeout(loader,2000);
        function land(){
            document.querySelector("#Main").classList.toggle("land");
            document.querySelector("#Discount").classList.toggle("land");
            document.querySelector("#Products").classList.toggle("land");
            document.querySelector("#Contact").classList.toggle("land");
            document.querySelector("#Reviews").classList.toggle("land");
            document.querySelector("#about").classList.toggle("land");
        }
        setTimeout(land,2100);
        
        //SearchIcon
        let searchInput=document.querySelector(".inputsearch");
        srch.onclick=function(){
            searchInput.classList.toggle("hidden");
        } 
        let exit=document.querySelector(".X i");
        exit.onclick=function(){
            searchInput.classList.toggle("hidden");
        }

        // sections hightlight
        const sec=document.querySelectorAll('section');
        const navElmnt=document.querySelectorAll('nav a');

        window.addEventListener('scroll',()=>{
            let cur='';
            sec.forEach(section=>{
                const secTop=section.offsetTop;
                const secHight=section.clientHeight;
                if(pageYOffset>=secTop){
                    cur=section.getAttribute('id');
                }
            })
            navElmnt.forEach(a=>{
                a.classList.remove('active');
                if(a.classList.contains(cur)){
                    a.classList.add('active');
                }
            })
        })

        