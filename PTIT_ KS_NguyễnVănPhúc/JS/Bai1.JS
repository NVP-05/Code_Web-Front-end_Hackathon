let hero = JSON.parse(localStorage.getItem("HERO_INFO"));
let me = JSON.parse(localStorage.getItem("ME_INFO"));
let project = JSON.parse(localStorage.getItem("PROJECTS"));

let date0 = document.getElementById("date0");
let client0 = document.getElementById("client0");
let tech0 = document.getElementById("tech0");
let type0 = document.getElementById("type0");
let url0 = document.getElementById("url0");
let img0 = document.getElementById("img-0");

let date1 = document.getElementById("date1");
let client1 = document.getElementById("client1");
let tech1 = document.getElementById("tech1");
let type1 = document.getElementById("type1");
let url1 = document.getElementById("url1");
let img1 = document.getElementById("img-1");

let date2 = document.getElementById("date2");
let client2 = document.getElementById("client2");
let tech2 = document.getElementById("tech2");
let type2 = document.getElementById("type2");
let url2 = document.getElementById("url2");
let img2 = document.getElementById("img-2");

let date3 = document.getElementById("date3");
let client3 = document.getElementById("client3");
let tech3 = document.getElementById("tech3");
let type3 = document.getElementById("type3");
let url3 = document.getElementById("url3");
let img3 = document.getElementById("img-3");

date0.textContent = project[0].date;
client0.textContent = project[0].client;
tech0.textContent = project[0].techs;
type0.textContent = project[0].type;
url0.textContent = project[0].url;
img0.src = project[0].imgUrl;

date1.textContent = project[1].date;
client1.textContent = project[1].client;
tech1.textContent = project[1].techs;
type1.textContent = project[1].type;
url1.textContent = project[1].url;
img1.src = project[1].imgUrl;

date2.textContent = project[2].date;
client2.textContent = project[2].client;
tech2.textContent = project[2].techs;
type2.textContent = project[2].type;
url2.textContent = project[2].url;
img2.src = project[2].imgUrl;

date3.textContent = project[3].date;
client3.textContent = project[3].client;
tech3.textContent = project[3].techs;
type3.textContent = project[3].type;
url3.textContent = project[3].url;
img3.src = project[3].imgUrl;

let mainname = document.getElementById("mainname");
mainname.textContent = hero.name;

let heroimg = document.getElementById("heroimg");
heroimg.src = hero.imgUrl;

let job = document.getElementById("job");
job.textContent = hero.job;

let nameabout = document.getElementById("nameabout");
nameabout.textContent = me.fullName;

let ageabout = document.getElementById("ageabout");
ageabout.textContent = me.age;

let languaabout = document.getElementById("languaabout");
languaabout.textContent = me.languages;

let phoneabout = document.getElementById("phoneabout");
phoneabout.textContent = me.phone;

let emailabout = document.getElementById("emailabout");
emailabout.textContent = me.email;

let addressabout = document.getElementById("addressabout");
addressabout.textContent = me.address;
