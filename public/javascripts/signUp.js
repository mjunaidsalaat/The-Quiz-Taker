
$(document).ready(function(){

    var isSignedIn = sessionStorage.getItem('signedInUser');
    $("#signUp").click(function () {

        var username = $("#username").val();
        var email = $("#email").val();
        var password = $("#pass").val();

        if(username == '' || password == '' || email == ''){
            $("#form").addClass('has-error');
            $('#errMsg').html('Some Field/Fields is/are empty')
        }
        else {

            var data = {
                username: username,
                email: email,
                password: password
            };
            $.ajax({
                type: "POST",
                url: "/signUp",
                data: data
            }).success(function (data, textstatus) {
                console.log(data)

            }).error(function (err, textStatus) {
                console.log(err)
            })
        }


        })


});
/*
$.ajax({
    method:"POST",
    url:"/SignUp",
    data:data
}).success(function(data, textstatus) {
    console.log(data)

}).error(function(err,textStatus){
    console.log(err)
})*/
