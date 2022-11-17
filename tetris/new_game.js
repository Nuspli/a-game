const gameBoard = document.getElementById('game-board')
const previewBoard = document.getElementById('preview-board')
const holdBoard = document.getElementById('hold-board')

const LBLOCK0 = [{ x: 5, y: 1 }, { x: 6, y: 1 }, { x: 7, y: 1 }, { x: 7, y: 0 }]
const LBLOCK1 = [{ x: 6, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 2 }, { x: 7, y: 2 }]
const LBLOCK2 = [{ x: 5, y: 1 }, { x: 6, y: 1 }, { x: 7, y: 1 }, { x: 5, y: 2 }]
const LBLOCK3 = [{ x: 5, y: 0 }, { x: 6, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 2 }]
const LBlocks = [LBLOCK0, LBLOCK1, LBLOCK2, LBLOCK3]

const SBLOCK0 = [{ x: 5, y: 1 }, { x: 6, y: 1 }, { x: 6, y: 0 }, { x: 7, y: 0 }]
const SBLOCK1 = [{ x: 6, y: 0 }, { x: 6, y: 1 }, { x: 7, y: 1 }, { x: 7, y: 2 }]
const SBLOCK2 = [{ x: 5, y: 1 }, { x: 6, y: 1 }, { x: 6, y: 0 }, { x: 7, y: 0 }]
const SBLOCK3 = [{ x: 5, y: 0 }, { x: 5, y: 1 }, { x: 6, y: 1 }, { x: 6, y: 2 }]
const SBlocks = [SBLOCK0, SBLOCK1, SBLOCK2, SBLOCK3]

const JBLOCK0 = [{ x: 5, y: 0 }, { x: 5, y: 1 }, { x: 6, y: 1 }, { x: 7, y: 1 }]
const JBLOCK1 = [{ x: 6, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 2 }, { x: 7, y: 0 }]
const JBLOCK2 = [{ x: 5, y: 1 }, { x: 6, y: 1 }, { x: 7, y: 1 }, { x: 7, y: 2 }]
const JBLOCK3 = [{ x: 6, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 2 }, { x: 5, y: 2 }]
const JBlocks = [JBLOCK0, JBLOCK1, JBLOCK2, JBLOCK3]

const IBLOCK0 = [{ x: 4, y: 1 }, { x: 5, y: 1 }, { x: 6, y: 1 }, { x: 7, y: 1 }]
const IBLOCK1 = [{ x: 6, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 2 }, { x: 6, y: 3 }]
const IBLOCK2 = [{ x: 4, y: 1 }, { x: 5, y: 1 }, { x: 6, y: 1 }, { x: 7, y: 1 }]
const IBLOCK3 = [{ x: 5, y: 0 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }]
const IBlocks = [IBLOCK0, IBLOCK1, IBLOCK2, IBLOCK3]

const ZBLOCK0 = [{ x: 5, y: 0 }, { x: 6, y: 0 }, { x: 6, y: 1 }, { x: 7, y: 1 }]
const ZBLOCK1 = [{ x: 7, y: 0 }, { x: 7, y: 1 }, { x: 6, y: 1 }, { x: 6, y: 2 }]
const ZBLOCK2 = [{ x: 5, y: 0 }, { x: 6, y: 0 }, { x: 6, y: 1 }, { x: 7, y: 1 }]
const ZBLOCK3 = [{ x: 7, y: 0 }, { x: 7, y: 1 }, { x: 6, y: 1 }, { x: 6, y: 2 }]
const ZBlocks = [ZBLOCK0, ZBLOCK1, ZBLOCK2, ZBLOCK3]

const OBLOCK0 = [{ x: 5, y: 0 }, { x: 5, y: 1 }, { x: 6, y: 0 }, { x: 6, y: 1 }]
const OBLOCK1 = [{ x: 5, y: 0 }, { x: 5, y: 1 }, { x: 6, y: 0 }, { x: 6, y: 1 }]
const OBLOCK2 = [{ x: 5, y: 0 }, { x: 5, y: 1 }, { x: 6, y: 0 }, { x: 6, y: 1 }]
const OBLOCK3 = [{ x: 5, y: 0 }, { x: 5, y: 1 }, { x: 6, y: 0 }, { x: 6, y: 1 }]
const OBlocks = [OBLOCK0, OBLOCK1, OBLOCK2, OBLOCK3]

