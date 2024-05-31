$(function(){

    // 로그인
    $(".login_submit").click(function(){
        $(".popup_login").removeClass("active");
        $(".page_2").addClass("active");
    });

    // 관리자 페이지
    
    // tab 클릭 
    $(".top_nav .tab").click(function(e){
        e.preventDefault();
        if ($(".side_nav").hasClass("active")) {
            $(".side_nav").removeClass("active");
            $(".content_section").removeClass("active");
        } 
        else {
            $(".side_nav").addClass("active");
            $(".content_section").addClass("active");
        }
        $(".side_nav").animate({
            width: "toggle"
        });
    });

    // 모바일 nav
    $(".top_nav .tab").click(function() {
        if ($(window).width() < 1280) {
            $(".side_nav_mobile").toggleClass("active");
            $(".side_nav_bg").toggleClass("active");    
        }
    });

    // 아코디언 메뉴
    $(".side_nav > ul > li").click(function(e) {
        e.preventDefault();
    
        $(this).addClass("active");
        $(this).siblings().removeClass("active");

        $(this).find("ul").slideToggle();
        $(this).siblings().find("ul").slideUp();

        $(this).find(".arrow").toggleClass("active");
        $(this).siblings().find(".arrow").removeClass("active");

    });

    $(".side_nav > ul > li ul li").click(function(e) {
        e.preventDefault();
        $(this).addClass("active");
        // console.log("Active class added to: ", $(this));
        $(this).siblings().removeClass("active");   
        e.stopPropagation();
    });
        
    
    // 모바일
        $(".side_nav_mobile > ul > li").click(function(e){
            e.preventDefault();
    
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
    
            $(this).find("ul").slideToggle();
            $(this).siblings().find("ul").slideUp();
    
            $(this).find(".arrow").toggleClass("active");
            $(this).siblings().find(".arrow").removeClass("active");
        });
        $(".side_nav_mobile > ul > li ul li").click(function(e) {
            e.preventDefault();
    
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            e.stopPropagation();
        });

    $(document).click(function(e) {
        if (!$(e.target).closest(".popup_logout, .top_nav .right .util").length) {
            $(".popup_logout").removeClass("active");
            $(".page_2").removeClass("active");
            $(".popup_logout").hide();
        }
    });
    
    $(".top_nav .right .util").click(function() {
        $(".popup_logout").toggle();
    });
    
    $(".popup_logout ul li.logout").click(function(e){
        e.preventDefault();
        $(".popup_logout").removeClass("active");
        $(".page_2").removeClass("active");
        $(".popup_logout").hide();
    });

    // 등록 팝업 열기
        $(".button_admin").click(function(){
        $(".popup_register").addClass("active"); 
        $(".popup_management").addClass("active"); 
        $(".popup_contetns").addClass("active"); 
        $(".popup_contetns_version").addClass("active"); 
        $(".popup_contetns_station").addClass("active"); 
        $(".popup_bg").addClass("active"); 
    });

    // 등록 팝업 닫기
    $(".popup_close").click(function(){
        $(".popup_register").removeClass("active"); 
        $(".popup_management").removeClass("active"); 
        $(".popup_contetns").removeClass("active"); 
        $(".popup_contetns_version").removeClass("active"); 
        $(".popup_contetns_station").removeClass("active"); 
        $(".popup_bg").removeClass("active"); 
    }); 

    // 등록 수정 버튼 클릭 이벤트
    $(".popup_button_re").click(function(){   
        $(".popup_register").removeClass("active"); 
        $(".popup_management").removeClass("active"); 
        $(".popup_contetns").removeClass("active"); 
        $(".popup_contetns_version").removeClass("active"); 
        $(".popup_contetns_station").removeClass("active"); 
        $(".popup_bg").removeClass("active"); 
        
        // 팝업 메시지 띄우기
        $(".alert_popup_dim").addClass("active");
        $(".alert_popup_info").addClass("active");
    });

    $(".alert_popup_info_cancle_btn").click(function(){
        $(".alert_popup_dim").removeClass("active");
        $(".alert_popup_info").removeClass("active");
    });
    $(".alert_popup_accept_btn").click(function(){
        $(".alert_popup_dim").removeClass("active");
        $(".alert_popup_info").removeClass("active");
    });

    // 아이디 버튼 클릭 이벤트
    $(".button_id").click(function(){
        $(".popup_reform").addClass("active"); 
        $(".popup_bg").addClass("active"); 
    });

    // 아이디 팝업 닫기
    $(".popup_close").click(function(){
        $(".popup_reform").removeClass("active"); 
        $(".popup_bg").removeClass("active"); 
    });

    // 아이디 수정 버튼 클릭 이벤트
    $(".popup_reform_popup_button_re").click(function(){   
        $(".popup_reform").removeClass("active"); 
        $(".popup_bg").removeClass("active"); 
        $(".popup_reform").removeClass("active"); 
        
        // 팝업 메시지 띄우기
        $(".alert_popup_dim").addClass("active");
        $(".alert_popup_error").addClass("active");

    });
    $(".alert_popup_error").click(function(){
        $(".alert_popup_dim").removeClass("active");
        $(".alert_popup_error").removeClass("active");
    });

    // 페이지네이션 hover 이벤트
    $(".pagination ul li").hover(function(){
        $(".pagination ul li.on").removeClass("on");
        $(this).addClass("on");
        $(".pagination ul li.active").removeClass("on");
    });

    // 페이지네이션 클릭 이벤트
    $(".pagination ul li").click(function() {
        $(".pagination ul li.active").removeClass("active");
        $(this).addClass("active");
        $(".pagination ul li.on").removeClass("on");
    });

    // 리사이즈
    $(window).resize(function(){
        const winWidth = $(window).width();
        if(winWidth <= 1280){
        }
        else{
            $(".side_nav_mobile").removeClass("active");
            $(".side_nav_bg").removeClass("active");
            $(".content_section").removeClass("active");
        }
    });



// 기기등록 팝업
    $(".button_produdct_register").click(function(){
        $(".popup_layerpopup").addClass("active");
        $(".popups_layerpopup_bg").addClass("active"); 
    });
    $(".popup_layerpopup_close").click(function(){
        $(".popup_layerpopup").removeClass("active"); 
        $(".popups_layerpopup_bg").removeClass("active"); 
    }); 
    $(".popup_button_layerpopup").click(function(){
        $(".popup_layerpopup").removeClass("active"); 
        $(".popups_layerpopup_bg").removeClass("active"); 
    });
});


