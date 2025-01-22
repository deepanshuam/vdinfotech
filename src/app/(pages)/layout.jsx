

// fonts
import { Lato, Montserrat, Poppins, Raleway, } from '@next/font/google';
import Header from '../../components/Header';
import Canvas from '../../components/Canvas/Canvas'
import '../globals.scss';

// slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// fonts
const raleway = Raleway({
  weight: ['400', '700', '800', '900'],
  subsets: ['latin'],
});
const lato = Lato({
  weight: ['400', '700','900'],
  subsets: ['latin'],
});
const montserrat = Montserrat({
  weight: ['400', '700', '800', '900'],
  subsets: ['latin'],
});
const poppins = Poppins({
  weight: ['400','500', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata = {

  
  icons: {
    icon: '/favicon.ico',
  },
};



export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={`${lato.className} ${raleway.className} ${montserrat.className} ${poppins.className}`}>
        <Canvas />
        <Header />
        {children}
      </body>
    </html>
  );
}