const TBLOCK0 = [{ x: 5, y: 1 }, { x: 6, y: 1 }, { x: 6, y: 0 }, { x: 7, y: 1 }]
const TBLOCK1 = [{ x: 6, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 2 }, { x: 7, y: 1 }]
const TBLOCK2 = [{ x: 5, y: 1 }, { x: 6, y: 1 }, { x: 7, y: 1 }, { x: 6, y: 2 }]
const TBLOCK3 = [{ x: 5, y: 1 }, { x: 6, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 2 }]
const TBlocks = [TBLOCK0, TBLOCK1, TBLOCK2, TBLOCK3]

const BLOCKS = [LBlocks, SBlocks, JBlocks, IBlocks, ZBlocks, OBlocks, TBlocks]

const cLBLOCK0 = [{ x: 5, y: 1 }, { x: 6, y: 1 }, { x: 7, y: 1 }, { x: 7, y: 0 }]
const cLBLOCK1 = [{ x: 6, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 2 }, { x: 7, y: 2 }]
const cLBLOCK2 = [{ x: 5, y: 1 }, { x: 6, y: 1 }, { x: 7, y: 1 }, { x: 5, y: 2 }]
const cLBLOCK3 = [{ x: 5, y: 0 }, { x: 6, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 2 }]
const cLBlocks = [cLBLOCK0, cLBLOCK1, cLBLOCK2, cLBLOCK3]

const cSBLOCK0 = [{ x: 5, y: 1 }, { x: 6, y: 1 }, { x: 6, y: 0 }, { x: 7, y: 0 }]
const cSBLOCK1 = [{ x: 5, y: 0 }, { x: 5, y: 1 }, { x: 6, y: 1 }, { x: 6, y: 2 }]
const cSBLOCK2 = [{ x: 5, y: 1 }, { x: 6, y: 1 }, { x: 6, y: 0 }, { x: 7, y: 0 }]
const cSBLOCK3 = [{ x: 5, y: 0 }, { x: 5, y: 1 }, { x: 6, y: 1 }, { x: 6, y: 2 }]
const cSBlocks = [cSBLOCK0, cSBLOCK1, cSBLOCK2, cSBLOCK3]

const cJBLOCK0 = [{ x: 5, y: 0 }, { x: 5, y: 1 }, { x: 6, y: 1 }, { x: 7, y: 1 }]
const cJBLOCK1 = [{ x: 6, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 2 }, { x: 7, y: 0 }]
const cJBLOCK2 = [{ x: 5, y: 1 }, { x: 6, y: 1 }, { x: 7, y: 1 }, { x: 7, y: 2 }]
const cJBLOCK3 = [{ x: 6, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 2 }, { x: 5, y: 2 }]
const cJBlocks = [cJBLOCK0, cJBLOCK1, cJBLOCK2, cJBLOCK3]

const cIBLOCK0 = [{ x: 4, y: 1 }, { x: 5, y: 1 }, { x: 6, y: 1 }, { x: 7, y: 1 }]
const cIBLOCK1 = [{ x: 6, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 2 }, { x: 6, y: 3 }]
const cIBLOCK2 = [{ x: 4, y: 1 }, { x: 5, y: 1 }, { x: 6, y: 1 }, { x: 7, y: 1 }]
const cIBLOCK3 = [{ x: 5, y: 0 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }]
const cIBlocks = [cIBLOCK0, cIBLOCK1, cIBLOCK2, cIBLOCK3]

const cZBLOCK0 = [{ x: 5, y: 0 }, { x: 6, y: 0 }, { x: 6, y: 1 }, { x: 7, y: 1 }]
const cZBLOCK1 = [{ x: 7, y: 0 }, { x: 7, y: 1 }, { x: 6, y: 1 }, { x: 6, y: 2 }]
const cZBLOCK2 = [{ x: 5, y: 0 }, { x: 6, y: 0 }, { x: 6, y: 1 }, { x: 7, y: 1 }]
const cZBLOCK3 = [{ x: 7, y: 0 }, { x: 7, y: 1 }, { x: 6, y: 1 }, { x: 6, y: 2 }]
const cZBlocks = [cZBLOCK0, cZBLOCK1, cZBLOCK2, cZBLOCK3]

