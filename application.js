// JavaScript Document

var listArray = new Array();

$(document).ready( function()
	{
		$( "#btnAddItem" ).on( "click", function( e )
			{
				var inputItem = $( "#tbListItem" ).val();
				add( inputItem );
				$( "#tbListItem" ).val( "" );
				displayList();
			}
		 );
		 
		 $( "#btnRemoveItem" ).on( "click", function( e )
		 	{
				check_off();
			}
		);
	}
);

function displayList()
{
	$( "div#list" ).html( function()
	{
		var listLength = listArray.length;
		var listDisplay = "<ul>";
		for ( var i = 0; i < listLength; i++ )
		{
			listDisplay += "<li><input type='checkbox'>" + listArray[i] + "</li>"
		}
		listDisplay += "</ul>";
		
		return listDisplay;
	});
}

function add( newItem )
{
	if ( newItem != "" )
		listArray.push( newItem );
}

function check_off()
{
	var listItems = $( "li" );
	
	$.each( listItems.has( "input[type='checkbox']:checked" ), function()
	{
		var i = listArray.indexOf( this );
		listArray.splice( i, 1 );
	});
	
	displayList();
}
