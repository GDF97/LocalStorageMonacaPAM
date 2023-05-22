const btnCadastrar = document.querySelector(".btnCadastrar");
const btnListar = document.querySelector(".btnListar");
const lista = document.querySelector(".list");
const btnMobile = document.querySelector(".btn-mobile");
const btnClose = document.querySelector(".btn-close");
const navbar = document.querySelector(".navbar-lateral");

btnListar.addEventListener("click", listarPlayers);
btnCadastrar.addEventListener("click", getPlayers);
btnMobile.addEventListener("click", openNavbar);
btnClose.addEventListener("click", closeNavbar);

//Cadastrando
function getPlayers() {
  let team = document.getElementById("equipe").value;
  let player = document.getElementById("player").value;
  
  if (player === "" || team === "") {
    alert("Insira valores válidos");
  } else {
    localStorage.setItem(player, team);
    alert("Cadastrado!!");
  }
}

//Listando
function listarPlayers() {
  const allLi = document.querySelectorAll('li');
  let playerType = document.getElementById("player").value;
  
  if (localStorage.getItem(playerType) === null) {
    alert("'"+playerType +"'" + " não está cadastrado");
  }
  
  else {
    if(allLi.length === 0){
      let span = document.createElement("span");
      span.classList.add("span-wrapper");
      let li = document.createElement("li");
      let li2 = document.createElement("li");
      li.textContent = playerType;
      li2.textContent = localStorage.getItem(playerType);
      lista.append(span);
      span.append(li);
      span.append(li2);
      openNavbar();
    }
    else{
      let liTrue = false;
      allLi.forEach(liAll =>{
        if(liAll.textContent === playerType){
          liTrue = true;
          openNavbar(); 
        }
      })
      if(!liTrue){
        let span = document.createElement("span");
        span.classList.add("span-wrapper");
        let li = document.createElement("li");
        let li2 = document.createElement("li");
        li.textContent = playerType;
        li2.textContent = localStorage.getItem(playerType);
        lista.append(span);
        span.append(li);
        span.append(li2);
        openNavbar();
      }
    }
  }
}

function openNavbar() {
  navbar.classList.add("active");
}

function closeNavbar() {
  navbar.classList.remove("active");
}