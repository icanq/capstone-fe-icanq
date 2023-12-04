const API_URL = "http://localhost:3000";

document.addEventListener("DOMContentLoaded", async () => {
	if (window.location.pathname.includes("product.html")) {
		await fetchAllProducts();
	} else if (window.location.pathname.includes("catalog.html")) {
		await setupCatalogPage();
	}
});

// product api

const fetchAllProducts = async () => {
	try {
		// const response = await fetch(API_URL+"/products")
		const response = await fetch(`${API_URL}/products`);
		const products = await response.json();
		console.log(products);
		displayProducts(products);
	} catch (error) {
		console.error("Error:", error);
	}
};

const displayProducts = (products) => {
	const section = document.getElementById("product-list");
	products.forEach((product) => {
		const div = document.createElement("div");
		div.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: ${product.price} </p>
    `;
		section.appendChild(div);
	});
};

// catalog api

async function setupCatalogPage() {
	try {
		// 1. fetch catalogs, untuk mendapatkan list of catalog
		const response = await fetch(`${API_URL}/catalogs`);
		const catalogs = await response.json();

		// 2. menambahkan catalog dari api, masuk ke list of option
		const selector = document.getElementById("catalog-select");
		catalogs.forEach((ctlg) => {
			const anotherOption = document.createElement("option");
			anotherOption.value = ctlg.id;
			anotherOption.textContent = ctlg.name;
			selector.appendChild(anotherOption);
		});

		// 3. fetch product berdasarkan katalog yang dipilih dari option
		// 3.1 pilih catalognya
		document
			.getElementById("catalog-select")
			.addEventListener("change", async (event) => {
				console.log(event.target.value, "cek event ada apa aja");
				// 3.2 fetch si produknya
				const response = await fetch(
					`${API_URL}/products/${event.target.value}`
				);
				const productCatalogs = await response.json();

				// 3.3 display si product dari catalog yang dipilih di option
				const section = document.getElementById("product-catalog");
				productCatalogs.forEach((product) => {
					const div = document.createElement("div");
					div.innerHTML = `
            <h3>${product.name}</h3>
            <img src=${product.imageUrl} class="image-product"/>
            <p>Price: ${product.price} </p>
          `;
					section.appendChild(div);
				});
			});
	} catch (error) {
		console.error("Error:", error);
	}
}
