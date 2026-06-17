// Validação do formulário de contato
document.getElementById("formContato").addEventListener("submit", function(e){
    e.preventDefault(); // Impede que a página recarregue

    // Captura os valores dos campos
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Verifica se todos os campos foram preenchidos
    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Regex simples para validar formato de e-mail
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert("Digite um e-mail válido");
        return;
    }
    
    // Simulação de envio
    alert("Mensagem enviada com sucesso! :)");
    document.getElementById("formContato").reset(); // Limpa os campos após envio
});

// MENU RESPONSIVO
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  // Alterna a classe 'active' para mostrar/esconder o menu
  menu.classList.toggle("active");
});

// TEMA claro/escuro
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  // Alterna a classe 'dark' no body
  document.body.classList.toggle("dark");
});

// Mostrar/esconder seções
const sobreBtn = document.createElement("button");
sobreBtn.textContent = "Mostrar/Esconder Sobre mim";
document.body.appendChild(sobreBtn);

const sobreSection = document.getElementById("sobre");

sobreBtn.addEventListener("click", () => {
  // Alterna visibilidade da seção
  if (sobreSection.style.display === "none") {
    sobreSection.style.display = "block";
  } else {
    sobreSection.style.display = "none";
  }
});