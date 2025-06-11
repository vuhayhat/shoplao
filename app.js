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
    }
  }
};

const demoProducts = [
  {
    name: "Áo thun nam basic",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    price: 199000,
    status: "Đang bán"
  },
  {
    name: "Quần jeans nữ",
    img: "https://images.unsplash.com/photo-1516762689617-f5e6b9cfd2c1?auto=format&fit=crop&w=400&q=80",
    price: 299000,
    status: "Hết hàng"
  },
  {
    name: "Giày sneaker trắng",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80",
    price: 499000,
    status: "Đang bán"
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
      html += `<div class='product-card'>
        <img src='${p.img}' alt='${p.name}'>
        <h4>${p.name}</h4>
        <div class='price'>${p.price.toLocaleString()}₫</div>
        <div class='status${p.status !== "Đang bán" ? " soldout" : ""}'>${p.status}</div>
        <button onclick='addToCart(${idx})' ${p.status!=="Đang bán"?"disabled":''}>Mua ngay</button>
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
    html += `<table style='width:100%;border-collapse:collapse;margin-top:20px;'>
      <thead><tr style='background:#e3eafc;'><th>Ảnh</th><th>Tên sản phẩm</th><th>Giá</th><th>Trạng thái</th><th>Hành động</th></tr></thead><tbody>`;
    demoProducts.forEach((p, idx) => {
      html += `<tr style='border-bottom:1px solid #eee;'>
        <td><img src='${p.img}' alt='' style='width:60px;height:40px;object-fit:cover;border-radius:4px;'></td>
        <td>${p.name}</td>
        <td>${p.price.toLocaleString()}₫</td>
        <td>${p.status}</td>
        <td><button style='background:#ffb300;color:#fff;border:none;padding:4px 10px;border-radius:3px;cursor:pointer;'>Sửa</button> <button style='background:#e53935;color:#fff;border:none;padding:4px 10px;border-radius:3px;cursor:pointer;'>Xoá</button></td>
      </tr>`;
    });
    html += `</tbody></table>`;
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
    }
  }
  if(page === 'ai') {
    html += `<div class='ai-analyze-box' style='margin-top:24px;'>
      <h3 style='font-family:Orbitron,Arial,sans-serif;font-size:1.3rem;color:#00fff7;text-shadow:0 0 8px #ff00cc;'>Chọn loại phân tích AI</h3>
      <div style='display:flex;gap:18px;flex-wrap:wrap;margin-bottom:18px;'>
        <button class='ai-btn' onclick='renderAIResult("product")'>Phân tích mặt hàng kinh doanh</button>
        <button class='ai-btn' onclick='renderAIResult("trend")'>Phân tích xu hướng</button>
        <button class='ai-btn' onclick='renderAIResult("location")'>Phân tích địa điểm kinh doanh</button>
        <button class='ai-btn' onclick='renderAIResult("market")'>Phân tích thị trường</button>
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
});

window.renderAIResult = function(type) {
  let html = '';
  if(type==="product") {
    html = `<div class='ai-result'><h4>🔎 Phân tích mặt hàng kinh doanh</h4><p>AI đề xuất: <b>Thời trang trẻ, phụ kiện công nghệ, đồ gia dụng thông minh</b> là các mặt hàng tiềm năng tại khu vực bạn chọn.</p></div>`;
  } else if(type==="trend") {
    html = `<div class='ai-result'><h4>📈 Phân tích xu hướng</h4><p>Xu hướng nổi bật: <b>Mua sắm online qua mạng xã hội, livestream bán hàng, sản phẩm xanh - thân thiện môi trường</b>.</p></div>`;
  } else if(type==="location") {
    html = `<div class='ai-result'><h4>📍 Phân tích địa điểm kinh doanh</h4><label>Chọn địa điểm: <select id='ai-location' onchange='window.renderAIResultLocation()'>
      <option value='hanoi'>Hà Nội</option>
      <option value='hochiminh'>Hồ Chí Minh</option>
      <option value='danang'>Đà Nẵng</option>
      <option value='vientiane'>Viêng Chăn</option>
      <option value='savannakhet'>Savannakhet</option>
    </select></label>
    <div id='ai-location-result'></div></div>`;
    setTimeout(()=>window.renderAIResultLocation(), 100);
  } else if(type==="market") {
    html = `<div class='ai-result'><h4>🛒 Phân tích thị trường</h4><p>AI nhận định: <b>Thị trường TMĐT Đông Nam Á tăng trưởng mạnh, khách hàng trẻ chiếm đa số, nhu cầu sản phẩm công nghệ, thời trang, làm đẹp tăng cao.</b></p></div>`;
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