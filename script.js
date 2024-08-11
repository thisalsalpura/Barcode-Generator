document.getElementById("btn-genarate").addEventListener('click', function() {


    document.getElementById("downloadbtn").style.display = "block";

    let val = document.getElementById("txt-input").value;
    JsBarcode("#barcode", val);
});


function downloadSVG() {
    const svg = document.getElementById('barcode').outerHTML;
    const blob = new Blob([svg], {type: 'image/svg+xml'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'filename.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};