Crie um botao que contenha um icone (img) e um texto.
Coloque um espaço de .4rem entre os elementos.

```HTML
<button>
  <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNSIgdmlld0JveD0iMCAwIDI1IDI1IiB3aWR0aD0iMjUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUuNzQ4MSAyNC45NDcxQzI0LjA5MDEgMjQuNzA2MSAyNC45MTExIDIyLjk1MDEgMjQuOTExMSAxMi45ODExQzI0LjkxMTEgMS45ODEwOCAyMy45MTExIDAuOTgxMDc5IDEyLjkxMTEgMC45ODEwNzlDMS45MTExMyAwLjk4MTA3OSAwLjkxMTEzMyAxLjk4MTA4IDAuOTExMTMzIDEyLjk4MTFDMC45MTExMzMgMjIuOTc2MSAxLjczNzEzIDI0LjcxNTEgMTAuMTM5MSAyNC45NDkxQzEwLjIxMjEgMjQuODU4MSAxMC4yMzkxIDI0Ljc0NDEgMTAuMjM5MSAyNC42MjgxQzEwLjIzOTEgMjQuMzc4MSAxMC4yMjkxIDIxLjgxMjEgMTAuMjI0MSAyMC45MjkxQzcuMTg3MTMgMjEuNTY4MSA2LjU0NjEzIDE5LjUxMDEgNi41NDYxMyAxOS41MTAxQzYuMDQ5MTMgMTguMjg4MSA1LjMzMzEzIDE3Ljk2MjEgNS4zMzMxMyAxNy45NjIxQzQuMzQyMTMgMTcuMzA2MSA1LjQwODEzIDE3LjMxOTEgNS40MDgxMyAxNy4zMTkxQzYuNTA0MTMgMTcuMzk0MSA3LjA4MTEzIDE4LjQxMDEgNy4wODExMyAxOC40MTAxQzguMDU1MTMgMjAuMDI3MSA5LjYzNzEzIDE5LjU2MDEgMTAuMjU5MSAxOS4yODkxQzEwLjM1ODEgMTguNjA2MSAxMC42NDAxIDE4LjEzOTEgMTAuOTUyMSAxNy44NzUxQzguNTI3MTMgMTcuNjA4MSA1Ljk3ODEzIDE2LjcwMDEgNS45NzgxMyAxMi42NDUxQzUuOTc4MTMgMTEuNDkwMSA2LjQwNDEzIDEwLjU0NjEgNy4xMDIxMyA5LjgwNjA4QzYuOTg5MTMgOS41MzgwOCA2LjYxNTEzIDguNDYyMDggNy4yMDkxMyA3LjAwNjA4QzcuMjA5MTMgNy4wMDYwOCA4LjEyNjEzIDYuNzIxMDggMTAuMjEyMSA4LjA5MDA4QzExLjA4MzEgNy44NTUwOCAxMi4wMTcxIDcuNzM4MDggMTIuOTQ2MSA3LjczNDA4QzEzLjg3MzEgNy43MzgwOCAxNC44MDcxIDcuODU1MDggMTUuNjgwMSA4LjA5MDA4QzE3Ljc2NTEgNi43MjEwOCAxOC42ODAxIDcuMDA2MDggMTguNjgwMSA3LjAwNjA4QzE5LjI3NjEgOC40NjIwOCAxOC45MDExIDkuNTM4MDggMTguNzg4MSA5LjgwNjA4QzE5LjQ4ODEgMTAuNTQ2MSAxOS45MTExIDExLjQ5MDEgMTkuOTExMSAxMi42NDUxQzE5LjkxMTEgMTYuNzEwMSAxNy4zNTgxIDE3LjYwNTEgMTQuOTI1MSAxNy44NjYxQzE1LjMxNzEgMTguMTkzMSAxNS42NjYxIDE4LjgzOTEgMTUuNjY2MSAxOS44MjYxQzE1LjY2NjEgMjAuNzcyMSAxNS42NjAxIDIyLjQ0NTEgMTUuNjU2MSAyMy41NTQxQzE1LjY1NDEgMjQuMTAzMSAxNS42NTMxIDI0LjUxMzEgMTUuNjUzMSAyNC42MjgxQzE1LjY1MzEgMjQuNzM3MSAxNS42ODIxIDI0Ljg1MjEgMTUuNzQ4MSAyNC45NDcxVjI0Ljk0NzFaIiBmaWxsPSJibGFjayIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+" alt="">GitHub
</button>
```

```CSS
button {
  display: flex;
  align-items: center;
  
  line-height: 0;
  gap: .4rem;
}

button img{
  width: 2rem;
  height: 2rem;
}
```

```MEU CSS
aside {
    display: flex;
    justify-content: center;
    gap: .4rem;
}
aside button:hover {
    background-color: white;
}

aside button{
    margin-top: .4rem;;
    height: 50px;
    width: 130px;
    cursor: pointer;
}

aside button:nth-child(1){
    background-image: url(./githubicon.png);
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 40px;
    background-origin: content-box;
    padding: 1px;
}
aside button:nth-child(2){
    background-image: url(./linkedinicon.png);
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 35px;
    background-origin: content-box;
    padding: 1px;
}
```