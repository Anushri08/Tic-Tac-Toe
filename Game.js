export default class Game
{ /*classes start with capital letters*/

constructor()
    {
    
    this.turn="X";
   this.board=new Array(9).fill(null)
   }
nextTurn(){
    if(this.turn=="X"){
        this.turn="O";
    }else{
        this.turn="X";
    }
}
makeMove(i)
    {
    if(this.endofGame()){
        return;
    }
    if(this.board[i])
        {
        return;
        }
    this.board[i]=this.turn;//X or O
    let winningCombination = this.findWinningCombinations();
    if(!winningCombination){
        this.nextTurn();
    }
    }
    findWinningCombinations(){
        
        const winningCombinations =[
            [0,1,2],  //winning combinations  
            [3,4,5],  //winning combinations
            [6,7,8],  //winning combinations
            [0,3,6],    //winning combinations
            [1,4,7],   //winning combinations
            [2,5,8],    //winning combinations
            [0,4,8],    //winning combinations
            [6,4,2]     //winning combinations
        ]
        for(const combination of winningCombinations){
            const[a,b,c]=combination;
            if (this.board[a] &&
            (this.board[a]=== this.board[b] && this.board[a]=== this.board[c])){
                return combination;
            }
            
        }
        return null;

    }
    endofGame(){
        let winningCombination = this.findWinningCombinations();
        if(winningCombination){
            return true;
        }else{
            return false;
        }

    }


}