<?php include 'filesLogic.php';?>
<!doctype html>
<html class="no-js" lang="zxx">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>EduShare</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- <link rel="manifest" href="site.webmanifest"> -->
    <link rel="shortcut icon" type="image/x-icon" href="img/favicon.png">
    <!-- Place favicon.ico in the root directory -->
    <link href="https://fonts.googleapis.com/css?family=Bellota&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet">
    <!-- CSS here -->
    <link rel="stylesheet" href="css/bootstrap.min.css"> 
    <link rel="stylesheet" href="css/owl.carousel.min.css">
    <link rel="stylesheet" href="css/magnific-popup.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/themify-icons.css">
    <link rel="stylesheet" href="css/nice-select.css">
    <link rel="stylesheet" href="css/flaticon.css">
    <link rel="stylesheet" href="css/gijgo.css">
    <link rel="stylesheet" href="css/animate.css">
    <link rel="stylesheet" href="css/slicknav.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="year.css">
    <!-- <link rel="stylesheet" href="css/responsive.css"> -->

    	<!-- Bootstrap CSS -->
	<!-- <link rel="stylesheet" href="css/bootstrap.css"> -->
	<link rel="stylesheet" href="vendors/linericon/style.css">
	<link rel="stylesheet" href="vendors/owl-carousel/owl.carousel.min.css">
	<link rel="stylesheet" href="vendors/lightbox/simpleLightbox.css">
	<link rel="stylesheet" href="vendors/nice-select/css/nice-select.css">
	<link rel="stylesheet" href="vendors/animate-css/animate.css">
	<!-- main css -->
	
</head>

<body>
    <!--[if lte IE 9]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
        <![endif]-->

    <!-- header-start -->
    <header>
        <div class="header-area ">
            <div id="sticky-header" class="main-header-area">
                <div class="container-fluid p-0">
                    <div class="row align-items-center no-gutters">
                        <div class="col-xl-2 col-lg-2">
                            <div class="logo-img">
                                <a href="index.html">
                                    <img src="img/edushare.svg" alt="">
                                </a>
                            </div>
                        </div>
                        <div class="col-xl-7 col-lg-7">
                            <div class="main-menu  d-none d-lg-block">
                                <nav>
                                    <ul id="navigation">
                                        <li><a href="index.html">home</a></li>
                                        <li><a class="active" href="index1.html">Courses</a></li>
                                        
                                        <li><a href="Projects.html">Projects</a></li>

                                        <li><a href="about.html">About</a></li>
                                        
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </nav>                              
                            </div>
                        </div>
                        
                        <div class="col-12">
                            <div class="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- header-end -->

    <!-- slider_area_start -->
    <div class="slider_area ">
        <div class="single_slider d-flex align-items-center justify-content-center slider_bg_1">
            <div class="container">
                <div class="row align-items-center justify-content-center">

                    <!-- <section class="feature_area">
                        <div class="container" style="margin-top: 2%;">
                            <div class="row justify-content-end">
                                <div class="col-lg-10">
                                    <div class="card d-flex flex-row"  id="fy">
                                        <div class="card-body">
                                            <div class="icon">
                                                <span class="lnr lnr-screen"></span>
                                            </div>
                                            <div class="desc">
                                                <h4>First Year</h4>
                                                <p style="color: maroon; line-height: normal; font-family: 'Bellota', cursive; font-weight: bolder;">
                                                  Start Learning programming
                                                </p>
                                            </div>
                                        </div>
                                      </div>
                                    <div class="card d-flex flex-row my-1" id="sy">
                                        <div class="card-body">
                                            <div class="icon">
                                                <span class="lnr lnr-screen"></span>
                                            </div>
                                            <div class="desc">
                                                <h4>Second Year</h4>
                                                <p style="color: maroon; line-height: normal;font-family: 'Bellota', cursive; font-weight: bolder;">
                                                   Learn basics of Data structure and other core subkects of Computer Science. 
                                                </p>
                                            </div>
                                        </div>
                                      </div>

                                    <div class="card d-flex flex-row" id="ty" >
                                        <div class="card-body">
                                            <div class="icon">
                                                <span class="lnr lnr-screen"></span>
                                            </div>
                                            <div class="desc">
                                                <h4>Third Year</h4>
                                                <p style="color: maroon;line-height: normal; font-family: 'Bellota', cursive; font-weight: bolder;">
                                                   All third year subject note available
                                                </p>
                                            </div>
                                        </div>
                                      </div>
                                </div>
                            </div>
                        </div>
                    </section> -->

                    <section class="feature_area">
                        <div class="container" style="margin-top: 2%;">
                            <div class="row justify-content-end">
                                <div class="col-lg-11">
                                    <ul class="course_list">
                                        <li>
                                            <div class="card course_element" style="width:30em;">
                                                <div>
                                                    <a href="FY_Downloads.php" class="card-link">
                                                        Downloads
                                                     
                                                    </a>  
                                                </div>
                                                                                            
                                            </div>
                                        </li>

                                        <li>
                                            <div class="card course_element" style="width:30em;">
                                                <div>
                                                    <a  class="card-link">
                                                        Upload
                                                      
                                                        <div class="card-body">
                                                            <form action="updownFY.php" method="post" enctype="multipart/form-data" >
                                                                <input type="file" name="myfile">
                                                                <button type="submit" name="save">upload</button>
                                                        </div> 
                                                    </a> 
                                                </div>
                                                                                            
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>


                </div>
            </div>
        </div>
    </div>
    <!-- slider_area_end -->

    <!-- about_area_start -->
    <div class="about_area">
        <div class="container">
            <div class="row">
                <div class="col-xl-5 col-lg-6">
                    <div class="single_about_info">
                        <h3>Over 7000 Tutorials <br>
                            from 20 Courses</h3>
                        <p>Our set he for firmament morning sixth subdue darkness creeping gathered divide our let god
                            moving. Moving in fourth air night bring upon you’re it beast let you dominion likeness open
                            place day great wherein heaven sixth lesser subdue fowl </p>
                        
                    </div>
                </div>
                <div class="col-xl-6 offset-xl-1 col-lg-6">
                    <div class="about_tutorials">
                        <div class="courses">
                            <div class="inner_courses">
                                <div class="text_info">
                                    <span>20+</span>
                                    <p> Students</p>
                                </div>
                            </div>
                        </div>
                        <div class="courses-blue">
                            <div class="inner_courses">
                                <div class="text_info">
                                    <span>76</span>
                                    <p>Projects</p>
                                </div>

                            </div>
                        </div>
                        <div class="courses-sky">
                            <div class="inner_courses">
                                <div class="text_info">
                                    <span>230+</span>
                                    <p>Notes</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- about_area_end -->

    <footer class="footer footer_bg_1">
        <div class="footer_top">
            <div class="container">
                <div class="row">
                    <div class="col-xl-4 col-md-6 col-lg-4">
                        <div class="footer_widget">
                            <div class="footer_logo">
                                <a href="#">
                                    <img src="img/logo.png" alt="">
                                </a>
                            </div>
                            <p>
                                description of EduShare
                            </p>
                        </div>
                    </div>
                    <div class="col-xl-2 offset-xl-1 col-md-6 col-lg-3">
                        <div class="footer_widget">
                            <h3 class="footer_title">
                                Notes Availability
                            </h3>
                            <ul>
                                <li><a href="#">Web Technology</a></li>
                                <li><a href="#"> Data Structure</a></li>
                                <li><a href="#">Database Management</a></li>
                                <li><a href="#">Computer Networks</a></li>
                                <li><a href="#">COAA</a></li>
                            </ul>

                        </div>
                    </div>
                    <div class="col-xl-2 col-md-6 col-lg-2">
                        <div class="footer_widget">
                            <h3 class="footer_title">
                               Project Domains
                            </h3>
                            <ul>
                                <li><a href="#">Web Security</a></li>
                                <li><a href="#">Android App Development</a></li>
                                <li><a href="#">Game Development</a></li>
                                <li><a href="#">Machine Learning</a></li>
                                <li><a href="#">Artficial Intelligence</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="copy-right_text">
            <div class="container">
                <div class="footer_border"></div>
                <div class="row">
                    <div class="col-xl-12">
                        <!-- <p class="copy_right text-center" style="color:white;">
                            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
