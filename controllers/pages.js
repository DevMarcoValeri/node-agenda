exports.getMenu = (req, res, next) => {
    res.render('pages/menu', {
        title: 'Agenda - Menu'
    })
};