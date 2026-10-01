
function abc()
{
    alert("welcome to javascript");
}


function apidata()
{
    fetch("https://dummyjson.com/products").then((r)=>{
        return r.json()
    }).then((d)=>{
        console.log(d);
        var datalist = d.products;

            var temp = datalist.map((c)=>{
                return `<div class="col-md-3">
                <div class="card shadow mt-2 cbg text-white">
                    <img src="${c.thumbnail}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${c.brand}</h5>
                        <p class="card-text">${c.description}</p>
                    </div>
                </div>
            </div>`
            });
        var jslist = document.getElementById("serverlist");
            jslist.innerHTML=temp.join("");

    })
}

var i=1;
$(document).ready(function(){

    $("#cbtn").click(function(){
        if(i==1)
        {
            $("#mypass").attr("type","text");
            $("#cbtn i").addClass("fa-eye-slash");  
            i++;
        }
        else
        {
             $("#mypass").attr("type","password");
            $("#cbtn i").removeClass("fa-eye-slash");
            i=1;
        }
    })
})