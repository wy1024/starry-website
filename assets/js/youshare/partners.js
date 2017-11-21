this.httpGetAsync("http://youshi.back4app.io/api/sales", (res) => {
    var sales = JSON.parse(res).results;
    var resultTable = "<Table style='border:1px solid rgb(200, 200, 200);'><tr><th>Name</th></tr>";
    var list = [];
    for(var i = 0; i < sales.length; i++){
        var name = sales[i].name;
        list.push(name);
        resultTable += "<tr style='border:1px solid rgb(200, 200, 200);'><td style='padding:5px'>" + name + "</td></tr>";
    }
    resultTable += "</Table>";
    document.getElementById("sales").innerHTML = resultTable;
});

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}