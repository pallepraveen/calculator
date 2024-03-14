let string = "";
botton.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input'),value = string;
}
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
})