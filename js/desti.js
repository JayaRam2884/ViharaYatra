var priceaddress = document.getElementsByClassName("valueprice");
var rangeinfoaddrs = document.getElementsByClassName("rangeinfo")[0];
var infoshoweraddrs = document.getElementById("price-range-value");
function rangechanger(){
    var idarray=[];
    infoshoweraddrs.innerHTML=`0$-${rangeinfoaddrs.value}$`;
    for(let i=0;i<=10;i++){
        idarray.push(parseInt(priceaddress[i].id))
    }
    for(let j=0;j<idarray.length;j++){
        if(rangeinfoaddrs.value > idarray[j]){
            let x= document.getElementById(`${idarray[j]}`);
            console.log(1);
            x.setAttribute("style","display:block");
        }
        else{
            let x= document.getElementById(`${idarray[j]}`);
            x.setAttribute("style","display:none");
        }
    }
    let y= document.getElementsByClassName("moreplaces");
    y[0].setAttribute("style","display:none")
    
}



