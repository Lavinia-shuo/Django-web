export class AcGame{
        constructor(id){
            this.id=id; //**这个id是前端传进来的div的id，也就是ac_game_12345678**
            this.$ac_game=$('#' + id); //**我们要找这个div中的id的话，jquery中要使用('#'+id).**
           // this.menu=new AcGameMenu(this); //**创建一个菜单，赋值给menu.**
            this.playground=new AcGamePlayground(this);
            this.start();
        }
        start(){
        }
}