const cOBLOCK0 = [{ x: 5, y: 0 }, { x: 5, y: 1 }, { x: 6, y: 0 }, { x: 6, y: 1 }]
const cOBLOCK1 = [{ x: 5, y: 0 }, { x: 5, y: 1 }, { x: 6, y: 0 }, { x: 6, y: 1 }]
const cOBLOCK2 = [{ x: 5, y: 0 }, { x: 5, y: 1 }, { x: 6, y: 0 }, { x: 6, y: 1 }]
const cOBLOCK3 = [{ x: 5, y: 0 }, { x: 5, y: 1 }, { x: 6, y: 0 }, { x: 6, y: 1 }]
const cOBlocks = [cOBLOCK0, cOBLOCK1, cOBLOCK2, cOBLOCK3]

const cTBLOCK0 = [{ x: 5, y: 1 }, { x: 6, y: 1 }, { x: 6, y: 0 }, { x: 7, y: 1 }]
const cTBLOCK1 = [{ x: 6, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 2 }, { x: 7, y: 1 }]
const cTBLOCK2 = [{ x: 5, y: 1 }, { x: 6, y: 1 }, { x: 7, y: 1 }, { x: 6, y: 2 }]
const cTBLOCK3 = [{ x: 5, y: 1 }, { x: 6, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 2 }]
const cTBlocks = [cTBLOCK0, cTBLOCK1, cTBLOCK2, cTBLOCK3]

const co = [cLBlocks, cSBlocks, cJBlocks, cIBlocks, cZBlocks, cOBlocks, cTBlocks]

const names = ["LBlock", "SBlock", "JBlock", "IBlock", "ZBlock", "OBlock", "TBlock"]

const setBlocks = [{ x: 1, y: 21 }, { x: 2, y: 21 }, { x: 3, y: 21 }, { x: 4, y: 21 },{ x: 5, y: 21 }, 
                   { x: 6, y: 21 }, { x: 7, y: 21 }, { x: 8, y: 21 }, { x: 9, y: 21 }, { x: 10, y: 21 }]

let gameOver = false
let done = true

var score = 0
let end = false
let tree = false

