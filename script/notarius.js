var mymap = L.map("mapid").setView([46.5525, 30.7533], 13);

L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mymap);

var marker1 = L.marker([46.433864, 30.761965]);
marker1.bindPopup('Лемешко Елена Михайловна').openPopup();
marker1.addTo(mymap);

var marker2 = L.marker([46.554185, 30.757540]);
marker2.bindPopup('4-я Одесская нотариальная контора').openPopup();
marker2.addTo(mymap);

var marker3 = L.marker([45.343545, 28.837576]);
marker3.bindPopup('Ефимова Татьяна Ивановна').openPopup();
marker3.addTo(mymap);

var marker4 = L.marker([47.714758, 29.991326]);
marker4.bindPopup('Ананьевская районная нотариальная контора').openPopup();
marker4.addTo(mymap);

var marker5 = L.marker([46.185452, 30.341491]);
marker5.bindPopup('Белгород-Днестровская городская нотариальная контора').openPopup();
marker5.addTo(mymap);

$('#locate-position').on('click', function () {
    mymap.locate({
        setView: true,
        maxZoom: 15
    });
});

function onLocationFound(e) {
    var radius = e.accuracy / 2;
    L.marker(e.latlng).addTo(mymap);
    L.circle(e.latlng, radius).addTo(mymap);
}

mymap.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}
mymap.on('locationerror', onLocationError);


$("table").on("click", function (e) {
    if (e.target.tagName != 'TH') return;
    let th = e.target;
    sortTable(this, th.cellIndex, th.dataset.type);
});

function sortTable(table, colNum, type) {
    let tbody = table.querySelector('tbody');
    let rowsArray = Array.from(tbody.rows);
    let compare;
    switch (type) {
        case 'number':
            compare = function (rowA, rowB) {
                return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
            };
            break;
        case 'string':
            compare = function (rowA, rowB) {
                return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
            };
            break;
    }

    rowsArray.sort(compare);
    tbody.append(...rowsArray);
}