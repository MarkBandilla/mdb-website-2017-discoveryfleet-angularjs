
<?php
  if(!empty($_POST['code'])) {
    $file = fopen("assets/components/schedules/schedules.html","w");
    if(fwrite($file,$_POST['code'])) {
      echo 'success';
    } else {
      echo 'error';
    }
    fclose($file);
  } else {
?>
<!DOCTYPE html>
<html>

  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Discovery Fleet Liveaboard Philippines</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
    <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.html">
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/font-awesome.min.css">
    <link rel="stylesheet" href="assets/css/owl.carousel.css">
    <link rel="stylesheet" href="assets/css/owl.theme.css">
    <link rel="stylesheet" href="assets/css/owl.transitions.css">
    <link rel="stylesheet" href="assets/css/jquery-ui.css">
    <link rel="stylesheet" href="assets/css/meanmenu.min.css">
    <link rel="stylesheet" href="assets/css/animate.css">
    <link rel="stylesheet" href="assets/css/normalize.css">
    <link rel="stylesheet" href="assets/css/flaticon.css">
    <link rel="stylesheet" href="assets/css/lightslider.css">
    <link rel="stylesheet" href="assets/lib/custom-slider/css/nivo-slider.css" type="text/css" />
    <link rel="stylesheet" href="assets/lib/custom-slider/css/preview.css" type="text/css" media="screen" />
    <link rel="stylesheet" href="assets/lib/toastr/toastr.min.css" type="text/css" media="screen" />
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/lib/fancybox/jquery.fancybox.css">
    <link rel="stylesheet" href="assets/style.css">  
    <link rel="stylesheet" href="assets/css/responsive.css">  
    <link rel="stylesheet" href="assets/lib/summernote/summernote.css">
    <script src="assets/js/vendor/modernizr-2.8.3.min.js"></script>
  
    <script src="assets/js/vendor/jquery-1.11.3.min.js"></script>    
    <script src="assets/js/bootstrap.min.js"></script>

    <!-- include codemirror (codemirror.css, codemirror.js, xml.js, formatting.js) -->
    <!-- <link rel="stylesheet" type="text/css" href="assets/lib/codemirror/lib/codemirror.css">
    <link rel="stylesheet" type="text/css" href="assets/lib/codemirror/theme/monokai.css">
    <script type="text/javascript" src="assets/lib/codemirror/lib/codemirror.js"></script>
    <script type="text/javascript" src="assets/lib/codemirror/mode/xml/xml.js"></script> -->

    <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/codemirror/3.20.0/codemirror.css">
    <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/codemirror/3.20.0/theme/monokai.css">
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/codemirror/3.20.0/codemirror.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/codemirror/3.20.0/mode/xml/xml.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/codemirror/2.36.0/formatting.js"></script>

    <script src="assets/lib/summernote/summernote.min.js"></script>
  </head>

  <body style="position:absolute; width: 100%; height: 100%; overflow:hidden;">
    <div class="container" id="summernote" style="position:relative; height:100%;">
      <?php
        $myfile = fopen("assets/components/schedules/schedules.html", "r") or die("Unable to open file!");
        while(!feof($myfile)) {
          echo fgetc($myfile);
        }
        fclose($myfile);
      ?>
    </div>
    <script>
      var HelloButton = function (context) {
        var ui = $.summernote.ui;

        // create button
        var button = ui.button({
          contents: '<i class="fa fa-save"/> Save',
          tooltip: 'Save',
          click: function () {
            // invoke insertText method with 'hello' on editor module.
            saveFile();
          }
        });

        return button.render();   // return button as jquery object
      }
      $('#summernote').summernote({
        focus: false,                 // set focus to editable area after initializing summernote
        codemirror: {                 // codemirror options
          theme: 'monokai',
          lineNumbers: true,
        },
        toolbar: [
          ['style', ['style']],
          ['font', ['bold', 'italic', 'underline', 'clear']],
          ['fontname', ['fontname']],
          ['color', ['color']],
          ['para', ['ul', 'ol', 'paragraph']],
          ['height', ['height']],
          ['table', ['table']],
          ['insert', ['link', 'picture', 'hr']],
          ['view', ['fullscreen', 'codeview']],
          ['mybutton', ['hello']],
        ],
        buttons: {
          hello: HelloButton
        },
        callbacks: {
          onInit: function(e) {
            $("#summernote").summernote("fullscreen.toggle");
          }
        }
      });

      function saveFile() {
        var code = $('#summernote').summernote('code');
        $.ajax({
          url: 'schedules.php',
          data: {code: code},
          type: 'post',
          success: function(res) {
            if(res == "success") {
              console.log('Saved!');
            } else {
              console.log(res);
            }
          },
          error: function(err) {
            console.log(err);
          }
        });
      }
    </script>
  </body>

</html>

<?php } ?>
