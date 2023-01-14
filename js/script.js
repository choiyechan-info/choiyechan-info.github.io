var infospot1, infospot2, infospot3, infospot4, viewer;
const panorama = new PANOLENS.ImagePanorama("./images/desk.jpg");

////////////////////////////////////////////////

infospot1 = new PANOLENS.Infospot(500, PANOLENS.DataImage.Info);
infospot1.position.set(7500.0, -250.25, 0.56);
infospot1.addHoverElement(document.getElementById("desc-container-1"), 200);

////////////////////////////////////////////

panorama.add(infospot1);

viewer = new PANOLENS.Viewer();
viewer.add(panorama);
