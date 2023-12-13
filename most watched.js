let scroll = document.createElement("div");
scroll.className = "scroll";
let mybody = document.querySelector("body");
for (i = 0; i < 1; i++) {
  let content = document.createElement("div");
  content.className = "page";
  for (j = 0; j < 42; j++) {
    let movie = document.createElement("div");
    movie.className = "movie";
    let poster = document.createElement("img");
    poster.className = "poster";
    let mytext = document.createElement("h6");
    movie.append(poster);
    movie.append(mytext);
    content.append(movie);
  }
  scroll.append(content);
}
mybody.append(scroll);