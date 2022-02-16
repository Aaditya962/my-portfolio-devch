const levels = document.querySelectorAll(".level")
const btns = document.querySelectorAll(".proj-but")
const resp=document.querySelectorAll(".resp")
const react=document.querySelector(".react")
levels.forEach((lvl) => {
    const level = lvl.innerHTML;
     lvl.style.width = `${level}%`;
    lvl.innerHTML=""
})
btns.forEach((btn) =>{
    btn.addEventListener("click", () => {
        const button = btn.classList[1]
        btn.classList.toggle("isactive")
        console.log(button)
        
        switch(button){

            case "respo":{
                if(btn.classList[2] == "isactive")
                    react.style.display = "none"
                else{
                    react.style.display = "flex"
                }
                break;
            }
            case "reac":{
                if(btn.classList[2] == "isactive")
                    resp.forEach(re =>{
                        re.style.display = "none"
                    })
                else{
                    resp.forEach(re =>{
                        re.style.display = "flex"
                    })
                }
                break;
            }
        }
    })
})