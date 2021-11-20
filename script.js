function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  
let boton = document.getElementById('some');
boton.addEventListener('click' , ()=>{

    var file = document.querySelector('#imagen').files[0];
    console.log(file)
    getBase64(file).then(
      data => console.log(data)
    );
});

const qwe = document.getElementById('123');
qwe.src=

/////////////////////

// function getDataUrl(img){
//     const canvas = document.createElement('canvas');
//     const ctx = canvas.getContext('2d');


//     canvas.width = img.width;
//     canvas.height = img.width;

//     ctx.drawImage(img, 0 , 0);
//     return(canvas.toDataURL('image/png'))
// }


// const img = document.querySelector('#imagen');
// img.addEventListener('load', function (event) {
//    const dataUrl = getDataUrl(event.currentTarget);
//    console.log(dataUrl);
// });