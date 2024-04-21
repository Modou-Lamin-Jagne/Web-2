function loadStudentTable(){
    var first_name = document.getElementById("first_name").value;
    var middle_name = document.getElementById("middle_name").value;
    var last_name = document.getElementById("last_name").value;
    var mat_no = document.getElementById("mat_no").value;
    var gender = document.getElementById("gender").value;
    var address = document.getElementById("address").value;


    var Stable = document.getElementById("SdataTable");
    var newRow = Stable.insertRow(-1);


    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1)
    var cell3 = newRow.insertCell(2)
    var cell4 = newRow.insertCell(3)
    var cell5 = newRow.insertCell(4)
    var cell6 = newRow.insertCell(5)

    cell1.innerHTML = first_name;
    cell2.innerHTML = middle_name;
    cell3.innerHTML = last_name;
    cell4.innerHTML = mat_no;
    cell5.innerHTML = gender;
    cell6.innerHTML = address;
}

function loadLecturersTable(){

    var Ltable = document.getElementById("LdataTable");

    var first_name = document.getElementById("l_first_name").value;
    var middle_name = document.getElementById("l_middle_name").value;
    var last_name = document.getElementById("l_last_name").value;
    var courses = document.getElementById("courses").value;
    var gender = document.getElementById("l_gender").value;
    var address = document.getElementById("l_address").value;
    var contact = document.getElementById("contact").value;


    var newRow = Ltable.insertRow(-1);


    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1)
    var cell3 = newRow.insertCell(2)
    var cell4 = newRow.insertCell(3)
    var cell5 = newRow.insertCell(4)
    var cell6 = newRow.insertCell(5)
    var cell7 = newRow.insertCell(6)

    cell1.innerHTML = first_name;
    cell2.innerHTML = middle_name;
    cell3.innerHTML = last_name;
    cell4.innerHTML = courses;
    cell5.innerHTML = gender;
    cell6.innerHTML = address;
    cell7.innerHTML = contact;
}

function clear(){
    var first_name = document.getElementById("first_name");
    var middle_name = document.getElementById("middle_name");
    var last_name = document.getElementById("last_name");
    var mat_no = document.getElementById("mat_no");
    var courses = document.getElementById("mat_no");
    var gender = document.getElementById("gender");
    var address = document.getElementById("address");
    var contact = document.getElementById("address");
    first_name = '';
    middle_name = '';
    last_name = '';
    mat_no = '';
    courses = '';
    gender = '';
    address = '';
    contact = '';
}