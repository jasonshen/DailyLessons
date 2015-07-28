$( document ).ready(function() {


  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1eCLk63gr9y0Zf19GFihQrnyX0NW67nyniD4D3VZgzb0/pubhtml';

  var tabletop = Tabletop.init(
    { key: public_spreadsheet_url, 
      callback: function(data, tabletop) { console.log(data) },
      simpleSheet: true
    });

$("#reload").click( function(){
	var randNum = Math.floor(Math.random() * tabletop.data().length);
	$("#concept").html(tabletop.data()[randNum].Concept);
	$("#context").html(tabletop.data()[randNum].Context);

});

});
