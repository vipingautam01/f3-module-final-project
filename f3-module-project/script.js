let ipAddressEle = document.getElementById("ipAddress");
let getStartedBtnEle = document.getElementById("getStartedBtn");




getStartedBtnEle.addEventListener("click", function(){
    window.location.href = "./details";
})

async function getIpAdress(){
    let received = await fetch('https://api.ipify.org?format=json')

    .then((res) => res.json())
    .then((data) => ipAddressEle.innerText = data.ip)
    .catch((error) => {
        ipAddressEle.innerText = "...-....-...";
        console.log(error);
    })
}


getIpAdress()