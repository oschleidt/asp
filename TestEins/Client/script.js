window.onload = function () {
    var connection = $.hubConnection();
    var testHub = connection.createHubProxy('testHub');
    testHub.on('sendMessage', function (name, message) {
        $('#chat').html($('#chat').html() + '<br/>' + name + ' schrieb: ' + message);
    });

    connection.start().done(function () {
        $('#senden').click(function () {
            testHub.invoke('sendMessage', $('#name').val(), $('#message').val());
        });
    });
};