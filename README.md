# api-top

Projeto API

📁 API/ – Uma API em Node.js com Express e CORS.

🚀 Requisitos
Antes de tudo, você precisa ter o Node.js instalado na sua máquina.

🔧 Como instalar o Node.js
Acesse o site oficial: https://nodejs.org/
Baixe e instale a versão LTS (recomendada para a maioria dos usuários).
Verifique se a instalação funcionou com os comandos no terminal:
node -v
npm -v
📂 Como usar este projeto
1. Clone o repositório
git clone https://github.com/KimberlyMoura/api-top.git
cd API-Comid
2. Vá até a pasta da API
cd API-bebiDAS E COMIDAS
3. Instale as dependências
Este projeto usa os pacotes express e cors. Para instalar, rode:

npm install express cors
4. Inicie a API localmente
Depois de instalar os pacotes, rode o seguinte comando para iniciar a API:

node index.js
Se tudo estiver certo, a API vai iniciar e mostrar algo como:

Servidor rodando em http://localhost:3000


🛠️ Tecnologias usadas
Node.js
Express
CORS
HTML/CSS (exemplo no Site)
🌐 Como Integrar com Front-End
Você pode consumir esta API facilmente em seu front-end com fetch():

fetch('http://localhost:3000/produtos')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
📚 Créditos Acadêmicos
Este projeto foi desenvolvido como parte da disciplina Programação Web 3, do curso Técnico em Desenvolvimento de Sistemas, sob orientação dos professores Fátima e Cláudio.

❓Dúvidas?
Se tiver qualquer dúvida ou problema, sinta-se à vontade para abrir uma issue aqui no repositório!
