//@desc get all contact
//@route GET/api/contacts
//@access public
const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

//@desc Create new contact
//@route POST/api/contacts
//@access public
const createContact = (req, res) => {
  res.status(201).json({ message: "Create contact" });
};

//@desc GET contact
//@route GET/api/contacts/:id
//@access public
const getContact = (req, res) => {
  res.status(200).json({ message: "get contact for " + req.params.id });
};

//@desc Update contact
//@route PUT/api/contacts:id
//@access public
const updateContact = (req, res) => {
  res.status(200).json({ message: "Update contact " + req.params.id });
};

//@desc Delete contact
//@route DELETE/api/contacts
//@access public
const deleteContact = (req, res) => {
  res.status(200).json({ message: "delete contact " + req.params.id });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
