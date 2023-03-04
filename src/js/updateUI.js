const cards = document.querySelector(".cards");

export const createCountries = (countries) => {
  cards.innerHTML = "";
  countries.forEach((country) => {
    // console.log(country);
    const { flags, name, population, region, capital } = country;
    cards.innerHTML += `
  <li
            class="cards__item rounded-[5px] overflow-hidden bg-[#ffffff] shadow-[0_0px_7px_2px_rgba(0,0,0,0.027)] transition-[all 0.3s ease-in] dark:bg-[#2B3844]"
          >
            <a href="./about.html?country=/name/${name.common}">
              <img
                class="w-full h-[170px] object-cover"
                src=${flags.svg}
                alt=${flags.alt}
                width="267"
                height="160"
              />
              <div
                class="cards__item-inner pt-[2.4rem] pr-[1rem] pb-[4.5rem] pl-[2.4rem]"
              >
                <h3 class="cards__title mb-[0.8rem] font-extrabold">${
                  name.common
                }</h3>
                <p class="population mb-[0.8rem]">
                  Population: <span class="font-light">${population}</span>
                </p>
                <p class="region mb-[0.8rem]">
                  Region: <span class="font-light">${region}</span>
                </p>
                <p class="capital">
                  Capital: <span class="font-light">${
                    capital ? capital : "No capital"
                  }</span>
                </p>
              </div>
            </a>
          </li>
  `;
  });
};

// about UI
const countryInfoEl = document.querySelector(".country-info");
export const creatCountryInfo = (country) => {
  const {
    population,
    flags,
    borders,
    capital,
    name,
    region,
    tld,
    currencies,
    languages,
    subregion,
  } = country;

  const nativeName = Object.values(name.nativeName)[0].official;
  const currency = Object.values(currencies)[0].name;
  const language = Object.values(languages);

  countryInfoEl.innerHTML = `
  <img
            class="country-info__img w-[560px] h-[400px] rounded-[10px] block object-cover object-center mr-[2rem] max-[1200px]:mr-0 max-[1200px]:mb-[5rem] max-[576px]:w-full max-[576px]:h-auto max-[450px]:mb-[4rem]"
            src=${flags.svg}
            alt=${flags.alt}
            width="560"
            height="400"
          />
          <div
            class="country-info__content w-full max-w-[598px] max-[1200px]:mb-[5rem]"
          >
            <h2
              class="text-[3.2rem] leading-[1.36] font-bold mb-[2.3rem] max-[450px]:mb-[1.6rem]"
            >
            ${name.common}
            </h2>
            <ul
              class="country-info__list flex items-start justify-between mb-[6.5rem] max-[450px]:flex-col max-[450px]:mb-[3rem]"
            >
              <li class="country-info__item max-[450px]:mb-[3rem]">
                <p class="name mb-[0.8rem] font-semibold">
                  Native Name:
                  <span class="font-light">${nativeName}</span>
                </p>
                <p class="population mb-[0.8rem] font-semibold">
                  Population:
                  <span class="font-light">${population}</span>
                </p>
                <p class="region mb-[0.8rem] font-semibold">
                  Region:
                  <span class="font-light">${region}</span>
                </p>
                <p class="sub-region mb-[0.8rem] font-semibold">
                  Sub Region:
                  <span class="font-light">${subregion}</span>
                </p>
                <p class="capital font-semibold">
                  Capital:
                  <span class="font-light">${capital}</span>
                </p>
              </li>
              <li class="country-info__item">
                <p class="name mb-[0.8rem] font-semibold">
                  Top Level Domain:
                  <span class="font-light">${tld}</span>
                </p>
                <p class="population mb-[0.8rem] font-semibold">
                  Currencies:
                  <span class="font-light">${currency}</span>
                </p>
                <p class="region font-semibold">
                  Languages:
                  <span class="font-light">${language}</span>
                </p>
              </li>
            </ul>

            <div
              class="country-info__borders flex items-center flex-wrap gap-[1rem]"
            >
              <h3 class="font-semibold mr-[0.5rem]">Border Countries:</h3>
              ${
                borders
                  ? borders.map((border) => {
                      return `
                      <a
                      class="min-w-[96px] py-[0.5rem] px-[1rem] inline-flex justify-center shadow-[0_0_4px_1px_rgba(0,0,0,0.104931)] font-light text-[1.4rem] leading-[1.4]"
                      href="./about.html?country=/alpha/${border}"
                      >${border}</a
                    >
                `;
                    })
                  : "No Borders"
              }
            </div>
          </div>
        </div>
  `;
};
