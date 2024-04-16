const afro = 'https://www.googleapis.com/youtube/v3/search?q=AfroSenju&type=video&key=AIzaSyCViMrB-dav1oT2nRtJ_s5_w7iytYIx4xg'


fetch(afro)
.then(
    res => {console.log('nice', res)
    return res.json();}
)
.then(data => {
    data.items.forEach(vids => {
    const youtube = 'https://www.youtube.com/embed/'
    const video = `<iframe width="320" height="240"
                    src=${youtube}${vids.id.videoId}>
                    </iframe>`
    document.querySelector('ul').insertAdjacentHTML('beforeend', video)
    console.log(youtube, vids.id.videoId)
})
    console.log(data)
})
.catch(err => {console.log('not nice', err)});

