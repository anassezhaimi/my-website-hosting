


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



function goTo(){
  window.location.href = "https://www.discord.com/users/1193287829128753275";
};


