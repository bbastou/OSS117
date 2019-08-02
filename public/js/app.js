

function getRepliqueRandom() {
	$.ajax({
		type: 'GET',
		url: '/api/v1/replique/random/',
		success: function(data) {
            if(data[0].film === "OSS 117 : Le Caire nid d’espions") {
                $('body').removeClass('rio').addClass('caire');
                $('#img-container .img-rio').hide();
                $('#img-container .img-caire').show();
            } else {
                $('body').removeClass('caire').addClass('rio');
                $('#img-container .img-caire').hide();
                $('#img-container .img-rio').show();
            }
            $('#replique').html(data[0].replique.split('\n').join('<br/>'));
            $('#film').html(data[0].film);
            window.history.pushState("", "", '/replique/'+data[0].permalien);
		}
	});
}

window.onpopstate = function(event) {
    //console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
};