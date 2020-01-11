var input = document.querySelector('input');



var minhaPromise = function(){

    return new Promise(function(resolve,reject){

        var con = new XMLHttpRequest();

        
        con.open('GET','https://swapi.co/api/people/1/');
        con.send(null);

        con.onreadystatechange = function(){
            if(con.readyState === 4){ //se estiver pronto
                if(con.status === 200){ //se a conexao for bem sucedida
                    resolve(JSON.parse(con.responseText));
            }else{
                reject('Erro na requisição');
            }
        }
        }

    });

}


var botao = document.querySelector('button');

botao.onclick = funcao;



function funcao(){

minhaPromise()
.then(function(response){
    console.log(response);

    // var local = document.querySelector('#resultado');

    // var link = document.createElement('a');
    // link.setAttribute('href',response.html_url);
    // var nome = document.createTextNode(response.name);
    // link.appendChild(nome);
    // var quebraLinha = document.createElement('br');
    // var foto =  document.createElement('img');
    // foto.setAttribute("src",response.avatar_url);
    // foto.setAttribute("width",100);
    // local.appendChild(foto);
    // local.appendChild(quebraLinha);
    // local.appendChild(link);

})
.catch(function(error){
    console.warn(error);
})
}
