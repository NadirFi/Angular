class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("url-link");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("contet")
        
        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);
        
        const cardRight = document.createElement("div");
        cardLeft.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("foto") || "assets/foto-padrao.webp";
        newsImage.alt = "Foto da Noticia";
        newsImage.width = 320;
        newsImage.height = 205;

        cardRight.appendChild(newsImage);


        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
            .card {
                width: 100%;
                border: 1px solid gray;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            
            .card__left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 10px;
            }
            
            .card__left , a {
                margin-top: 15px;
                font-size: 25px;
            }
            
            .card__left , p {
                color: grey;
            }
            
            .card__left , span {
                font-weight: 400;
            }
        `;
        return style;
    }
}

customElements.define("card-news", CardNews);