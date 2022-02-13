class Contacts {
    constructor() {
        this.contacts = [];
    }

    getAllContacts() {
        return this.contacts;
    }

    getContactsbyId(id) {
        return this.contacts.find(contact => contact.id === id);
    }

    createContact(contact) {
        contact.id = this.contacts.length + 1;
        this.contacts.push(contact);
        return contact;
    }

    updateContactById(id, updatedContact) {
        let index = this.contacts.findIndex(contact => contact.id === id);

    }
}