const translations = {
  vi: {
    home: {
      title: "Chào mừng đến với Thương Mại Điện Tử Đa Quốc Gia!",
      desc: `Dự án hỗ trợ đa ngôn ngữ, AI phân tích sản phẩm, quản lý shop cá nhân, thanh toán linh hoạt và nhiều tính năng hiện đại.`
    },
    shop: {
      title: "Trang cá nhân Shop",
      desc: "Xem thông tin shop, sản phẩm, đánh giá và chia sẻ mạng xã hội."
    },
    register: {
      title: "Đăng ký mở Shop",
      desc: "Tạo tài khoản, đăng ký shop, chờ duyệt và quản lý cửa hàng riêng."
    },
    products: {
      title: "Quản lý Sản phẩm",
      desc: "Thêm, sửa, xoá sản phẩm, mô tả đa ngôn ngữ, chỉnh sửa ảnh bằng AI."
    },
    cart: {
      title: "Giỏ hàng & Thanh toán",
      desc: "Hỗ trợ nhiều phương thức thanh toán, theo dõi đơn hàng, giao hàng."
    },
    ai: {
      title: "Phân tích sản phẩm bằng AI",
      desc: "AI tạo mô tả, gợi ý từ khoá SEO, phân tích ảnh, chấm điểm sản phẩm."
    },
    statistic: {
      title: "Thống kê tổng quan",
      desc: "Xem tổng số đơn, sản phẩm đã bán, thu nhập, khách hàng và sản phẩm bán chạy."
    },
    fbpost: {
      title: "Đăng bài Facebook tự động",
      desc: "Tạo nội dung quảng bá sản phẩm và hướng dẫn đăng Facebook."
    }
  },
  en: {
    home: {
      title: "Welcome to the Multi-National E-Commerce Platform!",
      desc: `The project supports multi-language, AI product analysis, personal shop management, flexible payment, and more modern features.`
    },
    shop: {
      title: "Personal Shop Page",
      desc: "View shop info, products, ratings, and social sharing."
    },
    register: {
      title: "Register a Shop",
      desc: "Create an account, register a shop, wait for approval, and manage your store."
    },
    products: {
      title: "Product Management",
      desc: "Add, edit, delete products, multilingual descriptions, AI image editing."
    },
    cart: {
      title: "Cart & Payment",
      desc: "Support multiple payment methods, order tracking, delivery."
    },
    ai: {
      title: "AI Product Analysis",
      desc: "AI generates descriptions, SEO keyword suggestions, image analysis, product scoring."
    },
    statistic: {
      title: "Statistics Overview",
      desc: "View total orders, sold products, income, customers, and best-selling products."
    },
    fbpost: {
      title: "Auto Facebook Post",
      desc: "Generate product promotion content and Facebook posting guide."
    }
  },
  lo: {
    home: {
      title: "ຍິນດີຕ້ອນຮັບສູ່ແພລດຟອມພານິດອິນເຕີເນັດຫຼາຍຊາດ!",
      desc: `ໂຄງການຮອງຮັບຫຼາຍພາສາ, AI ວິເຄາະສິນຄ້າ, ບໍລິຫານຮ້ານສ່ວນຕົວ, ການຈ່າຍເງິນຫຼາຍຮູບແບບ ແລະອື່ນໆ.`
    },
    shop: {
      title: "ໜ້າຮ້ານສ່ວນຕົວ",
      desc: "ເບິ່ງຂໍ້ມູນຮ້ານ, ສິນຄ້າ, ການປະເມີນ, ແລະການແບ່ງປັນສື່ສັງຄົມ."
    },
    register: {
      title: "ລົງທະບຽນເປີດຮ້ານ",
      desc: "ສ້າງບັນຊີ, ລົງທະບຽນຮ້ານ, ລໍຖ້າອະນຸມັດ, ແລະບໍລິຫານຮ້ານ."
    },
    products: {
      title: "ການຈັດການສິນຄ້າ",
      desc: "ເພີ່ມ, ແກ້ໄຂ, ລຶບສິນຄ້າ, ຄຳອະທິບາຍຫຼາຍພາສາ, ແກ້ໄຂຮູບພາບ AI."
    },
    cart: {
      title: "ກະຕ່າ & ການຈ່າຍເງິນ",
      desc: "ຮອງຮັບວິທີຈ່າຍເງິນຫຼາຍຮູບແບບ, ຕິດຕາມຄຳສັ່ງ, ການຈັດສົ່ງ."
    },
    ai: {
      title: "AI ວິເຄາະສິນຄ້າ",
      desc: "AI ສ້າງຄຳອະທິບາຍ, ແນະນຳຄຳສຳຄັນ SEO, ວິເຄາະຮູບ, ປະເມີນສິນຄ້າ."
    },
    statistic: {
      title: "ສະຖິຕິພາບລວມ",
      desc: "ເບິ່ງຈຳນວນຄຳສັ່ງ, ສິນຄ້າທີ່ຂາຍໄດ້, ລາຍຮັບ, ລູກຄ້າ ແລະສິນຄ້າຂາຍດີ."
    },
    fbpost: {
      title: "ໂພສຕ໌ເຟສບຸກອັດຕະໂນມັດ",
      desc: "ສ້າງເນື້ອຫາໂຄສະນາສິນຄ້າ ແລະ ແນະນຳການໂພສຕ໌ເຟສບຸກ."
    }
  }
};

let demoCategories = [
  { name: "Thời trang", count: 2 },
  { name: "Giày dép", count: 1 },
  { name: "Phụ kiện", count: 0 }
];
let demoProducts = [
  {
    name: "Áo thun nam basic",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    price: 199000,
    status: "Đang bán",
    category: "Thời trang",
    desc: "Áo thun cotton thoáng mát, form trẻ trung, dễ phối đồ, phù hợp mọi hoạt động."
  },
  {
    name: "Quần jeans nữ",
    img: "https://images.unsplash.com/photo-1516762689617-f5e6b9cfd2c1?auto=format&fit=crop&w=400&q=80",
    price: 299000,
    status: "Hết hàng",
    category: "Thời trang",
    desc: "Quần jeans nữ co giãn, tôn dáng, chất vải bền đẹp, phù hợp mọi phong cách."
  },
  {
    name: "Giày sneaker trắng",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80",
    price: 499000,
    status: "Đang bán",
    category: "Giày dép",
    desc: "Sneaker trắng trẻ trung, nhẹ, không thấm nước, dễ phối đồ, hot trend năm nay."
  }
];

