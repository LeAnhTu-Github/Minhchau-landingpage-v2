import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Minh Châu - Giải pháp CNTT & Viễn thông',
    short_name: 'Minh Châu',
    description: 'Cung cấp dịch vụ phát triển phần mềm, tích hợp hệ thống, vận hành–bảo trì theo SLA và kiểm thử QA chuyên nghiệp.',
    start_url: '/',
    display: 'standalone',
    background_color: '#020617',
    theme_color: '#06b6d4',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
