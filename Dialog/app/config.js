require.config({
  // make components more sensible
  // expose jquery 
  paths: {
    "components": "../bower_components",
    "jquery": "../app/bower_components/jquery/dist/jquery"
  }
});

if (!window.requireTestMode) {
  require(['main'], function(){ });
}


require(['jquery', 'Mhwindow'], function ($, Mhwindow) {
    $('#a').click(function () {
        var mhwin = new Mhwindow.Mhwindow().alert({
            title:'提示',
            content:'welcome',
            handler:function(){
                alert('u click me');
            },
            height:150,
            width:300,
            y:50,
            hasCloseBtn:true
        })
    });
});