// Thêm dữ liệu đơn hàng mẫu
const demoOrders = [
  {
    id: 1,
    customer: 'Nguyễn Văn A',
    items: [0, 2], // index sản phẩm
    total: 199000 + 499000,
    status: 'Đã thanh toán',
    date: '2024-06-01'
  },
  {
    id: 2,
    customer: 'Trần Thị B',
    items: [1],
    total: 299000,
    status: 'Chờ thanh toán',
    date: '2024-06-02'
  }
];

let cart = [];

let currentLang = localStorage.getItem('lang') || navigator.language.slice(0,2) || 'vi';
if (!['vi','en','lo'].includes(currentLang)) currentLang = 'vi';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  renderPage(currentPage);
}

let currentPage = 'home';

function navigate(page) {
  currentPage = page;
  renderPage(page);
}

function renderPage(page) {
  const t = translations[currentLang][page];
  let html = `<h2>${t.title}</h2><p>${t.desc}</p>`;
  if(page === 'shop') {
    html += `<div class="shop-banner" style="background:url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80') center/cover;height:180px;border-radius:8px;"></div>
      <div class="shop-profile">
        <div class="shop-avatar"><img src="https://i.imgur.com/0y0y0y0.png" alt="Shop Avatar"></div>
        <div><h3>ABC Shop</h3><p>⭐⭐⭐⭐⭐ (4.9/5)</p></div>
      </div>
      <div class="shop-products" style="display:flex;gap:20px;margin:30px 0;flex-wrap:wrap;">`;
    demoProducts.forEach((p, idx) => {
      html += `<div class='product-card' onclick='showProductDetail(${idx})' style='cursor:pointer;'>
        <img src='${p.img}' alt='${p.name}'>
        <h4>${p.name}</h4>
        <div class='price'>${p.price.toLocaleString()}₫</div>
        <div class='status${p.status !== "Đang bán" ? " soldout" : ""}'>${p.status}</div>
        <button onclick='event.stopPropagation();addToCart(${idx})' ${p.status!=="Đang bán"?"disabled":''}>Mua ngay</button>
      </div>`;
    });
    html += `</div>`;
  }
  if(page === 'register') {
    html += `<form class="shop-register-form">
      <label>Tên Shop <input type="text" placeholder="Nhập tên shop"></label><br>
      <label>Mô tả <textarea placeholder="Mô tả shop"></textarea></label><br>
      <label>Logo <input type="file"></label><br>
      <label>Loại hàng hóa <input type="text" placeholder="Ví dụ: Thời trang, Điện tử..."></label><br>
      <button type="submit">Đăng ký</button>
    </form>`;
  }
  if(page === 'products') {
    let tab = window.productTab || 'category';
    html += `<div style='display:flex;gap:12px;margin-bottom:18px;'>
      <button class='product-tab-btn' onclick='switchProductTab("category")' ${tab==='category'?'style="background:#00fff7;color:#18122B;"':''}>Danh mục sản phẩm</button>
      <button class='product-tab-btn' onclick='switchProductTab("product")' ${tab==='product'?'style="background:#00fff7;color:#18122B;"':''}>Sản phẩm</button>
    </div>`;
    if(tab==='category') {
      html += `<form onsubmit='addCategory(event)' style='margin-bottom:14px;display:flex;gap:8px;align-items:center;'><input id='catName' type='text' placeholder='Tên danh mục mới' style='padding:7px 12px;border-radius:6px;border:2px solid #ff00cc;font-size:1rem;'><button type='submit' style='background:#00fff7;color:#18122B;font-weight:700;border:none;padding:7px 18px;border-radius:6px;cursor:pointer;'>+ Thêm danh mục</button></form>`;
      html += `<table style='width:100%;border-collapse:collapse;margin-top:10px;'>
        <thead><tr style='background:#e3eafc;'><th>Tên danh mục</th><th>Số sản phẩm</th><th>Hành động</th></tr></thead><tbody>`;
      demoCategories.forEach((c, idx) => {
        html += `<tr style='border-bottom:1px solid #eee;'>
          <td>${window.editCatIdx===idx?`<input id='editCatInput' value='${c.name}' style='padding:4px 8px;border-radius:4px;border:1.5px solid #00fff7;font-size:1rem;'>`:c.name}</td>
          <td>${c.count}</td>
          <td>
            ${window.editCatIdx===idx?`<button onclick='saveEditCat(${idx})' style='background:#00fff7;color:#18122B;border:none;padding:4px 10px;border-radius:3px;cursor:pointer;'>Lưu</button> <button onclick='cancelEditCat()' style='background:#e53935;color:#fff;border:none;padding:4px 10px;border-radius:3px;cursor:pointer;'>Huỷ</button>`:
            `<button onclick='editCat(${idx})' style='background:#ffb300;color:#fff;border:none;padding:4px 10px;border-radius:3px;cursor:pointer;'>Sửa</button> <button onclick='deleteCat(${idx})' style='background:#e53935;color:#fff;border:none;padding:4px 10px;border-radius:3px;cursor:pointer;'>Xoá</button>`}
          </td>
        </tr>`;
      });
      html += `</tbody></table>`;
    } else {
      html += `<form onsubmit='addProduct(event)' style='margin-bottom:14px;display:flex;gap:8px;flex-wrap:wrap;align-items:center;'><input id='prodName' type='text' placeholder='Tên sản phẩm' style='padding:7px 12px;border-radius:6px;border:2px solid #ff00cc;font-size:1rem;'><input id='prodImg' type='text' placeholder='Link ảnh' style='padding:7px 12px;border-radius:6px;border:2px solid #ff00cc;font-size:1rem;width:180px;'><input id='prodPrice' type='number' placeholder='Giá' style='padding:7px 12px;border-radius:6px;border:2px solid #ff00cc;font-size:1rem;width:100px;'><select id='prodCat' style='padding:7px 12px;border-radius:6px;border:2px solid #ff00cc;font-size:1rem;'><option value=''>Chọn danh mục</option>${demoCategories.map(c=>`<option value='${c.name}'>${c.name}</option>`)}</select><select id='prodStatus' style='padding:7px 12px;border-radius:6px;border:2px solid #ff00cc;font-size:1rem;'><option>Đang bán</option><option>Hết hàng</option></select><button type='submit' style='background:#00fff7;color:#18122B;font-weight:700;border:none;padding:7px 18px;border-radius:6px;cursor:pointer;'>+ Thêm sản phẩm</button></form>`;
      html += `<table style='width:100%;border-collapse:collapse;margin-top:10px;'>
        <thead><tr style='background:#e3eafc;'><th>Ảnh</th><th>Tên sản phẩm</th><th>Giá</th><th>Danh mục</th><th>Trạng thái</th><th>Hành động</th></tr></thead><tbody>`;
        demoProducts.forEach((p, idx) => {
          html += `<tr style='border-bottom:1px solid #eee;'>
            <td><img src='${p.img}' alt='' style='width:60px;height:40px;object-fit:cover;border-radius:4px;'></td>
            <td>${window.editProdIdx===idx?`<input id='editProdName' value='${p.name}' style='padding:4px 8px;border-radius:4px;border:1.5px solid #00fff7;font-size:1rem;width:120px;'>`:p.name}</td>
            <td>${window.editProdIdx===idx?`<input id='editProdPrice' type='number' value='${p.price}' style='padding:4px 8px;border-radius:4px;border:1.5px solid #00fff7;font-size:1rem;width:80px;'>`:p.price.toLocaleString()+"₫"}</td>
            <td>${window.editProdIdx===idx?`<select id='editProdCat' style='padding:4px 8px;border-radius:4px;border:1.5px solid #00fff7;font-size:1rem;'>${demoCategories.map(c=>`<option value='${c.name}' ${c.name===p.category?'selected':''}>${c.name}</option>`)}</select>`:p.category||''}</td>
            <td>${window.editProdIdx===idx?`<select id='editProdStatus' style='padding:4px 8px;border-radius:4px;border:1.5px solid #00fff7;font-size:1rem;'><option ${p.status==='Đang bán'?'selected':''}>Đang bán</option><option ${p.status==='Hết hàng'?'selected':''}>Hết hàng</option></select>`:p.status}</td>
            <td>
              ${window.editProdIdx===idx?`<button onclick='saveEditProd(${idx})' style='background:#00fff7;color:#18122B;border:none;padding:4px 10px;border-radius:3px;cursor:pointer;'>Lưu</button> <button onclick='cancelEditProd()' style='background:#e53935;color:#fff;border:none;padding:4px 10px;border-radius:3px;cursor:pointer;'>Huỷ</button>`:
              `<button onclick='editProd(${idx})' style='background:#ffb300;color:#fff;border:none;padding:4px 10px;border-radius:3px;cursor:pointer;'>Sửa</button> <button onclick='deleteProd(${idx})' style='background:#e53935;color:#fff;border:none;padding:4px 10px;border-radius:3px;cursor:pointer;'>Xoá</button>`}
            </td>
          </tr>`;
        });
        html += `</tbody></table>`;
    }
  }
  if(page === 'cart') {
    if(demoOrders.length === 0) {
      html += `<div class='cart-demo'><p>Không có đơn hàng nào.</p></div>`;
    } else {
      html += `<table class='order-table'>
        <thead><tr><th>Mã đơn</th><th>Khách hàng</th><th>Sản phẩm</th><th>Tổng tiền</th><th>Trạng thái</th><th>Ngày</th></tr></thead><tbody>`;
      demoOrders.forEach(order => {
        let statusClass = order.status === 'Đã thanh toán' ? 'status-paid' : (order.status === 'Chờ thanh toán' ? 'status-pending' : 'status-cancel');
        let statusIcon = order.status === 'Đã thanh toán' ? '✔️' : (order.status === 'Chờ thanh toán' ? '⏳' : '❌');
        html += `<tr onclick='showOrderDetail(${order.id})'>
          <td>#${order.id}</td>
          <td>${order.customer}</td>
          <td>${order.items.map(i=>demoProducts[i].name).join(', ')}</td>
          <td>${order.total.toLocaleString()}₫</td>
          <td class='${statusClass}'>${statusIcon} ${order.status}</td>
          <td>${order.date}</td>
        </tr>`;
      });
      html += `</tbody></table>`;
      html += `<button class='checkout-btn' onclick='showCheckoutPopup()'>Thanh toán</button>`;
    }
  }
  if(page === 'ai') {
    html += `<div class='ai-analyze-box' style='margin-top:24px;'>
      <h3 style='font-family:Orbitron,Arial,sans-serif;font-size:1.3rem;color:#00fff7;text-shadow:0 0 8px #ff00cc;'>Chọn chức năng AI nổi bật</h3>
      <div style='display:flex;gap:14px;flex-wrap:wrap;margin-bottom:18px;'>
        <button class='ai-btn' onclick='renderAIResult("chatbot")'>🛍️ Tư vấn mua hàng thông minh</button>
        <button class='ai-btn' onclick='renderAIResult("search")'>🧠 Tìm kiếm sản phẩm tự nhiên</button>
        <button class='ai-btn' onclick='renderAIResult("personalize")'>🎯 Cá nhân hóa trải nghiệm</button>
        <button class='ai-btn' onclick='renderAIResult("content")'>📝 Tạo nội dung tự động</button>
        <button class='ai-btn' onclick='renderAIResult("vision")'>📸 Xử lý hình ảnh</button>
        <button class='ai-btn' onclick='renderAIResult("translate")'>💬 Dịch tự động & đa ngôn ngữ</button>
        <button class='ai-btn' onclick='renderAIResult("operation")'>📦 Tối ưu vận hành & quản lý</button>
      </div>
      <div id='ai-result-box'></div>
    </div>`;
  }
  if(page === 'statistic') {
    const totalOrders = demoOrders.length;
    const soldProducts = demoOrders.reduce((sum, o) => sum + o.items.length, 0);
    const totalIncome = demoOrders.filter(o=>o.status==="Đã thanh toán").reduce((sum,o)=>sum+o.total,0);
    const customers = [...new Set(demoOrders.map(o=>o.customer))];
    const productCount = {};
    demoOrders.forEach(o=>o.items.forEach(i=>{productCount[i]=(productCount[i]||0)+1}));
    const bestSellers = Object.entries(productCount).sort((a,b)=>b[1]-a[1]).slice(0,3);
    html += `
    <div class='statistic-box'>
      <div class='statistic-item'><span class='icon'>📦</span><div><div class='value'>${totalOrders}</div><div class='label'>Tổng số đơn</div></div></div>
      <div class='statistic-item'><span class='icon'>💰</span><div><div class='value'>${totalIncome.toLocaleString()}₫</div><div class='label'>Tổng doanh thu</div></div></div>
      <div class='statistic-item'><span class='icon'>🛒</span><div><div class='value'>${soldProducts}</div><div class='label'>Sản phẩm đã bán</div></div></div>
    </div>
    <div class='statistic-box' style='flex-direction:column;gap:18px;'>
      <div><h3 style='margin-bottom:10px;'>Thống kê người dùng</h3><div class='customer-list'>`;
    customers.forEach(c => {
      html += `<div class='customer-card'><span class='icon'>👤</span><b>${c}</b></div>`;
    });
    html += `</div></div>
      <div><h3 style='margin-bottom:10px;margin-top:18px;'>Thống kê sản phẩm bán chạy</h3><div class='bestseller-list'>`;
    bestSellers.forEach(([i,c]) => {
      html += `<div class='bestseller-card'><span class='icon'>🔥</span><b>${demoProducts[i].name}</b><span>Đã bán: ${c}</span></div>`;
    });
    html += `</div></div>
    </div>`;
  }
  if(page === 'fbpost') {
    html += `<div class='gemini-content-box'>
      <h3 style='font-family:Orbitron,Arial,sans-serif;font-size:1.3rem;color:#00fff7;text-shadow:0 0 8px #ff00cc;'>🧠 Gợi ý nội dung tự động từ Gemini</h3>
      <form id='gemini-form' style='margin:18px 0 12px 0;display:flex;flex-wrap:wrap;gap:14px;align-items:flex-end;'>
        <div style='flex:1 1 220px;min-width:180px;'><label>Tên sản phẩm<br><input id='gsp-name' type='text' placeholder='Áo thun nữ siêu mềm' style='padding:8px 14px;border-radius:7px;border:2px solid #ff00cc;font-size:1rem;width:100%;'></label></div>
        <div style='flex:1 1 220px;min-width:180px;'><label>Mô tả nổi bật<br><input id='gsp-desc' type='text' placeholder='Vải mịn, co giãn, trendy...' style='padding:8px 14px;border-radius:7px;border:2px solid #ff00cc;font-size:1rem;width:100%;'></label></div>
        <div style='flex:1 1 120px;min-width:100px;'><label>Giá<br><input id='gsp-price' type='text' placeholder='199.000đ' style='padding:8px 14px;border-radius:7px;border:2px solid #ff00cc;font-size:1rem;width:100%;'></label></div>
        <div style='flex:1 1 220px;min-width:180px;'><label>Link ảnh sản phẩm<br><input id='gsp-img' type='text' placeholder='https://...' style='padding:8px 14px;border-radius:7px;border:2px solid #ff00cc;font-size:1rem;width:100%;'></label></div>
        <div style='flex:1 1 220px;min-width:180px;'><label>Link sản phẩm<br><input id='gsp-link' type='text' placeholder='https://...' style='padding:8px 14px;border-radius:7px;border:2px solid #ff00cc;font-size:1rem;width:100%;'></label></div>
        <div style='flex:1 1 220px;min-width:180px;'><label>Nơi đăng<br>
          <select id='gsp-place' style='padding:8px 14px;border-radius:7px;border:2px solid #ff00cc;font-size:1rem;width:100%;' onchange='toggleGroupInput()'>
            <option value='personal'>Tài khoản cá nhân</option>
            <option value='fanpage'>Fanpage</option>
            <option value='group'>Nhóm Facebook</option>
            <option value='multi-group'>Nhiều nhóm</option>
          </select>
        </label></div>
        <div id='group-input-box' style='display:none;flex:1 1 220px;min-width:180px;'><label>Nhập ID nhóm (cách nhau dấu phẩy)<br><input id='gsp-groups' type='text' placeholder='group1,group2,...' style='padding:8px 14px;border-radius:7px;border:2px solid #ff00cc;font-size:1rem;width:100%;'></label></div>
        <div style='flex:1 1 180px;min-width:140px;'><label>Chế độ đăng<br>
          <select id='gsp-mode' style='padding:8px 14px;border-radius:7px;border:2px solid #ff00cc;font-size:1rem;width:100%;' onchange='toggleScheduleInput()'>
            <option value='now'>Đăng ngay</option>
            <option value='schedule'>Lên lịch</option>
          </select>
        </label></div>
        <div id='schedule-input-box' style='display:none;flex:1 1 220px;min-width:180px;'><label>Ngày giờ đăng<br><input id='gsp-datetime' type='datetime-local' style='padding:8px 14px;border-radius:7px;border:2px solid #ff00cc;font-size:1rem;width:100%;'></label><br><label>Lặp lại định kỳ<br><select id='gsp-repeat' style='padding:8px 14px;border-radius:7px;border:2px solid #ff00cc;font-size:1rem;width:100%;'><option value='none'>Không lặp</option><option value='daily'>Hàng ngày</option><option value='weekly'>Hàng tuần</option></select></label></div>
        <button type='submit' style='background:#00fff7;color:#18122B;font-weight:700;border:none;padding:10px 28px;border-radius:8px;cursor:pointer;font-size:1.1rem;flex:1 1 100px;min-width:120px;'>Tạo nội dung</button>
      </form>
      <div id='gemini-output-box'></div>
      <div class='fb-guide' style='margin-top:24px;background:#18122B;padding:16px 18px;border-radius:10px;color:#ffe53b;'>
        <b>Hướng dẫn đăng Facebook:</b> <br>
        1. Nhấn <b>Sao chép</b> hoặc <b>Đăng tự động</b> nội dung gợi ý bên dưới.<br>
        2. Nếu đăng tự động, bạn cần xác thực Facebook và cấp quyền.<br>
        3. Có thể chọn đăng lên nhiều nhóm, fanpage, lên lịch định kỳ.<br>
        <span style='color:#00fff7;font-size:0.98em;'>* Để tự động đăng cần token Fanpage, quyền pages_manage_posts, xác thực OAuth.</span>
      </div>
    </div>`;
  }
  document.getElementById('main-content').innerHTML = html;
}

