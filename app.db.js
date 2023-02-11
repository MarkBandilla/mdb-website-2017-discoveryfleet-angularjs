Pages = [
{ 
  label: "Home", 
  url: "",
  template: '<slider-cmpt></slider-cmpt>'+
            '<div class="slider-bottom-area">'+
            '  <div class="container">'+
            '    <div class="row">'+
            '      <div class="col-sm-8 col-xs-12">'+
            '        <info-cmpt title="{{infoCmpt.title}}" context="{{infoCmpt.context}}"></info-cmpt>'+
            '      </div>'+
            '      <div class="col-sm-4 col-xs-12">'+
            '        <testimonial-cmpt></testimonial>'+
            '      </div>'+
            '    </div>'+
            '  </div>'+
            '</div>'+
            '<div class="home-page-room-area">'+
            ' <div class="container">'+
            '   <div class="row">'+
            '     <div class="col-sm-3 col-xs-12">'+
            '       <blurb-cmpt title="{{blurbCmpt[0].title}}" link="{{blurbCmpt[0].link}}" image="{{blurbCmpt[0].image}}" context="{{blurbCmpt[0].context}}"></blurb-cmpt>'+
            '     </div>'+
            '     <div class="col-sm-3 col-xs-12">'+
            '       <blurb-cmpt title="{{blurbCmpt[1].title}}" link="{{blurbCmpt[1].link}}" image="{{blurbCmpt[1].image}}" context="{{blurbCmpt[1].context}}"></blurb-cmpt>'+
            '     </div>'+
            '     <div class="col-sm-3 col-xs-12">'+
            '       <blurb-cmpt title="{{blurbCmpt[2].title}}" link="{{blurbCmpt[2].link}}" image="{{blurbCmpt[2].image}}" context="{{blurbCmpt[2].context}}"></blurb-cmpt>'+
            '     </div>'+
            '     <div class="col-sm-3 col-xs-12">'+
            '       <blurb-cmpt title="{{blurbCmpt[3].title}}" link="{{blurbCmpt[3].link}}" image="{{blurbCmpt[3].image}}" context="{{blurbCmpt[3].context}}"></blurb-cmpt>'+
            '     </div>'+
            '   </div>'+
            ' </div>'+
            '</div>'+
            // '<div class="home-page-nature-area">'+
            // ' <div class="container">'+
            // '   <div class="row">'+
            // '     <div class="col-sm-12">'+
            // '       <video-cmpt title="{{videoCmpt.title}}" sub-title="{{videoCmpt.subTitle}}" btn-text="{{videoCmpt.btnText}}" btn-link="{{videoCmpt.btnLink}}" image="{{videoCmpt.image}}"></video-cmpt>'+
            // '     </div>'+
            // '   </div>'+
            // ' </div>'+
            // '</div>'+
            '<div class="home-page-gallery-area">'+
            ' <div class="container">'+
            '   <div class="row">'+
            '     <div class="col-xs-12">'+
            '       <gallery-cmpt title="{{galleryCmpt.title}}" images="galleryCmpt.images"></gallery-cmpt>'+
            '     </div>'+
            '   </div>'+
            ' </div>'+
            '</div>',
  controller: ["$stateParams", "$scope", "CONFIG", function($stateParams, $scope, CONFIG) {
    $scope.AppName = CONFIG.APP_NAME;
    $scope.bannerCmpt = {
      title: "Dive Philippines",
      subTitle: "Liveaboard",
      bgImage: "assets/img/bennar/reef.jpg"
    };
    $scope.infoCmpt = {
      title: "We look forward to welcoming you aboard !",
      context: "Introducing a new style of cruising through the Philippine Islands, the Discovery Fleet offers full diving and non-diving programs.  Avid divers can expect a full day of scuba diving the spectacular coral reefs, wrecks and marine life of this sun-kissed archipelago while their non-diving companions have a full day or snorkeling, island visits, kayaking and beach hopping."
    };
    $scope.blurbCmpt = [
      {title: "Apo Reef", link: "#/schedule/apo_reef", image: "assets/img/room1.png", context: "Enjoy warm weather and sunny skies as we set sail to one of the world's best diving locations."},
      {title: "Tubbataha", link: "#/schedule/tubbataha", image: "assets/img/room2.png", context: "Without a doubt, the crown jewel of Philippine diving, Tubbataha boasts of pristine reefs"},
      {title: "Coron", link: "#/schedule/coron", image: "assets/img/room3.png", context: "Explore breathe-taking coves, lagoons and beaches, where you can explore, swim, snorkel"},
      {title: "Palau", link: "#/schedule/palau", image: "assets/img/room4.png", context: "With rushing currents and nutrient-dense water in the world's most bio-diverse region"}
    ];
    $scope.galleryCmpt = {
      title: 'Gallery',
      images: [
        // "assets/img/g1.jpg",
        "assets/img/g2.jpg",
        "assets/img/g3.jpg",
        "assets/img/g4.jpg",
        "assets/img/g5.jpg",
        "assets/img/g6.jpg"
      ]
    };
    $scope.videoCmpt = {
      title: "Dive Palau",
      subTitle: "February 02 - 09, 2018 ( Guaranteed Trip ) via M/V Discovery Adventure",
      image: "assets/img/video.jpg",
      btnLink: "http://discoveryfleet.com/#/schedule/palau"
    }
  }]
}, { 
  label: "Ship", 
  url: "ship",
  template: '',
  controller: ["$stateParams", "$scope", "CONFIG", function($stateParams, $scope, CONFIG) {
    $scope.message = 'Ship';
  }],
  sub: [
    {
      label: "M/Y Discovery Palawan",
      url: "ship/palawan",
      template: '<banner-cmpt title="{{bannerCmpt.title}}" sub-title="{{bannerCmpt.subTitle}}" bg-image="{{bannerCmpt.bgImage}}"></banner-cmpt>'+
                '<div class="slider-bottom-area">'+
                '  <div class="container">'+
                '    <div class="row">'+
                '      <div class="col-xs-12">'+
                '        <info-cmpt banner="{{infoCmpt.banner}}" title="{{infoCmpt.title}}" context="{{infoCmpt.context}}"></info-cmpt>'+
                '      </div>'+
                '    </div>'+
                '    <div class="row">'+
                '      <div class="col-xs-12">'+
                '        <route-cmpt route="{{routeCmpt.route}}"></route-cmpt>'+
                '      </div>'+
                '    </div>'+
                '    <div class="row">'+
                '      <div class="col-xs-12">'+
                '        <info-cmpt banner="{{infoCmpt2.banner}}" title="{{infoCmpt2.title}}" context="{{infoCmpt2.context}}"></info-cmpt>'+
                '      </div>'+
                '    </div>'+
                '  </div>'+
                '</div>'+
                '<div class="home-page-gallery-area">'+
                ' <div class="container">'+
                '   <div class="row">'+
                '     <div class="col-xs-12">'+
                '       <gallery-cmpt title="{{galleryCmpt.title}}" images="galleryCmpt.images"></gallery-cmpt>'+
                '     </div>'+
                '   </div>'+
                ' </div>'+
                '</div>',
      controller: ["$stateParams", "$scope", "CONFIG", function($stateParams, $scope, CONFIG) {
        $scope.message = 'Palawan';
        $scope.bannerCmpt = {
          title: "Dive Philippines",
          subTitle: "Liveaboard",
          bgImage: "assets/img/bennar/reef.jpg"
        };            
        $scope.infoCmpt = {
          banner: "assets/img/ship/palawan.jpg",
          title: "M/Y DISCOVERY PALAWAN",
          context: "Built in 1972 in Groningen, Holland as a three-masted schooner that cruised the Caribbean. She was later rebuilt as a navigation training ship then refitted in 2006 with a new and more powerful engine with all modern navigational equipment. She was moved to the Philippines to serve as an adventure cruise ship. In 2013, she was renamed Discovery Palawan and underwent a USD 1.5 million renovation for a fresh, modern look."
        };
        $scope.routeCmpt = {
          route: "palawan"
        };
        $scope.infoCmpt2 = {
          banner: "assets/img/ship/palawan-layout.jpg",
          title: "Ship Layout",
        };
        $scope.galleryCmpt = {
          title: 'Gallery',
          images: [
            // "assets/img/ship/photos/palawan/g1.jpg",
            "assets/img/ship/photos/palawan/g2.jpg",
            // "assets/img/ship/photos/palawan/g3.jpg",
            "assets/img/ship/photos/palawan/g4.jpg",
            // "assets/img/ship/photos/palawan/g5.jpg",
            // "assets/img/ship/photos/palawan/g6.jpg",
            "assets/img/ship/photos/palawan/g7.jpg",
            "assets/img/ship/photos/palawan/g8.jpg",
            // "assets/img/ship/photos/palawan/g9.jpg",
            "assets/img/ship/photos/palawan/g10.jpg",
          ]
        };
      }]
    }, {
      label: "M/Y Discovery Adventure",
      url: "ship/adventure",
      template: '<banner-cmpt title="{{bannerCmpt.title}}" sub-title="{{bannerCmpt.subTitle}}" bg-image="{{bannerCmpt.bgImage}}"></banner-cmpt>'+
                '<div class="slider-bottom-area">'+
                '  <div class="container">'+
                '    <div class="row">'+
                '      <div class="col-xs-12">'+
                '        <info-cmpt banner="{{infoCmpt.banner}}" title="{{infoCmpt.title}}" context="{{infoCmpt.context}}"></info-cmpt>'+
                '      </div>'+
                '    </div>'+
                '    <div class="row">'+
                '      <div class="col-xs-12">'+
                '        <route-cmpt route="{{routeCmpt.route}}"></route-cmpt>'+
                '      </div>'+
                '    </div>'+
                '  </div>'+
                '</div>'+
                '<div class="home-page-gallery-area">'+
                ' <div class="container">'+
                '   <div class="row">'+
                '     <div class="col-xs-12">'+
                '       <gallery-cmpt title="{{galleryCmpt.title}}" images="galleryCmpt.images"></gallery-cmpt>'+
                '     </div>'+
                '   </div>'+
                ' </div>'+
                '</div>',
      controller: ["$stateParams", "$scope", "CONFIG", function($stateParams, $scope, CONFIG) {
        $scope.message = 'Adventure';
        $scope.bannerCmpt = {
          title: "Dive Philippines",
          subTitle: "Liveaboard",
          bgImage: "assets/img/bennar/reef.jpg"
        };
        $scope.routeCmpt = {
          route: "adventure"
        };
        $scope.infoCmpt = {
          banner: "assets/img/ship/adventure.jpg",
          title: "M/V DISCOVERY ADVENTURE",
          context: "The former Yasawa legend was built in Fiji in 1987 to American Bureau Standards (ABS)."
        };
        $scope.galleryCmpt = {
          title: 'Gallery',
          images: [
            "assets/img/ship/photos/adventure/g1.jpg",
            "assets/img/ship/photos/adventure/g2.jpg",
            // "assets/img/ship/photos/adventure/g3.jpg",
            "assets/img/ship/photos/adventure/g4.jpg",
            "assets/img/ship/photos/adventure/g6.jpg",
            "assets/img/ship/photos/adventure/g5.jpg",
            // "assets/img/ship/photos/adventure/g7.jpg",
          ]
        };
      }]
    }
  ]
}, { 
  label: "Route Map", 
  url: "route",
  template: '<banner-cmpt title="{{bannerCmpt.title}}" sub-title="{{bannerCmpt.subTitle}}" bg-image="{{bannerCmpt.bgImage}}"></banner-cmpt>'+
            '<div class="slider-bottom-area">'+
            '  <div class="container">'+
            '    <div class="row">'+
            '      <div class="col-xs-12">'+
            '        <info-cmpt banner="{{infoCmpt.banner}}" title="{{infoCmpt.title}}" context="{{infoCmpt.context}}"></info-cmpt>'+
            '      </div>'+
            '    </div>'+
            '  </div>'+
            '</div>',
  controller: ["$stateParams", "$scope", "CONFIG", function($stateParams, $scope, CONFIG) {
    $scope.message = 'Route Map';
    $scope.bannerCmpt = {
      title: "",
      subTitle: "",
      bgImage: "assets/img/bennar/map.jpg"
    };         
    $scope.infoCmpt = {
      banner: "assets/img/route-map-discovery-fleet.jpg",
      title: "Route Map",
    };   
  }]
}, { 
  label: "Schedules", 
  url: "schedule",
  template: '<banner-cmpt title="{{bannerCmpt.title}}" sub-title="{{bannerCmpt.subTitle}}" bg-image="{{bannerCmpt.bgImage}}"></banner-cmpt>'+
            '<div class="slider-bottom-area">'+
            '  <div class="container">'+
            '    <div class="row">'+
            '      <div class="col-xs-12">'+
            '        <schedules-cmpt location="{{schedulesCmpt.location}}"></schedules-cmpt>'+
            '      </div>'+
            '    </div>'+
            '  </div>'+
            '</div>',
  controller: ["$stateParams", "$scope", "CONFIG", function($stateParams, $scope, CONFIG) {
    $scope.bannerCmpt = {
      title: "",
      subTitle: "",
      bgImage: ""
    };
    $scope.schedulesCmpt = {
      location: 'Tubbataha'
    };
  }],
  sub: [
    {
      label: "Visayas Safari",
      url: "schedule/visayas",
      template: '<banner-cmpt title="{{bannerCmpt.title}}" center="true" sub-title="{{bannerCmpt.subTitle}}" bg-image="{{bannerCmpt.bgImage}}"></banner-cmpt>'+
                '<div class="home-page-room-area">'+
                '  <div class="container">'+
                '    <div class="row">'+
                '      <div class="col-xs-12">'+
                '        <schedules-cmpt location="{{schedulesCmpt.location}}"></schedules-cmpt>'+
                '      </div>'+
                '    </div>'+
                '  </div>'+
                '</div>',
      controller: ["$stateParams", "$scope", "CONFIG", function($stateParams, $scope, CONFIG) {
        $scope.bannerCmpt = {
          title: "",
          subTitle: "",
          bgImage: "assets/img/room5.jpg"
        };
        $scope.schedulesCmpt = {
          location: 'Visayas'
        };
      }],
    }, {
      label: "Tubbataha",
      url: "schedule/tubbataha",
      template: '<banner-cmpt title="{{bannerCmpt.title}}" center="true" sub-title="{{bannerCmpt.subTitle}}" bg-image="{{bannerCmpt.bgImage}}"></banner-cmpt>'+
                '<div class="home-page-room-area">'+
                '  <div class="container">'+
                '    <div class="row">'+
                '      <div class="col-xs-12">'+
                '        <schedules-cmpt location="{{schedulesCmpt.location}}"></schedules-cmpt>'+
                '      </div>'+
                '    </div>'+
                '  </div>'+
                '</div>',
      controller: ["$stateParams", "$scope", "CONFIG", function($stateParams, $scope, CONFIG) {
        $scope.bannerCmpt = {
          title: "",
          subTitle: "",
          bgImage: "assets/img/tubbataha.jpg"
        };
        $scope.schedulesCmpt = {
          location: 'Tubbataha'
        };
      }],
    }, /*{
     label: "Equipment Rental",
      url: "schedule/equipment_rental",
      template: '<banner-cmpt title="{{bannerCmpt.title}}" center="true" sub-title="{{bannerCmpt.subTitle}}" bg-image="{{bannerCmpt.bgImage}}"></banner-cmpt>'+
                '<div class="home-page-room-area">'+
                '  <div class="container">'+
                '    <div class="row">'+
                '      <div class="col-xs-12">'+
                '        <schedules-cmpt location="{{schedulesCmpt.location}}"></schedules-cmpt>'+
                '      </div>'+
                '    </div>'+
                '  </div>'+
                '</div>',
      controller: ["$stateParams", "$scope", "CONFIG", function($stateParams, $scope, CONFIG) {
        $scope.bannerCmpt = {
          title: "",
          subTitle: "",
          bgImage: "assets/img/room4.jpg"
        };
        $scope.schedulesCmpt = {
          location: 'Coron'
        };
      }],
    }, */{
      label: "Apo Reef - Coron",
      url: "schedule/apo_reef",
      template: '<banner-cmpt title="{{bannerCmpt.title}}" center="true" sub-title="{{bannerCmpt.subTitle}}" bg-image="{{bannerCmpt.bgImage}}"></banner-cmpt>'+
                '<div class="home-page-room-area">'+
                '  <div class="container">'+
                '    <div class="row">'+
                '      <div class="col-xs-12">'+
                '        <schedules-cmpt location="{{schedulesCmpt.location}}"></schedules-cmpt>'+
                '      </div>'+
                '    </div>'+
                '  </div>'+
                '</div>',
      controller: ["$stateParams", "$scope", "CONFIG", function($stateParams, $scope, CONFIG) {
        $scope.bannerCmpt = {
          title: "",
          subTitle: "",
          bgImage: "assets/img/room1.jpg"
        };
        $scope.schedulesCmpt = {
          location: 'Apo Reef'
        };
      }],
    }, {
      label: "Palau",
      url: "schedule/palau",
      template: '<banner-cmpt title="{{bannerCmpt.title}}" center="true" sub-title="{{bannerCmpt.subTitle}}" bg-image="{{bannerCmpt.bgImage}}"></banner-cmpt>'+
                '<div class="home-page-room-area">'+
                '  <div class="container">'+
                '    <div class="row">'+
                '      <div class="col-xs-12">'+
                '        <schedules-cmpt location="{{schedulesCmpt.location}}"></schedules-cmpt>'+
                '      </div>'+
                '    </div>'+
                '  </div>'+
                '</div>',
      controller: ["$stateParams", "$scope", "CONFIG", function($stateParams, $scope, CONFIG) {
        $scope.bannerCmpt = {
          title: "",
          subTitle: "",
          bgImage: "assets/img/room3.jpg"
        };
        $scope.schedulesCmpt = {
          location: 'Palau'
        };
      }],
    },
     {
     label: "Equipment Rental",
      url: "schedule/equipment_rental",
      template: '<banner-cmpt title="{{bannerCmpt.title}}" center="true" sub-title="{{bannerCmpt.subTitle}}" bg-image="{{bannerCmpt.bgImage}}"></banner-cmpt>'+
                '<div class="home-page-room-area">'+
                '  <div class="container">'+
                '    <div class="row">'+
                '      <div class="col-xs-12">'+
                '        <schedules-cmpt location="{{schedulesCmpt.location}}"></schedules-cmpt>'+
                '      </div>'+
                '    </div>'+
                '  </div>'+
                '</div>',
      controller: ["$stateParams", "$scope", "CONFIG", function($stateParams, $scope, CONFIG) {
        $scope.bannerCmpt = {
          title: "",
          subTitle: "",
          bgImage: "assets/img/room4.jpg"
        };
        $scope.schedulesCmpt = {
          location: 'Coron'
        };
      }],
    }, 
  ]
},

{ 
  label: "Testimonials", 
  url: "testimonials",
  template: '<banner-cmpt title="{{bannerCmpt.title}}" sub-title="{{bannerCmpt.subTitle}}" bg-image="{{bannerCmpt.bgImage}}"></banner-cmpt>'+
            '<div class="slider-bottom-area">'+
            '  <div class="container">'+
            '    <div class="row">'+
            '      <div class="col-xs-12">'+
            '        <info-cmpt banner="{{infoCmpt.banner}}" title="{{infoCmpt.title}}" context="{{infoCmpt.context}}"></info-cmpt>'+
            '      </div>'+
            '      <div class="col-xs-12">'+
            '        <timeline-cmpt items="timelineCmpt.items"></timeline-cmpt>'+
            '      </div>'+
            '    </div>'+
            '  </div>'+
            '</div>',
  controller: ["$stateParams", "$scope", "CONFIG", function($stateParams, $scope, CONFIG) {
    $scope.message = 'Testimonials';
    $scope.bannerCmpt = {
      title: "",
      subTitle: "",
      bgImage: "assets/img/bennar/8.png"
    };      
    $scope.infoCmpt = {
      banner: "",
      title: "Testimonials",
    };   
    $scope.timelineCmpt = {
      items: [
        {type: 'caption', title: '2016'},
        {type: 'message', title: 'Andrea Henry - Germany', image: 'assets/img/testimonials/2016/guest-comment_andrea--henry-germany_apo-reef---coron_05---12-mar-2016.jpg'},
        {type: 'message', title: 'Anette - Denmark', image: 'assets/img/testimonials/2016/guest-comment_anette-denmark_apo-reef---coron_13---20-mar-2016.jpg'},
        {type: 'message', title: 'Charis - Philippines', image: 'assets/img/testimonials/2016/guest-comment_charis-philippines_tubbataha_14---20-apr-2016.jpg'},
        {type: 'message', title: 'Clare - China', image: 'assets/img/testimonials/2016/guest-comment_clare-china_transition_23---30-mar-2016.jpg'},
        {type: 'message', title: 'Danyang - China', image: 'assets/img/testimonials/2016/guest-comment_danyang-china_tubbataha_28-apr---04-may-2016.jpg'},
        {type: 'message', title: 'Greg - Canada', image: 'assets/img/testimonials/2016/guest-comment_greg-canada_tubbataha_31-mar---06-apr-2016.jpg'},
        {type: 'message', title: 'Iben - Denmark', image: 'assets/img/testimonials/2016/guest-comment_iben-denmark_apo-reef---coron_06---13-feb-2016_01.jpg'},
        {type: 'message', title: 'Jackie - Canada', image: 'assets/img/testimonials/2016/guest-comment_jackie-canada_transition_23---30-mar-2016.jpg'},
        {type: 'message', title: 'Jessica - Hong Kong', image: 'assets/img/testimonials/2016/guest-comment_jessica-hong-kong_tubbataha_21---27-apr-2016.jpg'},
        {type: 'message', title: 'Kin Soon - Singapore', image: 'assets/img/testimonials/2016/guest-comment_kin-soon-singapore_tubbataha_05---11-may-2016.jpg'},
        {type: 'message', title: 'Lei - China', image: 'assets/img/testimonials/2016/guest-comment_lei-china_tubbataha_31-mar---06-apr-2016.jpg'},
        {type: 'message', title: 'Marie Mae - Philippines', image: 'assets/img/testimonials/2016/guest-comment_marie-mae-philippines_14---20-apr-2016.jpg'},
        {type: 'message', title: 'Stewart - Philippines', image: 'assets/img/testimonials/2016/guest-comment_stewart-philippines_tubbataha_14---20-apr-2016.jpg'},
        {type: 'message', title: 'Sue - USA', image: 'assets/img/testimonials/2016/guest-comment_sue-usa_transition_10---17-june-2016.jpg'},
        {type: 'caption', title: '2015'},
        {type: 'message', title: 'Alice Grainger - UK', image: 'assets/img/testimonials/2015/Guest Comment_Alice Grainger (UK) - Editor (Asian Geographic Magazine)_28 May - 03 June 2015.jpg'},
        {type: 'message', title: 'David - France', image: 'assets/img/testimonials/2015/Guest Comment_Constance David (France)_Tubbataha_14 - 20 May 2015.jpg'},
        {type: 'message', title: 'Elizabeth Koumas - USA', image: 'assets/img/testimonials/2015/Guest Comment_Elizabeth Koumas (USA)_Tubbataha_16 - 22 Apr 2015.jpg'},
        {type: 'message', title: 'Gavin Fowler - UK', image: 'assets/img/testimonials/2015/Guest Comment_Gavin Fowler (UK)_Tubbataha_07 - 13 May 2015.jpg'},
        {type: 'message', title: 'Im Jae Hun - Korea', image: 'assets/img/testimonials/2015/Guest Comment_Im Jae Hun (Korea)_Tubbataha_21 - 27 May 2015.jpg'},
        {type: 'message', title: 'Jae Hun Im - Korea', image: 'assets/img/testimonials/2015/Guest Comment_Jae Hun Im (Korea)_Tubbataha_21 - 27 May 2015.jpg'},
        {type: 'message', title: 'Jennifer Quintana - USA', image: 'assets/img/testimonials/2015/Guest Comment_Jennifer Quintana (USA)_Tubbataha_16 - 22 Apr 2015.jpg'},
        {type: 'message', title: 'Lucy Francis - UK', image: 'assets/img/testimonials/2015/Guest Comment_Lucy Francis (UK)_Tubbataha_14 - 20 May 2015.jpg'},
        {type: 'message', title: 'Mar Janielle Guy - Philippines', image: 'assets/img/testimonials/2015/Guest Comment_Mar Janielle Guy (Philippines)_Tubbataha_02 - 08 Apr 2015 .jpg'},
        {type: 'message', title: 'Marianne Gunst - Denmark', image: 'assets/img/testimonials/2015/Guest Comment_Marianne Gunst-M+¬ller  (Denmark)_Northern Route_07 - 14 Mar 2015.jpg'},
        {type: 'message', title: 'Meera Navaratnam - Singapore', image: 'assets/img/testimonials/2015/Guest Comment_Meera Navaratnam (Singapore)_Tubbataha_14 - 20 May 2015.jpg'},
        {type: 'message', title: 'Nicola Gunary - UK', image: 'assets/img/testimonials/2015/Guest Comment_Nicola Gunary (UK)_Tubbataha_09 - 15 Apr 2015.jpg'},
        {type: 'message', title: 'Phillip & Janelle Monaghan - Australia', image: 'assets/img/testimonials/2015/Guest Comment_Phillip & Janelle Monaghan (Australia)_Tubbataha_02 - 08 Apr 2015.jpg'},
        {type: 'message', title: 'Sandra Mercer - USA', image: 'assets/img/testimonials/2015/Guest Comment_Sandra Mercer (USA)_Tubbataha_16 - 22 Apr 2015.jpg'},
        {type: 'message', title: 'Sheryl Wright - Australia', image: 'assets/img/testimonials/2015/Guest Comment_Sheryl Wright (Australia)_Tubbataha_02 - 08 Apr 2015.jpg'},
        {type: 'message', title: 'Stephen Hall - USA', image: 'assets/img/testimonials/2015/Guest Comment_Stephen Hall (USA)_Tubbataha_16 - 22 Apr 2015.jpg'},
        {type: 'message', title: 'Susan McLeish - Australia', image: 'assets/img/testimonials/2015/Guest Comment_Susan McLeish (Australia)_Tubbataha_02 - 08 Apr 2015.jpg'},
        {type: 'message', title: 'Trixie Tacardon - Philippines', image: 'assets/img/testimonials/2015/Guest Comment_Trixie Tacardon (Philippines)_Tubbataha_28 May - 03 June 2015.jpg'},
        {type: 'message', title: 'Winnie Lind - Denmark', image: 'assets/img/testimonials/2015/Guest Comment_Winnie Lind (Denmark)_Northern Route_07 - 14 Mar 2015.jpg'},
        {type: 'message', title: 'Yonghui Zhou - China', image: 'assets/img/testimonials/2015/Guest Comment_Yonghui Zhou (China)_Tubbataha_09 - 15 Apr 2015.jpg'},
        {type: 'message', title: 'Yoon Jeong Choi - Korea', image: 'assets/img/testimonials/2015/Guest Comment_Yoon Jeong Choi (Korea)_Tubbataha_30 Apr - 06 May 2015.jpg'},
        {type: 'message', title: 'Young Soo Cha - Korea', image: 'assets/img/testimonials/2015/Guest Comment_Young Soo Cha (Korea)_Tubbataha_21 - 27 May 2015.jpg'},
      ]
    };
  }]
}, { 
  label: "Gallery", 
  url: "gallery",
  template: '<banner-cmpt title="{{bannerCmpt.title}}" sub-title="{{bannerCmpt.subTitle}}" bg-image="{{bannerCmpt.bgImage}}"></banner-cmpt>'+
            '<div class="home-page-gallery-area">'+
            ' <div class="container">'+
            '   <div class="row">'+
            '     <div class="col-xs-12">'+
            '       <gallery-cmpt title="{{galleryCmpt1.title}}" images="galleryCmpt1.images"></gallery-cmpt>'+
            '     </div>'+
            '   </div>'+
            ' </div>'+
            '</div>'+
            '<div class="home-page-gallery-area">'+
            ' <div class="container">'+
            '   <div class="row">'+
            '     <div class="col-xs-12">'+
            '       <gallery-cmpt title="{{galleryCmpt2.title}}" images="galleryCmpt2.images"></gallery-cmpt>'+
            '     </div>'+
            '   </div>'+
            ' </div>'+
            '</div>'+
            '<div class="home-page-gallery-area">'+
            ' <div class="container">'+
            '   <div class="row">'+
            '     <div class="col-xs-12">'+
            '       <gallery-cmpt title="{{galleryCmpt3.title}}" images="galleryCmpt3.images"></gallery-cmpt>'+
            '     </div>'+
            '   </div>'+
            ' </div>'+
            '</div>'+
            '<div class="home-page-gallery-area">'+
            ' <div class="container">'+
            '   <div class="row">'+
            '     <div class="col-xs-12">'+
            '       <gallery-cmpt title="{{galleryCmpt4.title}}" images="galleryCmpt4.images"></gallery-cmpt>'+
            '     </div>'+
            '   </div>'+
            ' </div>'+
            '</div>'+
            '<div class="home-page-gallery-area">'+
            ' <div class="container">'+
            '   <div class="row">'+
            '     <div class="col-xs-12">'+
            '       <gallery-cmpt title="{{galleryCmpt5.title}}" images="galleryCmpt5.images"></gallery-cmpt>'+
            '     </div>'+
            '   </div>'+
            ' </div>'+
            '</div>'+
            '<div class="home-page-gallery-area">'+
            ' <div class="container">'+
            '   <div class="row">'+
            '     <div class="col-xs-12">'+
            '       <gallery-cmpt title="{{galleryCmpt6.title}}" images="galleryCmpt6.images"></gallery-cmpt>'+
            '     </div>'+
            '   </div>'+
            ' </div>'+
            '</div>'+
            '<div class="home-page-gallery-area">'+
            ' <div class="container">'+
            '   <div class="row">'+
            '     <div class="col-xs-12">'+
            '       <gallery-cmpt title="{{galleryCmpt7.title}}" images="galleryCmpt7.images"></gallery-cmpt>'+
            '     </div>'+
            '   </div>'+
            ' </div>'+
            '</div>',
  controller: ["$stateParams", "$scope", "CONFIG", function($stateParams, $scope, CONFIG) {
    $scope.message = 'Gallery';
    $scope.bannerCmpt = {
      title: "Gallery",
      subTitle: "",
      bgImage: "assets/img/bennar/10.jpg"
    };    
    $scope.galleryCmpt1 = {
      title: 'Ship',
      images: [
        "assets/img/gallery/ship/boat4.jpg",
        // "assets/img/gallery/ship/discovery-ship-image.jpg",
        "assets/img/gallery/ship/hca-dive-boat.jpg",
        "assets/img/gallery/ship/hca_web.jpg",
        "assets/img/gallery/ship/bridge.jpg",
        "assets/img/gallery/ship/boat3.jpg",
        "assets/img/gallery/ship/boat2.jpg",
        // "assets/img/gallery/ship/boat1.jpg",
        // "assets/img/gallery/ship/discovery-salon-image.jpg",
        "assets/img/gallery/ship/jacuzzi.jpg",
        "assets/img/gallery/ship/shaded_deck.jpg",
        "assets/img/gallery/ship/standard_queen.jpg",
        "assets/img/gallery/ship/suite_room.jpg",
        // "assets/img/gallery/ship/discovery-standard-quuen-image.jpg",
        // "assets/img/gallery/ship/discovery-upperdeck-double-bed-image.jpg",
        // "assets/img/gallery/ship/discovery-upperdeck-single-bed-image.jpg",
        // "assets/img/gallery/ship/discovery-standard-single-bed-image.jpg",
        // "assets/img/gallery/ship/2_bunk_standard_room.jpg",
        "assets/img/gallery/ship/2_twin_standard.jpg",
        "assets/img/gallery/ship/3_bed_standard_rrom.jpg",
        "assets/img/gallery/ship/suite_bathroom.jpg",
        "assets/img/ship/photos/adventure/g1.jpg",
        "assets/img/ship/photos/adventure/g2.jpg",
        "assets/img/ship/photos/adventure/g6.jpg",
        // "assets/img/gallery/ship/standard_toilet.jpg",
      ]
    };
    $scope.galleryCmpt2 = {
      title: 'Topside',
      images: [
        "assets/img/gallery/topside/rafting-on-Cayangan-Lake.jpg",
        "assets/img/gallery/topside/entrance-to-cayangan-Lake-horiz-small.jpg",
        "assets/img/gallery/topside/Diver-by-Delsan-wreck-and-lighthouse-island.jpg",
        "assets/img/gallery/topside/coron-cliffs-and-beach.jpg",
        "assets/img/gallery/topside/northern_topside.jpg",
        "assets/img/gallery/topside/apo-reef-aerial-shot-medium.jpg",
        "assets/img/gallery/topside/Apo-mayor-Apo-Reef.jpg",
      ]
    };
    $scope.galleryCmpt3 = {
      title: 'Northern',
      images: [
        "assets/img/gallery/northern/dive_photo_1.jpg",
        "assets/img/gallery/northern/dive_photo_2.jpg",
        "assets/img/gallery/northern/dive_photo_3.jpg",
        "assets/img/gallery/northern/dive_photo_4.jpg",
        "assets/img/gallery/northern/dive_photo_5.jpg",
        "assets/img/gallery/northern/dive_photo_6.jpg",
        "assets/img/gallery/northern/dive_photo_7.jpg",
        "assets/img/gallery/northern/dive_photo_8.jpg",
        "assets/img/gallery/northern/dive_photo_9.jpg",
        "assets/img/gallery/northern/dive_photo_10.jpg",
       /* "assets/img/gallery/northern/northern_route_uw.jpg",
        "assets/img/gallery/northern/northern_route_uw1.jpg",
        "assets/img/gallery/northern/northern_route_uw2.jpg",
        "assets/img/gallery/northern/northern_route_uw3.jpg",
        "assets/img/gallery/northern/northern_route_uw4.jpg",
        "assets/img/gallery/northern/northern_route_uw5.jpg",
        "assets/img/gallery/northern/northern_route_uw6.jpg",
        "assets/img/gallery/northern/northern_route_uw7.jpg",
        "assets/img/gallery/northern/northern_route_uw8.jpg",
        "assets/img/gallery/northern/northern_route_uw9.jpg",
        "assets/img/gallery/northern/northern_route_uw10.jpg",
        "assets/img/gallery/northern/northern_route_uw11.jpg"*/
      ]
    };
    $scope.galleryCmpt4 = {
      title: 'Palau',
      images: [
        "assets/img/gallery/palau/palau_1.jpg",
        "assets/img/gallery/palau/palau_2.jpg",
        "assets/img/gallery/palau/palau_3.jpg",
        "assets/img/gallery/palau/palau_4.jpg",
        "assets/img/gallery/palau/palau_5.jpg",
        "assets/img/gallery/palau/palau_6.jpg",
        "assets/img/gallery/palau/palau_7.jpg",
        "assets/img/gallery/palau/palau_8.jpg",
        "assets/img/gallery/palau/palau_9.jpg",
        "assets/img/gallery/palau/palau_10.jpg",
        "assets/img/gallery/palau/palau_11.jpg",
      
      ]
    };
    $scope.galleryCmpt5 = {
      title: 'Tubbataha',
      images: [
        "assets/img/gallery/tubbataha/malayan_divers.jpg",
        "assets/img/gallery/tubbataha/barracudas-elaine.jpg",
        "assets/img/gallery/tubbataha/ding-nurse-shark.jpg",
        "assets/img/gallery/tubbataha/diver_with_jacks.jpg",
        "assets/img/gallery/tubbataha/diver-with-soft&-table--corals-.jpg",
        "assets/img/gallery/tubbataha/elaine_jacks_silo.jpg",
        "assets/img/gallery/tubbataha/m0013982.jpg",
        "assets/img/gallery/tubbataha/m0013983.jpg",
        "assets/img/gallery/tubbataha/m0013989.jpg",
        "assets/img/gallery/tubbataha/m0014043.jpg",
        "assets/img/gallery/tubbataha/m0014079.jpg",
        "assets/img/gallery/tubbataha/m0014147.jpg",
        "assets/img/gallery/tubbataha/m0014192.jpg",
        "assets/img/gallery/tubbataha/m0014224.jpg",
        "assets/img/gallery/tubbataha/m0014442.jpg",
        "assets/img/gallery/tubbataha/M0020655.jpg",
        "assets/img/gallery/tubbataha/malu_with_turtle_sand.jpg",
        "assets/img/gallery/tubbataha/napoleon-wrasse-2.jpg",
        "assets/img/gallery/tubbataha/sea-fan-diver-tubbataha.jpg",
        "assets/img/gallery/tubbataha/Tubbataha-overhang.jpg",
        "assets/img/gallery/tubbataha/Tubbataha-Wreck.jpg",
        "assets/img/gallery/tubbataha/turtle_reef.jpg",
        "assets/img/gallery/tubbataha/wrasse.jpg",
      ]
    };
  
    $scope.galleryCmpt6 = {
      title: 'Eric Madeja',
      images: [
        "assets/img/gallery/ericmadeja/_EMA3241_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA2031_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA2039_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA2409_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA2494_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA2517_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA2538_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA2863_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA2874_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA2907_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA2938_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA2943_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA3052_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA3205_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA3256_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA3394_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA3413_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA6881_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA7112_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA7284_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA7295_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA7348_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA7354_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA7433_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA7459_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA7502_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA7604_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA7641_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA7693_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA7841_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA7903_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA7924_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA8043_Eric_Madeja_Tubbataha (1).jpg",
        "assets/img/gallery/ericmadeja/_EMA8087_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA8107_Eric_Madeja_Tubbataha (1).jpg",
        "assets/img/gallery/ericmadeja/_EMA8180_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA8184_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA8236_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA8284_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA8358_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA8377_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA8390_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA8446_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA8496_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA8589_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA8663_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA8687_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA8736_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/_EMA8755_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/EMA_8912_Eric_Madeja_Tubbataha (1).jpg",
        "assets/img/gallery/ericmadeja/EMA_9164_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/EMA_9255_Eric_Madeja_Tubbataha.jpg",
        "assets/img/gallery/ericmadeja/EMA_9287_Eric_Madeja_Tubbataha.jpg",
      ]
    };
       $scope.galleryCmpt7 = {
      title: 'Visayas',
      images: [
        "assets/img/gallery/visayas/dive_visayas_1.jpg",
        "assets/img/gallery/visayas/dive_visayas_2.jpg",
        "assets/img/gallery/visayas/dive_visayas_3.jpg",
        "assets/img/gallery/visayas/dive_visayas_4.jpg",
        "assets/img/gallery/visayas/dive_visayas_5.jpg",
        "assets/img/gallery/visayas/dive_visayas_6.jpg",
        "assets/img/gallery/visayas/dive_visayas_7.jpg",
        "assets/img/gallery/visayas/dive_visayas_8.jpg",
        "assets/img/gallery/visayas/dive_visayas_9.jpg",
        "assets/img/gallery/visayas/dive_visayas_10.jpg",
        "assets/img/gallery/visayas/dive_visayas_11.jpg",
      ]
    };
  }]
// }, { 
//   label: "Media", 
//   url: "media",
//   template: '<banner-cmpt title="{{bannerCmpt.title}}" sub-title="{{bannerCmpt.subTitle}}" bg-image="{{bannerCmpt.bgImage}}"></banner-cmpt><div class="home-page-room-area"><div class="container"><h1>{{message}}</h1></div></div>',
//   controller: ["$stateParams", "$scope", "CONFIG", function($stateParams, $scope, CONFIG) {
//     $scope.message = 'Media';
//   }]
}, { 
  label: "Contact Us", 
  url: "contact",
  template: '',
  controller: [],
  sub: [
    {
      label: "Cruises",
      url: "contact/cruises",
      template: '<banner-cmpt title="{{bannerCmpt.title}}" sub-title="{{bannerCmpt.subTitle}}" bg-image="{{bannerCmpt.bgImage}}"></banner-cmpt><div class="home-page-room-area"><div class="container"><h1>{{message}}</h1></div></div>',
      controller: ["$stateParams", "$scope", "CONFIG", function($stateParams, $scope, CONFIG) {
        $scope.bannerCmpt = {
          title: "",
          subTitle: "",
          bgImage: "assets/img/bennar/contact-us.jpg"
        };         
        $scope.message = 'For Charters, Tubbataha and Northern Palawan Cruises please email  yvetteclee@gmail.com / info@discoveryfleet.com';
      }]
    }, {
      label: "International Agents",
      url: "contact/agents",
      template: '<banner-cmpt title="{{bannerCmpt.title}}" sub-title="{{bannerCmpt.subTitle}}" bg-image="{{bannerCmpt.bgImage}}"></banner-cmpt>'+
                '<div class="home-page-room-area">'+
                '   <div class="container">'+
                '     <h1>{{message}}</h1>'+
                '   </div>'+
                '</div>'+
                '<div class="home-page-room-area">'+
                ' <div class="container">'+
                '   <div class="row">'+
                '     <div class="col-sm-3 col-xs-12">'+
                '       <blurb-cmpt title="{{blurbCmpt[0].title}}" link="{{blurbCmpt[0].link}}" image="{{blurbCmpt[0].image}}" context="{{blurbCmpt[0].context}}"></blurb-cmpt>'+
                '     </div>'+
                '     <div class="col-sm-3 col-xs-12">'+
                '       <blurb-cmpt title="{{blurbCmpt[1].title}}" link="{{blurbCmpt[1].link}}" image="{{blurbCmpt[1].image}}" context="{{blurbCmpt[1].context}}"></blurb-cmpt>'+
                '     </div>'+
                '     <div class="col-sm-3 col-xs-12">'+
                '       <blurb-cmpt title="{{blurbCmpt[2].title}}" link="{{blurbCmpt[2].link}}" image="{{blurbCmpt[2].image}}" context="{{blurbCmpt[2].context}}"></blurb-cmpt>'+
                '     </div>'+
                '     <div class="col-sm-3 col-xs-12">'+
                '       <blurb-cmpt title="{{blurbCmpt[3].title}}" link="{{blurbCmpt[3].link}}" image="{{blurbCmpt[3].image}}" context="{{blurbCmpt[3].context}}"></blurb-cmpt>'+
                '     </div>'+

                '     <div class="col-sm-3 col-xs-12">'+
                '       <blurb-cmpt title="{{blurbCmpt[4].title}}" link="{{blurbCmpt[4].link}}" image="{{blurbCmpt[4].image}}" context="{{blurbCmpt[4].context}}"></blurb-cmpt>'+
                '     </div>'+
                '     <div class="col-sm-3 col-xs-12">'+
                '       <blurb-cmpt title="{{blurbCmpt[5].title}}" link="{{blurbCmpt[5].link}}" image="{{blurbCmpt[5].image}}" context="{{blurbCmpt[5].context}}"></blurb-cmpt>'+
                '     </div>'+
                '     <div class="col-sm-3 col-xs-12">'+
                '       <blurb-cmpt title="{{blurbCmpt[6].title}}" link="{{blurbCmpt[6].link}}" image="{{blurbCmpt[6].image}}" context="{{blurbCmpt[6].context}}"></blurb-cmpt>'+
                '     </div>'+
                '     <div class="col-sm-3 col-xs-12">'+
                '       <blurb-cmpt title="{{blurbCmpt[7].title}}" link="{{blurbCmpt[7].link}}" image="{{blurbCmpt[7].image}}" context="{{blurbCmpt[7].context}}"></blurb-cmpt>'+
                '     </div>'+

                '     <div class="col-sm-3 col-xs-12">'+
                '       <blurb-cmpt title="{{blurbCmpt[8].title}}" link="{{blurbCmpt[8].link}}" image="{{blurbCmpt[8].image}}" context="{{blurbCmpt[8].context}}"></blurb-cmpt>'+
                '     </div>'+
                '     <div class="col-sm-3 col-xs-12">'+
                '       <blurb-cmpt title="{{blurbCmpt[9].title}}" link="{{blurbCmpt[9].link}}" image="{{blurbCmpt[9].image}}" context="{{blurbCmpt[9].context}}"></blurb-cmpt>'+
                '     </div>'+
                '     <div class="col-sm-3 col-xs-12">'+
                '       <blurb-cmpt title="{{blurbCmpt[10].title}}" link="{{blurbCmpt[10].link}}" image="{{blurbCmpt[10].image}}" context="{{blurbCmpt[10].context}}"></blurb-cmpt>'+
                '     </div>'+
                '     <div class="col-sm-3 col-xs-12">'+
                '       <blurb-cmpt title="{{blurbCmpt[11].title}}" link="{{blurbCmpt[11].link}}" image="{{blurbCmpt[11].image}}" context="{{blurbCmpt[11].context}}"></blurb-cmpt>'+
                '     </div>'+

                '     <div class="col-sm-3 col-xs-12">'+
                '       <blurb-cmpt title="{{blurbCmpt[12].title}}" link="{{blurbCmpt[12].link}}" image="{{blurbCmpt[12].image}}" context="{{blurbCmpt[12].context}}"></blurb-cmpt>'+
                '     </div>'+
                '     <div class="col-sm-3 col-xs-12">'+
                '       <blurb-cmpt title="{{blurbCmpt[13].title}}" link="{{blurbCmpt[13].link}}" image="{{blurbCmpt[13].image}}" context="{{blurbCmpt[13].context}}"></blurb-cmpt>'+
                '     </div>'+
                '     <div class="col-sm-3 col-xs-12">'+
                '       <blurb-cmpt title="{{blurbCmpt[14].title}}" link="{{blurbCmpt[14].link}}" image="{{blurbCmpt[14].image}}" context="{{blurbCmpt[14].context}}"></blurb-cmpt>'+
                '     </div>'+
                '     <div class="col-sm-3 col-xs-12">'+
                '       <blurb-cmpt title="{{blurbCmpt[15].title}}" link="{{blurbCmpt[15].link}}" image="{{blurbCmpt[15].image}}" context="{{blurbCmpt[15].context}}"></blurb-cmpt>'+
                '     </div>'+
                '     <div class="col-sm-3 col-xs-12">'+
                '       <blurb-cmpt title="{{blurbCmpt[16].title}}" link="{{blurbCmpt[16].link}}" image="{{blurbCmpt[16].image}}" context="{{blurbCmpt[16].context}}"></blurb-cmpt>'+
                '     </div>'+
                '     <div class="col-sm-3 col-xs-12">'+
                '       <blurb-cmpt title="{{blurbCmpt[17].title}}" link="{{blurbCmpt[17].link}}" image="{{blurbCmpt[17].image}}" context="{{blurbCmpt[17].context}}"></blurb-cmpt>'+
                '     </div>'+
                '     <div class="col-sm-3 col-xs-12">'+
                '       <blurb-cmpt title="{{blurbCmpt[18].title}}" link="{{blurbCmpt[18].link}}" image="{{blurbCmpt[18].image}}" context="{{blurbCmpt[18].context}}"></blurb-cmpt>'+
                '     </div>'+
                '   </div>'+
                ' </div>'+
                '</div>',
      controller: ["$stateParams", "$scope", "CONFIG", function($stateParams, $scope, CONFIG) {
        $scope.bannerCmpt = {
          title: "",
          subTitle: "",
          bgImage: "assets/img/bennar/contact-us.jpg"
        };         
        $scope.message = 'International Agents';
        $scope.blurbCmpt = [
          {title: "bergreiser - com", link: "http://www.bergreiser.com", image: "assets/img/agents/a1.jpg", context: ""},
          {title: "atlantis diving - cn", link: "http://www.atlantisdiving.cn", image: "assets/img/agents/a2.jpg", context: ""},
          {title: "dive holic - hk", link: "http://www.diveholic.com.hk", image: "assets/img/agents/a3.jpg", context: ""},
          {title: "xpert holidays - com", link: "http://www.xpertholidays.com", image: "assets/img/agents/a4.jpg", context: ""},

          {title: "dive 2 world - com", link: "http://www.dive2world.com", image: "assets/img/agents/a6.jpg", context: ""},
          {title: "active tour - jp", link: "http://activetour.jp", image: "assets/img/agents/a7.jpg", context: ""},
          {title: "reise bazaar - no", link: "http://www.reisebazaar.no", image: "assets/img/agents/a8.jpg", context: ""},
          {title: "delphin-tours - de", link: "http://www.delphin-tours.de", image: "assets/img/agents/a9.jpg", context: ""},
          
          {title: "reisefieber - net", link: "http://www.reisefieber.net", image: "assets/img/agents/a10.jpg", context: ""},
          {title: "cctravel - dk", link: "http://cctravel.dk", image: "assets/img/agents/a11.jpg", context: ""},
          {title: "jr - dk", link: "http://www.jr.dk", image: "assets/img/agents/a12.jpg", context: ""},

          {title: "scuba planners - com", link: "http://www.scubaplanners.com", image: "assets/img/agents/a13.jpg", context: ""},
          {title: "asiaqua - com", link: "http://www.asiaqua.com", image: "assets/img/agents/a14.jpg", context: ""},
          {title: "islandcruiseadventure", link: "http://www.islandcruiseadventure.com", image: "assets/img/agents/a15.jpg", context: ""},
          {title: "China Scuba Diving", link: "http://www.chinascubadiving.com", image: "assets/img/agents/a18.jpg", context: ""},
          {title: "liveaboard.com", link: "http://www.liveaboard.com", image: "assets/img/agents/a17.jpg", context: ""},
          
          {title: "bluewaterdivetravel - com", link: "http://www.bluewaterdivetravel.com", image: "assets/img/agents/a5.jpg", context: ""},
          {title: "dive adventures - au", link: "http://www.diveadventures.com.au", image: "assets/img/agents/a16.png", context: ""},
          {title: "padi travel - com", link: "https://travel.padi.com/liveaboard/philippines/discovery-palawan/", image: "assets/img/agents/padi.jpg", context: ""},
        ];
      }]
    }
  ]
  
}, { 
  label: "Booking", 
  url: "booking",
  template: '',
  controller: ["$stateParams", "$scope", "CONFIG", function($stateParams, $scope, CONFIG) {
    $scope.message = 'Policy';
  }],
  sub: [
  	{
  		label: "Book now",
  		type: "modal",
  		url: "#myModal",
    }, {
      label: "Policy",
      url: "booking/policy",
      template: '<banner-cmpt title="{{bannerCmpt.title}}" sub-title="{{bannerCmpt.subTitle}}" bg-image="{{bannerCmpt.bgImage}}"></banner-cmpt>'+
                '<div class="slider-bottom-area">'+
                '  <div class="container">'+
                '    <div class="row">'+
                '      <div class="col-xs-12">'+
                '        <booking-cmpt booking="{{bookingCmpt.booking}}"></booking-cmpt>'+
                '      </div>'+
                '    </div>'+
                '  </div>'+
                '</div>',
      controller: ["$stateParams", "$scope", "CONFIG", function($stateParams, $scope, CONFIG) {
        $scope.bannerCmpt = {
          title: "",
          subTitle: "",
          bgImage: "assets/img/bennar/scuba-diving.jpg"
        };            
        $scope.bookingCmpt = {
          booking: "policy"
        };
      }]
    }, {
      label: "Dive Safety",
      url: "booking/safety",
      template: '<banner-cmpt title="{{bannerCmpt.title}}" sub-title="{{bannerCmpt.subTitle}}" bg-image="{{bannerCmpt.bgImage}}"></banner-cmpt>'+
                '<div class="slider-bottom-area">'+
                '  <div class="container">'+
                '    <div class="row">'+
                '      <div class="col-xs-12">'+
                '        <booking-cmpt booking="{{bookingCmpt.booking}}"></booking-cmpt>'+
                '      </div>'+
                '    </div>'+
                '  </div>'+
                '</div>',
      controller: ["$stateParams", "$scope", "CONFIG", function($stateParams, $scope, CONFIG) {
        $scope.bannerCmpt = {
          title: "",
          subTitle: "",
          bgImage: "assets/img/bennar/scuba-diving.jpg"
        };            
        $scope.bookingCmpt = {
          booking: "safety"
        };
      }]
    }
  ]
},
];