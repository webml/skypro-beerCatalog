const beers = JSON.parse(beersData);

function beerEngineTemplate(beer) {
  return {
    tag: "div",
    cls: "card",
    content: [
      {
        tag: "img",
        cls: "card__img",
        attrs: {
          src: beer.image_url,
        },
      },
      {
        tag: "div",
        cls: "card__info",
        content: [
          {
            tag: "div",
            cls: "card__about",
            content: [
              {
                tag: "h3",
                cls: "card__name",
                content: beer.name,
              },
              {
                tag: "p",
                cls: "card__description",
                content: beer.description,
              },
            ],
          },
          {
            tag: "div",
            cls: "card__char",
            content: [
              {
                tag: "p",
                cls: "abv",
                content: `ABV: ${beer.abv}`,
              },
              {
                tag: "p",
                cls: "ibu",
                content: `IBU: ${beer.ibu}`,
              },
            ],
          },
        ],
      },
    ],
  };
}

content.appendChild(templateEngine(beers.map(beerEngineTemplate)));
