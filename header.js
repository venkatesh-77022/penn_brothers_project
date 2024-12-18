class HeaderComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <header class="site-header header-style-2 mobile-sider-drawer-menu">
            <div class="header-style-2-content">
                <div class="top-bar site-bg-gray-light">
                    <div class="container">

                        <div class="d-flex justify-content-between">
                            <div class="wt-topbar-left d-flex flex-wrap align-content-start">
                                <ul class="wt-topbar-left-info">
                                    <li>Our company has 9 years' experience!</li>
                                </ul>
                            </div>

                            <div class="wt-topbar-right d-flex flex-wrap align-content-center">
                                <div class="wt-topbar-right-info">
                                    <ul class="social-icons">
                                        <li><a href="javascript:void(0);" class="fa fa-facebook"></a></li>
                                        <li><a href="javascript:void(0);" class="fa fa-twitter"></a></li>
                                        <li><a href="javascript:void(0);" class="fa fa-linkedin"></a></li>
                                        <li><a href="javascript:void(0);" class="fa fa-pinterest"></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div class="header-middle-wraper">
                    <div class="container">
                        <div class="header-middle d-flex justify-content-between align-items-center">
                            <div class="logo-header">
                                <div class="logo-header-inner logo-header-one">
                                    
                                    <img src="images/logo.png" alt="">
                                    
                                </div>
                            </div>

                            <div class="header-info-wraper">

                                <div class="header-info">
                                    <ul>
                                        <li>
                                            <div class="wt-icon-box-wraper  left">
                                                <div class="wt-icon-box-xs site-bg-primary radius">
                                                    <span class="icon-cell site-text-white"><i class="flaticon-location"></i></span>
                                                </div>
                                                <div class="icon-content">
                                                    <p>1229 Chestnut St, Unit #316 Adelphia House</p>
                                                    <h5 class="wt-tilte">Philadelphia,PA 19107</h5>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div class="wt-icon-box-wraper  left">
                                                <div class="wt-icon-box-xs site-bg-primary radius">
                                                    <span class="icon-cell site-text-white"><i class="flaticon-mail"></i></span>
                                                </div>
                                                <div class="icon-content">
                                                    <p>Send Us Email</p>
                                                    <h5 class="wt-tilte">support@gmail.com</h5>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div class="wt-icon-box-wraper left">
                                                <div class="wt-icon-box-xs site-bg-primary radius">
                                                    <span class="icon-cell site-text-white"><i class="flaticon-phone-call"></i></span>
                                                </div>
                                                <div class="icon-content">
                                                    <p>Get Quick Support</p>
                                                    <h5 class="wt-tilte">726-399-5600</h5>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-bottom">
                    <div class="sticky-header main-bar-wraper  navbar-expand-lg">

                        <div class="main-bar header-bottom">
                            <div class="container-block clearfix">

                                <div class="navigation-bar">
                                    <!-- NAV Toggle Button -->
                                    <button id="mobile-side-drawer" data-target=".header-nav" data-toggle="collapse" type="button" class="navbar-toggler collapsed">
                                        <span class="sr-only">Toggle navigation</span>
                                        <span class="icon-bar icon-bar-first"></span>
                                        <span class="icon-bar icon-bar-two"></span>
                                        <span class="icon-bar icon-bar-three"></span>
                                    </button>

                                    <!-- MAIN Vav -->
                                    <div class="nav-animation header-nav navbar-collapse collapse d-flex justify-content-between">

                                        <ul class=" nav navbar-nav">
                                            <li class="has-child"><a href="index.html">Home</a>
                                                
                                            </li>


                                            <li class="has-child">
                                                <a href="about-2.html">About</a>
                                                
                                            </li>

                                            <li class="has-child"><a href="services.html">Services</a>
                                                
                                            </li>

                                            <li class="has-child"><a href="service-detail.html">Service Detail</a>
                                                
                                            </li>



                                            <li class="has-child"><a href="contactform.html">Vendor</a>
                                                
                                            </li>
                                            <li class="has-child"><a href="">Vendor Login</a>
                                                
                                            </li>
                                            <li class="has-child"><a href="contactform.html">Clients</a>
                                                
                                            </li>
                                            
                                            <li><a href="contact.html">Contact</a></li>

                                        </ul>

                                    </div>

                                    <!-- Header Right Section-->
                                    <div class="extra-nav header-1-nav">
                                        <div class="extra-cell one">
                                            <div class="header-search">
                                                <a href="#search" class="header-search-icon"><i class="fa fa-search"></i></a>
                                            </div>
                                        
                                    </div>

                                </div>

                            </div>
                        </div>


                        <!-- SITE Search -->
                        <div id="search">
                            <span class="close"></span>
                            <form role="search" id="searchform" action="/search" method="get" class="radius-xl">
                                <div class="input-group">
                                    <input class="form-control" value="" name="q" type="search" placeholder="Type to search" />
                                    <span class="input-group-append"><button type="button" class="search-btn"><i class="fa fa-paper-plane"></i></button></span>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </header>
      `;
    }
  }
  customElements.define('header-component', HeaderComponent);
  