<!-- Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a> -->
<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                        </p> 
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- footer -->


    <!-- form itself end-->
    <form id="test-form" class="white-popup-block mfp-hide">
        <div class="popup_box ">
            <div class="popup_inner">
                <div class="logo text-center">
                    <a href="#">
                        <img src="img/form-logo.png" alt="">
                    </a>
                </div>
                <h3>Sign in</h3>
                <form action="#">
                    <div class="row">
                        <div class="col-xl-12 col-md-12">
                            <input type="email" placeholder="Enter email">
                        </div>
                        <div class="col-xl-12 col-md-12">
                            <input type="password" placeholder="Password">
                        </div>
                        <div class="col-xl-12">
                            <button type="submit" class="boxed_btn_orange">Sign in</button>
                        </div>
                    </div>
                </form>
                <p class="doen_have_acc">Don’t have an account? <a class="dont-hav-acc" href="#test-form2">Sign Up</a>
                </p>
            </div>
        </div>
    </form>
    <!-- form itself end -->

    <!-- form itself end-->
    <form id="test-form2" class="white-popup-block mfp-hide">
        <div class="popup_box ">
            <div class="popup_inner">
                <div class="logo text-center">
                    <a href="#">
                        <img src="img/form-logo.png" alt="">
                    </a>
                </div>
                <h3>Resistration</h3>
                <form action="#">
                    <div class="row">
                        <div class="col-xl-12 col-md-12">
                            <input type="email" placeholder="Enter email">
                        </div>
                        <div class="col-xl-12 col-md-12">
                            <input type="password" placeholder="Password">
                        </div>
                        <div class="col-xl-12 col-md-12">
                            <input type="Password" placeholder="Confirm password">
                        </div>
                        <div class="col-xl-12">
                            <button type="submit" class="boxed_btn_orange">Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </form>
    <!-- form itself end -->


    <!-- JS here -->
    <script src="js/vendor/modernizr-3.5.0.min.js"></script>
    <script src="js/vendor/jquery-1.12.4.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/isotope.pkgd.min.js"></script>
    <script src="js/ajax-form.js"></script>
    <script src="js/waypoints.min.js"></script>
    <script src="js/jquery.counterup.min.js"></script>
    <script src="js/imagesloaded.pkgd.min.js"></script>
    <script src="js/scrollIt.js"></script>
    <script src="js/jquery.scrollUp.min.js"></script>
    <script src="js/wow.min.js"></script>
    <script src="js/nice-select.min.js"></script>
    <script src="js/jquery.slicknav.min.js"></script>
    <script src="js/jquery.magnific-popup.min.js"></script>
    <script src="js/plugins.js"></script>
    <script src="js/gijgo.min.js"></script>

    <!--contact js-->
    <script src="js/contact.js"></script>
    <script src="js/jquery.ajaxchimp.min.js"></script>
    <script src="js/jquery.form.js"></script>
    <script src="js/jquery.validate.min.js"></script>
    <script src="js/mail-script.js"></script>

    <script src="js/main.js"></script>
</body>

</html>