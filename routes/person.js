const { Router } = require('express');
const { getPerson,
        putPerson,
        postPerson,
        deletePerson } = require('../controllers/person');


const router = Router();

router.get('/', getPerson);

router.put('/', putPerson);

router.post('/', postPerson);

router.delete('/', deletePerson);

module.exports = router;