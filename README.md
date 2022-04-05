
# REST API Moneytor

## Install 
     npm install
     
## Run
     npm run dev
     
## Add word
       var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          "word_code": "hi",
          "lang": "en",
          "text": "Hi"
        });

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("http://localhost:1337/api/word", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
     
## Get word
    http://localhost:1337/api/word/?word_code=hi&lang=en
  
