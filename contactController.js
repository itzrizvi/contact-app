const contacts = require('./Contacts');

exports.getAllContacts = (req, res) => {
    res.json(contacts.getAllContacts()) // for sending json object
}