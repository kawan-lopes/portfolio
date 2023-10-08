document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animation", {
        speed: 150,
        loop: true
    }).type('Desenvolvedor', {delay: 1500})
    .delete(13)
    .type('Front-end', {delay: 1000})
    .delete(9)
    .type('Back-end', {delay: 1000})
    .go()
})