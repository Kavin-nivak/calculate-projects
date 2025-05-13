let input = document.querySelector("input");
function addValue(elementVal){
    input.value += elementVal;
}
function clearValue(){
    input.value ="";
}
function deleteVal(){
    input.value = input.value.slice(0, -1);
}
function calculate(){
    try{
        input.value=eval(input.value);
    }catch(err){
        alert("invalid input");
        input.value="";
    }
}