function addToCart(idx) {
  cart.push(idx);
  currentPage = 'cart';
  renderPage('cart');
}

// Hàm xem chi tiết đơn hàng
function showOrderDetail(orderId) {
  const order = demoOrders.find(o=>o.id===orderId);
  if(!order) return;
  let html = `<div class='order-detail'><h2>Chi tiết đơn hàng #${order.id}</h2>`;
  html += `<div><b>Khách hàng:</b> ${order.customer}</div>`;
  html += `<div><b>Ngày đặt:</b> ${order.date}</div>`;
  html += `<div><b>Trạng thái:</b> ${order.status === 'Đã thanh toán' ? '✔️' : (order.status === 'Chờ thanh toán' ? '⏳' : '❌')} <span class='${order.status === 'Đã thanh toán' ? 'status-paid' : (order.status === 'Chờ thanh toán' ? 'status-pending' : 'status-cancel')}'>${order.status}</span></div>`;
  html += `<div><b>Tổng tiền:</b> ${order.total.toLocaleString()}₫</div>`;
  html += `<div><b>Sản phẩm:</b><ul>`;
  order.items.forEach(i=>{
    const p = demoProducts[i];
    html += `<li>${p.name} - ${p.price.toLocaleString()}₫</li>`;
  });
  html += `</ul></div>`;
  html += `<button onclick="navigate('cart')">Quay lại danh sách đơn</button></div>`;
  document.getElementById('main-content').innerHTML = html;
}

