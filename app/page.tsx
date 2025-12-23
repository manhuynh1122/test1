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
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M14.9064 5.51334L14.7131 3.66668C14.4331 1.65334 13.5198 0.833344 11.5664 0.833344H9.9931H9.00643H6.97977H5.9931H4.3931C2.4331 0.833344 1.52643 1.65334 1.23977 3.68668L1.05977 5.52001C0.9931 6.23334 1.18643 6.92668 1.60643 7.46668C2.1131 8.12668 2.8931 8.50001 3.75977 8.50001C4.59977 8.50001 5.40643 8.08001 5.9131 7.40668C6.36643 8.08001 7.13977 8.50001 7.99977 8.50001C8.85977 8.50001 9.6131 8.10001 10.0731 7.43334C10.5864 8.09334 11.3798 8.50001 12.2064 8.50001C13.0931 8.50001 13.8931 8.10668 14.3931 7.41334C14.7931 6.88001 14.9731 6.20668 14.9064 5.51334Z" fill="#B5191D" />
                                    <path d="M7.56675 11.1067C6.72008 11.1933 6.08008 11.9133 6.08008 12.7667V14.5933C6.08008 14.7733 6.22674 14.92 6.40674 14.92H9.58675C9.76675 14.92 9.91341 14.7733 9.91341 14.5933V13C9.92008 11.6067 9.10008 10.9467 7.56675 11.1067Z" fill="#B5191D" />
                                    <path d="M14.2463 9.59999V11.5867C14.2463 13.4267 12.7529 14.92 10.9129 14.92C10.7329 14.92 10.5863 14.7733 10.5863 14.5933V13C10.5863 12.1467 10.3263 11.48 9.8196 11.0267C9.37293 10.62 8.76626 10.42 8.01293 10.42C7.84626 10.42 7.6796 10.4267 7.4996 10.4467C6.31293 10.5667 5.41293 11.5667 5.41293 12.7667V14.5933C5.41293 14.7733 5.26626 14.92 5.08626 14.92C3.24626 14.92 1.75293 13.4267 1.75293 11.5867V9.61332C1.75293 9.14666 2.21293 8.83332 2.64626 8.98666C2.82626 9.04666 3.00626 9.09332 3.19293 9.11999C3.27293 9.13332 3.3596 9.14666 3.4396 9.14666C3.54626 9.15999 3.65293 9.16666 3.7596 9.16666C4.53293 9.16666 5.29293 8.87999 5.89293 8.38666C6.46626 8.87999 7.21293 9.16666 7.9996 9.16666C8.79293 9.16666 9.52626 8.89332 10.0996 8.39999C10.6996 8.88666 11.4463 9.16666 12.2063 9.16666C12.3263 9.16666 12.4463 9.15999 12.5596 9.14666C12.6396 9.13999 12.7129 9.13332 12.7863 9.11999C12.9929 9.09332 13.1796 9.03332 13.3663 8.97332C13.7996 8.82666 14.2463 9.14666 14.2463 9.59999Z" fill="#B5191D" />
                                </svg>
                            </div>
                            <div className="title-shop">Shop</div>
                        </a>
                        <a className="login-header">
                            <div className="logo-login">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M8.00033 8.00001C9.84127 8.00001 11.3337 6.50763 11.3337 4.66668C11.3337 2.82573 9.84127 1.33334 8.00033 1.33334C6.15938 1.33334 4.66699 2.82573 4.66699 4.66668C4.66699 6.50763 6.15938 8.00001 8.00033 8.00001Z" fill="white" />
                                    <path d="M8.00043 9.66666C4.66043 9.66666 1.94043 11.9067 1.94043 14.6667C1.94043 14.8533 2.0871 15 2.27376 15H13.7271C13.9138 15 14.0604 14.8533 14.0604 14.6667C14.0604 11.9067 11.3404 9.66666 8.00043 9.66666Z" fill="white" />
                                </svg>
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
                            placeholder="Tìm kiếm theo chủ đề hoặc bộ môn"
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M8.00033 8.00001C9.84127 8.00001 11.3337 6.50763 11.3337 4.66668C11.3337 2.82573 9.84127 1.33334 8.00033 1.33334C6.15938 1.33334 4.66699 2.82573 4.66699 4.66668C4.66699 6.50763 6.15938 8.00001 8.00033 8.00001Z" fill="white" />
                                        <path d="M8.00043 9.66666C4.66043 9.66666 1.94043 11.9067 1.94043 14.6667C1.94043 14.8533 2.0871 15 2.27376 15H13.7271C13.9138 15 14.0604 14.8533 14.0604 14.6667C14.0604 11.9067 11.3404 9.66666 8.00043 9.66666Z" fill="white" />
                                    </svg>
                                </div>

                                <input
                                    className="placeholder"
                                    type="text"
                                    placeholder="Chia sẻ chủ đề mới với chúng tôi..."
                                />
                            </div>

                            <div className="icon-edit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3.69332 13.0133C3.28666 13.0133 2.90666 12.8733 2.63332 12.6133C2.28666 12.2867 2.11999 11.7933 2.17999 11.26L2.42666 9.09999C2.47332 8.69332 2.71999 8.15333 3.00666 7.85999L8.47999 2.06666C9.84666 0.619992 11.2733 0.579992 12.72 1.94666C14.1667 3.31333 14.2067 4.73999 12.84 6.18666L7.36666 11.98C7.08666 12.28 6.56666 12.56 6.15999 12.6267L4.01332 12.9933C3.89999 13 3.79999 13.0133 3.69332 13.0133ZM10.62 1.93999C10.1067 1.93999 9.65999 2.25999 9.20666 2.73999L3.73332 8.53999C3.59999 8.67999 3.44666 9.01333 3.41999 9.20666L3.17332 11.3667C3.14666 11.5867 3.19999 11.7667 3.31999 11.88C3.43999 11.9933 3.61999 12.0333 3.83999 12L5.98666 11.6333C6.17999 11.6 6.49999 11.4267 6.63332 11.2867L12.1067 5.49332C12.9333 4.61332 13.2333 3.79999 12.0267 2.66666C11.4933 2.15333 11.0333 1.93999 10.62 1.93999Z" fill="#52524F" />
                                    <path d="M11.56 7.30001C11.5466 7.30001 11.5266 7.30001 11.5133 7.30001C9.4333 7.09334 7.75996 5.51334 7.43996 3.44668C7.39996 3.17334 7.58663 2.92001 7.85996 2.87334C8.1333 2.83334 8.38663 3.02001 8.4333 3.29334C8.68663 4.90668 9.9933 6.14668 11.62 6.30668C11.8933 6.33334 12.0933 6.58001 12.0666 6.85334C12.0333 7.10668 11.8133 7.30001 11.56 7.30001Z" fill="#52524F" />
                                    <path d="M14 15.1667H2C1.72667 15.1667 1.5 14.94 1.5 14.6667C1.5 14.3933 1.72667 14.1667 2 14.1667H14C14.2733 14.1667 14.5 14.3933 14.5 14.6667C14.5 14.94 14.2733 15.1667 14 15.1667Z" fill="#52524F" />
                                </svg>
                            </div>
                        </div>
                        <a href="#">
                            <img className="img-center-header" src="img/image 16.png" alt="" />
                        </a>
                        <div className="card-big">
                            <a className="header-card-big">
                                <div className="account-header">
                                    <div className="avatar-header">
                                        <img src="img/Rectangle 1.png" alt="avatar" />
                                    </div>
                                    <div className="name-header">
                                        <div className="name">
                                            <div className="text-name">Kiet Phan</div>
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                    <path d="M10.7804 5.37003L10.1004 4.58003C9.97043 4.43003 9.86543 4.15003 9.86543 3.95003V3.10003C9.86543 2.57003 9.43043 2.13503 8.90043 2.13503H8.05043C7.85543 2.13503 7.57043 2.03003 7.42043 1.90003L6.63043 1.22003C6.28543 0.925029 5.72043 0.925029 5.37043 1.22003L4.58543 1.90503C4.43543 2.03003 4.15043 2.13503 3.95543 2.13503H3.09043C2.56043 2.13503 2.12543 2.57003 2.12543 3.10003V3.95503C2.12543 4.15003 2.02043 4.43003 1.89543 4.58003L1.22043 5.37503C0.93043 5.72003 0.93043 6.28003 1.22043 6.62503L1.89543 7.42003C2.02043 7.57003 2.12543 7.85003 2.12543 8.04503V8.90003C2.12543 9.43003 2.56043 9.86503 3.09043 9.86503H3.95543C4.15043 9.86503 4.43543 9.97003 4.58543 10.1L5.37543 10.78C5.72043 11.075 6.28543 11.075 6.63543 10.78L7.42543 10.1C7.57543 9.97003 7.85543 9.86503 8.05543 9.86503H8.90543C9.43543 9.86503 9.87043 9.43003 9.87043 8.90003V8.05003C9.87043 7.85503 9.97543 7.57003 10.1054 7.42003L10.7854 6.63003C11.0754 6.28503 11.0754 5.71503 10.7804 5.37003ZM8.08043 5.05503L5.66543 7.47003C5.59543 7.54003 5.50043 7.58003 5.40043 7.58003C5.30043 7.58003 5.20543 7.54003 5.13543 7.47003L3.92543 6.26003C3.78043 6.11503 3.78043 5.87503 3.92543 5.73003C4.07043 5.58503 4.31043 5.58503 4.45543 5.73003L5.40043 6.67503L7.55043 4.52503C7.69543 4.38003 7.93543 4.38003 8.08043 4.52503C8.22543 4.67003 8.22543 4.91003 8.08043 5.05503Z" fill="#B72424" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="time">2 giờ trước</div>
                                    </div>
                                </div>
                            </a>
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
                                            <a href="#" className="icon-comment">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                    <path d="M4.95866 11.0833H4.66699C2.33366 11.0833 1.16699 10.5 1.16699 7.58329V4.66663C1.16699 2.33329 2.33366 1.16663 4.66699 1.16663H9.33366C11.667 1.16663 12.8337 2.33329 12.8337 4.66663V7.58329C12.8337 9.91663 11.667 11.0833 9.33366 11.0833H9.04199C8.86116 11.0833 8.68616 11.1708 8.57533 11.3166L7.70033 12.4833C7.31533 12.9966 6.68533 12.9966 6.30033 12.4833L5.42533 11.3166C5.33199 11.1883 5.11616 11.0833 4.95866 11.0833Z" stroke="#52524F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M9.33143 6.41667H9.33667" stroke="#52524F" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M6.99745 6.41667H7.00269" stroke="#52524F" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M4.66346 6.41667H4.6687" stroke="#52524F" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </a>
                                            <div className="text">Bình luận</div>
                                        </div>
                                        <div className="share">
                                            <a href="#" className="icon-share">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                    <path d="M7.58301 6.41663L12.3663 1.6333" stroke="#52524F" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M12.8332 3.96663V1.16663H10.0332" stroke="#52524F" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M6.41699 1.16663H5.25033C2.33366 1.16663 1.16699 2.33329 1.16699 5.24996V8.74996C1.16699 11.6666 2.33366 12.8333 5.25033 12.8333H8.75033C11.667 12.8333 12.8337 11.6666 12.8337 8.74996V7.58329" stroke="#52524F" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </a>
                                            <div className="text">Chia sẻ</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-big">
                            <a className="header-card-big">
                                <div className="account-header">
                                    <div className="avatar-header">
                                        <img src="img/Rectangle 1.png" alt="avatar" />
                                    </div>
                                    <div className="name-header">
                                        <div className="name">
                                            <div className="text-name">Kiet Phan</div>
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                    <path d="M10.7804 5.37003L10.1004 4.58003C9.97043 4.43003 9.86543 4.15003 9.86543 3.95003V3.10003C9.86543 2.57003 9.43043 2.13503 8.90043 2.13503H8.05043C7.85543 2.13503 7.57043 2.03003 7.42043 1.90003L6.63043 1.22003C6.28543 0.925029 5.72043 0.925029 5.37043 1.22003L4.58543 1.90503C4.43543 2.03003 4.15043 2.13503 3.95543 2.13503H3.09043C2.56043 2.13503 2.12543 2.57003 2.12543 3.10003V3.95503C2.12543 4.15003 2.02043 4.43003 1.89543 4.58003L1.22043 5.37503C0.93043 5.72003 0.93043 6.28003 1.22043 6.62503L1.89543 7.42003C2.02043 7.57003 2.12543 7.85003 2.12543 8.04503V8.90003C2.12543 9.43003 2.56043 9.86503 3.09043 9.86503H3.95543C4.15043 9.86503 4.43543 9.97003 4.58543 10.1L5.37543 10.78C5.72043 11.075 6.28543 11.075 6.63543 10.78L7.42543 10.1C7.57543 9.97003 7.85543 9.86503 8.05543 9.86503H8.90543C9.43543 9.86503 9.87043 9.43003 9.87043 8.90003V8.05003C9.87043 7.85503 9.97543 7.57003 10.1054 7.42003L10.7854 6.63003C11.0754 6.28503 11.0754 5.71503 10.7804 5.37003ZM8.08043 5.05503L5.66543 7.47003C5.59543 7.54003 5.50043 7.58003 5.40043 7.58003C5.30043 7.58003 5.20543 7.54003 5.13543 7.47003L3.92543 6.26003C3.78043 6.11503 3.78043 5.87503 3.92543 5.73003C4.07043 5.58503 4.31043 5.58503 4.45543 5.73003L5.40043 6.67503L7.55043 4.52503C7.69543 4.38003 7.93543 4.38003 8.08043 4.52503C8.22543 4.67003 8.22543 4.91003 8.08043 5.05503Z" fill="#B72424" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="time">2 giờ trước</div>
                                    </div>
                                </div>
                            </a>
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
                                            <a href="#" className="icon-comment">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                    <path d="M4.95866 11.0833H4.66699C2.33366 11.0833 1.16699 10.5 1.16699 7.58329V4.66663C1.16699 2.33329 2.33366 1.16663 4.66699 1.16663H9.33366C11.667 1.16663 12.8337 2.33329 12.8337 4.66663V7.58329C12.8337 9.91663 11.667 11.0833 9.33366 11.0833H9.04199C8.86116 11.0833 8.68616 11.1708 8.57533 11.3166L7.70033 12.4833C7.31533 12.9966 6.68533 12.9966 6.30033 12.4833L5.42533 11.3166C5.33199 11.1883 5.11616 11.0833 4.95866 11.0833Z" stroke="#52524F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M9.33143 6.41667H9.33667" stroke="#52524F" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M6.99745 6.41667H7.00269" stroke="#52524F" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M4.66346 6.41667H4.6687" stroke="#52524F" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </a>
                                            <div className="text">Bình luận</div>
                                        </div>
                                        <div className="share">
                                            <a href="#" className="icon-share">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                    <path d="M7.58301 6.41663L12.3663 1.6333" stroke="#52524F" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M12.8332 3.96663V1.16663H10.0332" stroke="#52524F" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M6.41699 1.16663H5.25033C2.33366 1.16663 1.16699 2.33329 1.16699 5.24996V8.74996C1.16699 11.6666 2.33366 12.8333 5.25033 12.8333H8.75033C11.667 12.8333 12.8337 11.6666 12.8337 8.74996V7.58329" stroke="#52524F" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </a>
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
                            <a className="header-card-big">
                                <div className="account-header">
                                    <div className="avatar-header">
                                        <img src="img/Rectangle 1.png" alt="avatar" />
                                    </div>
                                    <div className="name-header">
                                        <div className="name">
                                            <div className="text-name">Kiet Phan</div>
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                    <path d="M10.7804 5.37003L10.1004 4.58003C9.97043 4.43003 9.86543 4.15003 9.86543 3.95003V3.10003C9.86543 2.57003 9.43043 2.13503 8.90043 2.13503H8.05043C7.85543 2.13503 7.57043 2.03003 7.42043 1.90003L6.63043 1.22003C6.28543 0.925029 5.72043 0.925029 5.37043 1.22003L4.58543 1.90503C4.43543 2.03003 4.15043 2.13503 3.95543 2.13503H3.09043C2.56043 2.13503 2.12543 2.57003 2.12543 3.10003V3.95503C2.12543 4.15003 2.02043 4.43003 1.89543 4.58003L1.22043 5.37503C0.93043 5.72003 0.93043 6.28003 1.22043 6.62503L1.89543 7.42003C2.02043 7.57003 2.12543 7.85003 2.12543 8.04503V8.90003C2.12543 9.43003 2.56043 9.86503 3.09043 9.86503H3.95543C4.15043 9.86503 4.43543 9.97003 4.58543 10.1L5.37543 10.78C5.72043 11.075 6.28543 11.075 6.63543 10.78L7.42543 10.1C7.57543 9.97003 7.85543 9.86503 8.05543 9.86503H8.90543C9.43543 9.86503 9.87043 9.43003 9.87043 8.90003V8.05003C9.87043 7.85503 9.97543 7.57003 10.1054 7.42003L10.7854 6.63003C11.0754 6.28503 11.0754 5.71503 10.7804 5.37003ZM8.08043 5.05503L5.66543 7.47003C5.59543 7.54003 5.50043 7.58003 5.40043 7.58003C5.30043 7.58003 5.20543 7.54003 5.13543 7.47003L3.92543 6.26003C3.78043 6.11503 3.78043 5.87503 3.92543 5.73003C4.07043 5.58503 4.31043 5.58503 4.45543 5.73003L5.40043 6.67503L7.55043 4.52503C7.69543 4.38003 7.93543 4.38003 8.08043 4.52503C8.22543 4.67003 8.22543 4.91003 8.08043 5.05503Z" fill="#B72424" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="time">2 giờ trước</div>
                                    </div>
                                </div>
                            </a>
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
                                            <a href="#" className="icon-comment">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                    <path d="M4.95866 11.0833H4.66699C2.33366 11.0833 1.16699 10.5 1.16699 7.58329V4.66663C1.16699 2.33329 2.33366 1.16663 4.66699 1.16663H9.33366C11.667 1.16663 12.8337 2.33329 12.8337 4.66663V7.58329C12.8337 9.91663 11.667 11.0833 9.33366 11.0833H9.04199C8.86116 11.0833 8.68616 11.1708 8.57533 11.3166L7.70033 12.4833C7.31533 12.9966 6.68533 12.9966 6.30033 12.4833L5.42533 11.3166C5.33199 11.1883 5.11616 11.0833 4.95866 11.0833Z" stroke="#52524F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M9.33143 6.41667H9.33667" stroke="#52524F" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M6.99745 6.41667H7.00269" stroke="#52524F" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M4.66346 6.41667H4.6687" stroke="#52524F" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </a>
                                            <div className="text">Bình luận</div>
                                        </div>
                                        <div className="share">
                                            <a href="#" className="icon-share">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                    <path d="M7.58301 6.41663L12.3663 1.6333" stroke="#52524F" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M12.8332 3.96663V1.16663H10.0332" stroke="#52524F" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M6.41699 1.16663H5.25033C2.33366 1.16663 1.16699 2.33329 1.16699 5.24996V8.74996C1.16699 11.6666 2.33366 12.8333 5.25033 12.8333H8.75033C11.667 12.8333 12.8337 11.6666 12.8337 8.74996V7.58329" stroke="#52524F" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </a>
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
                                                    className=""
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
                                                        <a href="#" className="icon-comment">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                                <path d="M4.95866 11.0833H4.66699C2.33366 11.0833 1.16699 10.5 1.16699 7.58329V4.66663C1.16699 2.33329 2.33366 1.16663 4.66699 1.16663H9.33366C11.667 1.16663 12.8337 2.33329 12.8337 4.66663V7.58329C12.8337 9.91663 11.667 11.0833 9.33366 11.0833H9.04199C8.86116 11.0833 8.68616 11.1708 8.57533 11.3166L7.70033 12.4833C7.31533 12.9966 6.68533 12.9966 6.30033 12.4833L5.42533 11.3166C5.33199 11.1883 5.11616 11.0833 4.95866 11.0833Z" stroke="#52524F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M9.33143 6.41667H9.33667" stroke="#52524F" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M6.99745 6.41667H7.00269" stroke="#52524F" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M4.66346 6.41667H4.6687" stroke="#52524F" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                        <a href="#" className="icon-share">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                                <path d="M7.58301 6.41663L12.3663 1.6333" stroke="#52524F" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M12.8332 3.96663V1.16663H10.0332" stroke="#52524F" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M6.41699 1.16663H5.25033C2.33366 1.16663 1.16699 2.33329 1.16699 5.24996V8.74996C1.16699 11.6666 2.33366 12.8333 5.25033 12.8333H8.75033C11.667 12.8333 12.8337 11.6666 12.8337 8.74996V7.58329" stroke="#52524F" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                    </div>

                                                </div>
                                            </div>

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
                                                    className=""
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
                                                        <a href="#" className="icon-comment">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                                <path d="M4.95866 11.0833H4.66699C2.33366 11.0833 1.16699 10.5 1.16699 7.58329V4.66663C1.16699 2.33329 2.33366 1.16663 4.66699 1.16663H9.33366C11.667 1.16663 12.8337 2.33329 12.8337 4.66663V7.58329C12.8337 9.91663 11.667 11.0833 9.33366 11.0833H9.04199C8.86116 11.0833 8.68616 11.1708 8.57533 11.3166L7.70033 12.4833C7.31533 12.9966 6.68533 12.9966 6.30033 12.4833L5.42533 11.3166C5.33199 11.1883 5.11616 11.0833 4.95866 11.0833Z" stroke="#52524F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M9.33143 6.41667H9.33667" stroke="#52524F" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M6.99745 6.41667H7.00269" stroke="#52524F" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M4.66346 6.41667H4.6687" stroke="#52524F" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                        <a href="#" className="icon-share">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                                <path d="M7.58301 6.41663L12.3663 1.6333" stroke="#52524F" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M12.8332 3.96663V1.16663H10.0332" stroke="#52524F" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M6.41699 1.16663H5.25033C2.33366 1.16663 1.16699 2.33329 1.16699 5.24996V8.74996C1.16699 11.6666 2.33366 12.8333 5.25033 12.8333H8.75033C11.667 12.8333 12.8337 11.6666 12.8337 8.74996V7.58329" stroke="#52524F" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                    </div>

                                                </div>
                                            </div>

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
                                                    className=""
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
                                                        <a href="#" className="icon-comment">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                                <path d="M4.95866 11.0833H4.66699C2.33366 11.0833 1.16699 10.5 1.16699 7.58329V4.66663C1.16699 2.33329 2.33366 1.16663 4.66699 1.16663H9.33366C11.667 1.16663 12.8337 2.33329 12.8337 4.66663V7.58329C12.8337 9.91663 11.667 11.0833 9.33366 11.0833H9.04199C8.86116 11.0833 8.68616 11.1708 8.57533 11.3166L7.70033 12.4833C7.31533 12.9966 6.68533 12.9966 6.30033 12.4833L5.42533 11.3166C5.33199 11.1883 5.11616 11.0833 4.95866 11.0833Z" stroke="#52524F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M9.33143 6.41667H9.33667" stroke="#52524F" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M6.99745 6.41667H7.00269" stroke="#52524F" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M4.66346 6.41667H4.6687" stroke="#52524F" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                        <a href="#" className="icon-share">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                                <path d="M7.58301 6.41663L12.3663 1.6333" stroke="#52524F" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M12.8332 3.96663V1.16663H10.0332" stroke="#52524F" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M6.41699 1.16663H5.25033C2.33366 1.16663 1.16699 2.33329 1.16699 5.24996V8.74996C1.16699 11.6666 2.33366 12.8333 5.25033 12.8333H8.75033C11.667 12.8333 12.8337 11.6666 12.8337 8.74996V7.58329" stroke="#52524F" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
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
                                                    className=""
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
                                                        <a href="#" className="icon-comment">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                                <path d="M4.95866 11.0833H4.66699C2.33366 11.0833 1.16699 10.5 1.16699 7.58329V4.66663C1.16699 2.33329 2.33366 1.16663 4.66699 1.16663H9.33366C11.667 1.16663 12.8337 2.33329 12.8337 4.66663V7.58329C12.8337 9.91663 11.667 11.0833 9.33366 11.0833H9.04199C8.86116 11.0833 8.68616 11.1708 8.57533 11.3166L7.70033 12.4833C7.31533 12.9966 6.68533 12.9966 6.30033 12.4833L5.42533 11.3166C5.33199 11.1883 5.11616 11.0833 4.95866 11.0833Z" stroke="#52524F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M9.33143 6.41667H9.33667" stroke="#52524F" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M6.99745 6.41667H7.00269" stroke="#52524F" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M4.66346 6.41667H4.6687" stroke="#52524F" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                        <a href="#" className="icon-share">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                                <path d="M7.58301 6.41663L12.3663 1.6333" stroke="#52524F" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M12.8332 3.96663V1.16663H10.0332" stroke="#52524F" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M6.41699 1.16663H5.25033C2.33366 1.16663 1.16699 2.33329 1.16699 5.24996V8.74996C1.16699 11.6666 2.33366 12.8333 5.25033 12.8333H8.75033C11.667 12.8333 12.8337 11.6666 12.8337 8.74996V7.58329" stroke="#52524F" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
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
                    </div>
                </div>
            </div>
        </div>

    );
}