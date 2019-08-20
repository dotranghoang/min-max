let array = [];
for(var i = 0 ; i < 100 ; i++) {
    array[i] = Math.floor(Math.random()*100);
    document.write(array[i]+",");
}
function check(arr,num) {
    let count = 0;
    for(var j = 0 ; j < arr.length ; j++) {
        if(arr[j] == num) {
            count++;
        }
    }
    return count;
} 
document.write("Số lần suất hiện của 8 là: "+check(array,8)+ " lần");