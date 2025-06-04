import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        

        <script type="application/javascript">
    document.addEventListener('kpsdk-load', function () {
        window.KPSDK.configure({
              protocol: 'https',
                method: '*',
                domain: 'verdant-llama-2f90a5.netlify.app',
                path: '*'
});
    });


</script>
<script src="https://api.example.com/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/p.js"></script>
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Helllllllooooo <code>World</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
