import { produtosLista } from "../utils/produtos-lista.js";

const produtosSection = document.getElementById("produtos-section");
const produtosResult = document.getElementById("result");

produtosResult.innerHTML = `Mostrando <strong>${produtosLista.length}</strong> resultados`;

produtosLista.forEach(produto => {
    const produtoCard = document.createElement("div");
    produtoCard.classList.add("produto-card");

    produtoCard.innerHTML = `
        <div class="produto-header">
            <div class="produto-tag-container">
                ${produto.tags.destaque ? '<span class="tag primary">Destaque</span>' : ''}
                <span class="tag secondary">${produto.tags.safra}</span>
            </div>

            <img class="produto-image" src="${produto.image}" alt="Imagem do produto">
        </div>

        <div class="produto-body">
            <div class="produto-badge-container">
                <span class="wine-type">${produto.badges.wine_type}</span>
                <span class="grape-type">${produto.badges.grape_type}</span>
            </div>

            <h2 class="produto-name">${produto.name}</h2>
            <p class="produto-description">${produto.description}</p>

            <div class="produto-price">
                <span class="price-label">Preço</span>
                <h3 class="price-value">R$ ${produto.price.toFixed(2).replace('.', ',')}</h3>
            </div>
        </div>

        <div class="produto-action">
            <a href="./detalhe-produto.html">
                <button class="action-button primary" type="button">
                    <img src="../assets/icons/eye.svg" alt="Ícone de olho" class="button-icon">
                     Detalhes
                </button>
            </a>
            <a href="./carrinho-compra.html">
                <button type="button" class="action-button secondary">
                    <img src="../assets/icons/cart.svg" alt="Ícone de carrinho" class="button-icon">
                    Comprar
                </button>
            </a>
        </div>
    `

    produtosSection.appendChild(produtoCard);
});
