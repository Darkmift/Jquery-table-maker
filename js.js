console.log('js online');

// $('#form', {
//     submit: function(e) { // not onsubmit, jquery uses JS event names: click, submit, blur etc
//         e.preventDefault();
//     },
// })

// $('#form', {
//     onSubmit: function(e) {
//         e.preventDefault();
//         console.log('YO it workz');
//     },
// });

$('#form').submit(function(e) {
    const cols = $('#columns').val();
    const rows = $('#rows').val();
    let colArray = [];
    let rowArray = [];
    $(this).children().removeClass('has-error');
    e.preventDefault();
    if (!rows || !cols) {
        console.log('empty rows detected!');
        $('.input-group').each(function() {
            $(this).parent('div').addClass('has-error');
        });
    } else {
        $('<div>', {
            text: 'table created! drag to move left right,mousewheel to move up and down.'
        }).addClass('alert alert-info row').insertAfter($('.row:first-child')).fadeTo(3000, 500).slideUp(500, function() {
            $(this).slideUp(500);
        });
        console.log('rows: ' + rows + ' columns: ' + cols);
        $.each(rowArray, function(k, v) {
            arr.push({
                k: v
            });
        });
        for (let indexRow = 0; indexRow < parseInt(rows); indexRow++) {
            rowArray.push(parseInt(indexRow + 1));
            console.log('rowArray: ' + rowArray);
        }
        for (let indexCol = 0; indexCol < parseInt(cols); indexCol++) {
            colArray[indexCol] = rowArray;
            console.log('colArray: ' + colArray);
        }
    }
    //old chunk
    $('.pre-scrollable').html(
        //create tabke
        $('<table>', {
            id: 'resultTable',
            function() {
                console.log('creating table...');
            },
        }).append(
            //create thead
            $('<thead>', {
                id: 'resultThead',
                function() {
                    console.log('creating thead...');
                },
            }).addClass('thead-light').append(
                //create tr in thead
                $('<tr>', {
                    //create the multiple th in thead
                    function() {
                        console.log('creating tr in thead...');
                        const thRowArray = [];
                        thRowArray[0] = $('<th>', {
                            scope: "col",
                            text: '#',
                        });
                        for (let index = 0; index < colArray.length; index++) {
                            name = index + 1;
                            thRowArray.push($('<th>', {
                                scope: "col",
                                key: name,
                                value: name,
                                text: 'title: ' + name,
                            }));
                        }
                        $(this).html(thRowArray);
                    }
                })),
            //create tbody in table
            $('<tbody>', {
                id: 'resultTbody',
                //create multiple tr in tbody
                function() {
                    console.log('creating tr in tbody...');
                    const trArray = [];
                    for (let index = 0; index < rowArray.length; index++) {
                        name = index + 1;
                        trArray[index] = $('<tr>', {
                            id: index,
                            key: name,
                            value: name,
                            // html: tdstring(colArray, index),
                            //html: tdrow(colArray)
                            html: function() {
                                const tdRowArray = [];
                                tdRowArray[0] = $('<th>', {
                                    scope: "col",
                                    text: '#row:' + index,
                                });
                                for (let index = 0; index < colArray.length; index++) {
                                    name = index + 1;
                                    tdRowArray.push($('<td>', {
                                        value: name,
                                        text: name,
                                    }));
                                }
                                return tdRowArray;
                            }
                        });
                    }
                    $(this).html(trArray);
                }
            }),
        ).addClass('table table-striped table-bordered')
    );
});




// function tdrow(colArray) {
//     const tdRowArray = [];
//     tdRowArray[0] = $('<th>', {
//         scope: "col",
//         text: '#',
//     });
//     for (let index = 0; index < colArray.length; index++) {
//         name = index + 1;
//         tdRowArray.push($('<td>', {
//             value: name,
//             text: name,
//         }));
//     }
//     return tdRowArray;
// }






// var content = [$('<p>...</p>'), $('<p>...</p>')];

// var container = $('<div/>');

// $.each(content, function(i, val) {
//     container.append(val);
// });

// alert(container.html());

// function trArray() {
//     console.log('creating tr in tbody...');
//     const trArray = [];
//     for (let index = 0; index < rowArray.length; index++) {
//         name = index + 1;
//         trArray[index] = $('<tr>', {
//             key: name,
//             value: name,
//             html: tdstring(colArray, index),
//         });
//     }
//     $(this).html(trArray);
// }

// //make all the td
// function tdstring(colArray, index) {
//     let tdstring = '<th scope="row">' + (index + 1) + '</th>';
//     for (let index = 0; index < colArray.length; index++) {
//         console.log('creating td in tr...');
//         let name = index + 1;
//         tdstring += "<td id=" + name + " value=" + name + ">" + name + "</td>";
//     }
//     return tdstring;
// }