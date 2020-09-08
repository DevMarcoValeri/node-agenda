// Import db
const pool = require('../util/database');

exports.getNote = (req, res, next) => {

    // Insert note inside db
    const sql = `INSERT INTO one (date, time, note) VALUES ('01/01/2021', '12:00', '${req.body.note}')`;

    if (req.body.note) {
        pool.query(sql, (err, result) => {
            if (err) throw err;
        })
    }


    res.redirect('/01012021');
}

exports.deleteNote = (req, res, next) => {
    console.log(`Test: ${req.body.delete}`);
}

exports.getDay = (req, res, next) => {

    pool.query('SELECT * FROM one', (error, results, fields) => {
        if (error) throw error;
        
        // Add notes from the database to the array notes
        const notes = results.map(note => note.note);
        console.log(notes);

        // Render the day on the webpage
        res.render('days/days', {
            title: 'Agenda - Day',
            notes: notes
        })
        
    })
};