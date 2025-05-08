const links = document.getElementById('links');
const openLinks = () => {
    links.classList.toggle('open');
}


const arrow = document.getElementById('arrow');

window.onscroll = () => {
    if(document.documentElement.scrollTop>60){
        arrow.style.display = "block";
    }else{
        arrow.style.display = "none";
    }
}

function toTop(){
    document.documentElement.scrollTop = 0;
};

