const messages = [
    "O Senhor é meu pastor; nada me faltará. - Salmos 23:1",
    "Tudo posso naquele que me fortalece. - Filipenses 4:13",
    "Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo.Salmos 23:4.",
    "O meu mandamento é este: amem uns aos outros como eu amo vocês. João 15:12",
    "Nem olhos viram, nem ouvidos ouviram, nem jamais penetrou o coração humano, o que Deus tem preparado para aqueles que O amam. 1 Coríntios 2.9", 
    "Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai senão por mim.Jesus Cristo . João 14:6",
    "O choro pode durar uma noite, mas a alegria vem pela manhã. Salmos 30:5.",
    "Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te esforço, e te ajudo, e te sustento com a destra da minha justiça. Isaías 41:10.",
    "Não fui eu que lhe ordenei? Seja forte e corajoso! Não se apavore, nem se desanime, pois o Senhor, o seu Deus, estará com você por onde você andar.Bíblia Sagrada Josué 1:9.",
    "[O amor] Tudo sofre, tudo crê, tudo espera, tudo suporta. O amor nunca falha; mas havendo profecias, serão aniquiladas; havendo línguas, cessarão; havendo ciência, desaparecerá. 1 Coríntios 13:7,8.",
    "⁠Deus é o nosso refúgio e a nossa fortaleza, auxílio sempre presente na adversidade. Salmos 46:1",
    "Porque, onde estiverem dois ou três reunidos em meu nome, aí estou eu no meio deles. Mateus 18:20.",
    "Venham a mim, todos os que estão cansados e sobrecarregados, e eu darei descanso a vocês.(Mateus 11:28)",
    "Jesus olhou para eles e respondeu: Para o homem é impossível, mas para Deus todas as coisas são possíveis. (Mateus 19:26)",
    "Confia no Senhor de todo o teu coração, e não te estribes no teu próprio entendimento. Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas. Provérbios 3:5-6",
    "Nós amamos porque ele nos amou primeiro. (1 João 4:19)",
    "Neste mundo vocês terão aflições; contudo, tenham ânimo! Eu venci o mundo. João 16:33",
    "Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas lhes serão acrescentadas.  (Mateus 6:33)",
    "Entregue o seu caminho ao Senhor; confie nele, e ele agirá. Salmos 37:5.",
    "E conhecereis a verdade e a verdade vos libertará. João 8:32",
    "O Senhor é a minha luz e a minha salvação; de quem terei medo? O Senhor é a fortaleza da minha vida; a quem temerei? Salmo 27:1",
    "Portanto, não percam a coragem, pois ela traz uma grande recompensa. Hebreus 10:35",
    "Em Deus louvarei a sua palavra, em Deus pus a minha confiança; não temerei o que me possa fazer a carne. Todos os dias torcem as minhas palavras; todos os seus pensamentos são contra mim para o mal. Salmos 56:4,5.",
    "Pois, sabendo que o Senhor estava comigo, criei coragem. Esdras 7:28",
    "Porque quando estou fraco então sou forte. 2 Coríntios 12:10",
    "Ainda que a minha mente e o meu corpo enfraqueçam, Deus é a minha força, Ele é tudo o que eu sempre preciso.Salmos 73:26",







    // ... (resto das mensagens)
];

let currentMessage = "";

function generateMessage() {
    const messageElement = document.getElementById("message");
    let newMessage;
    
    // Garante que não repita a mesma mensagem
    do {
        const randomIndex = Math.floor(Math.random() * messages.length);
        newMessage = messages[randomIndex];
    } while (newMessage === currentMessage);
    
    currentMessage = newMessage;
    
    // Adiciona animação de fade
    messageElement.style.opacity = "0";
    
    setTimeout(() => {
        messageElement.innerText = currentMessage;
        messageElement.style.opacity = "1";
    }, 300);
}

function shareMessage(platform) {
    const message = document.getElementById("message").innerText;
    let shareUrl = "";

    switch(platform) {
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
            break;
    }

    if (shareUrl) {
        window.open(shareUrl, '_blank');
    }
}

// Adiciona transição suave ao texto
document.getElementById("message").style.transition = "opacity 0.3s ease";

// Gera uma mensagem inicial
window.onload = generateMessage;