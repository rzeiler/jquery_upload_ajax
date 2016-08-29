# jquery_upload_ajax
simple file upload by using jquey ajax

## ASP Page Sample
```asp
<div id="loading" style="display: none; padding:12px; position: absolute; z-index: 1000; background-color: #333; color: #fff;">
Lade Daten...
</div>
<asp:FileUpload ID="FileUpload1" CssClass="fileupload" multiple="multiple" runat="server" />
```
## Script Requirements
```asp
<script src="(path)/jquery-1.10.2.min.js" type="text/javascript"></script>
<script src="(path)/jquery_upload_ajax.js" type="text/javascript"></script>'
```
## Call Function
```asp
<script type="text/javascript">
  $(document).ready(function () {
  
    $(document).ajaxStart(function () {
      $("#loading").show();
    });

    $(document).ajaxComplete(function (event, request, settings) {
      $("#loading").hide();
    });

    var fu = $('.fileupload');
    fu.upload_ajax({
      post_url: 'Filehandler.ashx',
      post_param: { "id": $.getUrlVar('id') },
      success: function (data) {
        alert(data)
      },
      error: function (data) {
        alert(data);
      },
      fallback: function () {
        url += "&returnUrl=" + escape(window.location);
        var form = $('#aspnetForm');
        form.attr('action', url);
      },
      progressObject: '#loading'
    });

  });
</script>
```
