function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  
let boton = document.getElementById('decode');
let p_decoded =  document.getElementById('decoded_string')
let img_decoded = document.getElementById('decoded');
boton.addEventListener('click' , ()=>{

    var file = document.querySelector('#imagen').files[0];
    getBase64(file).then(
      data => { 
        img_decoded.src=data
        p_decoded.textContent = data
            }
    );
});

