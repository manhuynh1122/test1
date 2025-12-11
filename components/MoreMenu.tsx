import React from "react";
import "@/styles/blocks/_MoreMenu.scss"; // import global SCSS

const MoreMenu: React.FC = () => {
    const menuData = [
        {
            title: "Đời sống",
            items: ["Nhân vật", "Xem-Ăn-Chơi", "House n Home"]
        },
        {
            title: "Xem mua luôn",
            items: ["Thời trang", "Đẹp", "Mommy mua đi"]
        },
        {
            title: "Sport",
            items: ["Bóng đá", "Hậu trường", "Pickleball", "Esports"]
        },
        {
            title: "Musik",
            items: ["Âu-Mỹ", "Châu Á", "Việt Nam", "Hip-hop neva die"]
        },
        {
            title: "Ciné",
            items: ["Phim chiếu rạp", "Phim Việt Nam", "Series truyền hình", "Hoa ngữ - Hàn Quốc"]
        },
        {
            title: "Tek-Life",
            items: ["Metaverse", "How-To", "Wow", "2-Mall"]
        },
        {
            title: "Star",
            items: ["Sao Việt", "Hội bạn thân showbiz", "TV Show"]
        },
        {
            title: "Xã hội",
            items: ["Pháp luật", "Nóng trên mạng", "Sống xanh"]
        },
        {
            title: "Học đường",
            items: ["Nhân vật", "Du học", "Bản tin 46'"]
        },
        {
            title: "Thế giới đó đây",
            items: ["Chùm ảnh", "Khám phá", "Dị"]
        },
        {
            title: "Sức khỏe",
            items: ["Tin tức", "Dinh dưỡng", "Khỏe đẹp", "Giới tính", "Các bệnh"]
        }
    ];

    return (
        <div className="moreMenu">
            <div className="moreIcon">• • •</div>

            <div className="dropdown">
                {menuData.map((category, index) => (
                    <div className="col" key={index}>
                        <h4>{category.title}</h4>
                        {category.items.map((item, itemIndex) => (
                            <a href="#" key={itemIndex}>{item}</a>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MoreMenu;
