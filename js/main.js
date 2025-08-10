// Atualiza o ano automaticamente
if (document.getElementById("ano")) {
    document.getElementById("ano").textContent = new Date().getFullYear();
}

// Buscar data do último commit no GitHub
if (document.getElementById("last-update")) {
    fetch("https://api.github.com/repos/RafaelFernandesBR/rafaelfernandes.github.io/commits?per_page=1")
        .then(response => response.json())
        .then(data => {
            if (data && data[0] && data[0].commit && data[0].commit.committer && data[0].commit.committer.date) {
                const date = new Date(data[0].commit.committer.date);
                const formatted = date.toLocaleDateString('pt-BR');
                document.getElementById("last-update").textContent = formatted;
            } else {
                document.getElementById("last-update").textContent = "indisponível";
            }
        })
        .catch(() => {
            document.getElementById("last-update").textContent = "indisponível";
        });
}
