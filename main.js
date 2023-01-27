var virus_total = "https://virustotal.com/gui/search/";
var ibm = "https://exchange.xforce.ibmcloud.com/search/";

var alien_vault_ip = "https://otx.alienvault.com/indicator/ip/";
var alien_vault_domain = "https://otx.alienvault.com/indicator/domain/";



function reciverInput() {
    return document.getElementById("input").value;
}

function sendToVirusTotal(value) {
    window.open(virus_total.concat(value), "_blank");
}

function sendToIBM(value) {
    window.open(ibm.concat(value), "_blank");
}
function sendToAlientVault(value, is_ip) {
    if(is_ip){
        window.open(alien_vault_ip.concat(value), "_blank");
    }else{
        window.open(alien_vault_domain.concat(value), "_blank");   
    }
}

//return true if IP, false if domain
function isIP(str) {
    var pattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return pattern.test(str);
  }


function main() {
    input = reciverInput();
    sendToVirusTotal(reciverInput());
    sendToIBM(input);
    var is_ip = isIP(input);
    sendToAlientVault(reciverInput(), is_ip);
}