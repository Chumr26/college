import { ImageWithFallback } from '../../components/ImageWithFallback';

const timeline = [
    {
        date: '05/06/2000',
        description:
            'UBND Tp.HCM có công văn số 1821/UB-VX gửi Bộ Giáo dục và Đào tạo, về việc chấp thuận và đề nghị Bộ ra quyết định thành lập trường theo thẩm quyền.',
    },
    {
        date: '27/04/2001',
        description:
            'Chính phủ ra nghị quyết số 07/2000NQ-CP về việc xây dựng và phát triển Công nghệ phần mềm giai đoạn 2000-2005.',
    },
    {
        date: '21/10/2004',
        description:
            'Chính phủ ký quyết định số 86/2000/QĐ-TTg về việc ban hành quy chế Trường Đại học Dân lập.',
    },
    {
        date: '18/11/2004',
        description:
            'Vụ tổ chức cán bộ thuộc Bộ Giáo dục và Đào tạo có công văn số 7246/TCCB, về việc hướng dẫn hoàn  chỉnh hồ sơ xin thành lập trường theo quy chế trường Đại học Dân lập vừa được chính phủ ban hành.',
    },
    {
        date: '17/12/2004',
        description:
            'Bộ Giáo dục và Đào tạo gửi công văn số 8956/TCCB trình chính phủ xem xét thẩm định 6 trường ĐH,  CĐ ngoài công lập thuộc diện ưu tiên cho thành lập trước, trong đó có Trường Cao đẳng dân lập Công  nghệ  Điện - Tin học - Viễn thông Tp. Hồ Chí Minh.',
    },
    {
        date: '18/12/2004',
        description:
            'Đoàn công tác liên bộ: Bộ Giáo dục và Đào tạo, Bộ Kế hoạch và Đầu tư, Ban tổ chức cán bộ chính phủ  đã đến khảo sát và thẩm định điều kiện thành lập Trường Cao đẳng Dân lập Công nghệ Điện Tử - Tin  Học -  Viễn Thông Tp.HCM, Đoàn kết luận: đủ điều kiện và đề nghị Bộ Giáo dục và Đào tạo ra quyết định  cho thành lập.',
    },
    {
        date: '09/09/2005',
        description:
            'Bộ Chính trị ra chỉ thị 58/CT-TW chỉ rõ tính cấp bách và tầm quan trọng của việc đẩy mạnh phát triển và  ứng dụng Công Nghệ Thông Tin.',
    },
    {
        date: '10/01/2008',
        description:
            'Được sự gợi ý của Văn phòng Chính phủ và sự đồng ý của Bộ Giáo dục và Đào tạo, Hội Vô tuyến Điện - Điện tử Tp.HCM đã có công văn số 05-01/CV-HVT ngày 21/02/2001, xin đề nghị đổi tên thành Trường:Tên đầy đủ: Trường Cao đẳng Dân lập Công Nghệ Thông Tin Tp.HCM.Tên viết tắt: Trường Cao đẳng Công Nghệ Thông Tin Tp.HCM.Tên giao dịch quốc tế: ITC HCMC (Information Technology College HoChiMinh City).',
    },
    {
        date: '20/11/2008',
        description:
            'Bộ Trưởng Bộ Giáo dục & Đào tạo đã ký quyết định số. 2054/QĐ-BGD&ĐT-TCCB, về việc: thành lập Trường Cao đẳng Dân lập Công Nghệ Thông Tin Tp.HCM.',
    },
    {
        date: '27/04/2022',
        description:
            'Lễ công bố và Đại diện Bộ trao quyết định thành lập Trường Cao đẳng Dân lập Công Nghệ Thông Tin  Tp.HCM tại Hội Trường Khách sạn Sofitel Plaza.',
    },
];
export function Timeline() {
    return (
        <section className="bg-gray-100 dark:bg-gray-900 border-b-4 border-black py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl md:text-7xl tracking-tighter uppercase mb-16 text-center dark:text-gray-100">
                    CÁC MỐC
                    <br />
                    <span className="bg-black text-white px-2 dark:bg-gray-100 dark:text-gray-900">LỊCH SỬ</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {timeline.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 border-4 border-black dark:border-gray-500 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-gray-500 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-1 overflow-hidden group"
                        >
                            <div className="relative">
                                <ImageWithFallback
                                    src={`/imgs/timeline/${item.date.replace(
                                        /\//g,
                                        '-'
                                    )}.png`}
                                    alt={item.description}
                                    className="w-full h-48 object-cover filter contrast-125"
                                />
                                <div className="absolute top-4 left-4 bg-yellow-400 text-black px-4 py-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide text-2xl transition-all duration-200 group-hover:opacity-0 group-hover:-translate-y-2">
                                    {item.date}
                                </div>
                            </div>
                            <div className="p-8">
                                <p className="text-gray-600 dark:text-gray-300 tracking-wide text-sm">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
