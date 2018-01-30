// OGÓLNA FUNKCJA

var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': 2848,
  'X-Auth-Token': "4b9af2dc8deca98de3fdf1852c2e957a",
};

$.ajaxSetup({
	headers: myHeaders
});


$.ajax({
    url: baseUrl + '/board',
    method: 'GET',
    success: function(response) {
      setupColumns(response.columns);
    }
});

function setupColumns(columns) {
    columns.forEach(function (column) {
    	var col = new Column(column.id, column.name);
        board.createColumn(col);
        setupCards(col, column.cards);
    });
}

function setupCards(col, cards) {
	cards.forEach(function (card) {
        var card = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
    	col.createCard(card);
  	})
}

function createCard() {
			var $card = $('<li>').addClass('card');
			var $cardDescription = $('<p>').addClass('card-description').text(self.description);
			var $cardDelete = $('<button class="btn-default btn-card">').addClass('btn-delete').text('x');

			$cardDelete.click(function(){
				self.removeCard();
			});

			$card.append($cardDelete)
				 .append($cardDescription);
			return $card;
}






