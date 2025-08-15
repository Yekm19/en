/* script.js */
const tabs = document.querySelectorAll('.tab');
const panels = {
  personal: document.getElementById('panel-personal'),
  programs: document.getElementById('panel-programs'),
  games: document.getElementById('panel-games'),
  music: document.getElementById('panel-music')
};

tabs.forEach(btn=>{
  btn.addEventListener('click',()=>{
    tabs.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    Object.values(panels).forEach(p=>p.classList.remove('active'));
    panels[btn.dataset.tab].classList.add('active');
    window.scrollTo({top:0, behavior:'smooth'});
  })
});

document.getElementById('year').textContent = new Date().getFullYear();
const audioPlayer = document.getElementById('audioPlayer');
    const playlist = document.getElementById('playlist');
    const tracks = playlist.getElementsByTagName('li');

    function loadTrack(track) {
      for (let t of tracks) t.classList.remove('active');
      track.classList.add('active');
      audioPlayer.src = track.getAttribute('data-src');
      audioPlayer.play();
    }

    for (let track of tracks) {
      track.addEventListener('click', function() {
        loadTrack(this);
      });
    }

    if (tracks.length > 0) {
      loadTrack(tracks[0]);
    }