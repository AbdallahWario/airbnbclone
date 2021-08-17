import 'tailwindcss/tailwind.css';
import Router from "next/router";
import progressBar from"@badrap/bar-of-progress"

const progress = new progressBar({
size:1,
color:"#FE595E",
className:"z-50",
delay:100,
});

Router.events.on('routeChangeStart',progress.start);
Router.events.on('routeChangeComplete',progress.finish);
Router.events.on('routeChangeErro',progress.finish);



function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
