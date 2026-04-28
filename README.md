# Vinharia Agnello

## Descrição

Vinharia Agnello é um site para uma loja de vinhos online. O projeto apresenta uma plataforma completa de e-commerce com catálogo de produtos, carrinho de compras e informações sobre a empresa.

## Estrutura do Projeto

O site é organizado nas seguintes páginas:

- **Home (`index.html`):** Página principal do site com acesso aos principais recursos.
- **Sobre Nós (`src/pages/sobre-nos.html`):** Página que apresenta a história e informações sobre a empresa Vinharia Agnello.
- **Produtos (`src/pages/produtos.html`):** Catálogo com todos os produtos disponíveis para venda.
- **Detalhe do Produto (`src/pages/detalhe-produto.html`):** Página com informações detalhadas de um produto específico.
- **Carrinho de Compras (`src/pages/carrinho-compra.html`):** Página do carrinho onde o cliente pode visualizar e gerenciar itens antes de finalizar a compra.
- **Contato (`src/pages/contato.html`):** Página com informações de contato e formulário para comunicação com a empresa.

## Estrutura de Arquivos

```
vinharia-agnello/
├── index.html                 # Página inicial
├── README.md                  # Documentação do projeto
├── src/
│   ├── pages/                 # Páginas HTML
│   │   ├── sobre-nos.html
│   │   ├── contato.html
│   │   ├── produtos.html
│   │   ├── detalhe-produto.html
│   │   └── carrinho-compra.html
│   ├── styles/                # Arquivos de estilo CSS
│   │   ├── index.css          # CSS principal
│   │   ├── efeitos.css        # Efeitos visuais (pseudo-classes, pseudo-elementos, animações, transformações)
│   │   ├── home.css
│   │   ├── produtos.css
│   │   ├── detalhes-produto.css
│   │   ├── carrinho-compra.css
│   │   ├── contato.css
│   │   ├── sobre-nos.css
│   │   ├── colors.css
│   │   └── galeria.css
│   └── scripts/               # Arquivos JavaScript
│       ├── index.js
│       └── produtos.js
```

## Efeitos Visuais

A partir da segunda iteração do projeto, foram implementados efeitos visuais em CSS no arquivo `src/styles/efeitos.css` para melhorar a experiência do usuário e adicionar interatividade ao site.

### 🎯 Pseudo-classes Aplicadas (3)
- **`:hover`** - Mudança de cor e transformações em links, botões e ícones
- **`:focus`** - Outline em inputs de formulário
- **`:first-child`** - Padding especial no primeiro item do carrinho

### 🎨 Pseudo-elementos Aplicados (2)
- **`::before`** - Linha decorativa vertical na timeline (página Sobre Nós)
- **`::after`** - Overlay escuro nos banners das páginas

### 💫 Animações (@keyframes) Implementadas
- **`fadeSlideIn`** - Animação de fade in com translateY para itens do carrinho

### 🎢 Transformações CSS Implementadas (2)
- **`scale()`** - Redimensionamento de botões em hover (0.99, 0.98)
- **`translateY()`** - Movimentação vertical em animações (12px)

### 🔄 Transições Aplicadas
- Links de navegação: color 0.3s ease
- Links de história: all 0.2s ease
- Botões de filtro: background-color 0.3s ease + transform 0.2s ease
- Botão adicionar vinho: background-color 0.2s ease + transform 0.2s ease
- Botões de quantidade: background 0.15s + color 0.15s + transform 0.2s ease
- Botão deletar: color 0.15s + background 0.15s
- Input de busca: outline 0.2s ease

### 📍 Elementos com Efeitos
- **Navbar**: Links com mudança de cor em hover
- **Banners**: Overlay com pseudo-elemento ::after
- **Botões**: Scale em hover e transições suaves
- **Carrinho**: Animação fadeSlideIn em itens
- **Timeline (Sobre Nós)**: Linha vertical decorativa com ::before
- **Formulários**: Transições em inputs

## Integrantes

- Pollyana Valverde
- Luana Lopes Sventkauskas
- João Fernando Gonçalves Senziani
- Arthur Nepomuceno Dias Gomes
- Yan

## Link do Site Publicado

`https://pollyana-valverde.github.io/vinharia-agnello/`

## Repositório

[GitHub - vinharia-agnello](https://github.com/pollyana-valverde/vinharia-agnello)
