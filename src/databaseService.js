var messagesStore = [];

function StoreMessage (message)
{
    message.key = messagesStore.length;
    messagesStore.push(message);

    LogMessages();
}

function FetchMessages ()
{
    return messagesStore;
}

function LogMessages ()
{
    console.log(JSON.stringify(messagesStore, null, 2));
}

module.exports = { StoreMessage, FetchMessages };