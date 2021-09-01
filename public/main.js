getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('get', '/style.css');
    request.onload = () => {
        console.log('request.response')
        console.log(request.response)
        const style = document.createElement('style')
        style.innerHTML = request.response
        document.head.appendChild(style)
    }
    request.onerror = () => {
        console.log('失败了');
    }
    request.send()
}
getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('get', '/2.js');
    request.onload = () => {
        console.log('request.response')
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () => {
        console.log('失败了')
    }
    request.send()
}
getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('get', '/3.html')
    request.onreadystatechange = () => {
        //下载完成，但不知道是成功2xx 还是失败 4xx 5xx
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                console.log(request.response)
                const div = document.createElement('div')
                div.innerHTML = request.response
                document.body.appendChild(div)
            }

        }
    }
    request.onerror = () => {
        console.log('失败了')
    }
    request.send()
}
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('get', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    }
    request.send()
}
getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('get', '/5.JSON')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
            const object = JSON.parse(request.response)
            myName.textContent = object.name
        }
    }
    request.send()
}
let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('get', `/page${n + 1}`);
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response)
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.id;
                xxx.appendChild(li)
            })
            n += 1;
        }
    }
    request.send()
}