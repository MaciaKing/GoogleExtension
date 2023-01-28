// Posibles values selectionables
var content = [
    {id: 0, text: "IBM"},
    {id: 1, text: "Alien Vault"},
    {id: 2, text: "Virus Total"},
];


// URLs 
var virus_total = "https://virustotal.com/gui/search/";
var ibm = "https://exchange.xforce.ibmcloud.com/search/";
var alien_vault_ip = "https://otx.alienvault.com/indicator/ip/";
var alien_vault_domain = "https://otx.alienvault.com/indicator/domain/";

// Selected databases
var selected_virus_total = false;
var selected_ibm = false;
var selected_alien_vault = false;

$(document).ready(function () {
    $(".prompt").select2({
        data:content,
        width: '100%',
        multiple:true,
        placeholder:"Enter Databases",
    });

    $(".prompt").change(function(){
        console.log("change");
        resetSelected();
        detectSelected();
    });
});

// Get the domain or the IP
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

// Detect selected databases
function detectSelected(){  
    var selected = $(".prompt").select2("data");
    for (var i = 0; i < selected.length; i++) {
        if (selected[i].id == 0) {
            selected_ibm = true;
        }
        if (selected[i].id == 1) {
            selected_alien_vault = true;
        }
        if (selected[i].id == 2) {
            selected_virus_total = true;
        }
    }

    //show selected 
    /*
    console.log("ibm ", selected_ibm);
    console.log("alien ",selected_alien_vault);
    console.log("virus ", selected_virus_total);
    */
}

// Reset selected databases
function resetSelected(){
    selected_virus_total = false;
    selected_ibm = false;
    selected_alien_vault = false;
}

// Main function (Search button)
function main() {
    input = reciverInput();
    if (selected_virus_total)
        sendToVirusTotal(reciverInput());
    if (selected_ibm)   
        sendToIBM(input);
    if (selected_alien_vault){
        var is_ip = isIP(input);        
        sendToAlientVault(reciverInput(), is_ip);
    }
}