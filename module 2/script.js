 var tuan =document.getElementById("myselect");
    tuan.addEventListener("change", changed);
    function changed(){
    var select = document.getElementById("myselect").value;
    confirm(select);}
