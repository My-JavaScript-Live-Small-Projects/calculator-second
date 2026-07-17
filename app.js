let input = document.getElementById('display')
//apply focus 
document.addEventListener('DOMContentLoaded',()=>{

   input.focus()
    
})
//adding
function adding(){
    input.value += '+'
}
//subtracting 
function subtracting(){
    input.value += '-'
}
//multiplying
function multiplying(){
    input.value += '*'
}
//division
function division(){
    input.value += '/'
}
function operation(){
    let output = eval(input.value)
    // console.log(output)
    input.value = output
}
//nine 
function nine(){
    input.value += '9'
}
//eight 
function eight(){
    input.value += '8'
}
//seven 
function seven(){
    input.value += '7'
}
//six 
function six(){
    input.value += '6'
}
//five 
function five(){
    input.value += '5'
}
//four 
function four(){
    input.value += '4'
}
//three
function three(){
    input.value += '3'
}
//two 
function two(){
    input.value += '2'
}
//one 
function one(){
    input.value += '1'
}
//zero
function zero(){
    input.value += '0'
}
//point
function point(){
    input.value += '.'
}
//backremoving()


function backremoving(){
    // console.log(input.value.length)
     if(input.value.length == 0){
        return;
     }
    else{
        input.value = input.value.slice(0, -1);
    }

    // console.log(input.value)
}
//clearing 
function clearing(){
    input.value = ''

}