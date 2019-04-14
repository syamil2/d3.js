function initViz() {
    var containerDiv = document.getElementById("tableauViz"),
    url = "https://YOUR-SERVER/views/YOUR-VISUALIZATION";

    var viz = new tableau.Viz(containerDiv, url);
}
