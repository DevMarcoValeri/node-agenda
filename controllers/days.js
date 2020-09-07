// Import db
const db = require('../util/database');

exports.getNote = (req, res, next) => {
    console.log(req.body);
    res.redirect('/01012021')
}

exports.getDay = (req, res, next) => {
    
    db.execute('SELECT * FROM one')
        .then(([rows, filedData]) => {

            /*
            * Save all notes from the db inside a new array
            * who name is notes
            */
            const notes = rows.map(e => e.note);

            res.render('days/days', {
                title: 'Agenda - days',
                date: rows[0].date,
                notes: notes
            })
        })
        .catch(err => console.log(err));
};