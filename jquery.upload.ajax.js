(function ($) {
    $.fn.upload_ajax = function (options) {
        var inp = this;
        var settings = $.extend({}, $.fn.upload_ajax.defaults, options);
        if ($.support.ajax) {
            if (window.FormData !== undefined) {
                inp.on('change', function (e) {
                    var files = e.target.files;
                    var data = new FormData();
                    for (var x = 0; x < files.length; x++) {
                        data.append("file" + x, files[x]);
                    }
                    /* additional params */
                    $.each(settings.post_param, function (key, value) {
                        data.append(key, value);
                    });
                    /* run ajax */
                    $.ajax({
                        type: 'post',
                        url: settings.post_url,
                        contentType: false,
                        processData: false,
                        data: data,
                        success: settings.success,
                        error: settings.error
                    });
                });
            }
            else {
                settings.error("Browser not Supported");
            }
        } else {
            settings.error("No Ajax Support");
        }
    };
    /* defaults */
    $.fn.upload_ajax.defaults = {
        post_url: "path/to/upload",
        post_param: {},
        success: null,
        error: function (msg) {
            alert("Error: " + msg);
        }
    };
    /* support */
    $.fn.upload_ajax.support = (window.FormData !== undefined && window.File !== undefined && $.support.ajax) ? true : false;
    
} (jQuery));
