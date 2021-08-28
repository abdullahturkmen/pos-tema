

		$(document).ready(function(){
			$('.change-money').hide();
			$("#Input").val(0);
		});

		var format = function(num){
			var str = num.toString().replace("$", ""), parts = false, output = [], i = 1, formatted = null;
			if(str.indexOf(".") > 0) {
				parts = str.split(".");
				str = parts[0];
			}
			str = str.split("").reverse();
			for(var j = 0, len = str.length; j < len; j++) {
				if(str[j] != ",") {
					output.push(str[j]);
					if(i%3 == 0 && j < (len - 1)) {
						output.push(",");
					}
					i++;
				}
			}
			formatted = output.reverse().join("");
			return(formatted + ((parts) ? "." + parts[1].substr(0, 2) : ""));
		};

		function changingMoney() {

			var orderTotal = $("#orderTotal").val();
			var Input = $("#Input").val();
			orderTotal = parseFloat(orderTotal);
			Input = parseFloat(Input);
			
			if(orderTotal > 0)
			{
				if(orderTotal > Input){
					var sonuc = orderTotal - Input;
					$("#orderTotal").val(sonuc);
					$("#Input").val(0);
				}
				if(orderTotal < Input){
					var sonuc =  Input - orderTotal;
					$("#orderTotal").val("");
					$("#Input").val(0);
					$('.change-money').html("<span>Para Üstü: " + sonuc + " ₺</span>");
					$('.change-money').show();
				}
				if(orderTotal == Input){
					$("#orderTotal").val(0);
					$("#Input").val(0);
				}
			}
		}

		function iskonto() {
			var orderTotal = $("#orderTotal").val();
			var Input = $("#Input").val();
			var sonuc = orderTotal - ( orderTotal * Input / 100 );
			$("#orderTotal").val(format(sonuc));
			$("#Input").val(0);
		}

		function yuvarla() {
			var orderTotal = $("#orderTotal").val();
			var Input = $("#Input").val();
			var sonuc = orderTotal - Input;
			$("#orderTotal").val(format(sonuc));
			$("#Input").val(0);
		}

		function tumu() {
			var orderTotal = $("#orderTotal").val();
			var Input = $("#Input").val();
			$("#orderTotal").val(format(orderTotal));
			$("#Input").val(format(orderTotal));
		}

		function pay() {

			var orderTotal = $("#orderTotal").val();
			var Input = $("#Input").val();
			if(Input > 0)
			{
				var sonuc = orderTotal / Input;
				$("#orderTotal").val(format(sonuc));
				$("#Input").val(0);
			}
		}

		function bir() {
			var Input = $('#Input').val();
			sonuc = parseInt(Input)+1;
			$("#Input").val(sonuc);
		}
		function bes() {
			var Input = $("#Input").val();
			sonuc = parseInt(Input)+5;
			$("#Input").val(sonuc);
		}
		function on() {
			var Input = $("#Input").val();
			sonuc = parseInt(Input)+10;
			$("#Input").val(sonuc);
		}
		function yirmi() {
			var Input = $("#Input").val();
			sonuc = parseInt(Input)+20;
			$("#Input").val(sonuc);
		}
		function elli() {
			var Input = $("#Input").val();
			sonuc = parseInt(Input)+50;
			$("#Input").val(sonuc);
		}
		function yuz() {
			var Input = $("#Input").val();
			sonuc = parseInt(Input)+100;
			$("#Input").val(sonuc);
		}


