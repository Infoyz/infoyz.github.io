var xmlHttp = null;

function query()
{
    //var query = document.getElementById( "middle-page-search-bar" ).value;
    //var url = "infoyz-bkfighter.rhcloud.com" + query;
    var url = infoyz-bkfighter.rhcloud.com;

    xmlHttp = new XMLHttpRequest(); 
    xmlHttp.onreadystatechange = ProcessRequest;
    xmlHttp.open( "GET", url, true );
    xmlHttp.send( null );
}

function ProcessRequest() 
{
    if ( xmlHttp.readyState == 4 && xmlHttp.status == 200 ) 
    {
        
            var info = eval ( "(" + xmlHttp.responseText + ")" );
            
            console.write(info.jsonData[ 0 ]);
            
    }
}
