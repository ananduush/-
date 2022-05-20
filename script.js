var today = new Date()
document.getElementById("date").innerHTML = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();



function solve() {
    var salary = document.getElementById("my_input").value
    salary = Number(salary)

    var hhdhMinimum = 420000;

    document.getElementById("salaryMinimum").innerHTML = hhdhMinimum.toFixed(2);

    var ndsh = 11.5;
    document.getElementById("ndshPercent").innerHTML = ndsh.toString() + "%";

    var ndshAO = 12.5;
    document.getElementById("ndshAO").innerHTML = ndshAO.toString() + "%";

    var salaryAll = salary * (ndshAO / 100) + Number(salary);
    document.getElementById("salaryAll1").innerHTML = salaryAll.toFixed(2);

    var ndshFromJob = salary - salaryAll;
    document.getElementById("ndshFromJob").innerHTML = ndshFromJob.toFixed(2);

    var realSalary = salaryAll + ndshFromJob;
    document.getElementById("salaryMain").innerHTML = realSalary.toFixed(2);

    var ndshFromIndividual = -realSalary * 0.115;
    document.getElementById("ndshFromIndividual").innerHTML = ndshFromIndividual.toFixed(2);

    var hhoat10 = (realSalary + ndshFromIndividual) * 0.1;
    document.getElementById("hhoat10").innerHTML = "-" + hhoat10.toFixed(2);

    var hhoatDiscount = 18000;
    document.getElementById("hhoatDiscount").innerHTML = "+" + hhoatDiscount.toFixed(2);

    var salaryOnHand = realSalary + ndshFromIndividual - hhoat10 + hhoatDiscount;
    document.getElementById("salaryOnHand").innerHTML = salaryOnHand.toFixed(2);

    var ndshReturn = realSalary * 0.0475;
    document.getElementById("salaryReal1").innerHTML = "+" + ndshReturn.toFixed(2);
}

document.getElementById("my_input").addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        solve();
        document.getElementById("r_button").click;
    }


})

// document.addEventListener("keypress", function(event) {
//     if (event.keyCode === 13) {
//         solve(document.getElementById("my_input").value);
//     }

// })

function updateTextView(_obj) {
    var num = getNumber(_obj.val());
    if (num == 0) {
        _obj.val('');
    } else {
        _obj.val(num.toLocaleString());
    }
}

function getNumber(_str) {
    var arr = _str.split('');
    var out = new Array();
    for (var cnt = 0; cnt < arr.length; cnt++) {
        if (isNaN(arr[cnt]) == false) {
            out.push(arr[cnt]);
        }
    }
    return Number(out.join(''));
}

$(document).ready(function() {
    $('my_input[type=text]').on('keyup', function() {
        updateTextView($(this));
    });
});