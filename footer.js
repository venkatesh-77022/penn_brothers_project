class FooterComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <footer class="site-footer footer-dark">

            <!-- FOOTER BLOCKES START -->
            <div class="footer-top bg-cover" style="background-image:url(images/background/footer-bg.jpg);">

                <div class="container">
                    <div class="row">

                        <div class="col-lg-3 col-md-6">

                            <div class="widget widget_about">
                                <div class="logo-footer clearfix">
                                    <a href="index.html"><img src="images/logo.png" alt=""></a>
                                </div>
                                <p>Today, we can say that your passion, hard work, creativity, and expertise have led to our success.</p>
                                <div class="call-us">
                                    <i class="flaticon-phone-call"></i><a href="tel:+726-399-5600">+726-399-5600</a>
                                </div>

                            </div>

                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="widget n-letter">
                                <h3 class="widget-title">Newsletter</h3>
                                <div class="n-letter-content">
                                    <p>
Subscribe to our newsletter to stay updated with our latest news and updates.</p>
                                    <div class="nl-type">
                                        <form role="search" method="post">
                                            <div class="nl-form">
                                                <input name="news-letter" class="form-control" placeholder="Enter email address" type="text">
                                                <button type="submit" class="s-btn">Subscribe</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <ul class="social-icons">
                                    <li><a href="javascript:void(0);" class="fa fa-facebook"></a></li>
                                    <li><a href="javascript:void(0);" class="fa fa-twitter"></a></li>
                                    <li><a href="javascript:void(0);" class="fa fa-linkedin"></a></li>
                                    <li><a href="javascript:void(0);" class="fa fa-pinterest"></a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="widget">
                                <h3 class="widget-title">Contact Us</h3>
                                <p>Our support team is here to assist you 24/7, every day of the week.






</p>
                                <ul class="widget_address">
                                    <li><i class="flaticon-location"></i>1229 Chestnut St, Unit #316 Adelphia House,
                                                    Philadelphia,PA 19107</li>
                                    <li><i class="flaticon-mail"></i>support@gmail.com</li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="widget widget_services">
                                <h3 class="widget-title">Company Links</h3>
                                <ul>
                                    <li><a href="about-2.html">About</a></li>
                                    <li><a href="services.html">Services</a></li>
                                    <li><a href="service-detail.html">Service Detail</a></li>
                                    <li><a href="contact.html">Vendor</a></li>
                                    <li><a href="">Vendor Login</a></li>
                                    <li><a href="contact.html">Clients</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>



                    </div>

                </div>
            </div>
            <!-- FOOTER COPYRIGHT -->

            <div class="footer-bottom">
                <div class="container">
                    <div class="footer-bottom-info">

                        <div class="footer-copy-right">
                            <span class="copyrights-text">© 2021 Your Company. Designed By <span class="site-text-primary">Thewebmax</span></span>
                        </div>

                    </div>
                </div>
            </div>

        </footer>
      `;
    }
  }
  customElements.define('footer-component', FooterComponent);
  