function update() { //todo---------------------------------------------------------------------------------------------------
    end = false

    if (!done) {

    for (let t = 0; t <= setBlocks.length - 1; t ++) {
        if ( // the block would hit another block or the ground
        (BLOCKS[a][b][0].y + 1 == setBlocks[t].y && BLOCKS[a][b][0].x == setBlocks[t].x) ||
        (BLOCKS[a][b][1].y + 1 == setBlocks[t].y && BLOCKS[a][b][1].x == setBlocks[t].x) ||
        (BLOCKS[a][b][2].y + 1 == setBlocks[t].y && BLOCKS[a][b][2].x == setBlocks[t].x) ||
        (BLOCKS[a][b][3].y + 1 == setBlocks[t].y && BLOCKS[a][b][3].x == setBlocks[t].x)

        ) {
        end = true // end the blocks updating
        }
    }

    if (end) // it now becomes one of the set blocks
    {
        setBlocks.push({ x: BLOCKS[a][b][0].x, y: BLOCKS[a][b][0].y })
        setBlocks.push({ x: BLOCKS[a][b][1].x, y: BLOCKS[a][b][1].y })
        setBlocks.push({ x: BLOCKS[a][b][2].x, y: BLOCKS[a][b][2].y })
        setBlocks.push({ x: BLOCKS[a][b][3].x, y: BLOCKS[a][b][3].y })

        shadow[0].remove()
        shadow[1].remove()
        shadow[2].remove()
        shadow[3].remove()


        for (let s = 0; s <= 3; s++){

          let filled0 = 0
          let filled1 = 0
          let filled2 = 0
          let filled3 = 0
          let filleds = [filled0, filled1, filled2, filled3]
          let clears = []

          for (let q = 10; q <= setBlocks.length - 1; q++){
            if (setBlocks[q].y == BLOCKS[a][b][s].y){
              filleds[s] ++
            }
          }

          if (filleds[s] == 10) {
            //temp.push(s)
            for (let q = 10; q <= setBlocks.length - 1; q++){
              if (setBlocks[q].y == BLOCKS[a][b][s].y){

                cBlok[q].remove()
                clears.push(q)
              }
            }
            clears.reverse()
            for (let q = 0; q <= 9; q++){

              setBlocks.splice(clears[q], 1)
              
              cBlok.splice(clears[q], 1)
            }

            for (let z = 0; z <= setBlocks.length - 1; z++){
              if (setBlocks[z].y != 21 && setBlocks[z].y < BLOCKS[a][b][s].y){
                setBlocks[z].y += 1
              }}
           
              for (let g = 10; g <= cBlok.length - 1; g++){


                  if (Number(cBlok[g].style.gridRowStart) < BLOCKS[a][b][s].y){
                    cBlok[g].style.gridRowStart = Number(cBlok[g].style.gridRowStart) + 1
                  }

                }
             score += 1000
          }
        }

        if ( // it covers the area where the next block might spawn
        (BLOCKS[a][b][0].y == 0 && (BLOCKS[a][b][0].x == 4 || BLOCKS[a][b][0].x == 5 || BLOCKS[a][b][0].x == 6 || BLOCKS[a][b][0].x == 7)) ||
        (BLOCKS[a][b][1].y == 0 && (BLOCKS[a][b][1].x == 4 || BLOCKS[a][b][1].x == 5 || BLOCKS[a][b][1].x == 6 || BLOCKS[a][b][1].x == 7)) ||
        (BLOCKS[a][b][2].y == 0 && (BLOCKS[a][b][2].x == 4 || BLOCKS[a][b][2].x == 5 || BLOCKS[a][b][2].x == 6 || BLOCKS[a][b][2].x == 7)) ||
        (BLOCKS[a][b][3].y == 0 && (BLOCKS[a][b][3].x == 4 || BLOCKS[a][b][3].x == 5 || BLOCKS[a][b][3].x == 6 || BLOCKS[a][b][3].x == 7))
        ) {
        gameOver = true // end the game
        }

        done = true // if not game over, end the updating
        score += 10

          for (let e = 0; e <= 3; e++){
            for (let f = 0; f <= 3; f++){
    
            BLOCKS[a][e][f].x = co[a][e][f].x
            BLOCKS[a][e][f].y = co[a][e][f].y
    
            }
          }
        hold = 0
    }
    else{
        
        for (let e = 0; e <= 3; e++){
        for (let f = 0; f <= 3; f++){

        BLOCKS[a][e][f].y = BLOCKS[a][e][f].y + 1

        }}
        
        draw(a, b)

        drawPoints()
        
    }
  }
}

function drawPoints() {
  document.getElementById('score').innerHTML = 'Score: ' + score
}

const styles = ['block1', 'block2', 'block3', 'block4', 'block5', 'block6', 'block7']

function draw(a, b) {
    
    let g = 0

    BLOCKS[a][b].forEach(segment => {
        const Block = Blok[g]
        Block.style.gridRowStart = segment.y
        Block.style.gridColumnStart = segment.x
        g ++

  })
    g = 0
    let dis = []

    for (let m = 0; m <= 3; m++){
      for (let n = 0;n <= setBlocks.length - 1;n++) {
        if (setBlocks[n].x == BLOCKS[a][b][m].x && setBlocks[n].y >= BLOCKS[a][b][m].y){
          dis.push(setBlocks[n].y - BLOCKS[a][b][m].y)
        }
      }
    }

    BLOCKS[a][b].forEach(segment => {
        const Block = shadow[g]
        Block.style.gridRowStart = segment.y + Math.min.apply(Math, dis) - 1 
        Block.style.gridColumnStart = segment.x
        g ++
  })

}

let a = -1
let b

let Blok = []
let shadow = []
const cBlok = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let next
let cnext = []
let firsttree = false

let bag = []

function randomBlock() { // 7-bag randomizer
  
  if (bag.length == 0) {
    bag = [0, 1, 2, 3, 4, 5, 6]
    bag = bag.sort(() => Math.random() - 0.5)
  }
  return bag[0]
}

