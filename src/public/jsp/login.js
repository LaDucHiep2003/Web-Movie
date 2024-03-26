const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const singnBtn = document.getElementById('signup_btn')
const loginBtn = document.getElementById('login_btn')
const form = document.getElementById('form-login')

const app = {
    handleEvents: function () {
        const _this = this;

        loginBtn.addEventListener('click',function(){
            form.method = 'Get';
            
        })

        singnBtn.addEventListener('click',function(){
            form.method = 'Post'
        })

    },

    start: function () {
        this.handleEvents();
    },
};

app.start();
