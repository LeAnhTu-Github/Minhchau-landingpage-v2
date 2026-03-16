import { Code, Zap, ShieldCheck, Search, Link2, Microscope, LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  short: string;
  desc: string;
  icon: LucideIcon;
  color: string;
  bullets: string[];
  cta: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  value: string;
  img: string;
  desc: string;
  problem: string;
  solution: string;
  results: string;
}

export const SERVICES: Service[] = [
  {
    id: "software",
    title: "Phát triển phần mềm & chuyển đổi số",
    short: "Phát triển phần mềm theo yêu cầu",
    desc: "Chúng tôi xây mới hoặc nâng cấp hệ thống phần mềm phục vụ nghiệp vụ doanh nghiệp, ưu tiên tính ổn định, khả năng mở rộng và bảo mật. Phù hợp với các dự án cần xử lý nghiệp vụ phức tạp hoặc hệ thống tải cao.",
    icon: Code,
    color: "from-cyan-500 to-blue-600",
    bullets: [
      "Web/app, portal, dashboard vận hành",
      "Nâng cấp/tối ưu hệ thống hiện hữu",
      "Tích hợp API, đồng bộ dữ liệu"
    ],
    cta: "Nhận tư vấn giải pháp phần mềm"
  },
  {
    id: "telecom",
    title: "Tích hợp hệ thống & viễn thông",
    short: "Tích hợp hệ thống viễn thông",
    desc: "Minh Châu có năng lực tích hợp hệ thống viễn thông theo yêu cầu dự án, bao gồm các nền tảng và kết nối như IP/SS7/HLR/IN. Chúng tôi tập trung vào tính ổn định, liên thông dữ liệu và khả năng vận hành bền vững.",
    icon: Link2,
    color: "from-amber-400 to-orange-600",
    bullets: [
      "Liên thông hệ thống, tích hợp nền tảng",
      "Thiết kế luồng dữ liệu & kiểm soát rủi ro",
      "Hỗ trợ vận hành sau triển khai"
    ],
    cta: "Trao đổi yêu cầu tích hợp"
  },
  {
    id: "sla",
    title: "Vận hành – bảo trì – SLA",
    short: "Vận hành theo SLA",
    desc: "Sau khi go-live, tính ổn định quyết định hiệu quả dự án. Minh Châu cung cấp dịch vụ vận hành–bảo trì theo SLA, hỗ trợ xử lý sự cố, bảo trì định kỳ và đề xuất cải tiến vận hành.",
    icon: ShieldCheck,
    color: "from-emerald-400 to-teal-600",
    bullets: [
      "Tiếp nhận & phân loại sự cố theo mức độ",
      "Bảo trì định kỳ, tối ưu hiệu năng",
      "Báo cáo vận hành & khuyến nghị cải tiến"
    ],
    cta: "Nhận đề xuất SLA"
  },
  {
    id: "qa",
    title: "Kiểm thử & đảm bảo chất lượng",
    short: "Kiểm thử QA",
    desc: "Minh Châu triển khai hoạt động kiểm thử từ phân tích yêu cầu đến xây dựng test plan, test case và báo cáo chất lượng, hỗ trợ nghiệm thu và bàn giao tài liệu theo tiêu chuẩn dự án.",
    icon: Microscope,
    color: "from-purple-500 to-indigo-600",
    bullets: [
      "Test chức năng, hồi quy (tuỳ dự án)",
      "Báo cáo lỗi & theo dõi khắc phục",
      "Tài liệu kiểm thử phục vụ nghiệm thu"
    ],
    cta: "Nhận gói QA"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "vr-360",
    title: "VR 360",
    client: "MobiFone IT Center",
    value: "993.000.000 VNĐ",
    category: "Multimedia/VR",
    img: "/projects/vr-360.jpg",
    desc: "Phát triển nền tảng thực tế ảo hỗ trợ trải nghiệm số cho trung tâm dữ liệu.",
    problem: "MobiFone IT Center cần một giải pháp tham quan thực tế ảo (VR 360) hiện đại để giới thiệu các trung tâm hạ tầng và showroom số hóa, giúp khách hàng trải nghiệm không gian mà không cần trực tiếp có mặt.",
    solution: "Minh Châu đã triển khai quay chụp 360 chất lượng cao, xây dựng nền tảng tương tác VR trên web/app, tích hợp các điểm nóng (hotspots) thông tin và tối ưu hóa luồng tải dữ liệu lớn đảm bảo trải nghiệm mượt mà trên mọi thiết bị.",
    results: "Dự án đã bàn giao đúng hạn với tài liệu hướng dẫn vận hành chi tiết. Hệ thống chạy ổn định, giảm 40% chi phí dẫn khách tham quan trực tiếp và nhận được phản hồi tích cực về tính thực tế, sinh động của sản phẩm số."
  },
  {
    id: "scall-vnpt",
    title: "Tổng đài di động SCall",
    client: "VNPT Vĩnh Phúc",
    value: "850.000.000 VNĐ",
    category: "Viễn thông",
    img: "https://media-vnpt.vnptvas.vn/Media/Images/upload_images/images/202506/img_vm_2506241423417453.jpg", // Replace standard with local if available, keeping local for consistency if provided
    desc: "Nâng cấp hệ thống lõi để đáp ứng tải cao và tích hợp tính năng viễn thông mới.",
    problem: "Hệ thống tổng đài di động cũ của VNPT Vĩnh Phúc gặp hiện tượng nghẽn mạch khi tải cao và thiếu khả năng tích hợp linh hoạt các dịch vụ GTGT mới.",
    solution: "Minh Châu thực hiện nâng cấp core hệ thống, tối ưu hóa database và xây dựng API gateway để kết nối các dịch vụ ngoại vi. Quy trình được thực hiện theo từng bước, có POC kiểm chứng trước khi chuyển đổi toàn diện.",
    results: "Hệ thống hoạt động ổn định 24/7 sau khi nâng cấp, thời gian xử lý cuộc gọi nhanh hơn 30%, quy trình vận hành được đơn giản hóa thông qua các báo cáo dashboard trực quan."
  },
  {
    id: "bhxh-icorp",
    title: "Phần mềm BHXH",
    client: "ICORP",
    value: "654.215.150 VNĐ",
    category: "Phần mềm",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    desc: "Tối ưu hóa quy trình xử lý dữ liệu bảo hiểm và cải thiện giao diện quản trị.",
    problem: "Hệ thống quản lý BHXH tại ICORP cần đồng bộ hóa dữ liệu tập trung và nâng cấp giao diện người dùng để tăng hiệu suất xử lý hồ sơ.",
    solution: "Phát triển các module nghiệp vụ mới, tối ưu hóa quy trình nhập liệu và xây dựng hệ thống phân quyền/bảo mật đa lớp. Bàn giao đầy đủ tài liệu thiết kế và hướng dẫn nghiệm thu.",
    results: "Dữ liệu được đồng bộ hóa hoàn toàn, giảm sai sót trong nghiệp vụ và giúp cán bộ xử lý hồ sơ nhanh chóng, thuận tiện hơn."
  },
  {
    id: "mnp-repair",
    title: "Chuyển mạng giữ số online",
    client: "Dự án sửa chữa",
    value: "966.175.041 VNĐ",
    category: "Viễn thông",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51",
    desc: "Xử lý lỗi logic trong luồng chuyển mạng online và bảo trì định kỳ.",
    problem: "Hệ thống chuyển mạng giữ số (MNP) hiện hữu gặp lỗi trong quá trình liên thông dữ liệu giữa các nhà mạng, gây gián đoạn dịch vụ cho người dùng.",
    solution: "Phân tích log, fix lỗi logic trong kết nối SS7/IP và bổ sung các kịch bản kiểm thử (test cases) để đảm bảo không tái phát lỗi sau khi sửa chữa.",
    results: "Tỷ lệ chuyển mạng thành công tăng lên 99%, giảm thiểu khiếu nại của khách hàng và đảm bảo tính liên tục của dịch vụ viễn thông."
  }
];
