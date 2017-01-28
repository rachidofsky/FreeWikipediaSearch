//searches for the entered text when enter is pressed
$(document).keypress(function(e){
   if(e.which == 13) { 
        //calls start function
        start();
        //the resultant search is shown at the top of the page, smooth scrooling the non-resultant part
        $('body,html').animate({scrollTop: 400}, 3000);
      }
});

function start(){
    $.ajax({
      //obtains JSON data
      url :  'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch='+$('#inputSearch').val(),
     
      dataType:'jsonp',
      type: 'POST',
      headers: { 'Api-User-Agent': 'Example/1.0' },
      //call back function which shows the JSON data obtained
      success: function(data){
        //for storing the html obtained from JSON data
        var infoHTML ='';
        //stores search list JSON
        var resJSON = data.query.search;
        
        console.log("data is:" + data);
        console.log("search list is:" +resJSON);
        console.log(resJSON.length);
        
        //loops through each item of the list
        for(var i=0;i<resJSON.length;i++){
            var title = resJSON[i].title;
          console.log(title);
            infoHTML +=  '<a target="_blank" href="https://en.wikipedia.org/wiki/'+title+'\"'+'>'         +'<p>' + title + '</p></a>';
            infoHTML += '<p>' + resJSON[i].snippet + '</p>';
            infoHTML += '</br></br>';
            $('#success').addClass('resBack container-fluid ').html(infoHTML);
        }
      }
  });
}

  
  
     
