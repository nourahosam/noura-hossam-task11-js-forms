function addGlobalListener(type, selector, callback) {
    document.addEventListener(type,
        function (e){
            console.log(e.target);
            if(e.target.matches(selector)) {
                callback(e);}
        });
}

document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    const input = document.querySelector('input');
    var regex = /^[A-Za-z0-9 ]+$/;
    const isValid = regex.test(input.value);
    if(isValid){
        var label = document.createElement('label');
        // label.innerHTML += '<div> X <div>';
        label.style.width = '100px';
        label.style.height = '30px';
        label.style.color = 'white';
        label.style.backgroundColor = 'green';
        label.innerHTML = input.value + ' <span>X</span>';
       document.querySelector('.labels').appendChild(label);
    }
    console.log(input);
});

addGlobalListener('click', 'label', function(e){
    console.log('here');
    //var label = document.querySelector('label');
    //label.firstChild.remove(;
    e.target.remove();
    // e.target.
    console.log(e.target);
});

addGlobalListener('click', '.delete', function(e){
    console.log('here');
    var labels = document.getElementsByClassName('.labels');
    labels.remove();
    //labels
    //e.target.remove();
    //e.target.
    //console.log(e.target);
});

// document.getElementById('delete').addEventListener('click', function(e){
    
//     var label = document.querySelector('label');
//     console.log(label);
// })