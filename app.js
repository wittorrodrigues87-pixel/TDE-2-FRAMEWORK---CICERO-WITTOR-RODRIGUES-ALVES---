const { createApp } = Vue

createApp({
  data() {
    return {
      pagina: 'home',
      menu: false,
      slide: 0,
      carrinho: 0,
      qtd: 1,
      foto: 0,
      edicao: 0,
      email: '',
      erro: '',

      nav: [
        'Venda na Amazon',
        'Chega em 15 min',
        'Ofertas do Dia',
        'Mais Vendidos',
        'Games',
        'Livros',
        'Música',
        'Casa',
        'Eletrônicos',
        'Brinquedos e Jogos'
      ],

      secoes: [
        {
          titulo: 'Destaques',
          itens: ['Mais Vendidos', 'Novidades na Amazon', 'Produtos em alta']
        },
        {
          titulo: 'Conteúdo digital e dispositivos',
          seta: 1,
          itens: [
            'Amazon Fire TV',
            'Amazon Music',
            'Prime Video',
            'Aplicativos Amazon',
            'Dispositivos Kindle e eBooks',
            'Echo e Alexa',
            'Audiolivros Audible'
          ]
        },
        {
          titulo: 'Comprar por categoria',
          seta: 1,
          itens: [
            'Alimentos e Bebidas',
            'Automotivo',
            'Bebês',
            'Beleza e Cuidados Pessoais',
            'Casa',
            'Eletrônicos',
            'Games e Consoles',
            'Livros'
          ]
        }
      ],

      ofertas1: [
        { img: 'lacta', off: 18 },
        { img: 'taca', off: 33 },
        { img: 'acucareiro', off: 25 },
        { img: 'taca', off: 15 }
      ],
      ofertas2: [
        { img: 'omo', off: 33, txt: 'Oferta' },
        { img: 'ar', off: 41, txt: 'Oferta' },
        { img: 'scala', off: 38, txt: 'Menor preço em 365 dias' },
        { img: 'controle', off: 24, txt: 'Menor preço em 365 dias' }
      ],
      beleza: [
        { img: 'make', nome: 'Maquiagem Premium' },
        { img: 'skin', nome: 'Skincare Premium' },
        { img: 'perfume', nome: 'Fragrâncias Premium' },
        { img: 'hair', nome: 'Cabelo Profissional' }
      ],
      echo: [
        { nome: 'Echo Dot', cor: '#29b6f6' },
        { nome: 'Fire TV Stick HD', cor: '#1a6f9c', img: 'fire' },
        { nome: 'Echo Show 5', cor: '#29b6f6' },
        { nome: 'Echo Spot', cor: '#1a6f9c' }
      ],

      cozinha: [
        {
          img: 'espatula',
          nome: 'Mimo Style Utensílios Espátula...',
          nota: '4,6',
          aval: '7.786',
          preco: '12,55',
          de: '17,38'
        },
        {
          img: 'talheres',
          nome: 'MOZCADA Forma para 7 Picolés d...',
          nota: '4,7',
          aval: '1.265',
          preco: '25,00'
        },
        {
          img: 'espatula',
          nome: 'Oikos - Espátula de Silicone Preta...',
          nota: '4,8',
          aval: '12.020',
          preco: '14,90'
        },
        {
          img: 'espatula',
          nome: 'Tuut, Linha Silicone Plus, Rapa-tu...',
          nota: '4,2',
          aval: '933',
          preco: '7,30'
        },
        {
          img: 'espatula',
          nome: 'Oikos - Espátula de Silicone Reta...',
          nota: '4,8',
          aval: '12.020',
          preco: '11,50',
          de: '14,90'
        },
        {
          img: 'talheres',
          nome: 'Mimo Style Pincel Alimentício',
          nota: '4,7',
          aval: '3.030',
          preco: '9,89'
        }
      ],

      categorias: [
        { img: 'cat1', nome: 'Tudo' },
        { img: 'cat2', nome: 'Beleza' },
        { img: 'cat3', nome: 'Casa' },
        { img: 'cat4', nome: 'Cozinha' },
        { img: 'cat5', nome: 'Moda' },
        { img: 'cat6', nome: 'Eletrodomésticos' },
        { img: 'cat7', nome: 'Eletrônicos' }
      ],
      subnav: [
        'Mais Vendidos',
        'Ofertas',
        'PlayStation 4 ▾',
        'Xbox One ▾',
        'Nintendo Switch ▾',
        'Acessórios',
        'PC',
        'SteelBooks'
      ],
      thumbs: ['t1', 't2', 't3', 't4', 't5', 't6'],
      icones: [
        { img: 'i1', txt: 'Pagamentos e Segurança' },
        { img: 'i2', txt: 'Enviado pela Amazon' },
        { img: 'i3', txt: 'Política de devolução' }
      ],
      edicoes: [
        'Mario Kart World [CÓDIGO DOWNLOAD]',
        'Mario Kart World [JOGO INTEGRADO]',
        'Pokémon Legends: Z-A [JOGO INTEGRADO]',
        'Standard'
      ],
      garantias: [
        {
          nome: 'Garantia Estendida contra falhas e defeitos de 12 meses',
          preco: '95,55'
        },
        {
          nome: 'Garantia Estendida contra falhas e defeitos de 24 meses',
          preco: '143,32'
        }
      ],

      relacionados: [
        {
          img: 'dk',
          nome: 'Donkey Kong Bananza - Nintendo Switch 2',
          marca: 'Nintendo',
          aval: 533,
          preco: '409',
          desc: 6
        },
        {
          nome: 'Estojo de Transporte para Nintendo Switch 2 (2025) 10 em 1',
          marca: 'Genérico',
          aval: 44,
          preco: '189',
          desc: 5
        },
        {
          nome: 'Película de Vidro Temperado Premium Nintendo Switch 2',
          aval: 120,
          preco: '39'
        },
        {
          nome: 'Pokémon Legends: Z-A - Nintendo Switch 2',
          marca: 'Nintendo',
          aval: 341,
          preco: '409',
          desc: 7
        },
        {
          nome: 'Nintendo, Jogo, The Legend of Zelda: Breath of the Wild',
          marca: 'Nintendo',
          aval: 94,
          preco: '439'
        },
        {
          nome: 'Película de Vidro Temperado Premium 9H Compatível',
          aval: 45,
          preco: '39'
        },
        {
          nome: 'Nintendo Switch 2 Pro Controller',
          marca: 'Nintendo',
          aval: 556,
          preco: '700'
        }
      ],
      detalhes: [
        ['Idioma', 'Português'],
        ['Dimensões da embalagem', '22,2 x 21,9 x 10,9 cm; 1,61 quilogramas'],
        ['Certificação', '00556-25-04083'],
        ['Data de lançamento', '5 junho 2025'],
        ['ASIN', 'B0F67B2D45'],
        ['País de origem', 'Brasil'],
        ['Ranking dos mais vendidos', 'Nº 9 em Games e Consoles']
      ],
      barras: [[5, 92], [4, 4], [3, 2], [2, 0], [1, 2]],
      reviews: [
        {
          user: 'matheus',
          titulo: 'Excelente Console!!!',
          data: '9 de fevereiro de 2026',
          texto:
            'A entrega foi rápida, chegou bem embalado, caixa lacrada. Estou jogando a uns meses e curtindo muito, É um enorme upgrade do switch 1 (eu possuia o modelo v2, é bem maior a tela), loading mais rápido, visual melhorado. Tem muitos jogos já anunciados e mais por vir. Valeu muito a pena.',
          img: 'r4',
          util: 9
        },
        {
          user: 'Eduardo',
          titulo: 'Muito bom',
          data: '2 de março de 2026',
          texto: 'Console excelente, tela muito melhor e desempenho incrível. Recomendo.',
          util: 3
        }
      ],
      rodape: [
        {
          titulo: 'Conheça-nos',
          itens: [
            'Sobre a Amazon',
            'Informações corporativas',
            'Carreiras',
            'Comunicados à imprensa',
            'Comunidade',
            'Acessibilidade',
            'Amazon Science'
          ]
        },
        {
          titulo: 'Ganhe dinheiro conosco',
          itens: [
            'Venda na Amazon',
            'Proteja e construa a sua marca',
            'Forneça para a Amazon',
            'Publique seus livros',
            'Seja um associado',
            'Anuncie seus produtos'
          ]
        },
        {
          titulo: 'Pagamento',
          itens: ['Meios de Pagamento', 'Compre com Pontos', 'Cartão de crédito Amazon']
        },
        {
          titulo: 'Deixe-nos ajudar você',
          itens: [
            'Sua conta',
            'Frete e prazo de entrega',
            'Devoluções e reembolsos',
            'Gerencie seu conteúdo e dispositivos',
            'Recalls e alertas de segurança do produto',
            'Ajuda'
          ]
        }
      ]
    }
  },

  methods: {
    rota() {
      const pagina = location.hash.replace('#/', '')

      if (pagina === 'login' || pagina === 'produto') {
        this.pagina = pagina
      } else {
        this.pagina = 'home'
      }

      this.menu = false
      window.scrollTo(0, 0)
    },

    estrelas(nota) {
      const quantidade = Math.round(parseFloat(nota.replace(',', '.')))
      return '★'.repeat(quantidade) + '☆'.repeat(5 - quantidade)
    },

    rolar(ref, direcao) {
      this.$refs[ref].scrollBy({
        left: direcao * 500,
        behavior: 'smooth'
      })
    },

    subir() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },

    entrar() {
      if (!this.email.trim()) {
        this.erro = 'Digite um número de celular ou e-mail.'
        return
      }

      this.erro = ''
      location.hash = '#/'
    }
  },

  mounted() {
    this.rota()
    window.addEventListener('hashchange', this.rota)
  }
}).mount('#app')
