import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "JNA Dental SEO | Exclusive Organic Patients for Your Practice",
  description:
    "The SEO engine behind AT&T, Xfinity, and 6,000+ dealers — now open to select dental clinics. See if your territory is available.",
  openGraph: {
    title: "JNA Dental SEO | Exclusive Organic Patients for Your Practice",
    description:
      "We generate 780,000+ organic visits/month across 120+ websites. Now we're bringing that system to dental clinics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=805959258855693&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body>
        {children}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '805959258855693');
fbq('track', 'PageView');`}
        </Script>
      </body>
    </html>
  );
}
