import "@/styles/match.scss";
import TagSwiper from "@/components/TagSwiper";
import VideoSwiper from "@/components/VideoSwiper";
import MoreMenu from "@/components/MoreMenu";

interface LeagueItem {
    id: number;
    name: string;
    icon: string;
    url?: string;
    title?: string;
}
interface HotnewsItem {
    id: number;
    name: string;
    icon: string;
    url?: string;
    title?: string;
}

const leagues: LeagueItem[] = [
    { id: 1, name: "SEA Games 33", icon: "/img/Frame 1000006320.png" },
    { id: 2, name: "UEFA Champions League", icon: "/img/image 20.png" },
    { id: 3, name: "UEFA Europa League", icon: "/img/image 20 (1).png" },
    { id: 4, name: "Premier League", icon: "/img/image 20 (2).png" },
    { id: 5, name: "Laliga", icon: "/img/image 20 (3).png" },
    { id: 6, name: "Bundesliga", icon: "/img/image 20 (4).png" },
    { id: 7, name: "Seria A", icon: "/img/image 20 (5).png" },
    { id: 8, name: "League 1", icon: "/img/image 20 (6).png" },
    { id: 9, name: "V-League", icon: "/img/image 20 (7).png" },



];
const hotnews: HotnewsItem[] = [
    { id: 1, name: "Đoàn Văn Hậu như trở lại tuổi thơ khi đi truyền cảm hứng bóng đá cho các cầu thủ nhí", icon: "/img/Vector (1).png" },
    { id: 2, name: "Đai vô địch WBC Muay Thai thế giới lần đầu được tranh tài tại Việt Nam", icon: "/img/Vector (1).png" },
    { id: 3, name: `CLB Hà Nội quyết "đòi lại" ngôi vương V.League 2023/24, xác định "nhì là thất bại" `, icon: "/img/Vector (1).png" },
    { id: 4, name: `Cô bạn gái "bí ẩn" của siêu nhân Erling Haaland: Yêu sau hơn 10 năm làm bạn, không dùng bất kỳ MXH nào `, icon: "/img/Vector (1).png" },
    { id: 5, name: `Cô bạn gái "bí ẩn" của siêu nhân Erling Haaland: Yêu sau hơn 10 năm làm bạn, không dùng bất kỳ MXH nào `, icon: "/img/Vector (1).png" },

];
interface NewsItem {
    id: number;
    title: string;
    image: string;        // ảnh bên trái
    author: string;
    time: string;
    iconComment: string;  // icon comment
    iconShare: string;    // icon share
}

const newsData: NewsItem[] = [
    {
        id: 1,
        title: "Đai vô địch WBC Muay Thai thế giới lần đầu được tranh tài tại Việt Nam",
        image: "/img/Tyrese Haliburton was making noise in Game 7. Then injury 'sucked the soul' out of the Pacers.png",         // ảnh bên trái
        author: "Kiet Phan",
        time: "2 giờ trước",
        iconComment: "/img/export.png",
        iconShare: "/img/message.png"
    },
    {
        id: 2,
        title: "Đoàn Văn Hậu như trở lại tuổi thơ khi đi truyền cảm hứng bóng đá cho các cầu thủ nhí",
        image: "/img/Tyrese Haliburton was making noise in Game 7. Then injury 'sucked the soul' out of the Pacers (1).png",         // ảnh bên trái
        author: "Kiet Phan",
        time: "2 giờ trước",
        iconComment: "/img/export.png",
        iconShare: "/img/message.png"
    },
    {
        id: 3,
        title: "Đoàn Văn Hậu như trở lại tuổi thơ khi đi truyền cảm hứng bóng đá cho các cầu thủ nhí",
        image: "/img/Tyrese Haliburton was making noise in Game 7. Then injury 'sucked the soul' out of the Pacers (1).png",         // ảnh bên trái
        author: "Kiet Phan",
        time: "2 giờ trước",
        iconComment: "/img/export.png",
        iconShare: "/img/message.png"
    },
    {
        id: 4,
        title: "Đoàn Văn Hậu như trở lại tuổi thơ khi đi truyền cảm hứng bóng đá cho các cầu thủ nhí",
        image: "/img/Tyrese Haliburton was making noise in Game 7. Then injury 'sucked the soul' out of the Pacers (1).png",         // ảnh bên trái
        author: "Kiet Phan",
        time: "2 giờ trước",
        iconComment: "/img/export.png",
        iconShare: "/img/message.png"
    },

];

