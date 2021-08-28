
function pageSize(size){
  if (size < 768){
    $('.checkout-left').hide();
    $('.keyboard-content').hide();
    $('.checkout-right-close').show();
    $('#addFood').show();
  }
  else{
    $('.checkout-left').show();
    $('.keyboard-content').show();
    $('.checkout-right-close').hide();
    $('#addFood').hide();
  }
}


$(window).on('resize', function(){
    var win = $(this); //this = window
    pageSize(win.width());
  });

$(document).ready(function(){
  deactivemenu();
  pageSize($(window).width());
  $( "#adisyon-open" ).on("click",function() {
    $('.checkout-left').show();
    $('.checkout-right').hide();
  });
});

function addFood() {
  $('.checkout-left').hide();
  $('.checkout-right').show();
}



function searchFilter(){
  var x, filter, icerik, item, a, i, txtValue;
  var deger="";
  x = kboard.input.default;
  filter = x.toUpperCase();
  icerik=document.getElementById("foodList");
  item=icerik.getElementsByTagName("div");
  for (i = 0; i < item.length; i++) {
    a = item[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      item[i].style.display="";
    } else {
      item[i].style.display="none";
    }
  }
}

function addTodoItem(value,title,piece) {
  if (piece>0) {
    var adet=piece;
    var aratoplam=parseInt(value)*piece;
  }
  else{
    var adet=1;
    var aratoplam=parseInt(value);
  }
  var ul,li,filter;
  var toplamfiyat=parseInt(document.getElementById("orderCount").value)+aratoplam;
  filter = title.toUpperCase();
  ul=document.getElementById("todoList");
  li=ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    var isim = $(li[i]).children()[1].value;
    if (isim.toUpperCase().indexOf(filter) > -1) {
      adet = parseInt($(li[i]).children()[0].value)+adet;
      $(li[i]).remove();
    }
  }

  $("#todoList").append("<li class='btn' id='13'>" +

    "<input type='text' name='' value='" + adet +"' id='orderPiece' disabled='disabled'>" +
    "<input type='text' name='' value='" + title + "' id='orderName' disabled='disabled'>" +
    "<input type='text' name='' value='" + adet*value + "' id='orderPrice' disabled='disabled' price='"+value+"'>" +
    "<button id='orderRemove' class='order-remove'><i class='fa fa-times'></i></button>" +
    "<a></a></li>");
  document.getElementById("orderCount").value=toplamfiyat;
}



function deleteTodoItem(e, item) {
  e.preventDefault(); document.getElementById("orderCount").value=document.getElementById("orderCount").value-$(item).parent().children()[2].value;
  $(item).parent().remove();
  deactivemenu();
}


function completeTodoItem() {  
  $(this).parent().toggleClass("strike");
}

function activemenu(){
  $(".checkout-options")[0].innerHTML="";
  $(".checkout-options").append(
    "<li class='plus'><a>+</a></li>"+
    "<li class='minus'><a>-</a></li>"+
    "<li class='goback'><a>Geri</a></li>"
    );
}

function deactivemenu(){
  $(".checkout-options")[0].innerHTML="";
  $(".checkout-options").append(
    "<li><a href=''>Masa Değiştir</a></li>"+
    "<li><a href=''>Müşteri Seç</a></li>"+
    "<li><a href=''>Adisyon Notu</a></li>"+
    "<li><a href=''>Hesap Yaz</a></li>"+
    "<li><a href=''>Adisyon Ekle</a></li>"+
    "<li class='add-food' id='addFood' onclick='addFood()'><a>Ürün Ekle</a></li>" 
    );      
}

$(function() {
  $("#todoList").on('click','a', function(e){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    $(this).parent()[0].className += " active";
    activemenu();
  });

  $(".checkout-options").on('click','.goback', function(e){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    deactivemenu();
  });

  $(".checkout-options").on('click','.plus', function(e){
    var current = document.getElementsByClassName("active");
        //console.log(current[0].id);
        var adet,isim,fiyat,bfiyat;
        adet=parseInt(current[0].children[0].value);
        isim=current[0].children[1].value;
        fiyat=parseInt(current[0].children[2].value);
        bfiyat=parseInt(current[0].children[2].attributes['price'].value);
        adet++;
        fiyat=adet*bfiyat;
        current[0].remove();
        $("#todoList").append("<li class='btn active' id='13'>" +

          "<input type='text' name='' value='" + adet +"' id='orderPiece' disabled='disabled'>" +
          "<input type='text' name='' value='" + isim + "' id='orderName' disabled='disabled'>" +
          "<input type='text' name='' value='" + fiyat + "' id='orderPrice' disabled='disabled' price='"+bfiyat+"'>" +
          "<button id='orderRemove' class='order-remove'><i class='fa fa-times'></i></button>" +
          "<a></a></li>");
        document.getElementById("orderCount").value=parseInt(document.getElementById("orderCount").value)+bfiyat;
        
      });

  $(".checkout-options").on('click','.minus', function(e){
    var current = document.getElementsByClassName("active");
    var adet,isim,fiyat,bfiyat;
    adet=parseInt(current[0].children[0].value);
    isim=current[0].children[1].value;
    fiyat=parseInt(current[0].children[2].value);
    bfiyat=parseInt(current[0].children[2].attributes['price'].value);
    adet--;
    fiyat=adet*bfiyat;
    current[0].remove();
    if (adet!=0) {
      $("#todoList").append("<li class='btn active' id='13'>" +
        "<input type='text' name='' value='" + adet +"' id='orderPiece' disabled='disabled'>" +
        "<input type='text' name='' value='" + isim + "' id='orderName' disabled='disabled'>" +
        "<input type='text' name='' value='" + fiyat + "' id='orderPrice' disabled='disabled' price='"+bfiyat+"'>" +
        "<button id='orderRemove' class='order-remove'><i class='fa fa-times'></i></button>" +
        "<a></a></li>");
    }
    else{
      deactivemenu();
    }
    document.getElementById("orderCount").value=parseInt(document.getElementById("orderCount").value)-bfiyat;       
  });
  
  $(".element-item").on('click', function(e){
    toastr.info("Eklendi!");
    
    
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    deactivemenu();
    
    var urun_adet=parseInt(keyboard.input.default);
    keyboard.input.default = "";
    document.getElementById('pieceInput').value = "";
    var urun_id = $(this).attr('price');
    var id = $(this).attr('id');
    var urun_adi = $(this).children()[0].text;

    

    e.preventDefault();
    addTodoItem(urun_id,urun_adi,urun_adet)
  });
  

  $("#todoList").on('click', '.order-remove', function(e){
    var item = this; 
    deleteTodoItem(e, item)
  })
  
  $(document).on('click', ".todo-item-done", completeTodoItem)

});

$('.items-wrapper').isotope({
  itemSelector: '.item',
  filter: "*"
});

$('.menu li').click(function(){
  var selector = $(this).attr('data-filter');
  
  $('.items-wrapper').isotope({
    filter: selector,
  })
  searchFilter();
  //changing active class with click event
  $('.menu li.active').removeClass('active');
  $(this).addClass('active');
});


