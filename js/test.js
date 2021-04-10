
/*
fetch(URL, {
    'method': 'GET',
    'headers': {
        // 'Content-Type' : 'application/json'
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    }
}).then(json => console.log(json)).then(json => console.log(json))
*/
/*
$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
        console.log(data);
    }
});
*/
/*$.ajax({
    url: URL,
    dataType: 'XML',
    success: function(data) {
        console.log(data);
    }
});*/

/*
fetch('https://randomuser.me/api/')
.then(response => response.json())
.then(json => console.log(json))
*/
/*
fetch("https://codetogo.io/api/users.xml")
    .then(response => response.text())
    .then(data => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(data, "application/xml");
    console.log(xml);
})
.catch(console.error);
*/
/*
getPostagePrice = () => {
    fetch(URL)
    .then(response => response.text())
    .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
    .then(data => console.log(data));
}

getPostagePrice()*/

/*
cargar();
function cargar(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if( this.readyState == 4 && this.status == 200 ){
            cargarXML(this);
        }
    };
    xhr.open("GET", URL, true);
    xhr.send();
}

function cargarXML(xml){
    var aa = xml.responseXML;
    console.log(aa);
}
*/










/*
fetch(URL, {
        'mode': 'no-cors',
        'method': 'GET',
        'dataType': 'application/xml',
        'headers': {
            "Access-Control-Allow-Origin": "*"
            // 'Content-Type' : 'application/json'
            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
            // "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"

            // 'cache-control' : 'private, must-revalidate',
            // 'content-encoding': 'gzip',
            // 'content-length': '22130',
            // 'content-type': 'text/xml; charset=UTF-8',
            // 'date': 'Fri, 09 Apr 2021 07:13:53 GMT',
            // 'expires':' Fri, 09 Apr 2021 07:13:58 GMT',
            // 'server': 'Apache',
            // 'vary': 'Accept-Encoding',
            // 'x-frame-options': 'SAMEORIGIN',
            // 'x-powered-by':'PHP/7.0.33'
    }
}) //.then(json => console.log(json))//.then(json => console.log(json))


// .then(response => response.text())
// .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
// .then(str => xmlToJson(str))
// .then(data => console.log(data));
// .then(function(response, aa, bb, cc, dd){
//     console.log(response)
// });

// .then(response => response.json())
// // .then(response => response.text())
// .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
.then(data => console.log(data));
*/

/*
.then(response => response.text())
.then(data => {
    const parser = new DOMParser();
    console.log(parser)
    const xml = parser.parseFromString(data, "application/xml");
    console.log(data)
    console.log(xml);
})
.catch(console.error);
*/
/*
.then(function(resp){
    return resp.text();
})
.then(function(data){
    console.log(data);
})
*/




async function display(){     
    const xmlFetch = await fetch("./yourXMLorXSL.xml")
    const xmlText = await xmlFetch.text()
    const xml = await (new window.DOMParser()).parseFromString(xmlText, "text/xml")

    console.log(xml)
}




/*
$.ajax({
    type: "GET",
    dataType: 'application/xml',
    url: api,
    username: 'diego.juarezh@gmail.com',
    password: 'qweasd',
    crossDomain : true,
    xhrFields: {
        withCredentials: true
    }
})
.done(function( data ) {
    console.log("done");
})
.fail( function(xhr, textStatus, errorThrown) {
    // alert(xhr.responseText);
    // alert(textStatus);
});
*/

// fetch(URL)
// .then(response => response.json())
// .then(json => console.log(json))

/*
fetch(URL, {
    'method': 'GET',
    'headers': {
        // 'Content-Type' : 'application/json'
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    }
}).then(json => console.log(json)).then(json => console.log(json))
*/




function xmlToJson(xml) {

    // Create the return object
    var obj = {};
/*
    if (xml.nodeType == 1) { // element
        // do attributes
        if (xml.attributes.length > 0) {
            obj["@attributes"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
                var attribute = xml.attributes.item(j);
                obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
        }
    } else if (xml.nodeType == 3) { // text
        obj = xml.nodeValue;
    }

    // do children
    if (xml.hasChildNodes()) {
        for (var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if (typeof (obj[nodeName]) == "undefined") {
                obj[nodeName] = xmlToJson(item);
            } else {
                if (typeof (obj[nodeName].push) == "undefined") {
                    var old = obj[nodeName];
                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                }
                obj[nodeName].push(xmlToJson(item));
            }
        }
    }
*/
    return obj;
};