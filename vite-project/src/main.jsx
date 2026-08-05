import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/home/home';
import About from './views/about/about';
import Contact from './views/contact/contact';
import NotFound from './views/notfound/notfound';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

const root = document.getElementById('root');

createRoot(root).render(
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
    </BrowserRouter>,
);