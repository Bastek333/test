function submitForm() {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById('emailInput').value)) {
    var http = new XMLHttpRequest();
    http.open("POST", "mailinglist.php", true);
    http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    var params = "email=" + document.getElementById('emailInput').value;
    http.send(params);
	document.getElementById('emailInput').value = "Your email address have been submitted!";
	} else {
	document.getElementById('emailInput').value = "You have entered an invalid email address!";
	}
}


$(function() { 
    $('a.menu').on('click','', function ( e ) {
        e.preventDefault();
		$('a.menu').removeClass('active');
		$('section.sectionBlock').removeClass('active');
        $(this).addClass('active');
		$(this.name).addClass('active');
    });
});