interface predictionItem {
    id: number;
    title: string;
    image: string;        // ảnh bên trái
    author: string;
    time: string;
    iconComment: string;  // icon comment
    iconShare: string;    // icon share
}

const predictionData: predictionItem[] = [
    {
        id: 1,
        title: "Đai vô địch WBC Muay Thai thế giới lần đầu được tranh tài tại Việt Nam",
        image: "/img/Tyrese Haliburton was making noise in Game 7. Then injury 'sucked the soul' out of the Pacers.png",         // ảnh bên trái
        author: "Kiet Phan",
        time: "2 giờ trước",
        iconComment: "/img/export.png",
        iconShare: "/img/message.png"
    },
    {
        id: 2,
        title: "Đoàn Văn Hậu như trở lại tuổi thơ khi đi truyền cảm hứng bóng đá cho các cầu thủ nhí",
        image: "/img/Tyrese Haliburton was making noise in Game 7. Then injury 'sucked the soul' out of the Pacers (1).png",         // ảnh bên trái
        author: "Kiet Phan",
        time: "2 giờ trước",
        iconComment: "/img/export.png",
        iconShare: "/img/message.png"
    },
    {
        id: 3,
        title: "Đoàn Văn Hậu như trở lại tuổi thơ khi đi truyền cảm hứng bóng đá cho các cầu thủ nhí",
        image: "/img/Tyrese Haliburton was making noise in Game 7. Then injury 'sucked the soul' out of the Pacers (1).png",         // ảnh bên trái
        author: "Kiet Phan",
        time: "2 giờ trước",
        iconComment: "/img/export.png",
        iconShare: "/img/message.png"
    },
    {
        id: 4,
        title: "Đoàn Văn Hậu như trở lại tuổi thơ khi đi truyền cảm hứng bóng đá cho các cầu thủ nhí",
        image: "/img/Tyrese Haliburton was making noise in Game 7. Then injury 'sucked the soul' out of the Pacers (1).png",         // ảnh bên trái
        author: "Kiet Phan",
        time: "2 giờ trước",
        iconComment: "/img/export.png",
        iconShare: "/img/message.png"
    },
    {
        id: 5,
        title: "Đoàn Văn Hậu như trở lại tuổi thơ khi đi truyền cảm hứng bóng đá cho các cầu thủ nhí",
        image: "/img/Tyrese Haliburton was making noise in Game 7. Then injury 'sucked the soul' out of the Pacers (1).png",         // ảnh bên trái
        author: "Kiet Phan",
        time: "2 giờ trước",
        iconComment: "/img/export.png",
        iconShare: "/img/message.png"
    },

];
interface popularItem {
    id: number;
    title: string;
    image: string;        // ảnh bên trái
    author: string;
    time: string;
    iconComment: string;  // icon comment
    iconShare: string;    // icon share
}

