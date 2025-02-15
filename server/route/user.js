const express = require('express');
const { register, login, editProfile, deleteProfile } = require('../controller/user');
const router = express.Router();


router.post('/register', register)
router.post('/login', login)
router.put('/edit', editProfile);
router.delete('/delete', deleteProfile)
module.exports = router