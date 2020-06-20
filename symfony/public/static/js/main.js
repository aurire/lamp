$('#root').css('background-color', 'blue');
$('#root').height('100px');

$.ajax({
    type: "POST",
    url: "/login",
    // The key needs to match your method's input parameter (case-sensitive).
    data: JSON.stringify({ email: "frenkas@gmail.com", "password": "asd" }),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(data, textStatus, request){
        console.log("success", data, textStatus, request);
        console.log(request.getResponseHeader('location'));
    },
    failure: function(errMsg) {
        console.log("err", errMsg);
    }
});

$.ajax({
    type: "POST",
    url: "/login",
    // The key needs to match your method's input parameter (case-sensitive).
    data: JSON.stringify({ email: "frenkas@gmail.com", "password": "asd" }),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(data, textStatus, request){
        console.log("success", data, textStatus, request);
        console.log(request.getResponseHeader('location'));
    },
    failure: function(errMsg) {
        console.log("err", errMsg);
    }
});
