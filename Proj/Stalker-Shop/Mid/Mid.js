	
class products
	{
		
		render()
		{let htmlCatalog = '';
			CATALOG.forEach((id, name, price, img) => {
				htmlCatalog +="<li><span>${name}</span><img src=${img}><span>${price}</span><button>Buy</button><\li>";
							console.log(id, name, price ,img);		
							});
			const html = "<ul>${htmlCatalog}</ul>";
			ROOT_PRODUCTS.innerHTML = html;
		}
	}
	
const productPage = new products();
productPage.render();