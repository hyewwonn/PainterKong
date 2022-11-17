const $el = document.querySelector('.scroll')

function hello(){
    $el.innerHTML += `<div class="send-wrapper"><div class="send" style="width:200px">안녕?</div></div>`;
    $el.innerHTML += `<div class="receive-wrapper"><img class="chatkong" src="/img/user-circle-solid-24.png"></img><div class="receive" style="width:300px">안녕하세요!</div></div>`
}
function tough() {
    $el.innerHTML += `<div class="send-wrapper"><div class="send" style="width:200px">힘들어</div></div>`;
    $el.innerHTML += `<div class="receive-wrapper"><img class="chatkong" src="/img/user-circle-solid-24.png"></img><div class="receive" style="width:700px">분명 잘 해낼 수 있어요! 잠시 창문을 열고 마음을 다잡는 건 어떨까요?</div></div>`
}
function mission(){
    $el.innerHTML += `<div class="send-wrapper"><div class="send" style="width:350px">미션을 알려줘</div></div>`;
    $el.innerHTML += `<div class="receive-wrapper"><img class="chatkong" src="/img/user-circle-solid-24.png"></img><div class="receive" style="width:700px">이번 주의 미션이에요. 제 미션을 해결해 주세요!</div></div>`
}
function advantage() {
    $el.innerHTML += `<div class="send-wrapper"><div class="send" style="width:500px">채식의 장점이 뭐야?</div></div>`;
    $el.innerHTML += `<div class="receive-wrapper"><img class="chatkong" src="/img/user-circle-solid-24.png"></img><div class="receive" style="width:700px">채식을 하면 환경과 건강에 도움이 되고, 체중 감량 효과를 볼 수 있어요!</div></div>`
}

$('#scroll').scrollTop($('#scroll')[0].scrollHeight);