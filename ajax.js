
function ajax()
{
var xhttp = new XMLHttpRequest();
console.log(xhttp);
xhttp.onreadystatechange = function(){
    console.log("xhttp",xhttp);
    if(this.readyState==4&&this.status==200){
        var response = JSON.parse(this.responseText);
        console.log(response);
        var Jgrocery = response.item;
        var output = "<table class='table table-bordered'><tr><th>Serial No</th><th>Name</th><th>Quantity</th><th>Unit</th><th>Department</th><th>Notes</th></tr>";
        
        for(i=0;i<Jgrocery.length;i++){
            output +="<tr><td>"+Jgrocery[i].SerialNo+"</td><td>"+Jgrocery[i].Name+"</td><td>"+Jgrocery[i].Quantity+"</td><td>"+Jgrocery[i].Unit+"</td><td>"+Jgrocery[i].Department+"</td><td>"+Jgrocery[i].Notes+"</td></tr>";
        }
        output += "</table>";
        document.getElementById("grocery").innerHTML = output;
        console.log(output);
    }
}
xhttp.open("GET","grocery.json",true);
xhttp.send();
}