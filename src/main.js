let controls = document.querySelector('.controls')
let playerO = document.querySelector('.playerO')
let playerX = document.querySelector('.playerX')
let test = document.querySelector('.test')
let turn = document.querySelector('.turn')
let box = document.querySelectorAll('.box')
let x = 'X'
let o = 'O'
let winningCom = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];
let option = ['', '', '', '', '', '', '', '', '']

let game = false


function checkDraw(){
    return option.every((value) =>
    value !== '');
}

function checkWin(player) {
    for (let i = 0; i < winningCom.length; i++) {
      let [a, b, c] = winningCom[i];
      console.log(b);
      if (option[a] === player && option[b] === player && option[c] === player) {
        return true;
      }
    }
    return false;
  }
  
  box.forEach((el, i) => {
    el.addEventListener('click', () => {
        playerO.classList.toggle('hidden')
        playerX.classList.toggle('hidden')


      if (option[i] === '' && !game) {
        o = o === 'O' ? 'X' : 'O'
        el.innerHTML = o
        option[i] = o
        el.classList.add('none')
  
        if (o === 'O') {
          el.classList.add('Xcolor')
          el.classList.remove('Ocolor')
        } else {
          el.classList.remove('Xcolor')
          el.classList.add('Ocolor')
        }
  
        if (checkWin(o)) {
          game = true;
          turn.innerHTML = `${o} wins!`
        }
        else if(checkDraw()){
          game = true
          turn.innerHTML = 'It\'s a draw!'
        }
      }
    });
  });

  let a = 'hsdf'
// let b = a + 'hello' 
let b = `${8} hello`  





controls.addEventListener('click', ()=>{
    location.reload()
})