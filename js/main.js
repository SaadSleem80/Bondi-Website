let section=document.querySelectorAll(".nav-link");
section.forEach(function(element){
    element.addEventListener("click",function(el){
        el.preventDefault()
        document.querySelector(el.target.dataset.section).scrollIntoView({
            behavior:"smooth"
        })
    })
})
// img section
let imgs=document.querySelectorAll(".img img")
console.log(imgs)
imgs.forEach(function(element){
    element.addEventListener("click",function(ele){
        let overlay=document.createElement("div");
        overlay.className="overlay"
        document.body.appendChild(overlay)
        // 
        imgDiv=document.createElement("div")
        imgDiv.className="img-div"
        overlay.appendChild(imgDiv)
        // close button
        closebtn=document.createElement("span")
        closeText=document.createTextNode("X")
        closebtn.className="close"
        closebtn.appendChild(closeText)
        imgDiv.appendChild(closebtn)
        // img
        imgBox=document.createElement("img");
        imgBox.src=element.src
        imgDiv.appendChild(imgBox)
        // close
        closebtn.onclick=function(){
            overlay.remove()
            imgDiv.remove()
        }        

    })
})