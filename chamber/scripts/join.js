    
function stampDatetime () {
    const datetime = new Date()
    const hours = datetime.getHours()
    const minutes = datetime.getMinutes()
    const seconds = datetime.getSeconds()

    document.querySelector("#dateStamp").value = datetime.toDateString()
    document.querySelector("#timeStamp").value = `${hours}:${minutes}:${seconds}`
}

stampDatetime()