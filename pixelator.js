

import html2canvas from "html2canvas.js";
//import html2canvas;
let canvas = document.getElementById("pixel_canvas");
let height = document.getElementById("input_height");
let width = document.getElementById("input_width");
let sizePicker = document.getElementById("sizePicker");
let color = document.getElementById("colorPicker");
let download1 = document.getElementById("downloadbtn");
let eraseit = document.getElementById("erase");
let submit_grid = document.getElementById("submit");

//submit_grid.addEventListener("click",empty_grid);
color.addEventListener("click", function(){});
eraseit.addEventListener("click", empty_grid);
submit_grid.onclick = function(event) {empty_grid(event);};
download1.onclick = function(){
    html2canvas(canvas).then(function(canvas) {
    var pic_url = canvas.toDataURL("img/png"); //creates a url that stores canvas in image form
    var ele = document.createElement('a'); //creating an <a> element to store the data url link
    ele.href = pic_url;   
    ele.download = "image_pixel_painting.png";// name of imagethat will be downloaded
    ele.click();
   });
};
/*download1.onclick = function(){
    var pic_url = canvas.toDataURL("img/png"); //creates a url that stores canvas in image form
    var ele = document.createElement('a'); //creating an <a> element to store the data url link
    ele.href = pic_url;   
    ele.download = "image_pixel_painting.png";// name of imagethat will be downloaded
    ele.click();
};*/


/*download1.onclick = function(){
    const SCtar = document.getElementById("pixel_canvas");
    html2canvas(SCtar).then( (canvas)=> {
        const iimg = canvas.toDataURL("image/png");
        var a = document.createElement("a");
        a.setAttribute("href", iimg);
        a.setAttribute("download", "my-image.png" );
        a.click();
        a.remove();
    });
}

function canvas_to_img(canvas) {
    
    var pic_url = canvas.toDataURL("img/png"); //creates a url that stores canvas in image form
    var ele = document.createElement('a'); //creating an <a> element to store the data url link
    ele.href = pic_url;   
    ele.download = "image_pixel_painting.png";// name of imagethat will be downloaded
    ele.click();
}
*/

function empty_grid(event){
    event.preventDefault();
    clearGrid();
    makeGrid();
}

function makeGrid() {

    {
        for (let r=0; r<height.value; r++){
        const row = canvas.insertRow(r);
        for (let c=0; c<width.value; c++){
            const cell = row.insertCell(c);
            cell.addEventListener("click", fillSquare);
             }
    
        }
    }
   
}

function clearGrid(){
    while (canvas.firstChild){
         canvas.removeChild(canvas.firstChild);
    }
}
// alternative code:
// while (table.rows.length > 0) {
//  table.deleteRow(0);
// }

function fillSquare () {
    this.setAttribute("style", `background-color: ${color.value}`);
}