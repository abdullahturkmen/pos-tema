	
		var el = document.documentElement
    , rfs = // for newer Webkit and Firefox
    el.requestFullScreen
    || el.webkitRequestFullScreen
    || el.mozRequestFullScreen
    || el.msRequestFullscreen
    ;
    if(typeof rfs!="undefined" && rfs){
    	rfs.call(el);
    } else if(typeof window.ActiveXObject!="undefined"){
  // for Internet Explorer
  var wscript = new ActiveXObject("WScript.Shell");
  if (wscript!=null) {
  	wscript.SendKeys("{F11}");
  }
}



///////toastr
toastr.options = {
  "closeButton": true,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "1000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}



  function goBack() {
      window.history.back();
    }