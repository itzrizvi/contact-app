const router = require('express').Router();
const {
    getAllContacts,
    createContact,
    getContactsbyId,
    updateContact
} = require('./contactController');

router.get('/', getAllContacts);
router.post('/', createContact);
router.get('/:id', getContactsbyId);
router.put('/:id', updateContact);
// router.delete('/:id');

module.exports = router