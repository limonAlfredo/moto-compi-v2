const indexCtrl = {};


indexCtrl.renderHome = (req, res)=>{
    res.render('home',{title:"MOTOpartes el Gavi"});
}
module.exports = indexCtrl;