function spawn() {

  Blok = []
  shadow = []
  b = 0

  if (history.length > 100) {for (let i = 0; i <= 49; i ++){history.shift()}}

  if (tree && !firsttree) {
    tree = false
    a = atree[atree.length - 2]
    atree.shift()

  }else{

  if (a == -1) {a = Math.floor(Math.random() * 7)}else{
    a = next
    for (let i = 0; i <= 3; i++){
      cnext[i].remove()
    }
  }

  next = randomBlock()
  bag.shift()

  cnext = []

  BLOCKS[next][b].forEach(segment => {

    const Block = document.createElement('div')
    Block.style.gridRowStart = segment.y - 4
    Block.style.gridColumnStart = segment.x - 4

    Block.classList.add(styles[next])
    cnext.push(Block)
    
    previewBoard.appendChild(Block)
  })
}

  for (let n = 0;n <= 3; n++){
    const BlockShadow = document.createElement('div')

    BlockShadow.classList.add('shadow')
    shadow.push(BlockShadow)
    
    gameBoard.appendChild(BlockShadow)
  }
    

  BLOCKS[a][b].forEach(segment => {
    const Block = document.createElement('div')
    
    Block.style.gridColumnStart = segment.x
    Block.style.gridRowStart = segment.y

    Block.classList.add(styles[a])
    Blok.push(Block)
    cBlok.push(Block)
    
    gameBoard.appendChild(Block)
  })

  done = false
}

let lastRenderTime = 0
let speed = localStorage.difficulty

function main (currentTime) {
  
    if (gameOver) {
        if (confirm('You lost. Press ok to restart.')) {
        window.location.reload()
        }
        return
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / speed) {return}

    lastRenderTime = currentTime

    if (done) {
      speed = localStorage.difficulty
      spawn()}

    update()
}

let why = true

let keys = {
  a: false,
  w: false,
  d: false,
  h: false,

  l: false,
  u: false,
  r: false,
  s: false,

  c: false
};

let tig = -1
let hold = 0
let holda = -1

