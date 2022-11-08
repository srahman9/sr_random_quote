function generate(){
    var quotes = {
        "- Jules Renard" : '"The truly free man is the one who can turn down an invitation to dinner without giving an excuse."',
        "- Albert Einstein" : '“Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty.”',
        "- Deepak Chopra" : '“Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions.”',
        "- Madeline Miller" : '“Bury us, and mark our names above. Let us be free.”',
        "- Alysha Speer" : '“You never really know whats coming. A small wave, or maybe a big one. All you can really do is hope that when it comes, you can surf over it, instead of drown in its monstrosity.”'
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;

}