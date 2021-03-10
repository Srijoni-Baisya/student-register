var students_name = [];
function submit(){
var name1 = document.getElementById("name_1").value;
var name2 = document.getElementById("name_2").value;
var name3 = document.getElementById("name_3").value;
var name4 = document.getElementById("name_4").value;

students_name.push(name1);
students_name.push(name2);
students_name.push(name3);
students_name.push(name4);

console.log(students_name);

document.getElementById("display_name").innerHTML=students_name;
document.getElementById("button_submit").style.display = "none";
document.getElementById("button_sort").style.display = "inline-block";
}

function sorting(){
    students_name.sort();
    console.log(students_name);
    document.getElementById("display_name").innerHTML=students_name;
}