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

    // スライドショーの設定
    let currentIndex = 0;
    const totalImages = images.length;

    function changeSlide() {
        currentIndex = (currentIndex + 1) % totalImages;
        slideshowElement.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(changeSlide, 5000);

    // モーダルウィンドウの表示と閉じる
    const modal = document.getElementById("plan-modal");
    const btn = document.getElementById("create-plan-button");
    const span = document.getElementsByClassName("close-button")[0];

    btn.onclick = function() {
        modal.style.display = "flex";
        setTimeout(() => {
            modal.classList.add("show");
            modal.classList.remove("hide");
        }, 10); // 少し遅らせてアニメーションが効くようにする
    }

    span.onclick = function() {
        modal.classList.add("hide");
        modal.classList.remove("show");
        setTimeout(() => {
            modal.style.display = "none";
        }, 500); // アニメーション終了後に非表示
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.add("hide");
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
        const apiUrl = `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${encodeURIComponent(postalCode)}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.status === 200 && data.results && data.results.length > 0) {
                    const address = data.results[0];
                    document.getElementById("address").value = `${address.address1}${address.address2}${address.address3}`;
                } else {
                    document.getElementById("address").value = "住所が見つかりません";
                }
            })
            .catch(error => {
                console.error("Error fetching address:", error);
                document.getElementById("address").value = "エラーが発生しました";
            });
    });
});
