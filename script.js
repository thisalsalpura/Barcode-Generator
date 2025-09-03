document.getElementById("btn-genarate").addEventListener('click', function () {
    let val = document.getElementById("txt-input").value;
    if (val !== "") {
        JsBarcode("#barcode", val);
        document.getElementById("valueEmpty").style.display = "none";
        document.getElementById("downloadBtn").style.display = "block";
    } else {
        document.getElementById("downloadBtn").style.display = "none";
        document.getElementById("valueEmpty").style.display = "block";
    }
});


function downloadSVG() {
    const svg = document.getElementById('barcode').outerHTML;
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'filename.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};