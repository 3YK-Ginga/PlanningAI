document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'url(./images/image1.jpg)',
        'url(./images/image2.jpg)',
        'url(./images/image3.jpg)',
        'url(./images/image4.jpg)',
        'url(./images/image5.jpg)'
    ];

    const slideshowElement = document.querySelector('.slideshow');

    images.forEach(image => {
        const div = document.createElement('div');
        div.style.backgroundImage = image;
        slideshowElement.appendChild(div);
    });

    // モーダルウィンドウの表示と閉じる
    const modal = document.getElementById("plan-modal");
    const btn = document.getElementById("create-plan-button");
    const span = document.getElementsByClassName("close-button")[0];

    btn.onclick = function() {
        modal.classList.add("show");
    }

    span.onclick = function() {
        modal.classList.remove("show");
        setTimeout(() => {
            modal.style.display = "none";
        }, 500); // アニメーション終了後に非表示
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove("show");
            setTimeout(() => {
                modal.style.display = "none";
            }, 500); // アニメーション終了後に非表示
        }
    }

    // 住所検索の例
    const searchButton = document.getElementById("search-address-button");
    searchButton.addEventListener("click", function() {
        const postalCode = document.getElementById("postal-code").value;
        const addressMap = {
            "123-4567": "東京都新宿区西新宿",
            "234-5678": "大阪府大阪市中央区",
            // 他の郵便番号も同様に追加
        };

        if (addressMap[postalCode]) {
            document.getElementById("address").value = addressMap[postalCode];
        } else {
            document.getElementById("address").value = "住所が見つかりません";
        }
    });
});
