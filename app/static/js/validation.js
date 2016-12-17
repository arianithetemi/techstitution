$(document).ready(function() {

	$("form").submit(function(e) {
		var testField = $('#entre_name').val();
	 	if(testField.length === 0){
	 		alert("Ju lutem plotso fushat!");
	 		$('.hapi2').css('display', 'block');
	 		// $(this).focus();
	 		e.preventDefault(e);
	 	}
	})

 	$('#theForm').validate({

 		errorElement: 'div',
 		rules: {
 			emri_ndermarresit: {
 				required: true,
 				minlength: 5
 			},
 			numri_regjistrimit_biznesit: {
 				required: true,
 				number: true,
 				minlength: 7
 			},
 			numri_fiskal: {
 				required: true,
 				number: true,
 				minlength: 9
 			},
 			numri_tel: {
 				required: true,
 				number: true,
 				minlength: 9
 			},
 			adresa_ndermarresit: {
 				required: true,
 				minlength: 10,
 				maxlength: 25
 			},
 			num_fax: {
 				required: true,
 				number: true,
 				minlength: 9
 			},
 			email_ndermarresit: {
 				required: true,
 				email: true
 			},
 			emri_zyrtarit: {
 				required: true,
 				maxlength: 10
 			},
 			adresa_zyrtarit: {
 				required: true,
 				maxlength: 25
 			},
 			numri_telefonit_zyrtarit: {
 				required: true,
 				number: true,
 				minlength: 9
 			},
 			num_fax: {
 				required: true,
 				number: true,
 				minlength: 9
 			},
 			email_address_zyrtarit: {
 				required: true,
 				email: true
 			},
 			num_id: {
 				required: true,
 				number: true,
 				maxlength: 23
 			},
 			pershkrimi_aktivetit_faza_ofrimit: {
 				required: true,
 				minlength: 50,
 				maxlength: 250
 			},
 			faza_ofrimit: {
 				required: true,
 				minlength: 20,
 				maxlength: 100	
 			},
 			dokumentet_bashkangjitura: {
 				required: true,
 				extension: "pdf"
 			}
 		},

 		messages: {
 			emri_ndermarresit: {
 				required: "Duhet plotësuar!",
 				minlength: "Shëno më shumë se 5 shkronja!"
 			},
 			numri_regjistrimit_biznesit: {
 				required: "Duhet plotësuar!",
 				number: "Shëno vetëm numra të lutem!",
 				minlength: "Shëno deri në 7 numra!"
 			},
 			numri_fiskal: {
 				required: "Duhet plotësuar!",
 				number: "Shëno vetëm numra të lutem!",
 				minlength: "Shëno deri në 9 numra!"
 			},
 			numri_tel: {
 				required: "Duhet plotësuar!",
 				number: "Shëno vetëm numra të lutem!",
 				minlength: "Shëno deri në 9 numra!"
 			},
 			adresa_ndermarresit: {
 				required: "Duhet plotësuar!",
 				minlength: "Së paku se 10 karaktere!",
 				maxlength: "Jo më shumë se 25 karaktere!"
 			},
 			num_fax: {
 				required: "Duhet plotësuar!",
 				number: "Shëno vetëm numra të lutem!",
 				minlength: "Shëno deri në 9 numra!"
 			},
 			email_ndermarresit: {
 				required: "Duhet plotësuar!",
 				email: "Ju lutem shënoni email të saktë!"
 			},
 			emri_zyrtarit: {
 				required: "Duhet plotësuar",
 				maxlength:"Jo më shumë se 10 karaktere!"
 			},
 			adresa_zyrtarit: {
 				required: "Duhet plotësuar!",
 				maxlength: "Jo më shumë se 25 karaktere!"
 			},
 			numri_telefonit_zyrtarit: {
 				required: "Duhet plotësuar!",
 				number: "Shëno vetëm numra të lutem!",
 				minlength: "Shëno deri në 9 numra!"
 			},
 			num_fax: {
 				required: "Duhet plotësuar",
 				number: "Shëno vetëm numra të lutem!",
 				minlength: "Shëno deri në 9 numra!"
 			},
 			email_address_zyrtarit: {
 				required: "Duhet plotësuar!",
 				email: "Ju lutem shënoni email të saktë!"
 			},
 			num_id: {
 				required: "Duhet plotësuar!",
 				number: "Shëno vetëm numra të lutem!",
 				maxlength: "Jo më shumë se 23 karaktere!"
 			},
 			pershkrimi_aktivetit_faza_ofrimit: {
 				required: "Duhet plotësuar!",
 				minlength: "Shëno së paku 50 karaktere, të lutem!",
 				maxlength: "Jo më shumë se 250 karaktere!",
 			},
 			faza_ofrimit: {
 				required: "Duhet plotësuar!",
 				minlength: "Shëno së paku 20 karaktere, të lutem!",
 				maxlength: "Jo më shumë se 100 karaktere!"
 			},
 			dokumentet_bashkangjitura: {
 				required: "Duhet plotësuar!",
 				accept: "Vetem pdf dhe text files!"
 			}

 		}
 	})
});