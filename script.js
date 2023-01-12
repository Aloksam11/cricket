let searchButton = document.getElementById("btn");
    searchButton.addEventListener("click", function (){
        let playername = document.getElementById("search").value;
        console.log(playername);
        getplayer(playername);
    });
    // async function getplayer(PlayerName){
    //     const result = await fetch(`http://localhost:5000/cricket/players/${PlayerName}`,{ mode: 'no-cors'});
    //     const data = result.json();
    //     console.log(data);
    // }
    function getplayer(PlayerName){
        return fetch(`http://localhost:5000/cricket/players/${PlayerName}`,{    
            method: 'GET',    
            withCredentials: true,    
            crossorigin: true,    
            mode: 'no-cors',       
          })    
            // .then((res) => res.json())    
            .then((data) => {    
              console.log(data);    
            })    
            .catch((error) => {    
              console.error(error);    
            });    
        };    
    