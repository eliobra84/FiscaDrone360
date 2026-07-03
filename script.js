var map = L.map('map').setView([-53.1638, -70.9171], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);

function crearPunto(tipo) {

    map.on('click', function (e) {

        var nombre = prompt("Nombre del punto:");
        if (!nombre) return;

        var link = prompt("Link OneDrive:");
        if (!link) link = "";

        var icono = "📷";
        if (tipo === "360") icono = "🚁";

        L.marker(e.latlng)
            .addTo(map)
            .bindPopup(
                "<b>" + icono + " " + nombre + "</b><br>" +
                "<a href='" + link + "' target='_blank'>OneDrive</a>"
            );
    });

}

document.getElementById("btn360").onclick = function () {
    crearPunto("360");
};

document.getElementById("btnPhoto").onclick = function () {
    crearPunto("photo");
};