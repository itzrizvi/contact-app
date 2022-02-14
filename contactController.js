const contacts = require('./Contacts');

exports.getAllContacts = (req, res) => {
    res.json(contacts.getAllContacts()) // for sending json object
}

exports.createContact = (req, res) => {
    let { name, phone, email } = req.body;
    let contact = contacts.createContact({
        name,
        phone,
        email
    });

    res.json(contact);
}