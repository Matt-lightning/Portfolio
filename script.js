navigator.clipboard.writeText("mattcart2022@gmail.com").then(() =>{
    console.log("Copied to clipboard successfully!");
}).catch(err => {
    console.log("Unable to copy to clipboard: ", err);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if(targetElement){
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }

        
        });
    });

function openDocument(){
    var Document = 'Matthew_Resume_2024_v3.pdf';

    window.open(Document, '_blank');
}