window.addEventListener('keydown', e => {

    if (e.key === 'ArrowUp') {
        keys.u = true}
    if(e.key === 'ArrowDown'){speed = 5 * localStorage.difficulty}
    if (e.key === 'ArrowLeft') {
        keys.l = true}
    if (e.key === 'ArrowRight') {
        keys.r = true}
    if (e.key === 'w') {
        keys.w = true}
    if(e.key === 's'){speed = 5 * localStorage.difficulty}
    if (e.key === 'a') {
        keys.a = true}
    if (e.key === 'd') {
        keys.d = true}
    if (e.key === 'z') {
        keys.z = true}
    if (e.key === '#') {
        keys.h = true}
    if (e.key === 'c') {
        keys.c = true}

    if (keys.u || keys.w) {
        why = true

        for (let t = 0; t <= setBlocks.length - 1; t ++) {

        if ( // the block would hit another block
        (BLOCKS[a][(b + 1) % 4][0].y == setBlocks[t].y && BLOCKS[a][(b + 1) % 4][0].x == setBlocks[t].x) ||
        (BLOCKS[a][(b + 1) % 4][1].y == setBlocks[t].y && BLOCKS[a][(b + 1) % 4][1].x == setBlocks[t].x) ||
        (BLOCKS[a][(b + 1) % 4][2].y == setBlocks[t].y && BLOCKS[a][(b + 1) % 4][2].x == setBlocks[t].x) ||
        (BLOCKS[a][(b + 1) % 4][3].y == setBlocks[t].y && BLOCKS[a][(b + 1) % 4][3].x == setBlocks[t].x)
        ){why = false}}
        if(BLOCKS[a][(b + 1) % 4][0].x == 11 ||
           BLOCKS[a][(b + 1) % 4][1].x == 11 ||
           BLOCKS[a][(b + 1) % 4][2].x == 11 ||
           BLOCKS[a][(b + 1) % 4][3].x == 11 ||
           BLOCKS[a][(b + 1) % 4][0].x == 0 ||
           BLOCKS[a][(b + 1) % 4][1].x == 0 ||
           BLOCKS[a][(b + 1) % 4][2].x == 0 ||
           BLOCKS[a][(b + 1) % 4][3].x == 0){why = false}
        if(why && !done){
        b = (b + 1) % 4
        draw(a, b)}
    }

    if (keys.h || keys.z) {
      if (b == 0) {b = 3} else {b = (b - 1) % 4}
      why = true

      for (let t = 0; t <= setBlocks.length - 1; t ++) {

      if ( // the block would hit another block
      (BLOCKS[a][(b - 1) % 4][0].y == setBlocks[t].y && BLOCKS[a][(b - 1) % 4][0].x == setBlocks[t].x) ||
      (BLOCKS[a][(b - 1) % 4][1].y == setBlocks[t].y && BLOCKS[a][(b - 1) % 4][1].x == setBlocks[t].x) ||
      (BLOCKS[a][(b - 1) % 4][2].y == setBlocks[t].y && BLOCKS[a][(b - 1) % 4][2].x == setBlocks[t].x) ||
      (BLOCKS[a][(b - 1) % 4][3].y == setBlocks[t].y && BLOCKS[a][(b - 1) % 4][3].x == setBlocks[t].x)
      ){why = false}}
      if(BLOCKS[a][(b - 1) % 4][0].x == 11 ||
         BLOCKS[a][(b - 1) % 4][1].x == 11 ||
         BLOCKS[a][(b - 1) % 4][2].x == 11 ||
         BLOCKS[a][(b - 1) % 4][3].x == 11 ||
         BLOCKS[a][(b - 1) % 4][0].x == 0 ||
         BLOCKS[a][(b - 1) % 4][1].x == 0 ||
         BLOCKS[a][(b - 1) % 4][2].x == 0 ||
         BLOCKS[a][(b - 1) % 4][3].x == 0){why = false}
      if(why && !done){
      draw(a, b)} else {b = (b + 1) % 4}
  }

    if (keys.l || keys.a) {
        why = true
        //b = localStorage.b
        for (let t = 0; t <= setBlocks.length - 1; t ++) {
        if ( // the block would hit another block or the ground
        (BLOCKS[a][b][0].y == setBlocks[t].y && BLOCKS[a][b][0].x - 1 == setBlocks[t].x) ||
        (BLOCKS[a][b][1].y == setBlocks[t].y && BLOCKS[a][b][1].x - 1 == setBlocks[t].x) ||
        (BLOCKS[a][b][2].y == setBlocks[t].y && BLOCKS[a][b][2].x - 1 == setBlocks[t].x) ||
        (BLOCKS[a][b][3].y == setBlocks[t].y && BLOCKS[a][b][3].x - 1 == setBlocks[t].x)
        ){why = false; break}}

        if (why && !done) {
        if(BLOCKS[a][b][0].x - 1 != 0 &&
           BLOCKS[a][b][1].x - 1 != 0 &&
           BLOCKS[a][b][2].x - 1 != 0 &&
           BLOCKS[a][b][3].x - 1 != 0){

        for (let e = 0; e <= 3; e++){
            for (let f = 0; f <= 3; f++){
    
            BLOCKS[a][e][f].x = BLOCKS[a][e][f].x - 1
    
            }}}
            draw(a, b)}
    }

    if (keys.r || keys.d) {
        why = true
        //b = localStorage.b
        for (let t = 0; t <= setBlocks.length - 1; t ++) {
        if ( // the block would hit another block or the ground
        (BLOCKS[a][b][0].y == setBlocks[t].y && BLOCKS[a][b][0].x + 1 == setBlocks[t].x) ||
        (BLOCKS[a][b][1].y == setBlocks[t].y && BLOCKS[a][b][1].x + 1 == setBlocks[t].x) ||
        (BLOCKS[a][b][2].y == setBlocks[t].y && BLOCKS[a][b][2].x + 1 == setBlocks[t].x) ||
        (BLOCKS[a][b][3].y == setBlocks[t].y && BLOCKS[a][b][3].x + 1 == setBlocks[t].x)
        ){why = false; break}}

        if (why && !done) {
        if(BLOCKS[a][b][0].x + 1 != 11 &&
          BLOCKS[a][b][1].x + 1 != 11 &&
          BLOCKS[a][b][2].x + 1 != 11 &&
          BLOCKS[a][b][3].x + 1 != 11){
          
            for (let e = 0; e <= 3; e++){
                for (let f = 0; f <= 3; f++){
        
                BLOCKS[a][e][f].x = BLOCKS[a][e][f].x + 1
        
                }}}
                draw(a, b)}
    }

    if (keys.c) {
      if (hold == 0){
      if (tig == -1){
        for (let n = 0;n <= 3; n++){
          const BlockHold = document.createElement('div')
          BlockHold.style.gridRowStart = co[a][b][n].y - 4
          BlockHold.style.gridColumnStart = co[a][b][n].x - 4
          BlockHold.classList.add(styles[a])
          trees.push(BlockHold)
          holdBoard.appendChild(BlockHold)
          Blok[n].remove()
          shadow[n].remove()
        }
        tig = 0
        firsttree = true

      } else {
        firsttree = false
        for (let n = 0;n <= 3; n++){
          trees[n].remove()
        }
          trees.splice(0, 1)
          trees.splice(0, 1)
          trees.splice(0, 1)
          trees.splice(0, 1)

        for (let n = 0;n <= 3; n++){
          const BlockHold = document.createElement('div')
          BlockHold.style.gridRowStart = co[a][b][n].y - 4
          BlockHold.style.gridColumnStart = co[a][b][n].x - 4
          BlockHold.classList.add(styles[a])
          trees.push(BlockHold)
          holdBoard.appendChild(BlockHold)
          Blok[n].remove()
          shadow[n].remove()
        }
      }

      cBlok.pop()
      cBlok.pop()
      cBlok.pop()
      cBlok.pop()

      atree.push(a)

      for (let e = 0; e <= 3; e++){
        for (let f = 0; f <= 3; f++){
        BLOCKS[a][e][f].x = co[a][e][f].x
        BLOCKS[a][e][f].y = co[a][e][f].y
        }
      }
      done = true
      tree = true
      hold = 1
    }
  }
  })

  let atree = []
  const trees = []

  addEventListener("keyup", (event) => {
    if (event.key === "a") {
      keys.a = false;
    }
    if (event.key === "w") {
      keys.w = false;
    }
    if (event.key === "d") {
        keys.d = false;
      }
    if (event.key === "ArrowUp") {
    keys.u = false;
    }
    if (event.key === "ArrowLeft") {
    keys.l = false;
    }
    if (event.key === "ArrowRight") {
    keys.r = false;
    }
    if (event.key === "z") {
    keys.z = false;
    }
    if (event.key === "#") {
    keys.h = false;
    }
    if (event.key === "c") {
    keys.c = false;
    }
  })

  const pop = document.getElementById('pop')

  window.addEventListener('keypress', e=> {
    switch (e.key) {
    case ' ':
      speed = 10000
      score += 30
      BLOCKS[a][b][0].y = shadow[0].style.gridRowStart - 1
      BLOCKS[a][b][1].y = shadow[1].style.gridRowStart - 1
      BLOCKS[a][b][2].y = shadow[2].style.gridRowStart - 1
      BLOCKS[a][b][3].y = shadow[3].style.gridRowStart - 1
      pop.play()
    }    
  })

  window.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      speed = 10000
      score += 30
      BLOCKS[a][b][0].y = shadow[0].style.gridRowStart - 1
      BLOCKS[a][b][1].y = shadow[1].style.gridRowStart - 1
      BLOCKS[a][b][2].y = shadow[2].style.gridRowStart - 1
      BLOCKS[a][b][3].y = shadow[3].style.gridRowStart - 1
      pop.play()
    }
  })

  window.addEventListener('keyup', e => {
    switch (e.key) {
      case 'ArrowDown':
        speed = localStorage.difficulty
        break
      case 's':
        speed = localStorage.difficulty
        break
    }
  })

const audiobtn = document.getElementById('audio__button')
const audio = document.getElementById('audio')
audio.volume = 0.1

  audiobtn.addEventListener('click', function() {
    if (audiobtn.innerHTML == "pause"){
      audiobtn.innerHTML = "play"
      audio.pause()
    }
    else {audiobtn.innerHTML = "pause"; audio.play()}
});

  window.requestAnimationFrame(main)