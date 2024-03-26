const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const dateBtns = $$('.date');
const newFirmBtns = $$('.container-new-firm');
const x = $$('.info-new-firm');
const imgFirm = $$('.img-new-firm');
const form = document.getElementById('p')
const main = document.getElementById('main')
const a = $('.container-result-search')
const btnUser = $('.fa-circle-user')
const infoUser = $('.width-info-user')

const app = {
    handleEvents: function () {
        const _this = this;

        dateBtns.forEach(function (dateBtn, idx) {
            const newFirmBtn = newFirmBtns[idx];
            dateBtn.onclick = function () {
                $('.date.active-date-time').classList.remove(
                    'active-date-time',
                );
                $('.container-new-firm.active-disable').classList.remove(
                    'active-disable',
                );

                dateBtn.classList.add('active-date-time');
                newFirmBtn.classList.add('active-disable');
            };
        });

        btnUser.onclick = function(){
            if($('.width-info-user.visible')){
                $('.width-info-user.visible').classList.remove('visible')
            }
            else{
                infoUser.classList.add('visible')
            }

            
        }

        form.onclick = function(e){
            e.stopPropagation();
            a.classList.remove('visible')
        }

        main.onclick = function(){
            a.classList.add('visible')
        }


        x.forEach(function (firm, idx) {
            const a = imgFirm[idx];
            firm.addEventListener('mouseenter', function () {
                a.classList.add('active-scale-image');
            });

            firm.addEventListener('mouseleave', function () {
                a.classList.remove('active-scale-image');
            });
        });
    },

    start: function () {
        this.handleEvents();
    },
};

app.start();
