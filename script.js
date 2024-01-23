
function copyToClipboard(){
    var text = document.createElement(text);
        
    text.value = email;
    
    document.body.appendChild(text);
    
    text.select();
    
    document.execCommand('copy');
    
    document.body.removeChild(text);
    
    alert('Copied email to clipboard');
}

