function Calculator() {
    var one = 0;
    var two = 0;
    var three = 0;
    one = Number(document.getElementById("in1").value);
    two = Number(document.getElementById("in2").value);
    three = Number(document.getElementById("in3").value);

    //Total and Avg
    total = parseInt(one) + parseInt(two) + parseInt(three);

    var average = total / 3;

    var largest = 0;
    var smallest = 0;
    var range = 0;
    var median = 0;

    // this is the min/max calculation stuff

    if (one >= two && one >= three) {
        largest = parseInt(one);
    } else if (two >= one && two >= three) {
        largest = parseInt(two);
    } else {
        largest = parseInt(three);
    }


    if (one <= two && one <= three) {
        smallest = parseInt(one);
    } else if (two <= one && two <= three) {
        smallest = parseInt(two);
    } else {
        smallest = parseInt(three);
    }

    var medArray = [one, two, three];
 		medArray.sort(function(a, b){return a-b});
  	median = medArray[1];


    document.getElementById("Maximum").value = largest;
    document.getElementById("Minimum").value = smallest;
    document.getElementById("Average").value = average;
    document.getElementById("median").value = median;
    document.getElementById("Range").value = largest - smallest;

}
