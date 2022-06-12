function id(id){
    return document.getElementById(id);
}
function cls(cls){
    return document.getElementsByClassName(cls);
}
function clr(expbtn1){
    var clr = cls(expinp);
    for(var i=0;i<clr.length;i++){
        clr[i].value=";"
    }
    
}