function confirmarConsulta() {
  alert("Consulta confirmada com sucesso!");
}

function agendarLembrete() {
  const data = document.getElementById("lembreteData").value;
  if (data) {
    alert(`Lembrete agendado para o dia ${data}`);
  } else {
    alert("Por favor, escolha uma data.");
  }
}

function salvarNotas() {
  const texto = document.getElementById("blocoNotas").value;
  localStorage.setItem("notas", texto);
  alert("Notas salvas!");
}

function carregarNotas() {
  const textoSalvo = localStorage.getItem("notas");
  if (textoSalvo) {
    document.getElementById("blocoNotas").value = textoSalvo;
    alert("Notas carregadas.");
  } else {
    alert("Nenhuma nota encontrada.");
  }
}

function mostrarResumo() {
  const profissional = document.getElementById("profissional").value;
  const local = document.getElementById("local").value;
  const resumo = document.getElementById("resumoEscolha");

  if (profissional && local) {
    resumo.textContent = `Você escolheu ${profissional} na(o) ${local}.`;
  } else {
    resumo.textContent = "Por favor, selecione o profissional e o local.";
  }
}

function salvarOrientacao() {
  const titulo = document.getElementById("tituloOrientacao").value;
  const descricao = document.getElementById("descricaoOrientacao").value;
  const lista = document.getElementById("listaOrientacoes");

  if (titulo && descricao) {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${titulo}:</strong> ${descricao}`;
    lista.appendChild(item);
    document.getElementById("tituloOrientacao").value = "";
    document.getElementById("descricaoOrientacao").value = "";
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}

function validarAgendamento() {
  const nome = document.getElementById("nomePaciente").value;
  const data = document.getElementById("dataConsulta").value;

  if (!nome || !data) {
    alert("Por favor, preencha o nome e a data.");
    return;
  }

  alert(`Consulta agendada para ${nome} no dia ${data}.`);
}

// pagina inicial

// Função para abrir/fechar dropdown no mobile ao clicar
function toggleDropdown(element) {
  if (window.innerWidth <= 768) {
    element.classList.toggle('open');
    const dropdownContent = element.querySelector('.dropdown-content');
    if (element.classList.contains('open')) {
      dropdownContent.style.display = 'block';
    } else {
      dropdownContent.style.display = 'none';
    }
  }
}

// Para garantir que dropdown fecha se redimensionar a tela para desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(drop => {
      drop.classList.remove('open');
      const content = drop.querySelector('.dropdown-content');
      if (content) content.style.display = '';
    });
  }
});
