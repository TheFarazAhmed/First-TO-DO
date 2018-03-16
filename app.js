function add()
{
    var val = document.getElementById("val");
    var list = document.getElementById("list");
    var li = document.createElement("li");
    var btn = document.createElement("button");
    btn.className = "btnclass";
    var btnText = document.createTextNode("Delete");
    btn.style.color = "red";
    btn.appendChild(btnText);
    
    var text = document.createTextNode(val.value);
    li.appendChild(text);
    li.appendChild(btn);
    list.appendChild(li);
    val.value = "";

        btn.onclick = function () {
            var li= this.parentNode;
            var ul = li.parentNode;
            ul.removeChild(li);
            }
}

function deleteall()
{
 alert('Are you SURE');
 document.getElementById("list").innerHTML="";
}

function f1() { document.getElementById("val").style.backgroundColor= "yellow"; }
function f2() { document.getElementById("val").style.backgroundColor= "lightgreen";  }