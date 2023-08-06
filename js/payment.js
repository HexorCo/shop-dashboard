
const xhree = new XMLHttpRequest();
xhree.open('GET', BASE_URL+'?p=shop/get_articles', true);
xhree.onreadystatechange = function () {
    if (xhree.readyState === XMLHttpRequest.DONE) {
        if (xhree.status === 200) {
            const articles = JSON.parse(xhree.responseText.replace('</body></html>',''));
            //draw_article(articles);
        } else {
            console.error('Error en la solicitud:', xhree.status);
        }
    }
};xhree.send();