console.log('123');
const menuSwitch = document.querySelector('.menu-switch');
const memberList = document.querySelector('.member-list');

menuSwitch.addEventListener('click',function(e){
    if(memberList.classList.contains('open')){console.log('djkl')};
    memberList.classList.toggle('open');
})

window.addEventListener('resize',function(e){
    const screenWidth=window.screen.width;
    if(screenWidth>=767){
        memberList.classList.remove('open');
    }
})