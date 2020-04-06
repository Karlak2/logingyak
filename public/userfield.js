$(document).ready(()=>{
    var currentId=new URLSearchParams(window.location.search).get('id');
    $.ajax({
        url: 'http://localhost:3000/login/'+currentId,
        dataType: 'json',
        type: 'get',
        contentType: 'application/json',
        processData: false,
        success: function(data){
            var username=data.name
            $('#loggeduser').html(username)
            $('#actname').val(data.name);
            $('#actemail').val(data.email);
            $('#actpw').val(data.pw);
        },
        error: function( jqXhr, textStatus, errorThrown ){
            
        }
    }); 
})

$('.updateButton').click(()=>{
    var currentId=new URLSearchParams(window.location.search).get('id');
    $.ajax({
        url: 'http://localhost:3000/login/'+currentId,
        dataType: 'json',
        type: 'patch',
        contentType: 'application/json',
        processData: false,
        data:JSON.stringify({
            name:$('#actname').val(),
            email: $('#actemail').val(),
            pw: $('#actpw').val()
        })          
        ,
        success: function(data){
            window.location.reload()
        },
        error: function( jqXhr, textStatus, errorThrown ){
            
        }
    });   
})

$('.deleteButton').click(()=>{
    var currentId=new URLSearchParams(window.location.search).get('id');
    $.ajax({
        url: 'http://localhost:3000/login/'+currentId,
        dataType: 'json',
        type: 'delete',
        contentType: 'application/json',
        processData: false,
        success: function(data){
            window.location.replace('/')
        },
        error: function( jqXhr, textStatus, errorThrown ){
            
        }
    });   
})