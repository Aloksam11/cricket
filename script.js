console.log("Hello World");
let searchButton = document.getElementById("btn");
    searchButton.addEventListener("click", function (){
        let playername = document.getElementById("search").value;
        getplayer(playername);
    });
    async function getplayer(PlayerName){
        const result = await fetch(`http://localhost:5000/cricket/players/${PlayerName}`);
        const data = await result.json();
        console.log(data);
        loadData(data[0].Name,data[0].Runs,data[0].Type,data[0].Country);
    }
    function loadData(pname,pruns,ptype,pcountry){
        let cname = document.getElementById("name").innerHTML=`Name:- ${pname}`;
        let crun = document.getElementById("runs").innerHTML=`Runs:- ${pruns}`;
        let ctype = document.getElementById("type").innerHTML=`Type:- ${ptype}`;
        let ccountry = document.getElementById("country").innerHTML=`Country:- ${pcountry}`;;
    }