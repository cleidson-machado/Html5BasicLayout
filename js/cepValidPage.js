function cpfDataProcessTrigger() {
    
    //GET CEP INFO BY USER INTERACION
    let cep = document.querySelector("#cepNum").value;

    //CONDITION IF SENDING WRONG DATA
    if(cep.length != 8) {
        alert("CEP INVÁLIDO!");
            let locationCepNum = document.querySelector("#cep-info-cep");
            locationCepNum.innerHTML = "O CEP deve ter Extamente 8 Digitos e Você de digitar somente numeros!"
        hide();
            autoRefresh();
        return;
    }
    apiUseGetData(cep)
}

//GET DATA FROM PUBLIC API...
function apiUseGetData(cepDataFromUser){
       let url = `https://viacep.com.br/ws/${cepDataFromUser}/json/`;
       fetch(url).then(function(response){
           response.json().then(function(data){
                populatePageData(data);
           })
       })
}

//SHOW DATA ON THE PAGE
function populatePageData(dados){
    console.log(dados)

    let locationCepNum = document.querySelector("#cep-info-cep");
    let locationDddNum = document.querySelector("#cep-info-ddd");
    let locationNeighborhoodName  = document.querySelector("#cep-info-bairro");
    let locationStreetAddressName  = document.querySelector("#cep-info-logradouro");
    let locationCityName = document.querySelector("#cep-info-localiade");
    let locationUfName = document.querySelector("#cep-info-uf");

    if(!dados.erro){
        locationCepNum.innerHTML = "CEP: " + dados.cep;
        locationDddNum.innerHTML = "DDD: " + dados.ddd;
        locationNeighborhoodName.innerHTML = "BAIRRO: " + dados.bairro;
        locationStreetAddressName.innerHTML = "LOGRADOURO: " + dados.logradouro;
        locationCityName.innerHTML = "CIDADE: " + dados.localidade;
        locationUfName.innerHTML = "UF: " + dados.uf;
    } else {
        locationCepNum.innerHTML = "ERRO! - CEP NÃO ENCONTRADO"
        hide();
            autoRefresh();
    }

    
}

//HIDDEN ELEMENTS TO IMPROVE LAYOUT...
function hide() {
    // document.getElementById('cep-info-cep').hidden = "true"; //Don't remove this one! I Stay use it to show MSN Text!
    document.getElementById('cep-info-ddd').hidden = "true";
    document.getElementById('cep-info-bairro').hidden = "true";
    document.getElementById('cep-info-logradouro').hidden = "true";
    document.getElementById('cep-info-localiade').hidden = "true";
    document.getElementById('cep-info-uf').hidden = "true";
 }

 //I USE THIS ONE BECAUSE WHEN HIDDEN THE P ELEMENT HE STAY HIDDEN FOR ALL SESSION UNTIL THE NEXT RELOAD PAGE ACTION!...
 //I TRIED TO REVERSE THE HIDDEN ACTION, BUT IT DIDN'T WORK WELL...
 function autoRefresh() {
    setTimeout("location.reload(true);", 3000);
 }
