const navSection = document.querySelector('.nav-section');
const openNav = document.getElementById('openNav');
const closeNav = document.getElementById('closeNav');

openNav.onclick = function(){
    navSection.style.display = 'flex';
}

closeNav.onclick = function(){
    navSection.style.display = 'none';
}

window.onclick = function(e){
    if(e.target == navSection){
        navSection.style.display = 'none';
    }
}