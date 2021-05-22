function Playlist() {
  this.list = [];
  this.song = 0;
  this.add = function add(songs) {
    songs.forEach((el) => this.list.push(el));
    return this.list;
  };

  this.play = function play() {
    if (this.isPlaying === false) {
      this.isPlaying = true;
      return `${this.list[this.song]} started to play`;
    } else {
      return `${this.list[this.song]} already played`;
    }
  };
  this.stop = function stop() {
    if (this.isPlaying === true) {
      this.isPlaying = false;
      return `${this.list[this.song]} stopped`;
    } else {
      return `${this.list[this.song]} already stopped`;
    }
  };
  this.next = function next() {
    this.song++;
    this.isPlaying = true;
    return `${this.list[this.song - 1]} stopped, ${
      this.list[this.song]
    } started`;
  };
}
function Song(...songs) {
  this.songs = songs;
  return this.songs;
}
const playlist = new Playlist();
const heyJude = new Song("Hey Jude", "The Beatles");
const jaded = new Song("Jaded", "Aerosmith");
console.log(playlist.add(heyJude));
console.log(playlist.add(jaded));
console.log(playlist.play());
console.log(playlist.next());
console.log(playlist.next());
console.log(playlist.next());
console.log(playlist.play());
