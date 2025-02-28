'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Auto download resume when page loads
    const downloadPDF = () => {
      const link = document.createElement('a');
      link.href = '/resume.pdf';  // Move PDF to public folder
      link.download = 'JiajunNick_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    downloadPDF();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Side - Welcome Message */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 lg:p-12 bg-white bg-opacity-70 backdrop-blur-sm">
          <div className="max-w-md space-y-6 lg:space-y-8">
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight">
                Hey!
              </h1>
              <p className="text-xl lg:text-xl text-gray-600 font-light">
                Thank you for checking my resume
              </p>
            </div>

            <div className="space-y-4 lg:space-y-6">
              <a
                href="mailto:jiajunhuo726@gmail.com"
                className="relative inline-flex items-center justify-center w-full px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-medium bg-white text-gray-900 border-2 border-gray-900 rounded-xl hover:bg-gray-900 hover:text-white transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Email Me
              </a>

              <div className="space-y-2 text-center">
                <p className="text-sm text-gray-600 font-medium animate-pulse">
                  Your resume is downloading automatically...
                </p>
                <p className="text-sm text-gray-500">
                  If it doesn't start,{' '}
                  <button
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/resume.pdf';
                      link.download = 'JiajunNick_Resume.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="text-blue-600 hover:text-blue-800 underline underline-offset-2 font-medium transition-colors duration-200"
                  >
                    click here
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Resume Preview */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <div className="relative rounded-lg overflow-hidden bg-white shadow-2xl" style={{ 
            width: 'min(100%, 595px)',
            height: 'min(calc(100vh - 4rem), 842px)',
            aspectRatio: '595/842'
          }}>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/5 to-transparent pointer-events-none"></div>
            <iframe
              src="/resume.pdf#view=FitH"
              className="w-full h-full border-none"
              title="Resume Preview"
            />
          </div>
        </div>
      </div>
    </main>
  );
} 