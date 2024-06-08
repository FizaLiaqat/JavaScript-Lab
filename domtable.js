var tab = "<table id='row' border='1' width='900' cellspacing='15' cellpadding='15' align='center' style='background-color: black; color: aliceblue;'></table>";

document.querySelector("#tab").insertAdjacentHTML("afterbegin", tab);

var head = "<tr><th>Name</th><th>Father name</th><th>English</th><th>Urdu</th><th>IS</th><th>PS</th><th>Math</th><th>Total</th><th>Obtain</th><th>Percentage</th><th>Grade</th></tr>";

document.querySelector("#row").insertAdjacentHTML("afterbegin", head);

var arr = Array(
    Array("ali", "bscs", 94, 95, 99, 98, 99),
    Array("maaz", "bscs", 88, 85, 89, 88, 89),
    Array("humza", "bscs", 94, 95, 99, 98, 99),
    Array("hina", "bscs", 84, 75, 99, 88, 79),
    Array("ayesha", "bscs", 94, 85, 79, 88, 89),
    Array("umair", "bscs", 84, 95, 69, 98, 49),
    Array("Anees", "bscs", 98, 99, 99, 98, 97),
);
var c=1;

for(var s of arr){
    var row="<tr></tr>";
    document.querySelector("#row").insertAdjacentHTML("beforeend", row);
    var ob =0;
    for(var r of s){
        if (typeof r == "number") {
            ob = ob + r;
            var col="<td>"+r+"</td>";
            document.querySelector("#row").children[c].children[0].insertAdjacentHTML("beforeend",col);
        } else {
            var col="<td>"+r+"</td>";
            document.querySelector("#row").children[c].children[0].insertAdjacentHTML("beforeend",col);
        }
    }
 
  
c++;
}

