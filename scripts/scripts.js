let date = new Date;


if(date.getDay() == 2 || date.getDay() == 4) {
    document.querySelector('#notification').style.padding = "10px";
    document.querySelector("#notification").innerHTML = '<i class="fa-solid fa-handshake" style="color:white">  </i> <a href="/">Join the Guayaquil Chamber today!</a>';
}



document.querySelector(".lastUpdated").textContent = "Last updated: " + document.lastModified 



function toggleMenu() {
    document.querySelector('#navBar ul').classList.toggle('active');
    document.querySelector('.fa-bars').classList.toggle('active');
    document.querySelector('.fa-xmark').classList.toggle('active');
}

document.querySelector('.hamburger').addEventListener('click', toggleMenu)