const paginas = {
  index: `
    <section class="apresentacao">
      <h1>Bem-vindo à ONG MiauTividade &#x1F431;</h1>
      <p>A <strong>MiauTividade</strong> é uma ONG fictícia criada como parte de um projeto acadêmico, dedicada ao cuidado, proteção e adoção responsável de gatos.</p>
      <p>Nosso objetivo é mostrar como a tecnologia pode ser usada para o bem-estar animal, unindo empatia, aprendizado e criatividade. Por meio deste projeto, conectamos pessoas que amam felinos e desejam fazer a diferença.</p>
      <p>Embora seja uma iniciativa educativa, a MiauTividade carrega valores reais: respeito à vida, responsabilidade social e o desejo de inspirar boas ações — sempre com um toque de “miau” no coração. &#128150;</p>
    </section>

    <section class="contato">
      <h2>Contato</h2>
      <address>
        <ul>
          <li>Rua do exemplo, 123</li>
          <li>São Bernardo do Campo - SP</li>
          <li>E-mail: <a href="mailto:contato@miautividade.com.br">Contato@miautividade.com.br</a></li>
          <li>Telefone: <a href="https://wa.me/5511942805484">(11) 94280-5484</a></li>
        </ul>
      </address>
    </section>

    <section class="imagem-inicial">
      <img src="imagem/imginicial-1.png" alt="Imagem inicial MiauTividade" class="img-principal">
    </section>
  `,
  projetos: `
    <section class="apresentacao">
      <h1>Projetos Sociais da MiauTividade</h1>
      <p>Na MiauTividade, acreditamos que pequenas ações podem fazer uma grande diferença na vida dos gatos. Conheça nossos projetos sociais e descubra como participar, voluntariando-se ou contribuindo com doações.</p>
    </section>

    <section class="projetos container-grid">
      <div class="card">
        <h3>Gatinhos na Escola</h3>
        <img src="imagem/Projeto1.png" alt="Projeto Gatinhos na Escola">
        <p>O projeto promove palestras e atividades educativas em escolas públicas, incentivando crianças e jovens a se tornarem defensores do bem-estar animal desde cedo. Oficinas práticas incluem construção de casinhas e brinquedos para gatos.</p>
      </div>

      <div class="card">
        <h3>Abrigo Temporário Solidário</h3>
        <img src="imagem/Projeto2.png" alt="Projeto Abrigo Temporário">
        <p>Recebe gatos resgatados em situação de rua ou abandono, proporcionando um lar seguro enquanto aguardam adoção. Voluntários ajudam nos cuidados, socialização e alimentação dos felinos.</p>
      </div>
    </section>

    <section class="voluntariado">
      <h2>Voluntariado e Doações</h2>
      <p>Você pode fazer a diferença! A MiauTividade recebe voluntários para atividades como cuidado com gatos, organização de eventos educativos e ajuda na divulgação dos projetos.</p>
      <p>Também aceitamos doações em dinheiro, ração, medicamentos e materiais de limpeza. Cada contribuição ajuda a transformar a vida dos felinos.</p>
      <p>Para se voluntariar ou doar, entre em contato:</p>
      <address>
        <ul>
          <li>E-mail: <a href="mailto:contato@miautividade.com.br">Contato@MiauTividade.com.br</a></li>
          <li>Telefone: <a href="https://wa.me/5511942805484">(11) 94280-5484</a></li>
        </ul>
      </address>
    </section>
  `,
  cadastro: `
    <section class="apresentacao">
      <h1>Área de Cadastro</h1>
      <p>Quer cadastrar sua ONG, está procurando um bichinho para adotar ou apenas quer conhecer mais sobre a MiauTividade? Cadastre-se abaixo e faça parte da nossa comunidade!</p>
    </section>

    <section class="formulario">
      <form id="formCadastro">
        <fieldset>
          <legend><strong>Informações Pessoais</strong></legend>

          <label for="nome">Nome completo:</label>
          <input type="text" id="nome" name="nome" placeholder="Obrigatório" required>

          <label for="nascimento">Data de Nascimento:</label>
          <input type="date" id="nascimento" name="nascimento">

          <label for="cpf">CPF:</label>
          <input type="text" id="cpf" name="cpf" pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}" placeholder="000.000.000-00" title="Formato: 000.000.000-00" required>

          <label for="cep">CEP:</label>
          <input type="text" id="cep" name="cep" pattern="[0-9]{5}-[0-9]{3}" placeholder="00000-000" title="Formato: 00000-000" required>

          <label for="rua">Rua:</label>
          <input type="text" id="rua" name="rua" placeholder="Endereço">

          <label for="numero">Nº:</label>
          <input type="text" id="numero" name="numero" placeholder="Número">

          <label for="complemento">Complemento:</label>
          <input type="text" id="complemento" name="complemento" placeholder="Complemento">

          <label for="bairro">Bairro:</label>
          <input type="text" id="bairro" name="bairro" placeholder="Bairro">

          <label for="cidade">Cidade:</label>
          <input type="text" id="cidade" name="cidade" placeholder="Cidade">

          <label for="estado">Estado:</label>
          <input type="text" id="estado" name="estado" placeholder="Estado">

          <label for="email">E-mail:</label>
          <input type="email" id="email" name="email" placeholder="mail@provedor.com.br" required>

          <label for="telefone">Telefone/Celular:</label>
          <input type="tel" id="telefone" name="telefone" pattern="\\([0-9]{2}\\) [0-9]{4}-[0-9]{4}" placeholder="(00) 0000-0000">

          <input type="submit" value="Enviar cadastro">
        </fieldset>
      </form>
      <p id="msg"></p>
    </section>
  `
};

function carregarPagina(pagina) {
  const conteudo = document.getElementById('conteudo');
  conteudo.innerHTML = paginas[pagina];
  if (pagina === 'cadastro') validarFormulario();
}

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const pagina = e.target.dataset.page;
    carregarPagina(pagina);
  });
});

function validarFormulario() {
  const form = document.getElementById('formCadastro');
  const msg = document.getElementById('msg');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const campos = form.querySelectorAll('input[required]');
    let valido = true;

    campos.forEach(campo => {
      if (!campo.value.trim()) {
        campo.style.border = '2px solid red';
        valido = false;
      } else {
        campo.style.border = '';
      }
    });

    if (!valido) {
      msg.textContent = 'Por favor, preencha todos os campos obrigatórios.';
      msg.style.color = 'red';
      return;
    }

    const dados = Object.fromEntries(new FormData(form).entries());
    localStorage.setItem('cadastro', JSON.stringify(dados));
    msg.textContent = 'Cadastro realizado com sucesso!';
    msg.style.color = 'green';
    form.reset();
  });
}

carregarPagina('index');