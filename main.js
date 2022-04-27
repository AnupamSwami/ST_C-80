var name_of_student_array = [] ;
function submit()  {

    var display_student_name = [] ;

    for ( var j=1; j<=4; j++ ) {
       var name_of_the_student = document.getElementById("student_"+j).value ;
       console.log(name_of_the_student) ;
       name_of_student_array.push(name_of_the_student) ;
    }

    console.log(name_of_the_student) ;

     var length = name_of_student_array.length ;
     console.log(length) ;

    for ( var k=0 ; k<length ; k++ ) {
        display_student_name.push("<h4> NAME- "+ name_of_student_array[k] +"</h4>") ;
        console.log(display_student_name) ;

    }

    console.log(display_student_name) ;

    document.getElementById("display_name_with_commas").innerHTML = display_student_name ;
    var remove_commas = display_student_name.join(" ") ;
    console.log(remove_commas) ;

    document.getElementById("display_name_without_commas").innerHTML = remove_commas ;
    document.getElementById("submit_button").style.display="none" ;
    document.getElementById("sort_button").style.display="inline-block" ;
}