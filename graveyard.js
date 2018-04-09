$('#form', {
    submit: function(e) {
        e.preventDefault();
        console.log($('#rows').val(), $('#columns').val());
    }
});

$('<a>', {
    href: "Google.com",
    target: "_blank",
    text: "Google",
    click: function(e) {
        e.preventDefault();
        console.log('I thought it\'s Google page ');
    },
    css: { textDecoration: "none" },
}).appendTo('body');

//old chunk
//make table tag
$('<table>', {
    id: 'resultTable',
    function() {
        console.log('creating table...');
    },
}).addClass('table', 'table-striped').appendTo($('.pre-scrollable'));
//make thead tag
$('<thead>', {
    id: 'resultThead',
    function() {
        console.log('creating thead...');
    },
}).appendTo($('#resultTable'));
//make tbody tag
$('<tbody>', {
    id: 'resultTbody',
    function() {
        console.log('creating tbody...');
    },
}).appendTo($('#resultTable'));
//make th tags
$('tr', {

}).appendTo($('#resultThead'));
$.each(rowArray, function(k, v) {
    $('<th>', {
        scope: "col",
        key: k,
        value: v,
        text: v
    }).appendTo($('#resultThead'));
    console.log("Key: " + k + ", Value: " + v);
});
}



//old chunk end
// $('<table>', {
//     id: 'resultTable',
//     function() {
//         console.log('creating table...');
//     },
// }).append(
//     $('<thead>', {
//         id: 'resultThead',
//         function() {
//             console.log('creating thead...');
//         },
//     }).append($('<tr>', {
//         function() {
//             const thRowArray = [];
//             for (let index = 0; index < colArray.length; index++) {
//                 thRowArray[index] = $('<th>', {
//                     scope: "col",
//                     key: rowArray[index],
//                     value: rowArray[index],
//                     text: rowArray[index],
//                 });
//             }
//             $(this).html(thRowArray);
//         }
//     })),
//     $('<tbody>', {
//         id: 'resultTbody',
//         function() {
//             console.log('creating tbody...');
//         },
//     }),
// ).addClass('table', 'table-striped').appendTo($('.pre-scrollable'));

// function makeTr() {
//     const thRowArray = [];
//     for (let index = 0; index < colArray.length; index++) {
//         thRowArray[index] = $('<th>', {
//             scope: "col",
//             key: colArray[index],
//             value: colArray[index],
//             text: colArray[index],
//         });
//     }
//     $(this).html(thRowArray);
// };