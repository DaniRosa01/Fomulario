'use strict';

const limparFormulario = (endereco) => {
        document.getElementById('endereco').value = '';
        document.getElementById('bairro').value = '';
        document.getElementById('cidade').value = '';
        document.getElementById('estado').value = '';
}


const preencherFormulario = (endereco) => {
        document.getElementById('endereco').value = endereco.logradouro;
        document.getElementById('bairro').value = endereco.bairro;
        document.getElementById('cidade').value = endereco.localidade; 
        document.getElementById('estado').value = endereco.uf;
}


const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisarCep = async() => {
        limparFormulario();

        const cep = document.getElementById('cep').value;
        const url = `http://viacep.com.br/ws/${cep}/json/`;
        if (cepValido(cep)){
        const dados = await fetch(url);
        const endereco = await dados.json();
        if (endereco.hasOwnProperty('erro')) {
                alert('CEP não encotrado!')
        //document.getElementById('endereco').value = 'CEP não encotrado!';
        }else {

            preencherFormulario(endereco);   
        }
}else{
        alert('CEP incorreto')
        //document.getElementById('endereco').value = 'CEP incorreto!';    
        }
}


document.getElementById('cep')
        .addEventListener('focusout',pesquisarCep);



function validaCPF(cpf) {

        console.log(cpf.length);
        if(cpf.length != 11) {
        return false;
        } else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);
        var soma = 0;
        for (var i = 10; i > 1; i--) {
                soma += numeros.charAt(10 - i) * i;
        }
        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        
                //validação do meu primeiro Digito
        if (resultado != digitos.charAt(0)) {
                return false;
        }
        
        soma = 0;
        numeros = cpf.substring(0, 10);

        for (var K = 11; K > 1; K--) {
                soma += numeros.charAt(11 - K) * K;
        }

        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

                //validação do segundo Digito
        if (resultado != digitos.charAt(1)) {
                return false
        }
                return true;           
        }
}
        

const validacao = async() => { 
        console.log('iniciando validação CPF');
      
        var cpf = document.getElementById('cpf').value;
        
        var resultadoValidacao = validaCPF(cpf);

        if (resultadoValidacao) {
        document.getElementById('success');
        }
        else {
                alert('digite um CPF válido');
                document.getElementById('cpf').value = '';
        }
}
document.getElementById('cpf')
        .addEventListener('focusout',validacao);

var db = openDatabase("Meubanco", "2.0", "Mybase", 4048);
db.transaction(function(criar){
        criar.executeSql("CREATE TABLE users (id INTEGER PRIMARY KEY,nomeCompleto TEXT,cargoPrentendido TEXT,dataDeNascimento TEXT,sexo TEXT,estadoCivil TEXT,cep TEXT,numero TEXT,rua TEXT,bairro TEXT,cidade TEXT,estado TEXT,telefoneFixo1 TEXT,telefoneFixo2 TEXT,celular TEXT,contato TEXT,email TEXT,identidade TEXT,cpf TEXT,possuiVeiculo TEXT,habilitacao TEXT)");
});

function salvar(){
        return alert("No momento ainda não estamos salvando os dados, site em construção....")
        }


