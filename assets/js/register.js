$("#save").click(()=>
{
	var broName     = $("#broName").val()
    var broNachName  = $("#broNachName").val()
    var broStrasse    = $("#broStrasse").val()
    var broStadt      = $("#broStadt").val()
    var broTel = $("#broTel").val()
    var broMail = $("#broMail").val()

    $.ajax({
        type:'post',
        url :"server.php",
        data:{action:"registration",broName:broName,broNachName:broNachName,broStrasse:broStrasse,broStadt:broStadt,broTel:broTel,broMail:broMail},
        success:r=>{
            // console.log(r)
            
            if(r=="oho")
            {
                // r=JSON.parse(r);
                location.href="merci2.php"
            }
            // else
            // {
            //   r=JSON.parse(r);
              
            //   for(text of r){
            //      $('#error').append('<p>'+text+'</p>')
            //     }
            //     $("#error").show()
            // }
         }

     })
})


$("#enter").click(()=>
{
    var konfName     = $("#konfName").val()
    var konfNachname = $("#konfNachname").val()
    var konfStrasse  = $("#konfStrasse").val()
    var konfPlz      = $("#konfPlz").val()
    var konfTel      = $("#konfTel").val()
    var konfMail     = $("#konfMail").val()

    $.ajax({
        type:'post',
        url :"server.php",
        data:{action:"entered",konfName:konfName,konfNachname:konfNachname,konfStrasse:konfStrasse,konfPlz:konfPlz,konfTel:konfTel,konfMail:konfMail},
        success:r=>{
            // console.log(r)
             if(r=="oho")
            {
                // r=JSON.parse(r);
                location.href="merci.php"
            }
            
         }

     })
})


$("#add").click(()=>
{
    var broName       = $("#broName").val()
    var broNachName   = $("#broNachName").val()
    var broStrasse    = $("#broStrasse").val()
    var broStadt      = $("#broStadt").val()
    var broTel        = $("#broTel").val()
    var broMail       = $("#broMail").val()
    var broDate       = $("#broDate").val()
    
    $.ajax({
        type:'post',
        url :"server.php",
        data:{action:"added",broName:broName,broNachName:broNachName,broStrasse:broStrasse,broStadt:broStadt,broTel:broTel,broMail:broMail,broDate:broDate},
        success:r=>{
                    if(r=="oho")
            {
                // r=JSON.parse(r);
                location.href="merci.php"
            }
            
         }

     })
})
