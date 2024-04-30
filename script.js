// hamburger menu functionality
const ham_ber=document.getElementById('bar');
const close_btn=document.getElementById('close');

const nav=document.getElementById('navbar');


if(ham_ber){
    ham_ber.addEventListener('click',()=>{
    // console.log("clicked");
    nav.classList.add('active')

    })
}
if(close_btn){
    close_btn.addEventListener('click',()=>{
    nav.classList.remove('active')
    })
}

// single_product.html start
// single_product.html end

