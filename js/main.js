require.config({
    baseUrl:"js/",
    paths: {

        jquery: 'jquery/js/jquery.min',
        zclip : 'jquery/js/jquery.zclip.min',
        util : 'modules/util'
    },
    shim: {
        'zclip': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'zclip'
        }
    }

    
});
/*require(['zclip','util'],function(zclip,util){
    console.log("complete");
    var aaa= new util.util();
    console.log()
    aaa.array();
    aaa.position();
    $(function(){
    $('#copy_input').zclip({
        path: 'js/jquery/js/ZeroClipboard.swf',
        copy: function(){//复制内容
            return $('#mytext').val();
        },
        afterCopy: function(){//复制成功
            $("<span id='msg'/>").insertAfter($('#copy_input')).text('复制成功');
        }
    });
});
});*/