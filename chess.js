function chess() {
    let mainBlock = document.querySelector('.main__block');
    let block;
    let flag=true;
    let number =  [1,2,3,4,5,6,7,8];
    let letterss = ['a','b','c','d','e','f','g','h'];
    let letters = document.querySelector('.letters');
    let numbers = document.querySelector('.numbers');
    let blockAll = document.querySelector('.blockAll');
    let numbers_child;
    let letters_child;

    for(let d = 7;d>=0;d--){
        numbers_child=document.createElement('div');
        numbers_child.className = 'numbers__child';
        numbers.appendChild(numbers_child);
        numbers_child.innerHTML = number[d];
    }

    for (let i =0; i<8;i++){


        for(let j=0;j<8;j++) {

            if(j===0) flag=!flag;
            block = document.createElement('div');
            if (flag) block.className = 'block black';
            else block.className = 'block white';
            blockAll.appendChild(mainBlock);
            mainBlock.appendChild(block);
            flag=!flag;
            blockAll.appendChild(letters);


        }

    }
    for(let c = 0;c<letterss.length;c++){
    letters_child = document.createElement('div');
    letters_child.className = 'child_letters';
    letters.appendChild(letters_child);
    letters_child.innerHTML = letterss[c];
    }

}
chess();



