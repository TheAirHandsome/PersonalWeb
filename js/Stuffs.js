
var num_jia = document.getElementById("num-jia");
var num_jian = document.getElementById("num-jian");
var input_num = document.getElementById("input-num");

num_jia.onclick = function() {

    input_num.value = parseInt(input_num.value) + 1;
}

num_jian.onclick = function() {

    if(input_num.value <= 0) {
        input_num.value = 0;
    } else {

        input_num.value = parseInt(input_num.value) - 1;
    }

}




window.onload = function(){ 
    var images = document.getElementsByTagName('img'); 
    var pos = 0; 
    var len = images.length; 
    setInterval(function(){ 
        images[pos].style.display = 'none';
        pos = ++pos == len ? 0 : pos;
        images[pos].style.display = 'inline';
    },1000); 
}; 