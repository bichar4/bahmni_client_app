const proxy = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        proxy("/openmrs",{
            target:"https://192.168.33.10",
            changeOrigin:true,
            secure:false 
     })
    );
};