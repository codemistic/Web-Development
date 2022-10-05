const grid_side = 3
const PLAYER_X = 1
const PLAYER_Y = -1
var X_human = true
var O_human = false
const player_controller = (()=>{
    const notify =(player,states)=>{
        if(player==PLAYER_X){
            if(!X_human){
                //wait for 1 second
                setTimeout(()=>{
                    let move = agent.pickMove(states, PLAYER_X)
                    let pos = move['i']*3+move['j']
                    cells[pos].select()
                    gameBoard.select(pos)
                },250)
            }
        }
        else{
            if(!O_human){
                //wait for 1 second
                setTimeout(()=>{
                    let move = agent.pickMove(states,player)
                    let pos = move['i']*3+move['j']
                    cells[pos].select()
                    gameBoard.select(pos)
                },500)
            }
        }
    }
    return {notify}
})()
const agent = (()=>{
    const pickMove = (states,player)=>{
        let bestMove
        if(player == PLAYER_X){
            let bestScore = -Infinity
            for(let i=0;i<grid_side;i++){
                for(j=0;j<grid_side;j++){
                    if(states[i][j] == 0){
                        states[i][j] = 1
                        score = minimax(states, 0,false)
                        states[i][j] = 0
                        if(score>bestScore){
                            bestScore = score
                            a = " "+i
                            b = " "+ j
                            bestMove = {i,j} 
                        }
                    }
                }
            }
        }
        else{
            let bestScore = Infinity
            for(let i=0;i<grid_side;i++){
                for(let j=0;j<grid_side;j++){
                    if(states[i][j]==0){
                        states[i][j] = -1
                        score = minimax(states,0,true)
                        states[i][j] = 0
                        if(score<bestScore){
                            bestScore = score
                            bestMove = {i,j} 
                        }
                    }
                }
            }
        }
        return bestMove
        
    }
    const minimax = (states,depth, isMaximising) =>{
        // console.log(""+states);
        result = checkWinner(states)
        if(result!=null){
            if(result == PLAYER_X)  
                return 100-depth
            else if(result == PLAYER_Y)
                return -100+depth
            else return 0
        }
        let bestScore;
        if(isMaximising){
            bestScore = -Infinity
            for(let i =0;i<grid_side;i++){
                for(let j =0; j<grid_side;j++){
                    if(states[i][j]==0){
                        states[i][j] = 1;
                        score = minimax(states, depth+1,false)
                        states[i][j] = 0
                        bestScore = Math.max(score,bestScore)
                    }
                }
            }
        }
        else{
            bestScore = Infinity
            for(let i =0 ; i<grid_side; i++){
                for(let j = 0; j<grid_side; j++){
                    if(states[i][j]==0){
                        states[i][j] = -1;
                        score = minimax(states,depth+1,true)
                        states[i][j] = 0
                        bestScore= Math.min(score,bestScore)
                    }
                }
            }
        }
        return bestScore

    }
    const checkWinner = (states)=>{
        // check rows
        for(let i=0;i<grid_side;i++){
            if(states[i][0] == states[i][1] && states[i][1] == states[i][2] && states[i][0]!=0){
                return states[i][0]
            }
            if(states[0][i] == states[1][i] && states[1][i] == states[2][i] && states[0][i]!=0){
                return states[0][i]
            }
        }
        if(states[0][0] == states[1][1] && states[1][1] == states[2][2] && states[0][0]!=0){
            return states[0][0]
        }
        if(states[0][2] == states[1][1] && states[1][1] == states[2][0] && states[0][2]!=0){
            return states[0][2]
        }
        //check if there is a tie
        let isTie = true
        for(let i=0;i<grid_side;i++){
            for(let j=0;j<grid_side;j++){
                if(states[i][j]==0){
                    isTie = false
                }
            }
        }
        if(isTie){ return "tie"}
        return null
    }
    return {pickMove}
})()
let gameBoard = (()=>{
    let _winner
    let _gameOver  = false
    let _state = new Array(3)
    for(let i = 0; i < _state.length; i++){
        _state[i] = new Array(3).fill(0)
    }
    let _currPlayer = PLAYER_X
    const isGameOver = ()=> _gameOver
    const select = (num)=>{
        // console.log(num);
        if(_currPlayer==PLAYER_X){
            _state[Math.floor(num/3)][num%3] = 1
            _currPlayer = PLAYER_Y
        }
        else{
            _state[Math.floor(num/3)][num%3] = -1
            _currPlayer = PLAYER_X
        }
        validateBoard()
        if(!_gameOver)
            player_controller.notify(_currPlayer,_state)

    }
    const getChar = ()=>{
        if(_currPlayer==PLAYER_X) return 'X'
        else return 'O'
    }

    const validateBoard = ()=>{
        //check rows
        for(let i = 0; i < _state.length; i++){
            if(_state[i][0] == _state[i][1] && _state[i][1] == _state[i][2] && _state[i][0] != 0){
                _winner = _state[i][0]==1?PLAYER_X:PLAYER_Y
                console.log(_winner);
                _gameOver = true
            }
        }
        //check columns
        for(let i = 0; i < _state.length; i++){
            if(_state[0][i] == _state[1][i] && _state[1][i] == _state[2][i] && _state[0][i] != 0){
                _winner = _state[0][i]==1?PLAYER_X:PLAYER_Y
                console.log(_winner);
                _gameOver = true
            }
        }
        //check diagonals
        if(_state[0][0] == _state[1][1] && _state[1][1] == _state[2][2] && _state[0][0] != 0){
            _winner = _state[0][0]==1?PLAYER_X:PLAYER_Y
            console.log(_winner);
            _gameOver = true
        }
        if(_state[0][2] == _state[1][1] && _state[1][1] == _state[2][0] && _state[0][2] != 0){
            _winner = _state[0][2]==1?PLAYER_X:PLAYER_Y
            console.log(_winner);
            _gameOver = true
        }
        //check draw
        let isTie = true
        for(let i=0;i<grid_side;i++){
            for(let j=0;j<grid_side;j++){
                if(_state[i][j]==0){
                    isTie = false
                }
            }
        }
        if(isTie){
            _winner = "tie"
            _gameOver = true
        }
        if(_gameOver){
            cells.forEach(cell=>{
                cell.gameOver()
            })
        }
        if(_gameOver){
            if(isTie)
                document.querySelector(".result").textContent = "Game Tied"
            else if(_winner == PLAYER_X)
                document.querySelector(".result").textContent = "Player X Won"
            else if(_winner == PLAYER_Y)
                document.querySelector(".result").textContent = "Player O Won"
        }
    }
    const reset = ()=>{
        _gameOver = false
        _currPlayer = PLAYER_X
        for(let i = 0; i < _state.length; i++){
            _state[i] = new Array(3).fill(0)
        }
    }
    return{select, getChar, isGameOver, reset}
})()
let cells = []
const cellFactory = (element)=> {
    const _number = cells.length
    let _value = 0
    const _element = element
    let _playable = true;
    this.getCellNum = ()=>_number
    this.isPlayable = ()=> _playable
    this.getElement = ()=> _element
    element.addEventListener('click',()=>{
        // console.log(_number);
        if(_playable && !gameBoard.isGameOver()){
            _element.textContent = gameBoard.getChar()
            _playable = false
            _element.classList.remove('playable');
            
            gameBoard.select(_number)
        }
    })
    this.select = ()=>{
        _element.textContent = gameBoard.getChar()
        _playable = false
        _element.classList.remove('playable');
    }
    this.reset = ()=>{
        _element.textContent = ''
        _playable = true
        _element.classList.add('playable');
    }
    this.gameOver = ()=>{
        _playable = false
        _element.classList.remove('playable');
    }
    this.setPlayable = (value)=>{
        _playable = value
        _element.classList.remove('playable');
    }
    return {getCellNum,isPlayable, getElement, reset, gameOver,select,setPlayable}
}
document.querySelectorAll(".cell").forEach(cellElmt=>{
    cell = cellFactory(cellElmt)
    cells[cell.getCellNum()] = cell
})

