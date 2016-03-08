window.pollsterPoll = function(incoming_data){
    for (var i = 0; i < incoming_data[0].estimates.length; i++) {
        var $candidate = $('.' + incoming_data[0].estimates[i].choice.toLowerCase());
        var value = incoming_data[0].estimates[i].value;
        var candidateHeight = value * 10;
        $candidate.css('height', candidateHeight);
    }
};

$(document).ready(function(){
    $.ajax({
        url: 'https://elections.huffingtonpost.com/pollster/api/charts.json?callback=pollsterPoll&state=US&topic=2016-president-gop-primary',
        dataType: 'script',
        type: 'GET',
        cache: true
    });
    $.ajax({
        url: 'https://elections.huffingtonpost.com/pollster/api/charts.json?callback=pollsterPoll&state=US&topic=2016-president-dem-primary',
        dataType: 'script',
        type: 'GET',
        cache: true 
    })
})