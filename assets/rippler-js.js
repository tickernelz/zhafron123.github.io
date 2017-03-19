        $(document).ready(function() {
            $('#fullpage').fullpage({
                //Navigation
                menu: '#menu',
                lockAnchors: false,
                navigation: true,
                navigationPosition: 'right',
                navigationTooltips: [],
                showActiveTooltip: false,
                slidesNavigation: true,
                slidesNavPosition: 'bottom',

                //Scrolling
                css3: true,
                scrollingSpeed: 700,
                autoScrolling: true,
                fitToSection: true,
                fitToSectionDelay: 1000,
                scrollBar: false,
                easing: 'easeInOutCubic',
                easingcss3: 'ease',
                loopBottom: false,
                loopTop: false,
                loopHorizontal: true,
                continuousVertical: false,
                continuousHorizontal: true,
                scrollHorizontally: false,
                interlockedSlides: false,
                dragAndMove: false,
                offsetSections: false,
                resetSliders: false,
                fadingEffect: false,
                normalScrollElements: '#element1, .element2',
                scrollOverflow: true,
                scrollOverflowReset: false,
                scrollOverflowOptions: null,
                touchSensitivity: 15,
                normalScrollElementTouchThreshold: 5,
                bigSectionsDestination: null,

                //Accessibility
                keyboardScrolling: true,
                animateAnchor: true,
                recordHistory: true,

                //Design
                controlArrows: false,
                verticalCentered: true,
                sectionsColor: ['#ccddff', '#dadad6', '#4afd61'],
                paddingTop: '3em',
                paddingBottom: '10px',
                fixedElements: '#header, .footer',
                responsiveWidth: 0,
                responsiveHeight: 0,
                responsiveSlides: false,

                //Custom selectors
                sectionSelector: '.section',
                slideSelector: '.slide',

                lazyLoading: true,

                //events
                onLeave: function(index, nextIndex, direction) {},
                afterLoad: function(anchorLink, index) {},
                afterRender: function() {},
                afterResize: function() {},
                afterResponsive: function(isResponsive) {},
                afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {},
                onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {}
            });
        });