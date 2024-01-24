navigator.clipboard.writeText("mattcart2022@gmail.com").then(() =>{
    console.log("Copied to clipboard successfully!");
}).catch(err => {
    console.log("Unable to copy to clipboard: ", err);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('hef')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function openDocument(){
    var Document = 'Matthew_Resume_2024_v2.pdf';

    window.open(Document, '_blank');
}
