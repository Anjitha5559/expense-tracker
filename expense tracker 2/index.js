function id(id){
    return document.getElementById(id);
}
function cls(cls){
    return document.getElementsByClassName(cls);
}




function clr(obj){  
 classes=cls(obj);
 console.log(classes);
 for (var i=0;i<classes.length;i++){
    classes[i].value="";
 }
   
}
function showdata(cat1,amt1,box){
    var cat= id(cat1).value;
    var amt= id(amt1).value;
    if (cat==""){
        alert("plz enter category");
        return ;
    }
   if (amt==""){
        alert("plz enter amount");
        return ;
    }
    id(box).innerHTML+='<div class="data"><div class="datacat">'+cat+'</div><div class="dataamt">'+amt+'</div></div>';    


}

