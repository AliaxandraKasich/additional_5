module.exports = function check(str, bracketsConfig) {
   var arr = [];
   var stack = [];
   var bool = true;
   for(var i=0; i < str.length ; i++){
      arr.push(str.charAt(i));
   }

   for(var i=0; i< arr.length; i++){
     if(arr[i] === ")")  arr[i] = 9;
     if(arr[i] === "(")  arr[i] = 1;
     if(arr[i] === "[")  arr[i] = 3;
     if(arr[i] === "]")  arr[i] = 7;
     if(arr[i] === "{")  arr[i] = 2;
     if(arr[i] === "}")  arr[i] = 8;
     if(arr[i] === "|")  arr[i] = 5;
   }
   var arrBool = [];
   for(var i=0; i< arr.length;i++){
     arrBool[i] = false;
   }

   for(var i=0; i< arr.length;i++){
     if(arrBool[i] === false){
      if(stack.length === 0){
        stack.push(arr[i]);
      }
      else{
      var temp = stack.pop();
      stack.push(temp);
         if(temp + arr[i] === 10 ){
          if(temp <= arr[i]){
            stack.pop();
           }
        else{
          stack.push(arr[i]);
         }
        }
        else{ stack.push(arr[i]);}
      }
     }
  }
  if(stack.length !=0){
    bool = false;
  }
  return bool;
}
