let inp=document.querySelector(".inp input");
let add=document.querySelector(".add")
let inn=document.querySelector(".inner");

  

    document.addEventListener("click", (n)=>{
        if(n.target.classList.contains("del")){
            n.target.closest(".todo").remove();
            num();
        }
    })
add.addEventListener("click",()=>{
   
    if(inp.value!=""){
    let d=document.createElement("div");
    d.classList.add("todo");
    inn.appendChild(d);

    let d2=document.createElement("div");
    d2.style.display="flex";
    d.appendChild(d2);

    let co=document.createElement("h3");
    co.classList.add("cou");
    d2.appendChild(co);
    num();

    let check=document.createElement("input");
    check.setAttribute("type","checkbox");
     d2.appendChild(check);

    let p=document.createElement("p");
     d.appendChild(p);
    p.textContent=inp.value;

    let del=document.createElement("button");
    del.classList.add("del");
    del.textContent="delete"
    d.appendChild(del);

    check.addEventListener("change",()=>{
        p.classList.toggle("pr")
     })
     inp.value="";
    
}
    });
    
    function num(){
        let n=document.querySelectorAll(".cou");
       
        n.forEach((e,i)=> {
            e.textContent=`${i+1} .`;
        });
    }


 


