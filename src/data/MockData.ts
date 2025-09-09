// MockData.ts
//Type
export type Venue = {
  id: number | string;
  name: string;
  img: string;
  view: number;
};

export type Sales = {
  id: number | string;
  name: string;
  img: string;
  percent: string;
};

export type Abroad = {
  id: number | string;
  name: string;
  img: string;
  view: number;
};

export type News = {
  id: number | string;
  name: string;
  img: string;
  view: number;
};


//Data
//Venue
export const topVenues: Venue[] = [
  {
    id: 1,
    name: "Vũng Tàu",
    img: "/logocochu_real.png",
    view: 12345,
  },
  {
    id: 2,
    name: "Đà Lạt",
    img: "/logocochu_real.png",
    view: 98765,
  },
  {
    id: 3,
    name: "Hà Nội",
    img: "/logocochu_real.png",
    view: 54321,
  },
  {
    id: 4,
    name: "Đà Nẵng",
    img: "/logocochu_real.png", 
    view: 12345,
  },
  {
    id: 5,
    name: "Phan Thiết",
    img: "/logocochu_real.png",
    view: 98765,
  },
  {
    id: 6,
    name: "Huế",
    img: "/logocochu_real.png",
    view: 54321,
  },
];

//Sale
export const topSales: Sales[] = [
  {
    id: 1,
    name: "Siêu sale 9.9",
    img: "/logocochu_real.png",
    percent: "90%",
  },
  {
    id: 2,
    name: "Sale banh chành",
    img: "/logocochu_real.png",
    percent: "50%",
  },
  {
    id: 3,
    name: "Sắp sửa sale",
    img: "/logocochu_real.png",
    percent: "?0%",
  },
  {
    id: 4,
    name: "Sale Siêu Sập",
    img: "/logocochu_real.png",
    percent: "36%",
  },
  {
    id: 5,
    name: "SALE",
    img: "/logocochu_real.png",
    percent: ">50%",
  },
];

//Abroad
export const topAbroad: Abroad[] = [
  {
    id: 1,
    name: "Campuchia",
    img: "/logocochu_real.png", 
    view: 12345,
  },
  {
    id: 2,
    name: "Cambodia",
    img: "/logocochu_real.png",
    view: 98765,
  },
  {
    id: 3,
    name: "Phnong Penh",
    img: "/logocochu_real.png",
    view: 54321,
  },
  {
    id: 4,
    name: "Indonesia",
    img: "/logocochu_real.png",
    view: 12345,
  },
  {
    id: 5,
    name: "Ukraine",
    img: "/logocochu_real.png",
    view: 98765,
  },
  {
    id: 6,
    name: "ISrael",
    img: "/logocochu_real.png",
    view: 54321,
  },
];

//News
export const topNews: News[] = [
  {
    id: 1,
    name: "Quá vô nhân đạo, bất lương!!!",
    img: "/news/quavodao.png",
    view: 12345,
  },
  {
    id: 2,
    name: "Không làm được thì đứng sang một bên!!! Để người khác làm",
    img: "/news/kolamduoc.png",
    view: 98765,
  },
  {
    id: 3,
    name: "Nếu như mất điện, một số đồng chí phải mất chức",
    img: "/news/neudematdien.jpg",
    view: 54321,
  },
  {
    id: 4,
    name: "Cực sốc!!! Sộc...",
    img: "/logocochu_real.png", 
    view: 12345,
  },
  {
    id: 5,
    name: "EVN liên tục báo lỗ!!! Chuyên gia nói gì?",
    img: "/logocochu_real.png",
    view: 98765,
  },
];

//Locations
export const mockLocations = [
  "Hà Nội",
  "Hồ Chí Minh",
  "Đà Nẵng",
  "Nha Trang",
  "Cần Thơ",
  "Huế",
];
