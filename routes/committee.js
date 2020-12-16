const express = require('express');

/* Controller methods */
const committeeController = require('../controllers/committee');
const authorization = require('../middleware/authorization');
const validation = require('../middleware/validation');

/* For handling routing */
const router = express.Router();

/* Handles all chairpersons and committees related actions */
router.get('/committeeParticipants/:committeeName', authorization.formatAndSetToken, authorization.verifyToken, committeeController.getAllCommitteeParticipants);

/* Create new participant */
router.post('/committees', authorization.formatAndSetToken, authorization.verifyToken, committeeController.createNewParticipant);
router.patch('/committees/:committeeName', authorization.formatAndSetToken, authorization.verifyToken, committeeController.updateCommitteeParticipantRole);
router.delete('/committees/:committeeName', authorization.formatAndSetToken, authorization.verifyToken, committeeController.deleteCommitteeParticipant);
router.get('/committees', authorization.formatAndSetToken, authorization.verifyToken, committeeController.getCommitteeNamesAndInfo);

/* Create new committee */
router.post('/committees/createCommitte', authorization.formatAndSetToken, authorization.verifyToken, committeeController.createCommittee);

module.exports = router;