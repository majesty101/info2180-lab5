window.onload = function(){
    
    var httprequest = new XMLHttpRequest();
    
    
  

    var loadbtn = document.getElementById('lookup');
    var  aaa = document.getElementById("country").value;

    loadbtn.addEventListener('click', function(e){
        e.preventDefault();
        output = document.getElementById("result");
        var url = "http://localhost/info2180-lab5/world.php?country=Jamaica";
        httprequest.open("GET", url+ aaa, true);
        httprequest.onreadystatechange = function() {
            console.log("haiiii");
            if(httprequest.readyState == XMLHttpRequest.DONE && httprequest.status == 200){
                console.log("reachiiii");
                var result= httprequest.responseText;
                output.innerHTML = result;
            }
    };
    httprequest.send();
    });

    
    var lookupcities = document.getElementById('lookupcities');

    var output = document.getElementById("result");
    lookupcities.addEventListener('click', function(e){
        e.preventDefault();
        var url = "http://localhost/info2180-lab5/world.php?country=Jamaica&context=cities";
        var output = document.getElementById("result");
        httprequest.open("GET", url, true);
        httprequest.onreadystatechange = function() {
            console.log("ha");
            if(httprequest.readyState == XMLHttpRequest.DONE && httprequest.status == 200){
                console.log("reach");
                var result= httprequest.responseText;
                output.innerHTML=result;
            }
    };
    httprequest.send();
    });

          
        
            
    

}