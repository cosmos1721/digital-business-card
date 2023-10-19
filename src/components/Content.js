import React from "react";

export default function Content(){
    return(
        <>
        <img  src="/images/1-min.jpg" alt="devesh image" lazy="true"/>
        <section className="info">
            <h2>Devesh Sharma</h2>
            <p style={{ fontSize: '14px', padding: '5px 10px' }}>Full-stack Developer</p>

            <a href="https://drive.google.com/file/d/1wd1w4WvG3FthdJ5f7u0t0W-MCwaXrAd1/view?usp=share_link">Resume</a>
        </section>
        <section>
            <button
            onClick="https://www.linkedin.com/in/devesh-sharma-16a352211">
                Linkedin
            </button>
            <button
            onClick="https://github.com/cosmos1721">
                Github
            </button>
        </section>
        <section>
            <h3>About</h3>
            <p>Lorem ipsumur adipisicing elit. Sit repellendus eligendi voluptatem in. Tempora, voluptatibus laboriosam in laudantium voluptatum dolorum molestias expedita dolores officia. Est recusandae facere deserunt quis ea?</p>
            <h3>Interests</h3>
            <p>Lorem ipsum quos.Lorem ipsum dolor siit. Sit repellendus eligendi voluptatem in. Tempora, voluptatibus laboriosam in laudantium voluptatum dolorum molestias expedita dolores officia. Est recusandae facere deserunt quis ea?</p>
        </section>
        </>
    );
}