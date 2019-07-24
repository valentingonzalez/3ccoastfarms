<template>
    <div id="mainNav">
        <nav class="container d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
            <router-link to="/" class="nav-link">Home</router-link>
            <router-link to="explore" class="nav-link">Explore Our Cannabis</router-link>
            <router-link to="/" class="nav-logo"><img src="../assets/logo.png" width="280" alt=""></router-link>
            <router-link to="find" class="nav-link">Find 3C Cannabis</router-link>
            <router-link to="contact" class="nav-link">Contact Us</router-link>
        </nav>
        <button class="hamburger hamburger hamburger--spin d-md-none" type="button">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>
    </div>
</template>
<script>
export default {
  data: () => ({
  }),
  mounted() {
    // Look for .hamburger
    var hamburger = document.querySelector(".hamburger");
    var mainNav = document.querySelector("#mainNav");
    // On click
    hamburger.addEventListener("click", function() {
        // Toggle class "is-active"
        hamburger.classList.toggle("is-active");
        mainNav.classList.toggle("is-active");
        // Do something else, like open/close menu
    });
  },
  methods: {
  }
}

</script>
<style scoped>
    #mainNav {
        background: #242424;
        position: relative;
    }
    #mainNav nav {
        height: 130px;
    }
    #mainNav .nav-logo {
        margin: 0 30px;
    }
    #mainNav .nav-link {
        color: #FFF;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 13px;
        letter-spacing: 1.3px;
        transition: all .5s;
    }
    #mainNav .nav-link:hover {
        color: #02c513;
    }
    .hamburger.is-active .hamburger-inner,
    .hamburger.is-active .hamburger-inner::before,
    .hamburger.is-active .hamburger-inner::after,
    .hamburger-inner, .hamburger-inner::before,
    .hamburger-inner::after {
        background: #fff;
    }
    .hamburger:hover,
    .hamburger.is-active:hover {
        opacity: 1;
    }

    #mainNav .hamburger {
        position: absolute;
        right: 0;
        top: 8px;
        transform: scale(.7);
    }
    @media (max-width: 768px) {
        #mainNav .nav-logo {
            order: 0;
            margin: 15px 15px 0 15px;
        }
        #mainNav .nav-logo img {
            width: 200px;
        }
        #mainNav .nav-link {
            order: 1;
            padding: 0 !important;
            text-indent: 15px;
            height: 0;
            line-height: 60px;
            overflow: hidden;
        }
        #mainNav.is-active .nav-link {
            height: 60px;
        }
        #mainNav.is-active .nav-link:first-child {
            margin-top: 30px;
        }
        #mainNav.is-active .nav-link:last-child {
            margin-bottom: 60px;
        }
        #mainNav nav {
            height: auto;
            min-height: 70px;
        }
    }
</style>