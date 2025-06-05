    // JS ta pronto LEMBRETE: REVISAR ANTES DE ENTREGAR!
document.addEventListener('DOMContentLoaded', function() {
    const hamburguer = document.getElementById('hamburguer');
    const menuNav = document.getElementById('menuNav');
    const linksNav = document.querySelectorAll('.link-nav');

    // Toggle do menu mobile !!!NAO MEXER!!!
    if (hamburguer && menuNav) {
        hamburguer.addEventListener('click', function() {
            hamburguer.classList.toggle('ativo');
            menuNav.classList.toggle('ativo');
        });
    }

    // Isso aqui fecha o menu mobile quando clica no link !!!NAO MEXER!!!
    linksNav.forEach(function(link) {
        link.addEventListener('click', function() {
            if (hamburguer && menuNav) {
                hamburguer.classList.remove('ativo');
                menuNav.classList.remove('ativo');
            }
        });
    });

    // Pra navegacao suave entre as seções !!!NAO MEXER!!!
    linksNav.forEach(function(link) {
        link.addEventListener('click', function(evento) {
            evento.preventDefault();
            const alvo = this.getAttribute('href');
            if (alvo.startsWith('#')) {
                const secao = document.querySelector(alvo);
                if (secao) {
                    secao.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Isso atualiza o link ativo na barra de navegação (é basicamente pra ele ficar vermelho) !!!NAO MEXER!!!
    window.addEventListener('scroll', function() {
        const secoes = document.querySelectorAll('.secao[id]');
        const scrollAtual = window.pageYOffset;

        secoes.forEach(function(secao) {
            const topoSecao = secao.offsetTop - 100;
            const alturaSecao = secao.offsetHeight;
            const idSecao = secao.getAttribute('id');

            if (scrollAtual >= topoSecao && scrollAtual < topoSecao + alturaSecao) {
                linksNav.forEach(function(link) {
                    link.classList.remove('ativo');
                    if (link.getAttribute('href') === '#' + idSecao) {
                        link.classList.add('ativo');
                    }
                });
            }
        });
    });
});