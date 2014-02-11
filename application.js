// JavaScript Document
var listArray = new Array( "Turkey Bacon", "Dozen Large Eggs", "American Cheese Slices" );

$(document).ready( function()
	{
		displayList();
		
		$( "#btnAddItem" ).on( "click", function( e )
			{
				var inputItem = $( "#tbListItem" ).val();
				e.preventDefault;
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
	listArray.push( newItem );
}

function check_off()
{
	var listItems = $( "li" );
	
	listItems.has( "input[type='checkbox']:checked" ).remove();
}