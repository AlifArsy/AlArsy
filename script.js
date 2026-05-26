const playlist = [
  {
    title: "Karena Kita Berbeda",
    artist: "AlArsy",
    src: "audio/Karena-Kita-Berbeda.mp3",
  },
  {
    title: "Setengah Hati",
    artist: "AlArsy",
    src: "audio/Setengah-Hati.mp3",
  },
  {
    title: "Sisa Waktu",
    artist: "AlArsy",
    src: "audio/Sisa-Waktu.mp3",
  },
];

const playlistContainer = document.getElementById("playlist");
const audioPlayer = document.getElementById("audio-player");
const trackTitle = document.getElementById("track-title");
const trackArtist = document.getElementById("track-artist");
const photoInput = document.getElementById("profile-photo");
const photoPreview = document.getElementById("profile-photo-preview");
const photoUpload = document.querySelector(".photo-upload");

const photoPassword = "AlArsy123"; // Ubah password ini jika perlu

photoUpload.addEventListener("change", (event) => {
  event.preventDefault();
  const password = prompt("Masukkan password untuk mengganti foto:");
  if (password === null) return;

  if (password === photoPassword) {
    photoInput.click();
  } else {
    alert("Password salah. Foto tidak bisa diganti.");
  }
});

photoInput.addEventListener("change", (event) => {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    if (typeof reader.result === "string") {
      photoPreview.src = reader.result;
    }
  };
  reader.readAsDataURL(file);
});

function createTrackCard(track, index) {
  const card = document.createElement("div");
  card.className = "track-card";

  const details = document.createElement("div");
  details.className = "track-details";
  details.innerHTML = `<p class="track-name">${track.title}</p><p class="track-subtitle">${track.artist}</p>`;

  const button = document.createElement("button");
  button.className = "play-button";
  button.textContent = "Putar";
  button.addEventListener("click", () => playTrack(index));

  card.appendChild(details);
  card.appendChild(button);
  return card;
}

function renderPlaylist() {
  playlistContainer.innerHTML = "";
  playlist.forEach((track, index) => {
    playlistContainer.appendChild(createTrackCard(track, index));
  });
}

function playTrack(index) {
  const track = playlist[index];
  if (!track) return;
  audioPlayer.src = track.src;
  audioPlayer.play();

  trackTitle.textContent = track.title;
  trackArtist.textContent = track.artist;
}

renderPlaylist();
