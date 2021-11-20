function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  
let boton = document.getElementById('decode');
let div_decoded =  document.getElementById('decoded_string')
let img_decoded = document.getElementById('decoded');
let decode_button = document.getElementById('decode_button');
boton.addEventListener('click' , ()=>{

    var file = document.querySelector('#imagen').files[0];
    getBase64(file).then(
      data => { 
        div_decoded.innerHTML = data;
        div_decoded.data = data
      }
    );
});

decode_button.addEventListener('click' , ()=>{
  let get_data_from_base_64_div = div_decoded.data;
  console.log(get_data_from_base_64_div)
  img_decoded.src = div_decoded.data
})


