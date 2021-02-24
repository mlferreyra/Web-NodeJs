const express = require('express');
//sirve para crear multiples rutas y mantenerlas en archivos separados
const router = express.Router();

//routes
router.get('/', (req, res) =>{
    //res.sendFile(path.join(__dirname, 'views/index.html'));
    //usando 'ejs'
    res.render('index.html', {title:'First WebSite'});
    
});

router.get('/contact', (req, res) =>{
    //res.sendFile(path.join(__dirname, 'views/index.html'));
    //usando 'ejs'
    res.render('contact.html', {title:'Contact Page'});
    
});

module.exports = router;