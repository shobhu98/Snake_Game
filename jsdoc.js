

var t=0;

var run=0;
gameover=false;
function init() {
    canvas = document.getElementById('hello');
    ctx = canvas.getContext('2d');
    W = canvas.width;
    H = canvas.height;
    randomfood();
    snake = {
        init_len: 5,
        color: 'yellow',
        cells: [],
        direction: 'right',

        createSnake: function () {
            for (var i = this.init_len-1; i >=0; i--) {
                this.cells.push({x:i,y:0});
                // cells[i] = {x: i, y: 0};

            }

        },
        drawSnake: function () {
            for (var i = 0; i < this.cells.length; i++) {
                ctx.fillStyle = this.color;
                ctx.fillRect(this.cells[i].x * 20, this.cells[i].y * 20, 20, 20);
                ctx.strokeStyle = "black";
                ctx.strokeRect(this.cells[i].x * 20, this.cells[i].y * 20, 20, 20);
                ctx.lineWidth = 4;

            }


        },
        updateSnake:function () {

            headX=this.cells[0].x;
            headY=this.cells[0].y;
            console.log(headX,headY);
            if(headX==food.foodx&&headY==food.foody){
                //this.cells.push({foodx,foody});
                run+=10;
                snake.score(run);


                randomfood();
            }
            else {
                snake.cells.pop();
            }



            if(snake.direction==='right'){
                nextX=headX+1;
                nextY=headY;
            }
            else if(snake.direction==='left'){
                nextX=headX-1;
                nextY=headY;
            }
            else if(snake.direction==='down'){
                nextX=headX;
                nextY=headY+1;
            }
            else {
                nextX=headX;
                nextY=headY-1;
            }
            xcor=[];
            ycor=[];
            for (let i = 1; i <snake.cells.length ; i++) {
                xcor[i]=snake.cells[i].x;
                ycor[i]=snake.cells[i].y;

            }
            for (let i = 1; i <snake.cells.length ; i++) {
                if(xcor[i]===headX&&ycor[i]===headY){
                    gameover=true;

                }

            }




            this.cells.unshift({x:nextX,y:nextY});

        },
        score:function(score){
            ctx.fillStyle='white';
            ctx.font="30px Arial";
            console.log("score is"+score);
            ctx.fillText("Score:"+score,10,450);
        },


    };

    snake.createSnake();
    snake.drawSnake();

}

function draw() {
    //  ctx.clearRect(0,0,W,H);









}
function update() {
    //  snake.updateSnake();
    //  ctx.clearRect(0,0,W,H);

    snake.updateSnake();

    ctx.clearRect(0,0,W,H);

    snake.drawSnake();
    ctx.fillStyle=food.color;
    ctx.fillRect(food.foodx*20,food.foody*20,20,20);


}

function loop() {
    t+=2;
    // console.log(t);
    //   draw();

    update();
    snake.score(run);
    if(gameover){
        ctx.fillStyle='white';
        ctx.font="140px Arial";
        ctx.fillText("Game Over",100,200);
        ctx.fillText("Try Again",100,320);
        over();

    }

}
function Keydown(e){
    if(snake.direction==='right'&&e.key==='ArrowLeft'){
        snake.direction!=='left';
    }
    else if(snake.direction==='left'&&e.key==='ArrowRight'){
        snake.direction!=='right';
    }
    else if(snake.direction==='up'&&e.key==='ArrowDown'){
        snake.direction!=='down';
    }
    else if(snake.direction==='down'&&e.key==='ArrowUp'){
        snake.direction!=='up';
    }


    else if(e.key==='ArrowRight'){
        snake.direction="right";
    }
    else if(e.key==='ArrowLeft'){
        snake.direction='left';
    }
    else if(e.key==='ArrowDown'){
        snake.direction='down';
    }
    else if(e.key==='ArrowUp'){
        snake.direction='up';
    }

}
function randomfood(){
    x=Math.round(Math.random()*(W-20)/20);
    y=Math.round(Math.random()*(H-20)/20);
    foodcolor='yellow';

    food={
        foodx:x,
        foody:y,
        color: foodcolor,

    };
    return food;


}

document.addEventListener('keydown',Keydown);


init();



function speed(){
    sp=100;
    return  sp;

}
setInterval(loop,speed());
function over() {
    setTimeout(x,100);

}
