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

exports.getContactsbyId = (req, res) => {
    let id = req.params.id;
    id = parseInt(id);
    let contact = contacts.getContactsbyId(id);
    res.json(contact);
}

exports.updateContact = (req, res) => {
    let id = req.params.id;
    id = parseInt(id);

    let { name, email, phone } = req.body;

    let contact = contacts.updateContactById(id, {
        name,
        email,
        phone
    });

    res.json(contact);
}

exports.deleteContact = (req, res) => {
    let id = req.params.id;
    id = parseInt(id);

    let contact = contacts.deleteContactById(id);
    res.json(contact);
}