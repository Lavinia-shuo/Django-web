class AcGamePlayground{
            constructor(root){
                this.root=root;
                this.$playground=$(`<div>游戏界面</div>`);
                this.hide();
                this.root.$ac_game.append(this.$playground);
                this.start();
            }
            start(){
            }
            show(){
            this.$playground.show();
            }
            hide(){
            this.$playground.hide();
        }
}


class AcGameMenu {
    constructor(root) {
        this.root = root;
        this.$menu = $(`
<div class="ac-game-menu">
    <div class="ac-game-menu-field">
        <div class="ac-game-menu-field-item ac-game-menu-field-item-single-mode">
            单人模式
        </div>
        <br>
        <div class="ac-game-menu-field-item ac-game-menu-field-item-multi-mode">
            多人模式
        </div>
        <br>
        <div class="ac-game-menu-field-item ac-game-menu-field-item-settings">
            设置
        </div>
    </div>
</div>
`);
        this.root.$ac_game.append(this.$menu);
        this.$single_mode = this.$menu.find('.ac-game-menu-field-item-single-mode');
        this.$multi_mode = this.$menu.find('.ac-game-menu-field-item-multi-mode');
        this.$settings = this.$menu.find('.ac-game-menu-field-item-settings');

        this.start();
    }

    start() {
        this.add_listening_events();
    }

    add_listening_events() {
        let outer = this;
        this.$single_mode.click(function(){
            outer.hide();
            outer.root.playground.show();
        });
        this.$multi_mode.click(function(){
            console.log("click multi mode");
        });
        this.$settings.click(function(){
            console.log("click settings");
        });
    }

    show() {  // 显示menu界面
        this.$menu.show();
    }

    hide() {  // 关闭menu界面
        this.$menu.hide();
    }
}

class AcGame{
        constructor(id){
            this.id=id; //**这个id是前端传进来的div的id，也就是ac_game_12345678**
            this.$ac_game=$('#' + id); //**我们要找这个div中的id的话，jquery中要使用('#'+id).**
            this.menu=new AcGameMenu(this); //**创建一个菜单，赋值给menu.**
            this.playground=new AcGamePlayground(this);
            this.start();
        }
        start(){
        }
}

