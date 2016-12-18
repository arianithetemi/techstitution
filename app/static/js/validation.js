$(document).ready(function() {

	$("form").submit(function(e) {

		// Qëllimi i njoftimit - Validation
		if(($('#grow-service').is(':checked')) || ($('#service-start').is(':checked')) || ($('#service-removal').is(':checked'))) {	
		} else {
			alert("Ju lutem zgjedhni të paktën një opsion nga 'Qëllimi i njoftimit'!");
			$('.section1').css('display', 'block');
			e.preventDefault(e);
		}


		// Të dhënat për ndërmarrësin -  Validation
		var emri_ndermarresit = $('#emri_ndermarresit').val();
		var numri_regjistrimit_biznesit = $('#numri_regjistrimit_biznesit').val();
		var numri_fiskal = $('#numri_fiskal').val();
		var adresa_ndermarresit = $('#adresa_ndermarresit').val();
		var num_fax = $('#num_fax').val();
		var email_ndermarresit = $('#email_ndermarresit').val();

	 	if(!emri_ndermarresit || !numri_regjistrimit_biznesit || !numri_fiskal || !adresa_ndermarresit || !num_fax || !email_ndermarresit){
	 		alert("Ju lutem plotësoni fushat në seksionin 'Të dhënat për ndërmarrësin'!");
	 		$('.section2').css('display', 'block');
	 		e.preventDefault(e);
	 	}

	 	// Të dhënat për zyrtarin ligjërisht të përgjegjëshëm - Validation
	 	var emri_zyrtarit = $('#emri_zyrtarit').val();
	 	var adresa_zyrtarit = $('#adresa_zyrtarit').val();
	 	var numri_telefonit_zyrtarit = $('#numri_telefonit_zyrtarit').val();
	 	var num_fax_zyrtarit = $('#num_fax_zyrtarit').val();
	 	var email_address_zyrtarit = $('#email_address_zyrtarit').val();
	 	var num_id = $('#num_id').val();

	 	if(!emri_zyrtarit || !adresa_zyrtarit || !numri_telefonit_zyrtarit || !num_fax || !email_address_zyrtarit || !num_id){
	 		alert("Ju lutem plotësoni fushat në seksionin 'Të dhënat për zyrtarin ligjërisht të përgjegjëshëm'!");
	 		$('.section3').css('display', 'block');
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
 			num_fax_zyrtarit: {
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
 			num_fax_zyrtarit: {
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

 		},
 		submitHandler: function(form) {
            alert('Të dhënat u dërguan me sukses!');
            form.submit();
       }
 	})
});