let apikey ="cd92e0db"

function toggleDarkMode() {
    console.log("button clicked");
    
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode')? 'enabled' : 'disabled');
    
}

window.onload=()=>{
    if(localStorage.getItem('darkMode'==='enabled')) {
        document.body.classList.add('dark-mode');
    }
}