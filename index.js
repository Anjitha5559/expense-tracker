function id(id){
    return document.getElementById(id);
}
function cls(cls){
    return document.getElementsByClassName(cls);
}

function cleartext(){
    var clr1 = cls('spendfield');
    for(var i=0;i<clr1.length;i++)
    {
        clr1[i].value = '';
    }
    };
function clearText(){
    var clr = cls('earnfield');
    for(var i=0;i<clr.length;i++)
    {
        clr[i].value = '';
       }
    };
    
function addexp(){
    var eato = document.getElementById("earntopicfield").value;
    var eaam = document.getElementById("earnamountfield").value;
    console.log(eato+": "+eaam);
    if(eato ==''){
        console.log("Enter the Source of Expense");
        return;
    }
    if(eaam ==''){
        console.log("Enter the Amount Spent");
        return;
    }

}
function addinc(){
    var into = id("spendtopicfield").value;
    var inam = id("spendamountfield").value;
    if(into ==''){
        alert("Enter the Source of Income");
        return;
    }
    if(inam ==''){
        alert("Enter the Amount Earned")
        return;
    }
}
