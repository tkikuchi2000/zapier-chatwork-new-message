var roomId = 'xxxxxxxx';
var headers = {'X-ChatWorkToken':'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'};
fetch('https://api.chatwork.com/v2/rooms/' + roomId + '/messages', { headers: headers })
    .then(function(res) {
        if (res.status == 204) {
            return [];
        }
        return res.json();
    }).then(function(json) {
        console.log(json);
        callback(null, json);
    }).catch(function(error) {
        console.log(error);
        callback(error);
    });

