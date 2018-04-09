console.log('loaded');

// document.querySelector('h1').textContent = 'Title'

$('h1').text('Title').click(function(event) {
	console.log(event);
});

$('<a>', {
	href: "Google.com", 
	target: "_blank", 
	text: "Google",
	click: function (e) {
		e.preventDefault();
		console.log('I thought it\'s Google page ');
	},
	css: {textDecoration: "none"},
}).appendTo('body');


var browsers = JSON.parse(localStorage.getItem('browsers'))
buildBrowserList(browsers);

function buildBrowserList(browsers) {
	for (var i = 0; i < browsers.length; i++) {
		createBrowserNote(browsers[i]).appendTo('body')
	}
}

function createBrowserNote(browser) {
	var browserObj = $('<dl>');
	
	var nameKey = createBrowserKey('name').appendTo(browserObj);
	var nameValue = createBrowserValue(browser.name).appendTo(browserObj);

	var ownerKey = createBrowserKey('owner').appendTo(browserObj);
	var ownerValue = createBrowserValue(browser.owner).appendTo(browserObj);

	var rankKey = createBrowserKey('rank').appendTo(browserObj);
	var rankValue = createBrowserValue(browser.rank).appendTo(browserObj);

	return browserObj;
}

function createBrowserKey(key) {
	return $('<dt>', {
		text: toCapitalCase(key),
		class: "browser-rank-key", 
	});	
}
function createBrowserValue(value) {
	return $('<dd>', {
		text: value,
		class: "browser-rank-value", 
		dblclick: function (dblclickEvent) {
			var dd = $(dblclickEvent.target);
			var previous = dd.text();
			dd.html($('<input>', {
				type: "text", 
				value: previous,
				keyup: function (keyupEvent) {
					var input = $(keyupEvent.target);
					switch (keyupEvent.keyCode) {
						case 13: // enter
							var newValue = input.val();
							dd.html(newValue);
							break;
						case 27: // Esc
							dd.html(previous);
							break;
					}

				}
			}))
		}, 
	});	
}
function toCapitalCase(string) {
	return string[0].toUpperCase() + string.slice(1)
}

// function createBrowserNote(browser) {
// 	var browserObj = $('<dl>');
	
// 	var nameKey = $('<dt>', {
// 		text: 'name',
// 		class: "browser-name", 
// 	}).appendTo(browserObj);
// 	var nameValue = $('<dd>', {
// 		text: browser.name,
// 		class: "browser-name-value", 
// 	}).appendTo(browserObj);

// 	var ownerKey = $('<dt>', {
// 		text: 'owner',
// 		class: "browser-owner", 
// 	}).appendTo(browserObj);
// 	var ownerValue = $('<dd>', {
// 		text: browser.owner,
// 		class: "browser-owner-value", 
// 	}).appendTo(browserObj);

// 	var rankKey = $('<dt>', {
// 		text: 'rank',
// 		class: "browser-rank", 
// 	}).appendTo(browserObj);
// 	var rankValue = $('<dd>', {
// 		text: browser.rank,
// 		class: "browser-rank-value", 
// 	}).appendTo(browserObj);

// 	return browserObj;
// }
// var browsers = [
// 	{name: "Chrome", owner: 'Google', rank: 10},
// 	{name: "Firefox", owner: 'Mozilla', rank: 9},
// 	{name: "Edge", owner: 'Microsoft', rank: 8},
// 	{name: "IE", owner: 'Microsoft', rank: 5},
// 	{name: "Safari", owner: 'Apple', rank: 4},
// ];
// localStorage.setItem('browsers', JSON.stringify(browsers));
