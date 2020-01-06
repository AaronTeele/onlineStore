class Product {
    constructor(title, img, desc, price){
        this.title = title;
        this.imgURL = img;
        this.description = desc;
        this.price = price;
    }
}

class ProductItem {
    constructor(product) {
        this.product = product;
    }

    render() {
        const prodEl = document.createElement('li');
        prodEl.className = 'product-item';
        prodEl.innerHTML = `
            <div>
                <img src="${this.product.imgURL}" alt="${this.product.title} />
                <div class="product-item__content">
                    <h2>${this.product.title}</h2>
                    <h3>\$${this.product.price}</h3>
                    <p>${this.product.description}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        `;
        return prodEl;
    }
}

class ProductList {
    products = [
        new Product(
            'A Pillow', 
            'https://www.slumbr.com/wp-oHvaVHKzJQfn/wp-content/uploads/2017/09/Why-should-I-upgrade-to-a-premium-pillow-932x666.jpg', 
            'The Most Comfortable Pillow EVER!',
            19.99
        ),
        new Product(
            'Cybertruck',
            'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjImO6Atu3mAhUDSK0KHSf8BWoQjRx6BAgBEAQ&url=%2Furl%3Fsa%3Di%26source%3Dimages%26cd%3D%26ved%3D2ahUKEwij1NXlte3mAhUEjq0KHclNCcUQjRx6BAgBEAQ%26url%3Dhttps%253A%252F%252Fwww.motortrend.com%252Fnews%252Fmuch-will-tesla-cybertruck-insurance-cost%252F%26psig%3DAOvVaw0873pBUBGpgHbEmGfH4BQ6%26ust%3D1578346681086460&psig=AOvVaw0873pBUBGpgHbEmGfH4BQ6&ust=1578346681086460',
            'Tesla\'s new futuristic looking truck',
            69,900 
        )
    ];

    render() {        
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
            const productItem = new ProductItem(prod);
            const prodEl = productItem.render()
            prodList.append(prodEl);
        }
        renderHook.append(prodList)
    } 
}