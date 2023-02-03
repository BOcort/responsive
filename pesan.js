const modal = document.getElementById("myModal");
const openButton = document.getElementById("openModalButton");
const closeIcon = document.getElementById("closeModalIcon");
const hasil = document.getElementsByClassName("hasil")

const email = document.getElementsByClassName("emailmu").value;;
const pesan = document.getElementsByClassName("message-mu").value;;

const h4font = document.createElement('h4');
const pfont = document.createElement('p');

// Ketika tombol openButton ditekan
openButton.addEventListener('click', () => {
  modal.style.display = "block";
  h4font.innerHTML = email;
  pfont.innerHTML = pesan;
  hasil.append(h4font);
  hasil.append(pfont);
});

// Ketika tombol closeButton ditekan
closeIcon.addEventListener('click', () => {
  modal.style.display = "none";
});