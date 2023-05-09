const $el = document.querySelector('.scroll');
let missionnum = 0;

function hello(){
    $el.innerHTML += `<div class="send-wrapper"><div class="send" style="width:80px">안녕?</div></div>`;
    $el.innerHTML += `<div class="receive-wrapper"><img class="chatkong" src="../img/chatkong.png"></img><div class="receive" style="width:100px">안녕하세요!</div></div>`
    scrollTop();
}
function tough() {
    $el.innerHTML += `<div class="send-wrapper"><div class="send" style="width:80px">힘들어</div></div>`;
    $el.innerHTML += `<div class="receive-wrapper"><img class="chatkong" src="../img/chatkong.png"></img><div class="receive" style="width:150px">분명 잘 해낼 수 있어요! 잠시 창문을 열고 마음을 다잡는 건 어떨까요?</div></div>`
    scrollTop();
}
function mission(){
    $el.innerHTML += `<div class="send-wrapper"><div class="send" style="width:100px">미션을 알려줘</div></div>`;
    $el.innerHTML += `<div class="receive-wrapper"><img class="chatkong" src="../img/chatkong.png"></img><div class="receive" style="width:150px">이번 주의 미션이에요. 제 미션을 해결해 주세요!</div></div>`
    $el.innerHTML += `<div class="mission-wrapper"><div class="mission1" onclick='mission1()'><p id="m1txt">제철과일 한 가지 먹기</p></div><div class="mission2" onclick='mission2()'><p id="m2txt">비타민 k가 풍부한 오이 먹기</p></div><div class="mission3" onclick='mission3()'><p id="m3txt">피로 해소에 좋은 토마토 먹기</p></div></div>`;
    scrollTop();
}
function advantage() {
    $el.innerHTML += `<div class="send-wrapper"><div class="send" style="width:130px">채식의 장점이 뭐야?</div></div>`;
    $el.innerHTML += `<div class="receive-wrapper"><img class="chatkong" src="../img/chatkong.png"></img><div class="receive" style="width:170px">채식을 하면 환경과 건강에 도움이 되고, 체중 감량 효과를 볼 수 있어요!</div></div>`
    scrollTop();
}

function mission1() {
    missionnum = 1;
    var dialog = document.getElementById("missionDialog");
    const mstxt = document.getElementById('m1txt');
    const msdiatxt = document.getElementById('msdiatxt');
	dialog.showModal();
    msdiatxt.innerHTML = mstxt.textContent;
}
function mission2() {
    missionnum = 2;
    var dialog = document.getElementById("missionDialog");
    const mstxt = document.getElementById('m2txt');
    const msdiatxt = document.getElementById('msdiatxt');
	dialog.showModal();
    msdiatxt.innerHTML = mstxt.textContent;
}
function mission3() {
    missionnum = 3;
    var dialog = document.getElementById("missionDialog");
    const mstxt = document.getElementById('m3txt');
    const msdiatxt = document.getElementById('msdiatxt');
	dialog.showModal();
    msdiatxt.innerHTML = mstxt.textContent;
}
function missionClose(){
    var dialog = document.getElementById("missionDialog");
    dialog.close();
}
function missionOk() {
    var dialog = document.getElementById("missionDialog");
    dialog.close();

}



function scrollTop() {
    $('scroll').scrollTop($('#scroll')[0].scrollHeight);
}