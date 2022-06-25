const cells = document.querySelectorAll(".box");
const turn = document.getElementById('turn');
const xCounterElement = document.getElementById('x');
const oCounterElement = document.getElementById('o');
const restartButton = document.getElementById('restart');
const resetButton = document.getElementById('reset');

let arr= [];




cuPlayer = "x";


const winningCondition = [ [1,2,3], [4,5,6], [7,8,9], [1,4,7],[3,6,9],[2,5,8],[1,5,9],[3,5,7]];



turn.innerHTML=`Turn: ${cuPlayer == "x"?"X":"O"}`;


//event Listner
cells.forEach(e=> e.addEventListener('click',() => {
 

    console.log(e.id);

    turn.innerHTML=`Turn: ${cuPlayer == "x"?"O":"X"}`;
  
    
    if(isEmpty(e.id))
    {
       
        updateCell(e.id,cuPlayer==="x"?"x":"o");
        if(cuPlayer==="x")
        {
            arr.push({Player:"X",Cell:e.id})
            if(checkWinner())
            {
                alert(cuPlayer,"has won");
                updateCounter("x");
                
                return;
            };
         
        }
        else
        {
            arr.push({Player:"o",Cell:e.id})
            if(checkWinner())
            {
                alert(cuPlayer,"has won");
                updateCounter("o");
             
                return;
            };
         
        }
        updateRound();
        isFull();

    
}}));

function isFull()
{
    console.log(arr.length);
   
    if(arr.length==9)
    {
        alert('draw!');
        restartGame();
    }
}
function checkWinner()
{
   for( let i = 0 ; i <winningCondition.length;i++)
   {
    let a = (winningCondition[i][0])-1;
   let b = (winningCondition[i][1])-1;
    let c = (winningCondition[i][2])-1;

    console.log(a,b,c)
    console.log(cells[a].innerHTML,cells[b].innerHTML,cells[c].innerHTML);

 
    if(cells[a].innerHTMl =='' || cells[b].innerHTML==''|| cells[c].innerHTML=='')
    {
        continue;
    }
    if(cells[a].innerHTML==cells[b].innerHTML && cells[b].innerHTML==cells[c].innerHTML)
    {
        cells[a].style.backgroundColor="blue";
        cells[b].style.backgroundColor="blue";
        cells[c].style.backgroundColor="blue";
       return true;
    }



   }
   return false;
   

}

//@param Cell
// return boolean
function isEmpty(Cell)
{
    let check = arr.filter(e=> e.Cell==Cell);

    if(check.length===0)
    {
        return true;
    }
    else{
        return false;
    }
}
//@param cell,current player
//return updating the cell
function updateCell(Cell, currentPlayer)
{
    console.log('array2',arr);
    cells[parseInt(Cell)-1].innerHTML=currentPlayer;

}
//function to update current player
function updateRound()
{
 
    if(cuPlayer==="x")
    {
        cuPlayer="o";
    }
    else{
        cuPlayer="x";
    }
}

function updateCounter(winnier)
{
    console.log(winnier);
    if(winnier==="x")
    {
        xCounterElement.innerHTML=parseInt(xCounterElement.innerHTML)+1;
    }
    else if(winnier==="o")
    {
        oCounterElement.innerHTML=parseInt(oCounterElement.innerHTML)+1;
    }

}

restartButton.addEventListener('click',restartGame)
function restartGame()
{
    arr=[];
    console.log('array',arr);
    cells.forEach(e=>e.innerHTML='');
    cuPlayer=cuPlayer=="x"?"o":"x";
    turn.innerHTML=`Turn: ${cuPlayer == "x"?"X":"O"}`;
    cells.forEach(e=>e.style.backgroundColor="pink" );
}

resetButton.addEventListener('click',()=>{
    arr=[];
    console.log('array',arr);
    cells.forEach(e=>e.innerHTML='');
    cuPlayer=cuPlayer=="x"?"o":"x";
    turn.innerHTML=`Turn: ${cuPlayer == "x"?"X":"O"}`;
    cells.forEach(e=>e.style.backgroundColor="pink" );
    oCounterElement.innerHTML=0;
    xCounterElement.innerHTML=0;

})

