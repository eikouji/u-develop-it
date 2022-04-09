const express = require('express');

const router = express.Router();

const db = require('../../db/connection');

const inputCheck = require('../../utils/inputCheck');

// originally app.get('/api/candidates)
router.get('/candidates', (req, res) => {
    const sql = `SELECT candidates.*, parties.name 
    AS party_name 
    FROM candidates 
    LEFT JOIN parties 
    ON candidates.party_id = parties.id 
    WHERE candidates.id = ?`;
const params = [req.params.id];

db.query(sql, params, (err, row) => {
if (err) {
res.status(400).json({ error: err.message });
return;
}
res.json({
message: 'success',
data: row
});
});


module.exports = router;