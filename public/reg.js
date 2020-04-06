var name=$('#name').val();
var email=$('#email').val();
var pw=$('#pw').val();
var pwAgain=$('#pwAgain').val();
var logNick=$('#logMail').val();
var logPw=$('#logPw').val();

$('.regButton').click(()=>{
    var name=$('#name').val();
    var email=$('#email').val();
    var pw=$('#pw').val();
    var pwAgain=$('#pwAgain').val();
    // empty,good,wrong,pwcrash
    if(name===''||email===''||pw===''||pwAgain===''){
        $('#empty').removeClass('hidden');
        return
    } else {
        $('#empty').removeClass('hidden').addClass("hidden");    
    }
    if(pw!=pwAgain){
        $('#pwcrash').removeClass('hidden');
        return
    } else {
        $('#pwcrash').removeClass('hidden').addClass('hidden');
    }
    $.ajax({
        url: 'http://localhost:3000/registration/'+name,
        dataType: 'json',
        type: 'get',
        contentType: 'application/json',
        processData: false,
        success: function(data){
            if(data!=false){
                $('#wrong').removeClass('hidden');
            } else {
                $.ajax({
                    url: 'http://localhost:3000/registration/',
                    dataType: 'json',
                    type: 'post',
                    contentType: 'application/json',
                    processData: false,
                    data:JSON.stringify({
                        name:name,
                        email:email,
                        pw:pw
                    }),
                    success: function(data){
                        var newId=data._id
                        window.location.replace('/registration?id='+newId)
                    },
                    error: function( jqXhr, textStatus, errorThrown ){
                        
                    }
                }); 
            }
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log(errorThrown)
        
        }
    }); 
})

$('.loadButton').click(()=>{
    var logNick=$('#logNick').val();
    $.ajax({
        url: 'http://localhost:3000/login/'+logNick,
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        processData: false,
        data:JSON.stringify({
            pw:$('#logPw').val()
        }),
        success: function(data){
            var newId=data
            if(data===false){
                $('#wrongpw').removeClass('hidden');
                return;
            } else {
                window.location.replace('/registration?id='+newId)
            }
        },
        error: function( jqXhr, textStatus, errorThrown ){
            
        }
    }); 
})