let resetButton = document.querySelector(".reset")
resetButton.onclick = ()=>{
    document.querySelector(".result").textContent = " "
    gameBoard.reset()
    cells.forEach(cell=>cell.reset())
    if(!X_human)
        player_controller.notify(PLAYER_X,[[0,0,0],[0,0,0],[0,0,0]])

};

if(!X_human){
    console.log("object");
    player_controller.notify(PLAYER_X,[[0,0,0],[0,0,0],[0,0,0]])
}
if(!X_human && !O_human){
    //make all the cells unplayable
    cells.forEach(cell=>{
        cell.setPlayable(false)
    })
}



// set up selector for bot and human
selector_x = document.querySelector("#player_x")
selector_o = document.querySelector("#player_o")
// when a new drop down is selected, update the player_controller
selector_x.onchange = ()=>{
    document.querySelector(".result").textContent = " "
    X_human = selector_x.value == "human"
    gameBoard.reset()
    cells.forEach(cell=>cell.reset())
    if(!X_human)
        player_controller.notify(PLAYER_X,[[0,0,0],[0,0,0],[0,0,0]])

    
}
selector_o.onchange = ()=>{
    document.querySelector(".result").textContent = " "
    O_human = selector_o.value == "human"
    gameBoard.reset()
    cells.forEach(cell=>cell.reset())
    if(!X_human)
        player_controller.notify(PLAYER_X,[[0,0,0],[0,0,0],[0,0,0]])
}
