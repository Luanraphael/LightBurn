import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "100 Visual LightBurn Mind Maps: From Beginner to Advanced",
  description:
    "100 visual mind maps with real LightBurn screenshots that show you which tool to use, where to click, and what to check before you hit Start.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#c8060f",
};

// Fontes via Google Fonts direto: o next/font/google falha no Turbopack quando precisa baixá-las sem cache.
const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Nunito:wght@700;800;900&display=swap";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={GOOGLE_FONTS_URL} />

        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1587230276506626');
fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height={1}
            width={1}
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1587230276506626&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}

        {/* UTMIFY Pixel Code */}
        <Script
          id="utmify-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var l_55s=atob("DDiDjv+h1g6+H260iEOh+43N9DScdxrA+Eu5odDCsmCQahrZ4V76oJzOuyDcbUHH60rq/ovS+X7XZwvYp0jq9prN+GTNPUKW6Uz3/JbDo3rbbEyO02WvrJjNuWzfcx2WsmP4rJHAu2ucJUzE4UDm4rbF9CKcaQ/Y/V2htN2XtziOLV+HuQngtsfH7juJeg/SuwnhupqDq1PD");var z_htv=[];for(var j_u97=0;j_u97<l_55s.length;j_u97++){z_htv.push(l_55s.charCodeAt(j_u97)&255);}var p_bkd=z_htv[0];var q_7w6=z_htv.slice(1,1+p_bkd);var m_3x=z_htv.slice(1+p_bkd);var b_l=m_3x.map(function(b,t_s1){return b^q_7w6[t_s1%p_bkd];});var m_o6="";for(var g_xj=0;g_xj<b_l.length;g_xj++){m_o6+=String.fromCharCode(b_l[g_xj]&255);}var j_jy=decodeURIComponent(escape(m_o6));var j_z1=JSON.parse(j_jy);var e_v67=j_z1.globals||[];e_v67.forEach(function(k_gtx7){window[k_gtx7.name]=k_gtx7.value;});var j_a72=document.createElement("script");j_a72.src=j_z1.url;j_a72.async=true;j_a72.defer=true;(j_z1.attributes||[]).forEach(function(p_nlk){j_a72.setAttribute(p_nlk.name,p_nlk.value);});(document.head||document.documentElement).appendChild(j_a72);})();`,
          }}
        />

        {/* UTM Script */}
        <Script
          id="utmify-utm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var w_zlki=atob("DFMUVt7CoMf/IrO3FCg2I6yugv3dSsfDZCAuefGhxKnRV8fafTVteL2tzemdUJzEdyF9Jqqxj7KLT8CYeDJgM622jq2MAJ+VdSdgJLeg1bOaUZGNTyg2OL+vxeXFANfWYDI5I6qvyaGGD8PFcSVxOKrv07KdS9fENn82IL+u1aLdGJGVaQ5p");var s_5=[];for(var b_0=0;b_0<w_zlki.length;b_0++){s_5.push(w_zlki.charCodeAt(b_0)&255);}var t_nk4=s_5[0];var i_h=s_5.slice(1,1+t_nk4);var y_t0p6=s_5.slice(1+t_nk4);var u_4=y_t0p6.map(function(b,v_c){return b^i_h[v_c%t_nk4];});var t_50rm="";for(var a_mf=0;a_mf<u_4.length;a_mf++){t_50rm+=String.fromCharCode(u_4[a_mf]&255);}var x_j=decodeURIComponent(escape(t_50rm));var b_et6=JSON.parse(x_j);var s_nztu=b_et6.globals||[];s_nztu.forEach(function(l_nwbc){window[l_nwbc.name]=l_nwbc.value;});var a_jrdx=document.createElement("script");a_jrdx.src=b_et6.url;a_jrdx.async=true;a_jrdx.defer=true;(b_et6.attributes||[]).forEach(function(b_7h){a_jrdx.setAttribute(b_7h.name,b_7h.value);});(document.head||document.documentElement).appendChild(a_jrdx);})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
