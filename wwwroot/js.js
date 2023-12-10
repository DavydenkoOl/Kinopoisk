

async function doAjax(url) {
    let result = await $.getJSON(url);
    return result;
};

document.getElementById('btn').addEventListener('click', () => {


    document.getElementById("centr_left").removeChild(document.getElementById('_image'));

            title.innerHTML = 'Title: ';
            year.innerHTML = 'Year: ';
            released.innerHTML = 'Released: ';
            runtime.innerHTML = 'Runtime: ';
            genre.innerHTML = 'Genre: ';
            director.innerHTML = 'Director: ';
            actors.innerHTML = 'Actors: ';
            plot.innerHTML = 'Plot: ';


        
});


document.getElementById('btn').addEventListener('click', () => {
    
    doAjax('https://www.omdbapi.com/?apikey=f8fd2f35&t=' + document.getElementById('inpt').value)
        .then((data) => {
           
           
            title.innerHTML = title.innerHTML + '  ' + data['Title'];
            year.innerHTML = year.innerHTML + '  ' + data['Year'];
            released.innerHTML = released.innerHTML + '  ' + data['Released'];
            runtime.innerHTML = runtime.innerHTML + '  ' + data['Runtime'];
            genre.innerHTML = genre.innerHTML + '  ' + data['Genre'];
            director.innerHTML = director.innerHTML + '  ' + data['Director'];
            actors.innerHTML = actors.innerHTML + '  ' + data['Actors']; 
            plot.innerHTML = plot.innerHTML + '  ' + data['Plot'];

            let image = document.createElement('img');
            image.id = "_image";
            image.src = data["Poster"];
            centr_left.appendChild(image);
            

        })
});
