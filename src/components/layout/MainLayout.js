import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({children}) =>{
    return(
        <>
         <Head>
      <title>About us</title>
      <meta name="description" content=" this is about us page" />
      <meta name="keywords" content="HTML, CSS, JavaScript"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous"></link>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
  </Head>
        <Header/>
        <div className="container">
        {children}
        </div>
        <Footer/>
        </>
    )
}
export default MainLayout;