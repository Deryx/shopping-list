// JavaScript Document

$(document).ready( function() {
		// Add an item on keypress, "enter"
		$(document).on( "keypress", function(e) {
			if (e.which == 13) {
				e.preventDefault();
				var inputItem = $("#tbListItem").val();
				addItem( inputItem );
				$('#tbListItem').val("");
			}
		});

		// Add an item using the "Add Item" button
		$("#btnAddItem").on("click", function(e) {
				var inputItem = $( "#tbListItem" ).val();
				addItem( inputItem );
                $('#tbListItem').val("");
			}
		 );

		// Remove an item pressing the "x"
		$(document).on("click", ".glyphicon", function() {
				$(this).closest('li').remove();
			}
		);

		// Remove item(s) using "Remove Item(s)" button
		$("#btnRemoveItem").on( "click", function(e) {
				removeItems();
			}
		);
	}
);

function addItem(newItem) {
	if (newItem != null && newItem != "") {
		var listItem = "<li><input type='checkbox' />" + newItem + "<span class='glyphicon glyphicon-remove'></span></li>";

		$('ul').append(listItem);
	}
}

function removeItems() {
    $("li").remove(":has(input[type='checkbox']:checked)");
}
