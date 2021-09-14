function converttemp(element){
    document.getElementById("hightoday").innerText= "24°";
    document.getElementById("lowtoday").innerText= "18°";
    document.getElementById("hightomorrow").innerText= "27°";
    document.getElementById("lowtomorrow").innerText= "19°";
    document.getElementById("highfriday").innerText= "21°";
    document.getElementById("lowfriday").innerText= "16°";
    document.getElementById("highsaturday").innerText= "26°";
    document.getElementById("lowsaturday").innerText= "21°";
}
function acceptbt(element){
    document.getElementById("cookiealert").remove();
}
function loadalert(element){
    alert("Loading weather report...");
}