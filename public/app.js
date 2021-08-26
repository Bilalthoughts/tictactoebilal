var turn = 'x';
var disp = document.getElementById('player')


function myclick(number){
    var myBtn = document.getElementById('t'+number)
    if(myBtn.innerHTML=='')
    {
        myBtn.innerHTML = turn;
        
        winner();
        check();
        disp.innerHTML=turn +' player turn'
    }
}

function check()
{
    if(turn == 'x')
    {
        turn = 'o'
    }
    else{
        turn='x'
    }
}
function getbox(num)
{
    return document.getElementById('t'+num).innerHTML
}

function moves(a,b,c,m)
{
    if ( getbox(a)==m && getbox(b)==m && getbox(c)==m)
    {
        return true
    }

    else
    return false
 
}

function winner()
{
    if(moves(1,2,3,turn) || moves(4,5,6,turn) || moves(7,8,9,turn) || moves(1,4,7,turn) || moves(2,5,8,turn) || moves(3,6,9,turn) || moves(1,5,9,turn) || moves(3,5,7,turn))

    {
        disp.innerHTML=turn +' player win'
        
        
        for(var i= 1; i<=9 ; i++)
        {
            document.getElementById('t'+i).innerHTML='';
        }
        throw 'end game'
    }

    else
    {
        
        if(getbox(1)!= ''&& getbox(2)!= ''&& getbox(3)!= ''&& getbox(4)!= ''&& getbox(5)!= ''&& getbox(6)!= ''&& getbox(7)!= ''&& getbox(8)!= ''&& getbox(9)!= '')
        {
            disp.innerHTML= 'tie'
            throw 'its a tie'
        }
            
        
    }
}