const popularData: popularItem[] = [
    {
        id: 1,
        title: "Đai vô địch WBC Muay Thai thế giới lần đầu được tranh tài tại Việt Nam",
        image: "/img/Tyrese Haliburton was making noise in Game 7. Then injury 'sucked the soul' out of the Pacers.png",         // ảnh bên trái
        author: "Kiet Phan",
        time: "2 giờ trước",
        iconComment: "/img/export.png",
        iconShare: "/img/message.png"
    },
    {
        id: 2,
        title: "Đoàn Văn Hậu như trở lại tuổi thơ khi đi truyền cảm hứng bóng đá cho các cầu thủ nhí",
        image: "/img/Tyrese Haliburton was making noise in Game 7. Then injury 'sucked the soul' out of the Pacers (1).png",         // ảnh bên trái
        author: "Kiet Phan",
        time: "2 giờ trước",
        iconComment: "/img/export.png",
        iconShare: "/img/message.png"
    },
    {
        id: 3,
        title: "Đoàn Văn Hậu như trở lại tuổi thơ khi đi truyền cảm hứng bóng đá cho các cầu thủ nhí",
        image: "/img/Tyrese Haliburton was making noise in Game 7. Then injury 'sucked the soul' out of the Pacers (1).png",         // ảnh bên trái
        author: "Kiet Phan",
        time: "2 giờ trước",
        iconComment: "/img/export.png",
        iconShare: "/img/message.png"
    },
    {
        id: 4,
        title: "Đoàn Văn Hậu như trở lại tuổi thơ khi đi truyền cảm hứng bóng đá cho các cầu thủ nhí",
        image: "/img/Tyrese Haliburton was making noise in Game 7. Then injury 'sucked the soul' out of the Pacers (1).png",         // ảnh bên trái
        author: "Kiet Phan",
        time: "2 giờ trước",
        iconComment: "/img/export.png",
        iconShare: "/img/message.png"
    },


];


