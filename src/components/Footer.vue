<template>
    <div id="mainFooter">
        <div class="container d-flex flex-column flex-md-row align-items-start align-items-md-center">
            <div class="logo">
                <img src="../assets/logo.png" width="165" alt="">
            </div>
            <div>
                <div class="social-links">
                    <a href="https://fb.com/3Cfarms33" class="link-fb no-text"></a>
                    <a href="https://instagr.am/3c.farms" class="link-ig no-text"></a>
                </div>
                <nav class="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-right">
                    <router-link to="/" class="nav-link">Home</router-link>
                    <router-link to="explore" class="nav-link">Explore Our Cannabis</router-link>
                    <router-link to="find" class="nav-link">Find 3C Cannabis</router-link>
                    <router-link to="contact" class="nav-link">Contact Us</router-link>
                </nav>
                <div class="copyright">Copyright 2018 3C Farms, All right Reserved.</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #mainFooter {
        margin-bottom: 35px;
    }
    #mainFooter > .container {
        padding: 35px 80px;
        border-top: 2px solid #5c5c5c;
    }
    #mainFooter nav a.nav-link {
        text-transform: uppercase;
        font-size: 11px;
        margin-left: 25px;
        color: #D3D3D3;
        font-weight: 600;
        letter-spacing: 1.3px;
        padding: 5px 0;
    }
    #mainFooter .nav-link:hover {
        color: #02c513;
    }
    #mainFooter .logo {
        opacity: .8;
        flex: 1;
        text-align: left;
    }
    #mainFooter .copyright {
        color: #7b7b7b;
        text-align: right;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 1.3px;
    }   
    #mainFooter .social-links {
        text-align: right;
    }   
    
    @media (max-width: 768px) {
        #mainFooter > .container {
            padding: 30px;
        }
        #mainFooter nav a.nav-link {
            margin-left: 0;
        }
    }
</style>