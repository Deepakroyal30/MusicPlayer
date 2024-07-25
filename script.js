function show(message) {
    let success = '<i class="fa-regular fa-circle-check fa-shake"></i> Successfully Submitted';
    let invalid = '<i class="fa-solid fa-exclamation-triangle fa-beat"></i> Oops, invalid try again';
    let error = '<i class="fa-solid fa-xmark fa-beat-fade"></i> Please fix the error';
    
    const msg = document.createElement('div');
    msg.classList.add('toast');
    
    if (message.includes('success')) {
        msg.innerHTML = success;
        msg.classList.add('success');
    } else if (message.includes('error')) {
        msg.innerHTML = error;
        msg.classList.add('error');
    } else if (message.includes('oops')) {
        msg.innerHTML = invalid;
        msg.classList.add('invalid');
    }
    
    // Append the new message element to the box container
    const box = document.getElementById('box');
    box.appendChild(msg);

    setTimeout(() => {
        msg.remove();
    }, 6000);
}