// Khởi tạo trang đầu tiên
document.addEventListener('DOMContentLoaded', () => {
  renderPage(currentPage);
  const fbBtn = document.getElementById('fb-post-btn');
  if(fbBtn) fbBtn.onclick = function(e) {
    e.preventDefault();
    navigate('fbpost');
  };
  const chatBtn = document.getElementById('chatbot-btn');
  if(chatBtn) chatBtn.onclick = function() {
    showChatbotPopup();
  };
  document.body.addEventListener('submit', function(e) {
    if(e.target && e.target.id==='gemini-form') {
      e.preventDefault();
      const name = document.getElementById('gsp-name').value.trim()||'Áo thun nữ siêu mềm';
      const desc = document.getElementById('gsp-desc').value.trim()||'Vải mịn, co giãn, trendy';
      const price = document.getElementById('gsp-price').value.trim()||'199.000đ';
      const img = document.getElementById('gsp-img').value.trim();
      const link = document.getElementById('gsp-link').value.trim();
      const place = document.getElementById('gsp-place').value;
      const groups = (document.getElementById('gsp-groups')||{}).value||'';
      const mode = document.getElementById('gsp-mode').value;
      const datetime = (document.getElementById('gsp-datetime')||{}).value||'';
      const repeat = (document.getElementById('gsp-repeat')||{}).value||'none';
      const hashtags = '#ThoiTrangNu #SaleHe #AoThunDep';
      let content = `🌟 ${name.toUpperCase()} 🌟\n${desc}\n✅ Co giãn thoải mái\n✅ Dễ phối đồ\n✅ Màu sắc trendy`;
      if(link) content += `\n👉 Đặt hàng ngay kẻo hết: ${link}`;
      if(price) content += `\nGiá chỉ ${price}!`;
      content += `\n${hashtags}`;
      let imgHtml = img?`<img src='${img}' alt='' style='max-width:100%;border-radius:8px;margin:10px 0;'>`:'';
      let where = place==='personal'?'Tài khoản cá nhân':(place==='fanpage'?'Fanpage':(place==='group'?'Nhóm':'Nhiều nhóm'));
      let schedule = mode==='now'?'<b>Đăng ngay</b>':`<b>Lên lịch:</b> ${datetime?datetime:'(chưa chọn)'}${repeat!=='none'?` - Lặp: ${repeat==='daily'?'Hàng ngày':(repeat==='weekly'?'Hàng tuần':'')}`:''}`;
      let groupInfo = (place==='group'||place==='multi-group')?`<div><b>Nhóm:</b> ${groups||'(chưa nhập)'}</div>`:'';
      document.getElementById('gemini-output-box').innerHTML = `<div class='gemini-output'><div class='gemini-output-header'><span>Output AI gợi ý:</span> <button onclick='copyGeminiContent()' style='background:#00fff7;color:#18122B;font-weight:700;border:none;padding:6px 18px;border-radius:7px;cursor:pointer;'>Sao chép</button> <button onclick='autoPostDemo()' style='background:#ff00cc;color:#fff;font-weight:700;border:none;padding:6px 18px;border-radius:7px;cursor:pointer;margin-left:8px;'>Đăng tự động</button></div>${imgHtml}<pre id='gemini-content' style='background:#232526;color:#ffe53b;padding:16px 14px;border-radius:8px;font-size:1.08em;margin:0 0 8px 0;white-space:pre-line;'>${content}</pre><div style='margin-top:8px;'><b>Nơi đăng:</b> ${where} ${groupInfo} | <b>Chế độ:</b> ${schedule}</div></div>`;
    }
    if(e.target && e.target.id==='chatbot-form') {
      e.preventDefault();
      const name = document.getElementById('chatbot-name').value.trim()||'Khách';
      const msg = document.getElementById('chatbot-msg').value.trim();
      if(!msg) return alert('Vui lòng nhập nội dung!');
      const chatBox = document.getElementById('chatbot-chatbox');
      chatBox.innerHTML += `<div class='chatbot-user'><b>${name}:</b> ${msg}</div>`;
      setTimeout(()=>{
        chatBox.innerHTML += `<div class='chatbot-bot'><b>Bot:</b> Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất. (Demo trả lời tự động)</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
      }, 600);
      document.getElementById('chatbot-msg').value = '';
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  });
});

window.copyGeminiContent = function() {
  const text = document.getElementById('gemini-content').innerText;
  navigator.clipboard.writeText(text);
  alert('Đã sao chép nội dung!');
}

window.autoPostDemo = function() {
  alert('Demo: Gọi Facebook API để đăng bài tự động.\nBạn cần xác thực và cấp quyền cho ứng dụng!');
}

window.renderAIResult = function(type) {
  let html = '';
  if(type==="chatbot") {
    html = `<div class='ai-result'><h4>🛍️ Tư vấn mua hàng thông minh (AI Chatbot)</h4><p>Ví dụ: <i>"Tôi cần quà sinh nhật cho nữ, giá dưới 500k"</i></p><div class='ai-demo-bot'><b>Gợi ý:</b> <span>Son môi 450k, Nước hoa mini 399k, Vòng tay bạc 320k</span><br><b>Hỏi về đổi trả:</b> <span>"Sản phẩm được đổi trong 7 ngày nếu còn nguyên tem."</span></div></div>`;
  } else if(type==="search") {
    html = `<div class='ai-result'><h4>🧠 Tìm kiếm sản phẩm bằng ngôn ngữ tự nhiên</h4><p>Ví dụ: <i>"Tôi muốn một đôi giày thể thao màu trắng, nhẹ và không thấm nước"</i></p><div class='ai-demo-bot'><b>Kết quả:</b> <span>Giày Sneaker Trắng UltraLight - 499k</span></div></div>`;
  } else if(type==="personalize") {
    html = `<div class='ai-result'><h4>🎯 Cá nhân hóa trải nghiệm người dùng</h4><p>AI phân tích hành vi, gợi ý sản phẩm liên quan, tự động thay đổi banner, sản phẩm nổi bật theo từng người dùng.</p><div class='ai-demo-bot'><b>Gợi ý cho bạn:</b> <span>Áo thun nam basic, Tai nghe Bluetooth, Đồng hồ thông minh</span></div></div>`;
  } else if(type==="content") {
    html = `<div class='ai-result'><h4>📝 Tạo nội dung tự động</h4><p>AI tạo mô tả sản phẩm hấp dẫn, bài viết blog/SEO, email marketing, tiêu đề khuyến mãi.</p><div class='ai-demo-bot'><b>Mô tả sản phẩm:</b> <span>"Áo thun cotton thoáng mát, thiết kế trẻ trung, phù hợp mọi hoạt động."</span></div></div>`;
  } else if(type==="vision") {
    html = `<div class='ai-result'><h4>📸 Hiểu & xử lý hình ảnh (Gemini Vision)</h4><p>Nhận diện sản phẩm trong ảnh, tìm sản phẩm tương tự, kiểm duyệt ảnh bình luận.</p><div class='ai-demo-bot'><b>Ảnh tải lên:</b> <img src='https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=120&q=80' style='height:40px;border-radius:6px;vertical-align:middle;'> <span>AI nhận diện: Giày sneaker trắng</span></div></div>`;
  } else if(type==="translate") {
    html = `<div class='ai-result'><h4>💬 Dịch tự động & hỗ trợ đa ngôn ngữ</h4><p>Dịch nội dung sản phẩm, trả lời khách quốc tế bằng ngôn ngữ của họ.</p><div class='ai-demo-bot'><b>Ví dụ:</b> <span>"Áo thun nam basic" → <i>"Basic men's T-shirt" (EN)</i> / <i>"ເສື້ອຍືດຜູ້ຊາຍ" (Lao)</i></span></div></div>`;
  } else if(type==="operation") {
    html = `<div class='ai-result'><h4>📦 Tối ưu quy trình vận hành & quản lý</h4><p>Trích xuất dữ liệu từ hóa đơn, đơn hàng, email khách, tóm tắt phản hồi, tự động tạo báo cáo sản phẩm bán chạy.</p><div class='ai-demo-bot'><b>Báo cáo nhanh:</b> <span>Tuần này: 120 đơn, 3 sản phẩm bán chạy nhất: Áo thun, Giày sneaker, Tai nghe</span></div></div>`;
  }
  document.getElementById('ai-result-box').innerHTML = html;
}

window.renderAIResultLocation = function() {
  const val = document.getElementById('ai-location').value;
  let result = '';
  if(val==='hanoi') result = 'Hà Nội: Khu vực đông dân, sức mua lớn, phù hợp kinh doanh thời trang, đồ gia dụng, đồ ăn nhanh.';
  if(val==='hochiminh') result = 'Hồ Chí Minh: Trung tâm kinh tế, khách hàng trẻ, thích hợp sản phẩm công nghệ, phụ kiện, dịch vụ nhanh.';
  if(val==='danang') result = 'Đà Nẵng: Du lịch phát triển, nên kinh doanh đặc sản, quà lưu niệm, dịch vụ du lịch.';
  if(val==='vientiane') result = 'Viêng Chăn: Thị trường mới nổi, nhu cầu hàng tiêu dùng, thời trang, điện tử tăng.';
  if(val==='savannakhet') result = 'Savannakhet: Kinh doanh thực phẩm, hàng tiêu dùng, dịch vụ vận chuyển phù hợp.';
  document.getElementById('ai-location-result').innerHTML = `<p>${result}</p>`;
}

window.switchProductTab = function(tab) {
  window.productTab = tab;
  window.editCatIdx = undefined;
  window.editProdIdx = undefined;
  renderPage('products');
}

window.addCategory = function(e) {
  e.preventDefault();
  const name = document.getElementById('catName').value.trim();
  if(!name) return alert('Nhập tên danh mục!');
  if(demoCategories.some(c=>c.name.toLowerCase()===name.toLowerCase())) return alert('Danh mục đã tồn tại!');
  demoCategories.push({name,count:0});
  renderPage('products');
}

window.editCat = function(idx) {
  window.editCatIdx = idx;
  renderPage('products');
}

window.saveEditCat = function(idx) {
  const val = document.getElementById('editCatInput').value.trim();
  if(!val) return alert('Tên không được để trống!');
  if(demoCategories.some((c,i)=>c.name.toLowerCase()===val.toLowerCase()&&i!==idx)) return alert('Trùng tên!');
  demoCategories[idx].name = val;
  // cập nhật category cho sản phẩm
  demoProducts.forEach(p=>{if(p.category===demoCategories[idx].name)p.category=val;});
  window.editCatIdx = undefined;
  renderPage('products');
}

window.cancelEditCat = function() {
  window.editCatIdx = undefined;
  renderPage('products');
}

window.deleteCat = function(idx) {
  if(!confirm('Xoá danh mục này?')) return;
  if(demoCategories[idx].count>0) return alert('Danh mục còn sản phẩm!');
  demoCategories.splice(idx,1);
  renderPage('products');
}

window.addProduct = function(e) {
  e.preventDefault();
  const name = document.getElementById('prodName').value.trim();
  const img = document.getElementById('prodImg').value.trim();
  const price = +document.getElementById('prodPrice').value;
  const category = document.getElementById('prodCat').value;
  const status = document.getElementById('prodStatus').value;
  if(!name||!img||!price||!category) return alert('Điền đủ thông tin!');
  demoProducts.push({name,img,price,status,category});
  // tăng count danh mục
  const cat = demoCategories.find(c=>c.name===category); if(cat) cat.count++;
  renderPage('products');
}

window.editProd = function(idx) {
  window.editProdIdx = idx;
  renderPage('products');
}

window.saveEditProd = function(idx) {
  const name = document.getElementById('editProdName').value.trim();
  const price = +document.getElementById('editProdPrice').value;
  const category = document.getElementById('editProdCat').value;
  const status = document.getElementById('editProdStatus').value;
  if(!name||!price||!category) return alert('Điền đủ thông tin!');
  // cập nhật count danh mục nếu đổi
  const oldCat = demoProducts[idx].category;
  if(oldCat!==category){
    const oldC = demoCategories.find(c=>c.name===oldCat); if(oldC) oldC.count--;
    const newC = demoCategories.find(c=>c.name===category); if(newC) newC.count++;
  }
  demoProducts[idx].name = name;
  demoProducts[idx].price = price;
  demoProducts[idx].category = category;
  demoProducts[idx].status = status;
  window.editProdIdx = undefined;
  renderPage('products');
}

window.cancelEditProd = function() {
  window.editProdIdx = undefined;
  renderPage('products');
}

window.deleteProd = function(idx) {
  if(!confirm('Xoá sản phẩm này?')) return;
  // giảm count danh mục
  const cat = demoCategories.find(c=>c.name===demoProducts[idx].category); if(cat) cat.count--;
  demoProducts.splice(idx,1);
  renderPage('products');
}

window.toggleGroupInput = function() {
  const val = document.getElementById('gsp-place').value;
  document.getElementById('group-input-box').style.display = (val==='group'||val==='multi-group')?'block':'none';
}

window.toggleScheduleInput = function() {
  const val = document.getElementById('gsp-mode').value;
  document.getElementById('schedule-input-box').style.display = (val==='schedule')?'block':'none';
}

function showChatbotPopup() {
  if(document.getElementById('chatbot-popup')) return;
  const popup = document.createElement('div');
  popup.id = 'chatbot-popup';
  popup.innerHTML = `<div class='chatbot-inner'><div class='chatbot-header' id='chatbot-header'><span>💬 Chatbot Liên hệ</span><button onclick='document.getElementById("chatbot-popup").remove()' style='background:none;border:none;color:#00fff7;font-size:1.5rem;cursor:pointer;margin-left:auto;'>×</button></div><div class='chatbot-quick'><button onclick='chatbotQuick("Thông tin shop")'>Thông tin shop</button><button onclick='chatbotQuick("Liên hệ")'>Liên hệ</button><button onclick='chatbotQuick("Sản phẩm hot nhất?")'>Hỏi sản phẩm</button></div><div id='chatbot-chatbox' class='chatbot-chatbox'></div><form id='chatbot-form' style='display:flex;gap:8px;margin-top:10px;'><input id='chatbot-name' type='text' placeholder='Tên của bạn' style='flex:1 1 80px;padding:8px 10px;border-radius:7px;border:2px solid #ff00cc;font-size:1rem;'><input id='chatbot-msg' type='text' placeholder='Nhập nội dung...' style='flex:2 1 120px;padding:8px 10px;border-radius:7px;border:2px solid #ff00cc;font-size:1rem;'><button type='submit' style='background:#00fff7;color:#18122B;font-weight:700;border:none;padding:8px 18px;border-radius:8px;cursor:pointer;'>Gửi</button></form></div>`;
  Object.assign(popup.style, {position:'fixed',bottom:'90px',right:'18px',zIndex:99999});
  document.body.appendChild(popup);
  // Kéo di chuyển
  let isDrag=false, startX=0, startY=0, startLeft=0, startTop=0;
  const header = document.getElementById('chatbot-header');
  header.style.cursor = 'move';
  header.onmousedown = function(e) {
    isDrag = true;
    startX = e.clientX;
    startY = e.clientY;
    const rect = popup.getBoundingClientRect();
    startLeft = rect.left;
    startTop = rect.top;
    document.body.style.userSelect = 'none';
  };
  document.onmousemove = function(e) {
    if(isDrag) {
      let left = startLeft + (e.clientX - startX);
      let top = startTop + (e.clientY - startY);
      popup.style.left = left+'px';
      popup.style.top = top+'px';
      popup.style.right = 'auto';
      popup.style.bottom = 'auto';
    }
  };
  document.onmouseup = function() { isDrag=false; document.body.style.userSelect=''; };
}
window.chatbotQuick = function(msg) {
  const name = document.getElementById('chatbot-name').value.trim()||'Khách';
  const chatBox = document.getElementById('chatbot-chatbox');
  chatBox.innerHTML += `<div class='chatbot-user'><b>${name}:</b> ${msg}</div>`;
  setTimeout(()=>{
    let reply = 'Cảm ơn bạn đã liên hệ!';
    if(msg.includes('shop')) reply = 'Shop ABC - Chuyên thời trang, phụ kiện, giao hàng toàn quốc.';
    if(msg.includes('Liên hệ')) reply = 'Bạn có thể gọi 0123.456.789 hoặc inbox fanpage để được hỗ trợ.';
    if(msg.includes('Sản phẩm')) reply = 'Sản phẩm hot: Áo thun nữ siêu mềm, Giày sneaker trắng, Tai nghe Bluetooth.';
    chatBox.innerHTML += `<div class='chatbot-bot'><b>Bot:</b> ${reply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 600);
  chatBox.scrollTop = chatBox.scrollHeight;
}

window.showProductDetail = function(idx) {
  const p = demoProducts[idx];
  const popup = document.createElement('div');
  popup.className = 'product-detail-popup';
  popup.innerHTML = `<div class='product-detail-inner'><button onclick='this.closest(".product-detail-popup").remove()' style='position:absolute;top:10px;right:16px;background:none;border:none;color:#00fff7;font-size:1.6rem;cursor:pointer;'>×</button><img src='${p.img}' alt='' style='width:100%;max-width:320px;border-radius:14px;box-shadow:0 2px 16px #00fff7cc;margin-bottom:16px;'><h3 style='color:#00fff7;font-family:Orbitron,sans-serif;font-size:1.25rem;'>${p.name}</h3><div class='price' style='font-size:1.15rem;margin-bottom:6px;'>${p.price.toLocaleString()}₫</div><div class='status${p.status!="Đang bán"?" soldout":""}' style='margin-bottom:10px;'>${p.status}</div><div style='color:#ffe53b;font-size:1.08em;margin-bottom:12px;'>${p.desc||"Không có mô tả."}</div><button onclick='addToCart(${idx});this.closest(".product-detail-popup").remove()' style='background:#00fff7;color:#18122B;font-weight:700;border:none;padding:10px 28px;border-radius:8px;cursor:pointer;font-size:1.1rem;' ${p.status!=="Đang bán"?"disabled":''}>Mua ngay</button></div>`;
  Object.assign(popup.style, {position:'fixed',top:0,left:0,right:0,bottom:0,background:'rgba(0,0,0,0.45)',zIndex:9999,display:'flex',alignItems:'center',justifyContent:'center'});
  document.body.appendChild(popup);
}

window.showCheckoutPopup = function() {
  const popup = document.createElement('div');
  popup.className = 'checkout-popup';
  popup.innerHTML = `<div class='checkout-inner'><button onclick='this.closest(".checkout-popup").remove()' style='position:absolute;top:10px;right:16px;background:none;border:none;color:#00fff7;font-size:1.6rem;cursor:pointer;'>×</button><h3 style='color:#00fff7;font-family:Orbitron,sans-serif;font-size:1.18rem;margin-bottom:10px;'>Thanh toán đơn hàng</h3><form id='checkout-form'><label>Họ tên<br><input id='ck-name' type='text' required style='padding:8px 14px;border-radius:7px;border:2px solid #ff00cc;font-size:1rem;width:100%;margin-bottom:8px;'></label><label>Số điện thoại<br><input id='ck-phone' type='tel' required style='padding:8px 14px;border-radius:7px;border:2px solid #ff00cc;font-size:1rem;width:100%;margin-bottom:8px;'></label><label>Địa chỉ nhận hàng<br><input id='ck-address' type='text' required style='padding:8px 14px;border-radius:7px;border:2px solid #ff00cc;font-size:1rem;width:100%;margin-bottom:8px;'></label><label>Phương thức thanh toán<br><select id='ck-method' style='padding:8px 14px;border-radius:7px;border:2px solid #ff00cc;font-size:1rem;width:100%;margin-bottom:12px;' onchange='toggleQRBox()'><option value='qr'>Chuyển khoản QR</option><option value='cod'>Ship COD</option></select></label><div id='qr-box' style='margin-bottom:12px;'><img src='https://img.vietqr.io/image/970422-123456789-compact2.png?amount=0&addInfo=ShopLao' alt='QR code' style='width:160px;display:block;margin:0 auto 6px auto;border-radius:10px;box-shadow:0 2px 12px #00fff7cc;'><div style='color:#ffe53b;font-size:0.98em;'>Quét mã QR để thanh toán</div></div><button type='submit' style='background:#00fff7;color:#18122B;font-weight:700;border:none;padding:10px 28px;border-radius:8px;cursor:pointer;font-size:1.1rem;width:100%;margin-top:8px;'>Xác nhận thanh toán</button></form></div>`;
  Object.assign(popup.style, {position:'fixed',top:0,left:0,right:0,bottom:0,background:'rgba(0,0,0,0.45)',zIndex:9999,display:'flex',alignItems:'center',justifyContent:'center'});
  document.body.appendChild(popup);
}

window.toggleQRBox = function() {
  const val = document.getElementById('ck-method').value;
  document.getElementById('qr-box').style.display = val==='qr'?'block':'none';
}

document.body.addEventListener('submit', function(e) {
  if(e.target && e.target.id==='checkout-form') {
    e.preventDefault();
    const name = document.getElementById('ck-name').value.trim();
    const phone = document.getElementById('ck-phone').value.trim();
    const address = document.getElementById('ck-address').value.trim();
    const method = document.getElementById('ck-method').value;
    if(method==='qr') {
      alert('Cảm ơn bạn đã thanh toán qua QR! Đơn hàng sẽ được xử lý.');
    } else {
      alert('Đơn hàng sẽ được giao và thu tiền tận nơi (COD).');
    }
    document.querySelector('.checkout-popup').remove();
  }
}); 