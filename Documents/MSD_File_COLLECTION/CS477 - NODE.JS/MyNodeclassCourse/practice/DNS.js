
//the way to find IP address of network using dns server 
//1st import the module the built in module 

let dns = require('dns');//dns module
let miu_IP = dns.lookup('www.miu.edu', function (err, addresses, family) {
    if (err) { console.log('err') }
    else {
        console.log("IP Addres of MIU by lookup address:" + addresses);
        console.log("the Ip Version :" + family);
    }
}
);


dns.resolve4('www.miu.edu', function (err, addresses) {
    if (err) { console.log('err') }
    else {
        console.log("IP Addres of MIU:" + addresses);
       
    }
}
);

dns.resolve('www.miu.edu', function (err, addresses) {
    if (err) { console.log('err') }
    else {
        console.log("IP Addres of MIU:" + addresses);
      
    }
}
);
