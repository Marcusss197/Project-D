document.addEventListener('DOMContentLoaded', () => {
    const ongs = [
      {
        name: 'Casa Sofia',
        img: 'FILES/casasofialogo.png',
        description: 'Fundada em Foz do Iguaçu, a Casa Sofia é uma ONG dedicada aos cachorros de rua da região. Nosso compromisso é resgatar...',
        link: 'PAGES/casasofia.html',
        tags: ['cachorros', 'gatos', 'adocao']
      },
      {
        name: 'ACDD',
        img: 'FILES/acdd.png',
        description: 'A ACDD é uma instituição dedicada ao cuidado e apoio a crianças com deficiências de Foz do Iguaçu, Paraná...',
        link: 'PAGES/acdd.html',
        tags: ['crianças', 'deficiências', 'escola']
      },
      {
        name: 'Lar Esperança',
        img: 'FILES/larespelogo.png',
        description: 'Albergue Lar Esperança é uma instituição dedicada a fornecer abrigo e apoio para pessoas em situação de vulnerabilidade...',
        link: 'PAGES/larespe.html',
        tags: ['abrigo', 'moradores de rua', 'rua']
      },
      {
        name: 'Lar dos Velinhos',
        img: 'FILES/lardosvelinhos.jpg',
        description: 'O Lar dos Velhinhos de Foz do Iguaçu, acolhe hoje 72 idosos, oferecendo 6 refeições ao dia e todos os cuidados necessários para um excelente atendimento com dignidade e amor a todos nossos idosos.',
        link: 'PAGES/lardosvelinhos.html',
        tags: ['idosos', 'velhos', 'veio']
      },
      {
        name: 'ONG Ficticia 1',
        img: 'FILES/quadradoong.png',
        description: 'Uma ONG ficticia para ter como exemplo de mais ongs, junto com uma bio sem nada.',
        link: '#',
        tags: ['exemplo', 'ficticia']
      },
      {
        name: 'ONG Ficticia 2',
        img: 'FILES/quadradoong.png',
        description: 'Uma ONG ficticia para ter como exemplo de mais ongs, junto com uma bio sem nada.',
        link: '#',
        tags: ['exemplo', 'ficticia']
      },
      {
        name: 'ONG Ficticia 3',
        img: 'FILES/quadradoong.png',
        description: 'Uma ONG ficticia para ter como exemplo de mais ongs, junto com uma bio sem nada.',
        link: '#',
        tags: ['exemplo', 'ficticia']
      },
      {
        name: 'ONG Ficticia 4',
        img: 'FILES/quadradoong.png',
        description: 'Uma ONG ficticia para ter como exemplo de mais ongs, junto com uma bio sem nada.',
        link: '#',
        tags: ['exemplo', 'ficticia']
      }
    ];
  
    const ongsContainer = document.getElementById('ongsContainer');
  
    function renderONGs(ongsToRender) {
      ongsContainer.innerHTML = '';
      ongsToRender.forEach(ong => {
        const card = document.createElement('div');
        card.className = 'card card-instituicao';
        card.style.width = '18rem';
        const tags = ong.tags.map(tag => `<span class="badge bg-secondary">${tag}</span>`).join(' ');
        card.innerHTML = `
          <img src="${ong.img}" class="card-img-top" alt="..." style="width:286px;height:270px;">
          <div class="card-body" data-name="${ong.name}" data-tags="${ong.tags.join(' ')}">
            <h5 class="card-title">${ong.name}</h5>
            <p class="card-text">${ong.description}</p>
            <a href="${ong.link}" class="btn btn-purple">Doe aqui</a>
          </div>
        `;
        ongsContainer.appendChild(card);
      });
    }
    
    document.getElementById('searchInput').addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
          searchONG();
        }
      });
    
      renderONGs(ongs);
      
    function searchONG() {
      const input = document.getElementById('searchInput').value.toLowerCase();
      const filteredONGs = ongs.filter(ong => 
        ong.name.toLowerCase().includes(input) || 
        ong.tags.some(tag => tag.toLowerCase().includes(input))
      );
      renderONGs(filteredONGs);
    }
  
    
  });
  