import React from "react";
import Footer from './components/Footer';
import Content from './components/Content';

export default function App() {
    return(
    <>
    <main className="main">
        <div className="main__section">
        <Content />
        <Footer />
        </div>
        </main>
    </>
    );
}