export default function Home() {
    const tags = [
        "#Nhận định kết quả",
        "#Sea Game 33",
        "#Hanoi Open Billards",
        "#PPA Tour",
        "#Vleague",
        "#Premier League",
        "#UEFA Champions League",
        "#Laliga",
    ];
    return (
        <div className="wallpaper">
            <div className="header-container">
                <div className="navbar-header">
                    <div className="header-left">
                        <img className="logo-header-left" src="/img/image 1.png" alt="" />
                    </div>
                    <div className="header-center">
                        <a className="link">
                            <div className="pound">#</div>
                            <div className="title">Pickleball</div>
                        </a>
                        <a className="link">
                            <div className="pound">#</div>
                            <div className="title">Bóng đá</div>
                        </a>
                        <a className="link">
                            <div className="pound">#</div>
                            <div className="title">e-Sport</div>
                        </a>
                        <a className="link">
                            <div className="pound">#</div>
                            <div className="title">Bóng rổ</div>
                        </a>
                        <a className="link">
                            <div className="pound">#</div>
                            <div className="title">Bóng bàn</div>
                        </a>
                        <a className="link">
                            <div className="pound">#</div>
                            <div className="title">Bóng chuyền</div>
                        </a>
                        <a className="link">
                            <div className="pound">#</div>
                            <div className="title">Video thể thao</div>
                        </a>

                        <div className="link">
                            <div className="title">Khác</div>
                            <MoreMenu />
                        </div>
                    </div>
                    <div className="header-right">
                        <a className="button-shop">
                            <div className="logo-shop">
                                <img src="/img/shop.png" alt="" />
                            </div>
                            <div className="title-shop">Shop</div>
                        </a>
                        <a className="login-header">
                            <div className="logo-login">
                                <img src="/img/user.png" alt="" />
                            </div>
                            <div className="title-login">Đăng nhập</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="wall-container">
                <div className="searching-container">
                    <div className="navbar-searching">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M2 11.7888L5.72414 7.59914L8.2069 10.3922L14 3.875" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.8623 3.875H14.0002V8.53017" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <TagSwiper />
                    </div>


                    <div className="searching-box">
                        <div className="icon-searching">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.9996 14L11.0996 11.1" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <input className="title-box"
                            type="text"
                            placeholder="Tìm kiếm theo chủ đề hoặc bộ môn..."
                        />
                    </div>

                </div>
                <div className="container-body">
                    <div className="body-left">
                        <div className="history-sport">
                            <div className="card-title">
                                <div className="rectangle-header"></div>
                                <div className="title-header">Lịch thi đấu bóng đá</div>
                            </div>

                            <div className="body-history">
                                {leagues.map((league) => (
                                    <a
                                        key={league.id}
                                        href={league.url ?? "#"}
                                        className="card-history"
                                    >
                                        <img
                                            src={league.icon}
                                            alt={league.title}
                                            className="icon-card"
                                        />
                                        <span className={`title-history ${league.id === 1 ? "text-blue" : ""}`}>{league.name}</span>
                                    </a>
                                ))}
                            </div>


                        </div>

                        <img className="img-left-first" src="img/Frame 1000006317.png" alt="" />
                        <div className="hotnews-box">
                            <div className="card-title">
                                <div className="rectangle-header"></div>
                                <div className="title-header">Chủ đề nóng</div>
                            </div>
                            <div className="body-hotnews">
                                {hotnews.map((hotnews) => (
                                    <a
                                        key={hotnews.id}
                                        href={hotnews.url ?? "#"}
                                        className="card-hotnews"
                                    >
                                        <img
                                            src={hotnews.icon}
                                            alt={hotnews.name}
                                            className="icon-card-hotnews"
                                        />
                                        <span className="title-hotnews">{hotnews.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <img className="img-left-second" src="img/image 22.png" alt="" />
                    </div>
                    <div className="body-center">
                        <div className="sharing-box">
                            <div className="account">
                                <div className="avatar">
                                    <img src="img/Frame 1000006321.png" alt="avatar" />
                                </div>

                                <input
                                    className="placeholder"
                                    type="text"
                                    placeholder="Chia sẻ chủ đề mới với chúng tôi..."
                                /></div>

                            <div className="icon-edit">
                                <img src="img/Frame 1000006322.png" alt="edit" />
                            </div>
                        </div>
                        <a href="#">
                            <img className="img-center-header" src="img/image 16.png" alt="" />
                        </a>
                        <div className="card-big">
                            <div className="header-card-big">
                                <div className="account-header">
                                    <div className="avatar-header">
                                        <img src="img/Rectangle 1.png" alt="avatar" />
                                    </div>
                                    <div className="name-header">
                                        <div className="name">
                                            <div className="text-name">Kiet Phan</div>
                                            <div className="icon">
                                                <img src="img/verify.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="time">2 giờ trước</div>
                                    </div>
                                </div>
                            </div>
                            <a href="" className="img-card-big">
                                <img src="img/Tyrese Haliburton's injury obscures the Pacers' magical run — and their future.png" alt="" />
                            </a>
                            <div className="content-card-big">
                                <a href="#" className="title">
                                    Adidas trở lại mạnh mẽ trên thị trường Pickleball với dòng vợt AdiPower
                                </a>
                                <div className="description clamp-2">
                                    Adidas đang định hình lại vị thế của mình trong làng Pickleball thông qua dòng vợt AdiPower mới - sự kết hợp giữa chất lượng cao và giá cả hợp lý.
                                </div>
                                <div className="footer">
                                    <div className="category">Pickleball</div>
                                    <div className="right">
                                        <div className="comment">
                                            <img src="img/message.png" alt="" className="icon-comment" />
                                            <div className="text">Bình luận</div>
                                        </div>
                                        <div className="share">
                                            <img src="img/export.png" alt="" className="icon-share" />
                                            <div className="text">Chia sẻ</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-big">
                            <div className="header-card-big">
                                <div className="account-header">
                                    <div className="avatar-header">
                                        <img src="img/Rectangle 1.png" alt="avatar" />
                                    </div>
                                    <div className="name-header">
                                        <div className="name">
                                            <div className="text-name">Kiet Phan</div>
                                            <div className="icon">
                                                <img src="img/verify.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="time">2 giờ trước</div>
                                    </div>
                                </div>
                            </div>
                            <a href="" className="img-card-big">
                                <img src="img/Tyrese Haliburton's injury obscures the Pacers' magical run — and their future.png" alt="" />
                            </a>
                            <div className="content-card-big">
                                <a href="#" className="title">
                                    Adidas trở lại mạnh mẽ trên thị trường Pickleball với dòng vợt AdiPower
                                </a>
                                <div className="description clamp-2">
                                    Adidas đang định hình lại vị thế của mình trong làng Pickleball thông qua dòng vợt AdiPower mới - sự kết hợp giữa chất lượng cao và giá cả hợp lý.
                                </div>
                                <div className="footer">
                                    <div className="category">Pickleball</div>
                                    <div className="right">
                                        <div className="comment">
                                            <img src="img/message.png" alt="" className="icon-comment" />
                                            <div className="text">Bình luận</div>
                                        </div>
                                        <div className="share">
                                            <img src="img/export.png" alt="" className="icon-share" />
                                            <div className="text">Chia sẻ</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="video">
                            <div className="header-video">
                                <img src="img/video-play.png" alt="" className="icon-video" />
                                <div className="title-video">Video</div>
                            </div>
                            <div className="body-video">
                                <VideoSwiper />
                            </div>
                            <a className="bt-readmore btn-vid">Xem thêm</a>
                        </div>
                        <div className="hotnews-box">
                            <div className="card-title no-border">
                                <div className="rectangle-header"></div>
                                <div className="title-header cl-black">Chủ đề nóng</div>
                            </div>
                            <div className="body-hotnews">
                                {hotnews.map((hotnews) => (
                                    <a
                                        key={hotnews.id}
                                        href={hotnews.url ?? "#"}
                                        className="card-hotnews"
                                    >
                                        <img
                                            src={hotnews.icon}
                                            alt={hotnews.name}
                                            className="icon-card-hotnews"
                                        />
                                        <span className="title-hotnews">{hotnews.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <a href="" className="img-advertisement">
                            <div className="title-advertisement">Advertisement</div>
                            <img src="img/image 19.png" alt="" className="" />
                        </a>
                        <div className="card-big">
                            <div className="card-title">
                                <div className="rectangle-header"></div>
                                <div className="title-header ">Bóng đá</div>
                                <a href="" className="arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M5.94043 13.28L10.2871 8.9333C10.8004 8.41997 10.8004 7.57997 10.2871 7.06664L5.94043 2.71997" stroke="#52524F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </a>
                            </div>
                            <div className="header-card-big">
                                <div className="account-header">
                                    <div className="avatar-header">
                                        <img src="img/Rectangle 1.png" alt="avatar" />
                                    </div>
                                    <div className="name-header">
                                        <div className="name">
                                            <div className="text-name">Kiet Phan</div>
                                            <div className="icon">
                                                <img src="img/verify.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="time">2 giờ trước</div>
                                    </div>
                                </div>
                            </div>
                            <a href="" className="img-card-big">
                                <img src="img/Tyrese Haliburton's injury obscures the Pacers' magical run — and their future.png" alt="" />
                            </a>
                            <div className="content-card-big">
                                <a href="#" className="title">
                                    Adidas trở lại mạnh mẽ trên thị trường Pickleball với dòng vợt AdiPower
                                </a>
                                <div className="description clamp-2">
                                    Adidas đang định hình lại vị thế của mình trong làng Pickleball thông qua dòng vợt AdiPower mới - sự kết hợp giữa chất lượng cao và giá cả hợp lý.
                                </div>
                                <div className="footer">
                                    <div className="category">Pickleball</div>
                                    <div className="right">
                                        <div className="comment">
                                            <img src="img/message.png" alt="" className="icon-comment" />
                                            <div className="text">Bình luận</div>
                                        </div>
                                        <div className="share">
                                            <img src="img/export.png" alt="" className="icon-share" />
                                            <div className="text">Chia sẻ</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="body-card-small">
                                {newsData.map((item) => (
                                    <>
                                        <div className="card-small" key={item.id}>

                                            {/* Ảnh bên trái */}
                                            <a className="img-card-small">
                                                <img
                                                    src={item.image}     // ảnh lấy từ data
                                                    alt={item.title}
                                                    className="img-card-small"
                                                />
                                            </a>

                                            {/* Nội dung bên phải */}
                                            <div className="content-card-small">

                                                <a className="topic-card-small">
                                                    {item.title}
                                                </a>

                                                {/* Author + Icons */}
                                                <div className="title-card-small">

                                                    <div className="author-card-small">
                                                        <span className="author-name">{item.author}</span>
                                                        <span className="author-time">{item.time}</span>
                                                    </div>

                                                    <div className="icon-card-small">
                                                        <img src={item.iconComment} alt="comment" className="icon-comment" />
                                                        <img src={item.iconShare} alt="share" className="icon-share" />
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="line"></div>
                                        </div>
                                        <div className="line"></div>
                                    </>
                                ))}

                                <a className="bt-readmore">
                                    Xem thêm
                                </a>

                            </div>

                        </div>
                    </div>
                    <div className="body-right">
                        <div className="news-box">
                            <div className="header-news">
                                <div className="icon-header-news">
                                    <img src="img/Frame 1000006320.png" alt="" />
                                </div>
                                <div className="title-header-news">
                                    <img className="title" src="img/Vector (2).png" alt="" />
                                </div>
                            </div>
                            <div className="body-card-small">
                                {newsData.map((item) => (
                                    <>
                                        <div className="card-small" key={item.id}>

                                            {/* Ảnh bên trái */}
                                            <a className="img-card-small">
                                                <img
                                                    src={item.image}     // ảnh lấy từ data
                                                    alt={item.title}
                                                    className="img-card-small"
                                                />
                                            </a>

                                            {/* Nội dung bên phải */}
                                            <div className="content-card-small">

                                                <a className="topic-card-small">
                                                    {item.title}
                                                </a>

                                                {/* Author + Icons */}
                                                <div className="title-card-small">

                                                    <div className="author-card-small">
                                                        <span className="author-name">{item.author}</span>
                                                        <span className="author-time">{item.time}</span>
                                                    </div>

                                                    <div className="icon-card-small">
                                                        <img src={item.iconComment} alt="comment" className="icon-comment" />
                                                        <img src={item.iconShare} alt="share" className="icon-share" />
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="line"></div>
                                        </div>
                                        <div className="line"></div>
                                    </>
                                ))}

                                <a className="bt-readmore">
                                    Xem thêm
                                </a>

                            </div>
                        </div>

                        <div className="prediction-section">
                            <div className="card-title">
                                <div className="rectangle-header"></div>
                                <div className="title-header">Nhận định</div>
                            </div>
                            <div className="body-card-small">
                                {predictionData.map((item) => (
                                    <>
                                        <div className="card-small" key={item.id}>

                                            {/* Ảnh bên trái */}
                                            <a className="img-card-small">
                                                <img
                                                    src={item.image}     // ảnh lấy từ data
                                                    alt={item.title}
                                                    className="img-card-small"
                                                />
                                            </a>

                                            {/* Nội dung bên phải */}
                                            <div className="content-card-small">

                                                <a className="topic-card-small">
                                                    {item.title}
                                                </a>

                                                {/* Author + Icons */}
                                                <div className="title-card-small">

                                                    <div className="author-card-small">
                                                        <span className="author-name">{item.author}</span>
                                                        <span className="author-time">{item.time}</span>
                                                    </div>

                                                    <div className="icon-card-small">
                                                        <img src={item.iconComment} alt="comment" className="icon-comment" />
                                                        <img src={item.iconShare} alt="share" className="icon-share" />
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                        <div className="line"></div>
                                    </>
                                ))}

                                <a className="bt-readmore">Xem thêm</a>
                            </div>
                        </div>

                        <img className="img-first-right" src="img/Frame 1000006317.png" alt="" />

                        <div className="popular-section">
                            <div className="card-title">
                                <div className="rectangle-header"></div>
                                <div className="title-header">Đọc nhiều</div>
                            </div>
                            <div className="body-card-small">
                                {popularData.map((item) => (
                                    <>
                                        <div className="card-small" key={item.id}>

                                            {/* Ảnh bên trái */}
                                            <a className="img-card-small">
                                                <img
                                                    src={item.image}     // ảnh lấy từ data
                                                    alt={item.title}
                                                    className="img-card-small"
                                                />
                                            </a>

                                            {/* Nội dung bên phải */}
                                            <div className="content-card-small">

                                                <a className="topic-card-small">
                                                    {item.title}
                                                </a>

                                                {/* Author + Icons */}
                                                <div className="title-card-small">

                                                    <div className="author-card-small">
                                                        <span className="author-name">{item.author}</span>
                                                        <span className="author-time">{item.time}</span>
                                                    </div>

                                                    <div className="icon-card-small">
                                                        <img src={item.iconComment} alt="comment" className="icon-comment" />
                                                        <img src={item.iconShare} alt="share" className="icon-share" />
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                        <div className="line"></div>
                                    </>
                                ))}
                                <a className="bt-readmore">Xem thêm</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}