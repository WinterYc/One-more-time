function createNum(num, tel) {
    var obj = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine'
    }
    for (var i = 0; i < num; i++) {
        var section = document.createElement('section');
        document.body.appendChild(section);
        section.innerHTML = '<div></div><div></div><div></div><div></div><div></div><div></div><div></div>';
    }
    var sections = document.getElementsByTagName('section');
    var arr = tel.split('');
    console.log(arr);
    for (var i = 0; i < sections.length; i++) {
        sections[i].className = obj[arr[i]];
    }

}