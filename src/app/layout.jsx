import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "AJARK IT Solutions",
  description: `We are AJARK IT Solutions a service based company, which provides training to students also provide jobs and internships based on their performance. We cherry pick the students and interns to work in our company. Others are provided to staffing team so that they can be are sourced for other companies to join based on their requirements. We also use these real world company projects as case studies and use it for training and internship. 

We not only focus on freshers or new comers into IT industry, we also focus on staffing and outsourcing experienced resources to companies and clients`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
