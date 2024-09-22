// Ensure the DOM content is loaded before accessing elements
document.addEventListener('DOMContentLoaded', () => {
    const carts = document.querySelectorAll('.add-cart');
    
    let products = [{
        name:'Bạch trà trần bì lâu năm',
        tag:'Bạch trà trần bì lâu năm',
        price:1200000,
        inCart:0
    },
    {
        name:'Trà ô long Vũ Linh',
        tag:'Trà ô long Vũ Linh',
        price:1600000,
        inCart:0
    },
    {
        name:'Trà gạo sen',
        tag:'Trà gạo sen',
        price:3000000,
        inCart:0
    },
    {
        name:'Hồng trà Taiwan',
        tag:'Hồng trà Taiwan',
        price:1800000,
        inCart:0
    },
    {
        name:'Trà Phổ nhĩ sống Băng Đảo 2012',
        tag:'Trà Phổ nhĩ sống Băng Đảo 2012',
        price:68000000,
        inCart:0
    },
    {
        name:'Trà long tỉnh sư phong',
        tag:'Trà long tỉnh sư phong',
        price:25000000,
        inCart:0
    },
    {
        name:'Trà đông phương mỹ nhân',
        tag:'Trà đông phương mỹ nhân',
        price:480000,
        inCart:0
    },
    {
        name:'Trà đen lục bảo 2003',
        tag:'Trà đen lục bảo 2003',
        price:3000000,
        inCart:0
    },
    {
        name:'Trà thiên quý',
        tag:'Trà thiên quý',
        price:1100000,
        inCart:0
    },
    {
        name:'Bạch thiên trà',
        tag:'Bạch thiên trà',
        price:1600000,
        inCart:0
    },
    {
        name:'Trà liên hoa shan',
        tag:'Trà liên hoa shan',
        price:2700000,
        inCart:0
    },
    {
        name:'Lục thiên trà',
        tag:'Lục thiên trà',
        price:2200000,
        inCart:0
    },
    {
        name:'Hồng thiên trà',
        tag:'Hồng thiên trà',
        price:3900000,
        inCart:0
    },
    {
        name:'Kim hoa shan',
        tag:'Kim hoa shan',
        price:4100000,
        inCart:0
    },
    {
        name:'Hồng hoa shan',
        tag:'Hồng hoa shan',
        price:1700000,
        inCart:0
    },
    {
        name:'Búp măng shan',
        tag:'Búp măng shan',
        price:5900000,
        inCart:0
    },
    {
        name:'Trà gạo lứt đậu đen',
        tag:'Trà gạo lứt đậu đen',
        price:200000,
        inCart:0
    },
    {
        name:'Trà chanh mật ong kim quất',
        tag:'Trà chanh mật ong kim quất',
        price:300000,
        inCart:0
    },
    {
        name:'Trà thảo mộc ngũ an nhiên',
        tag:'Trà thảo mộc ngũ an nhiên',
        price:300000,
        inCart:0
    },
    {
        name:'Trà đường nâu cam quế',
        tag:'Trà đường nâu cam quế',
        price:170000,
        inCart:0
    },
    {
        name:'Trà thảo mộc cam quế',
        tag:'Trà thảo mộc cam quế',
        price:220000,
        inCart:0
    },
    {
        name:'Trà sâm bí đao',
        tag:'Trà sâm bí đao',
        price:250000,
        inCart:0
    },
    {
        name:'Trà đông trùng hạ thảo',
        tag:'Trà đông trùng hạ thảo',
        price:300000,
        inCart:0
    },
    {
        name:'Thảo mộc đường nâu',
        tag:'Thảo mộc đường nâu',
        price:350000,
        inCart:0
    },
    {
        name:'Ấm tử sa hoa mai',
        tag:'Ấm tử sa hoa mai',
        price:7200000,
        inCart:0
    },
    {
        name:'Ấm bạc hoa sen',
        tag:'Ấm bạc hoa sen',
        price:48890000,
        inCart:0
    },
    {
        name:'Ấm kiến diêu lông thỏ',
        tag:'Ấm kiến diêu lông thỏ',
        price:10200000,
        inCart:0
    },
    {
        name:'Ấm tử sa Tiếu anh',
        tag:'Ấm tử sa Tiếu anh',
        price:27200000,
        inCart:0
    },
    {
        name:'Ấm bạc pha tùng hạc',
        tag:'Ấm bạc pha tùng hạc',
        price:45200000,
        inCart:0
    },
    {
        name:'Ấm sứ nung củi dữ liên',
        tag:'Ấm sứ nung củi dữ liên',
        price:9200000,
        inCart:0
    },
    {
        name:'Ấm tử sa duyệt lộ',
        tag:'Ấm tử sa duyệt lộ',
        price:16900000,
        inCart:0
    },
    {
        name:'Ấm tử sa Dật Lâm',
        tag:'Ấm tử sa Dật Lâm',
        price:12300000,
        inCart:0
    },
    {
        name:'Bộ ấm trà tử sa cao cấp',
        tag:'Bộ ấm trà tử sa cao cấp',
        price:9200000,
        inCart:0
    },
    {
        name:'Bộ ấm trà tử sa',
        tag:'Bộ ấm trà tử sa',
        price:4000000,
        inCart:0
    }, {
        name:'Bộ trà kiến diêu diệp mạt',
        tag:'Bộ trà kiến diêu diệp mạt',
        price:12000000,
        inCart:0
    },
    {
        name:'Bộ trà khải kiến diêu diệp mạt',
        tag:'Bộ trà khải kiến diêu diệp mạt',
        price:17200000,
        inCart:0
    }, {
        name:'Bộ ấm trà Nhật Bản',
        tag:'Bộ ấm trà Nhật Bản',
        price:10200000,
        inCart:0
    },
    {
        name:'Bộ ấm trà ge Klin',
        tag:'Bộ ấm trà ge Klin',
        price:7100000,
        inCart:0
    }, {
        name:'Bộ trà kungfu celadon',
        tag:'Bộ trà kungfu celadon',
        price:9000000,
        inCart:0
    },
    {
        name:'Bộ trà sứ tráng men cá chép',
        tag:'Bộ trà sứ tráng men cá chép',
        price:6200000,
        inCart:0
    }, {
        name:'Chén lý kiến',
        tag:'Chén lý kiến',
        price:1600000,
        inCart:0
    },
    {
        name:'Chén kiến diêu giọt dầu',
        tag:'Chén kiến diêu giọt dầu',
        price:16200000,
        inCart:0
    }, {
        name:'Chén kiến diêu',
        tag:'Chén kiến diêu',
        price:2000000,
        inCart:0
    },
    {
        name:'Chén nhữ diêu',
        tag:'Chén nhữ diêu',
        price:2000000,
        inCart:0
    }, 
    {
        name:'Chén kiến diêu mem trà',
        tag:'Chén kiến diêu mem trà',
        price:4000000,
        inCart:0
    },
    {
        name:'Chén sứ Thanh Hoa',
        tag:'Chén sứ Thanh Hoa',
        price:30000000,
        inCart:0
    }, {
        name:'Chén tử sa tử nê',
        tag:'Chén tử sa tử nê',
        price:4000000,
        inCart:0
    },
    {
        name:'Chén chủ mai trang',
        tag:'Chén chủ mai trang',
        price:16000000,
        inCart:0
    },
    {
        name:'Khay thuyền trà gốm',
        tag:'Khay thuyền trà gốm',
        price:660000,
        inCart:0
    },
    {
        name:'Khay trà gỗ quế',
        tag:'Khay trà gỗ quế',
        price:540000,
        inCart:0
    },
    {
        name:'Khay trà tre 2 tầng',
        tag:'Khay trà tre 2 tầng',
        price:230000,
        inCart:0
    },
    {
        name:'Khay kê chén bán nguyệt',
        tag:'Khay kê chén bán nguyệt',
        price:1200000,
        inCart:0
    },
    {
        name:'Khay tử sa tròn khắc họa tiết',
        tag:'Khay tử sa tròn khắc họa tiết',
        price:800000,
        inCart:0
    },
    {
        name:'Khay tử sa tròn đỡ nước',
        tag:'Khay tử sa tròn đỡ nước',
        price:3100000,
        inCart:0
    },
    {
        name:'Khay tử sa trong',
        tag:'Khay tử sa trong',
        price:1200000,
        inCart:0
    },
    {
        name:'Khay trà gỗ óc chó',
        tag:'Khay trà gỗ óc chó',
        price:2200000,
        inCart:0
    },
    {
        name:'Bộ quà tặng trà ô long và hạt macca',
        tag:'Bộ quà tặng trà ô long và hạt macca',
        price:431000,
        inCart:0
    },
    {
        name:'Bộ quà tặng trà gừng và trà hoa hồng',
        tag:'Bộ quà tặng trà gừng và trà hoa hồng',
        price:340000,
        inCart:0
    },
    {
        name:'Bộ quà tặng ấm trà thủy tinh đối ẩm',
        tag:'Bộ quà tặng ấm trà thủy tinh đối ẩm',
        price:538000,
        inCart:0
    },
    {
        name:'Set quà tặng hộp trà thịnh vượng',
        tag:'Set quà tặng hộp trà thịnh vượng',
        price:990000,
        inCart:0
    },
    {
        name:'Bộ trà cà phê, trà sả chanh và trà bạc hà',
        tag:'Bộ trà cà phê, trà sả chanh và trà bạc hà',
        price:538000,
        inCart:0
    },
    {
        name:'Bộ trà hoa oải hương, trà hoa hồng',
        tag:'Bộ trà hoa oải hương, trà hoa hồng',
        price:469000,
        inCart:0
    },
    {
        name:'Bộ trà cổ thụ, hạt sen và hạt điều',
        tag:'Bộ trà cổ thụ, hạt sen và hạt điều',
        price:764000,
        inCart:0
    },
    ];

    carts.forEach((cart, index) => {// thêm vào giỏ hàng
        cart.addEventListener('click', () => {
            cartNumbers(products[index]);
            totalCost(products[index]);
        });
    });
    
    function onLoadCartNumbers() {
        let productNumbers = localStorage.getItem('cartNumbers');
        if (productNumbers) {
            document.querySelector('.cart span').textContent = productNumbers;
        }
    }

    function cartNumbers(product) {//cập nhật số lượng ở giỏ hàng
        let productNumbers = localStorage.getItem('cartNumbers');
        productNumbers = parseInt(productNumbers) || 0;
        
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;

        setItems(product);
        updateCartIcon();
    }

    function setItems(product) { // lưu vào localstorage
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = cartItems ? JSON.parse(cartItems) : {};

        if (!cartItems[product.tag]) {
            product.inCart = 1;
            cartItems[product.tag] = product;
        } else {
            cartItems[product.tag].inCart += 1;
        }

        localStorage.setItem('productsInCart', JSON.stringify(cartItems));
    }

    function totalCost(product) { // tổng chi phí
        let cartCost = localStorage.getItem('totalCost');
        cartCost = cartCost ? parseInt(cartCost) : 0;
        
        localStorage.setItem('totalCost', cartCost + product.price);
    }

    function displayCart() { //hiển yhij sản phẩm trên giỏ hàng
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = cartItems ? JSON.parse(cartItems) : {};
        
        let cartContainer = document.getElementById('listCart');
        let totalCostElement = document.getElementById('spTong');
        
        if (cartContainer && totalCostElement) {
            cartContainer.innerHTML = '';
            let totalCost = 0;

            Object.values(cartItems).forEach(item => {
                cartContainer.innerHTML += `
                    <tr class="cart-item">
                        <td><img src="/images/${item.name}.jpg" alt="${item.name}" width="70px"></td>
                        <td>${item.name}</td>
                        <td>${item.price}</td>
                        <td>
                            <button class="decrease" data-tag="${item.tag}">-</button>
                            ${item.inCart}
                            <button class="increase" data-tag="${item.tag}">+</button>
                        </td>
                        <td>${item.price * item.inCart} VND</td>
                        <td><button class="remove" data-tag="${item.tag}">Xóa</button></td>
                    </tr>
                `;
                totalCost += item.price * item.inCart;
            });

            cartContainer.innerHTML += `
                <tr class="cart-total">
                    <td colspan="3"><strong>Total:</strong></td>
                    <td>${totalCost} VND</td>
                </tr>
            `;

            totalCostElement.textContent = `${totalCost} VND`;
        }
    }

    function updateCartIcon() {// cập nhật biểu tượng giỏ hàng
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = cartItems ? JSON.parse(cartItems) : {};
        
        let totalItems = 0;
        Object.values(cartItems).forEach(item => {
            totalItems += item.inCart;
        });

        document.querySelector('.cart span').textContent = totalItems;
    }

    onLoadCartNumbers();
    displayCart();
    updateCartIcon();

    function updateQuantity(tag, action) { // update só lượng tăng giảm
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = cartItems ? JSON.parse(cartItems) : {};

        if (cartItems[tag]) {
            if (action === 'increase') {
                cartItems[tag].inCart += 1;
            } else if (action === 'decrease') {
                if (cartItems[tag].inCart > 1) {
                    cartItems[tag].inCart -= 1;
                } else {
                    delete cartItems[tag];
                }
            }

            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            displayCart();
            updateCartIcon();
        }
    }

    function removeItem(tag) { // hàm xóa
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = cartItems ? JSON.parse(cartItems) : {};

        if (cartItems[tag]) {
            delete cartItems[tag];
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            displayCart();
            updateCartIcon();
        }
    }

    document.getElementById('listCart').addEventListener('click', (event) => { // sự kiện click
        if (event.target.classList.contains('increase')) {
            let tag = event.target.dataset.tag;
            updateQuantity(tag, 'increase');
        } else if (event.target.classList.contains('decrease')) {
            let tag = event.target.dataset.tag;
            updateQuantity(tag, 'decrease');
        } else if (event.target.classList.contains('remove')) {
            let tag = event.target.dataset.tag;
            removeItem(tag);
        }
    });
});
