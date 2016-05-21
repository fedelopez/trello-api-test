var authenticationSuccess = function () {
    console.log(">>>>>> Successful authentication");
    createCard("My new book", "A book about many things", "top");
};

var authenticationFailure = function () {
    console.log(">>>>>> Failed authentication");
};

var creationSuccess = function (data) {
    console.log('Card created successfully. Data returned:' + JSON.stringify(data));
};

var createCard = function (name, description, position) {
    var newCard = {
        name: name,
        desc: description,
        idList: "56e7d19842796e8cf29a1d41",
        pos: position
    };
    Trello.post('/cards/', newCard, creationSuccess);
};

Trello.authorize({
    type: "popup",
    name: "Getting Started Application",
    scope: {
        read: true,
        write: true
    },
    expiration: "never",
    success: authenticationSuccess,
    error: authenticationFailure
});




