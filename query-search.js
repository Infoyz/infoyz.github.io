var xmlHttp = null;

function GetCustomerInfo()
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
        if ( xmlHttp.responseText == "Not found" ) 
        {
            var info = eval ( "(" + xmlHttp.responseText + ")" );

            // No parsing necessary with JSON!        
            document.write(info.jsonData[ 0 ]);
        }                    
    }
}
