function loadStudentTable(){
    var first_name = document.getElementById("first_name").value;
    var middle_name = document.getElementById("middle_name").value;
    var last_name = document.getElementById("last_name").value;
    var mat_no = document.getElementById("mat_no").value;
    var gender = document.getElementById("gender").value;
    var address = document.getElementById("address").value;
    // var department = document.getElementById("department").value;


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
    cell4.innerHTML = department;
    cell5.innerHTML = courses;
    cell6.innerHTML = gender;
    cell7.innerHTML = address;
    cell8.innerHTML = contact;
}
function loadPaymentTable(){

    var Ptable = document.getElementById("PdataTable");

    var mat_no = document.getElementById("mat_no").value;
    var paid_amount = document.getElementById("paid_amount").value;
    var paid_by = document.getElementById("paid_by").value;
    var faculty = document.getElementById("faculty").value;
    var date = document.getElementById("date").value;
    var receipt = document.getElementById("receipt").value;
    var paid_to = document.getElementById("paid_to").value;


    var newRow = Ptable.insertRow(-1);


    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1)
    var cell3 = newRow.insertCell(2)
    var cell4 = newRow.insertCell(3)
    var cell5 = newRow.insertCell(4)
    var cell6 = newRow.insertCell(5)
    var cell7 = newRow.insertCell(6)

    cell1.innerHTML = mat_no;
    cell2.innerHTML = paid_amount;
    cell3.innerHTML = paid_by;
    cell4.innerHTML = faculty;
    cell5.innerHTML = date;
    cell6.innerHTML = receipt;
    cell7.innerHTML = paid_to;
    // cell8.innerHTML = contact;
}

function loadCoursesTable(){

    var Ctable = document.getElementById("CdataTable");

    var course_name = document.getElementById("course_name").value;
    var course_code = document.getElementById("course_code").value;
    var credit_hours = document.getElementById("credit_hours").value;
    var department = document.getElementById("department").value;
    var lecturer = document.getElementById("lecturer").value;
    // var address = document.getElementById("l_address").value;
    // var contact = document.getElementById("contact").value;


    var newRow = Ctable.insertRow(-1);


    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1)
    var cell3 = newRow.insertCell(2)
    var cell4 = newRow.insertCell(3)
    var cell5 = newRow.insertCell(4)
    // var cell6 = newRow.insertCell(5)
    // var cell7 = newRow.insertCell(6)

    cell1.innerHTML = course_name;
    cell2.innerHTML = course_code;
    cell3.innerHTML = credit_hours;
    cell4.innerHTML = department;
    cell5.innerHTML = lecturer;
    // cell6.innerHTML = address;
    // cell7.innerHTML = contact;
}

function clear(){
    var first_name = document.getElementById("first_name");
    var middle_name = document.getElementById("middle_name");
    var last_name = document.getElementById("last_name");
    var mat_no = document.getElementById("mat_no");
    var courses = document.getElementById("courses");
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