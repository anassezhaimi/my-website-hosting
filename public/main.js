


async function playAudio(){
  const view = localStorage.getItem("views");
  if(!view){
    const response = await fetch("http://localhost:3000/view",{
      method: "get",
    });
    const data = await response.json();
    if(data.is === "yes"){
      localStorage.setItem("views","view");
    };
  }
  const audio = document.getElementById("my-audio");
  const start_button = document.getElementById("start-button");
  const hide_first = document.getElementById("hide-first");
  hide_first.style.display = "block";
  let container = document.getElementById("container");
  container.removeChild(start_button);
  audio.play();
};


const isLogin = localStorage.getItem("views");
if(isLogin === "view"){
  const container = document.getElementById("container");
  const btn = document.getElementById("start-button");
  const hide_first = document.getElementById("hide-first");
  hide_first.style.display = "block";
  container.removeChild(btn);
}
function goTo(){
  window.location.href = "https://www.discord.com/users/1193287829128753275";
};

async function displayViews(){
  const res = await fetch("http://localhost:3000/showOld");
  const data = await res.json();
  const views = document.getElementById("views");
  views.innerHTML = `Views: ${data.data}`
};
displayViews();
