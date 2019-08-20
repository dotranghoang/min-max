function findMin(arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
       if (arr[i] < min) {
          min = arr[i];
       }
    }
    return min;
 }
 function findMax(arr) {
    var max = arr[0];
    for (var j = 1; j < arr.length; j++) {
       if (arr[j] > max) {
          max = arr[j];
       }
    }
    return max;
 }

 var nums = [];
 for(var i=0;i<100;++i){
    nums[i] = Math.floor(Math.random() * 101);
    document.write(nums[i]+",");
 }
 let minValue = findMin(nums);
 let maxValue = findMax(nums);

 document.write("<br/>");
 document.write("The minimum value is: " + minValue);
 document.write("<br/>The maximum value is: " + maxValue);
 