var feet = document.getElementById('input-feet')
var inch = document.getElementById('input-inch')

feet.addEventListener("input", function(){
    let f = this.value
    let i = f*12
    inch.value = i
});