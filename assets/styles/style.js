var bahasa = [
   "C++",
   "Python",
];


function showBahasa(){
   var listBahasa = document.getElementById("list-bahasa");
   // clear untuk inputan list
   listBahasa.innerHTML = "";

   // mencetak inputan
   for(let i = 0; i < bahasa.length; i++){
      // melakukan edit 
       var btnEdit = "<a href='#' onclick='editBahasa("+i+")'>Edit</a>";

      //  melakukan hapus
       var btnHapus = "<a href='#' onclick='deleteBahasa("+i+")'>Hapus</a>";

      //  melakukan read atau baca konten bahasa pada halaman home
       var btnRead = "<a href='../Submission/index.html' onclick= 'readBahasa("+i+")'>Read</a>"

       listBahasa.innerHTML += "<li>" + "Pemrograman " + bahasa[i] + "  ["+btnRead + " || "+btnEdit + " || "+ btnHapus +"]</li>";        
   }
}

function addBahasa(){
   var input = document.querySelector("input[name=bahasa]");
   bahasa.push(input.value);
   showBahasa();
}

function editBahasa(id){
   var newBahasa = prompt("Bahasa baru", bahasa[id]);
   bahasa[id] = newBahasa;
   showBahasa();
}

function deleteBahasa(id){
   bahasa.splice(id, 1);
   showBahasa();
}

showBahasa();