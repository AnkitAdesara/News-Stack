let f = fetch(" https://inshorts.deta.dev/news?category=entertainment")
f.then((value) => {
    return value.json()
}).then((valuee) => {
    // console.log(valuee)
    ihtml=""
    for(items in valuee.data){
        ihtml += `<div class="box">
            <img src="${valuee.data[items].imageUrl}">
            <div class="internalbox">
                <p>Title : ${valuee.data[items].title}</p>
                <p>Author : ${valuee.data[items].author}</p>
                <p>Date : ${valuee.data[items].date} , Time: ${valuee.data[items].time}</p>
                <p>Content : ${valuee.data[items].content}</p>
            </div>
        </div>`
    }
    document.getElementById("content").innerHTML = ihtml
})