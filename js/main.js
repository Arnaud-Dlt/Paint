
function selectColor(event)
{
    let colorBox = event.target;
    let color = colorBox.style.backgroundColor;

    sessionStorage.setItem("selectedColor", color);
    console.log(getSelectedColor());
}

function getSelectedColor()
{
    if(sessionStorage.getItem("selectedColor"))
    {
        return sessionStorage.getItem("selectedColor");
    }

    return null;
}

function loadPalette(palette)
{
    let colors = palette;
    
    palette=document.querySelectorAll("body > header > div");
    
        for(let i=0; i < colors.length ; i++){
            palette[i].style.backgroundColor=colors[i];
        }
    // le code de l'étape 1 se passe ici
}


window.addEventListener("DOMContentLoaded", function(){
    loadPalette(["#22f6f3", "#3daf7e", "#ffffff", "#ec8236", "#a9a7ee", "#ecc606", "#f783f2", "#e89e80","#FF0000","#004DFF", "#4BAE20","#D8FF67", "#16A085", "#873600", "#A04000","#839192"]);


    // le code de l'étape 2 se passe ici
    let palette=document.querySelectorAll("body > header > div");
    
        for(let i=0;i<palette.length;i++){
        palette[i].addEventListener("click", selectColor);
    }
    
    
    // le code de l'étape 3 se passe ici
    let color = getSelectedColor(); 
    let divcolor=document.querySelectorAll("body > main > div > div");
    
    
    for(let i=0; i<divcolor.length ;i++)
    {
        divcolor[i].addEventListener("click", function (event){
            if(event.target.style.backgroundColor==="")
            {
                event.target.style.backgroundColor=getSelectedColor();
            }
            else {
                event.target.style.backgroundColor="";
            }
            
            });
    }
    
    let hexacolor=document.querySelectorAll("body > header > input");
    
    for(let i=0;i<hexacolor.length;i++)
    {
        hexacolor[i].addEventListener("click");
        
    }
    
});