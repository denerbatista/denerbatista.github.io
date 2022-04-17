let elementImg=document.querySelector("#imagem");
let elementText=document.querySelector("h2");
let elementPlay=document.querySelector("audio")

console.log(elementPlay)
const dados=[["https://cdn.discordapp.com/attachments/947324026236330018/964988051518545980/image.png","https://cdn.discordapp.com/attachments/947324026236330018/964992426458619945/image.png","https://cdn.discordapp.com/attachments/947324026236330018/965134213705760788/image.png","https://cdn.discordapp.com/attachments/947324026236330018/965160614773276733/image.png"],["Sorridente","Apaixonado","Nervoso","Espiritual"],["https://cdn.discordapp.com/attachments/947324026236330018/965153686504497152/sorridente.mp3","https://cdn.discordapp.com/attachments/947324026236330018/965153889806614588/apaixonado.mp3","https://cdn.discordapp.com/attachments/947324026236330018/965162298178150450/nervoso.mp3","https://cdn.discordapp.com/attachments/947324026236330018/965167901516636200/espiritual.mp3"]]
let number=1
function alterar(){
    elementImg.setAttribute("src",`${dados[0][number]}`);
    elementText.innerText=`${dados[1][number]}`;
    elementPlay.setAttribute("src",`${dados[2][number]}`)
    elementPlay.setAttribute("autoplay","true")
    number++;
    if(number==dados[0].length){
        number=0
    }
}
