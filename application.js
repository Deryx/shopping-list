// JavaScript Document

$(document).ready( function() {
		// Add an item on keypress, "enter"
		$(document).on("keypress", function(e) {
			if (e.which == 13) {
				e.preventDefault();
				addItem();
			}
		});

		// Add an item using the "Add Item" button
		$("#btnAddItem").on("click", function(e) {
			addItem();
			}
		 );

		// Remove an item pressing the "x"
		$(document).on("click", ".glyphicon", function() {
				$(this).closest('li').remove();
			}
		);

		// Remove item(s) using "Remove Item(s)" button
		$("#btnRemoveItem").on("click", function(e) {
				removeItems();
			}
		);
	}
);

function addItem() {
	var inputItem = null;
	inputItem = $("#tbListItem").val();
	if (inputItem != null && inputItem != "") {
		var listItem = "<li><input type='checkbox' />" + inputItem + "<span class='glyphicon glyphicon-remove'></span></li>";

		$('ul').append(listItem);
		$('#tbListItem').val("");
	}
}

function removeItems() {
    $("li").remove(":has(input[type='checkbox']:checked)");
}
