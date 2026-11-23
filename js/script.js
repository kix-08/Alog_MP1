// Machine Problem 1 - D' Original Batangas Pizza
// Learned from Lecture 9, Lab 2, ME 3, and ME 4

$(document).ready(function(){

    // === 1. HERO SECTION ENTRANCE ANIMATIONS (INDEX PAGE) ===
    if($("#threePizzas").length > 0){
        var targetRight = "-14.5vw";
        var targetBatsHeight = "9.5vw";
        if($(window).width() <= 820){
            targetRight = "0px";
            targetBatsHeight = "96px";
        }

        // Initial positions before animation starts
        $("#threePizzas").css({
            right: "-65vw",
            opacity: 0
        });

        $("#estImg").css({
            left: "-420px",
            opacity: 0
        });

        $("#pizzaImg").css({
            top: "140px",
            opacity: 0
        });

        $("#batsWrap").css({
            height: "0px",
            opacity: 0
        });

        $("#batsImg").css({
            width: "40%"
        });

        // Step 1: Animate pizzas entering from right to left
        $("#threePizzas").animate({
            right: targetRight,
            opacity: 1
        }, 850, function(){

            // Step 2: Animate "EST. 1993 Take Home Delicious" from left to right
            $("#estImg").animate({
                left: "0px",
                opacity: 1
            }, 700);

            // Animate "PIZZA" from bottom to top at the same time
            $("#pizzaImg").animate({
                top: "0px",
                opacity: 1
            }, 700, function(){

                // Step 3: Squeeze "Batangas" text into the middle with a fun bounce
                $("#batsWrap").animate({
                    height: targetBatsHeight,
                    opacity: 1
                }, 380);

                $("#batsImg")
                    .animate({ width: "112%" }, 260)
                    .animate({ width: "88%" }, 180)
                    .animate({ width: "105%" }, 160)
                    .animate({ width: "100%" }, 150, function(){
                        $("#batsWrap").css("height", "auto");
                    });
            });
        });
    }

    // === 2. STICKY HEADER, SECTION 2 & SECTION 4 SCROLL ANIMATIONS ===
    var taraAnimated = false;
    var deviceAnimated = false;

    if($("#taraSection").length > 0){
        $("#taraHeader, #taraBannerBox, #taraPhotosRow, #storyCardTop, #storyCardBot").css({
            opacity: 0,
            top: "25px"
        });
    }

    if($("#deviceSection").length > 0){
        $("#deviceTitle").css({
            opacity: 0,
            top: "-20px"
        });

        $("#deviceWrap").css({
            opacity: 0,
            top: "45px"
        });

        $("#deviceImg").css({
            width: "90%"
        });

        $("#deviceCaption").css({
            opacity: 0,
            left: "-30px"
        });

        $("#buyNowLink").css({
            opacity: 0,
            top: "-70px",
            right: "-70px"
        });
    }

    function handlePageScroll(){
        var currentScroll = $(window).scrollTop();
        var scrollBottom = currentScroll + $(window).height();

        // Add dark backdrop to sticky header when scrolling down
        if(currentScroll > 35){
            $("#iHeader").addClass("scrolledHeader");
        }
        else {
            $("#iHeader").removeClass("scrolledHeader");
        }

        // Section 2 scroll entrance animation
        if(!taraAnimated && $("#taraSection").length > 0){
            var taraOffset = $("#taraSection").offset();
            if(taraOffset && scrollBottom > taraOffset.top + 70){
                taraAnimated = true;

                $("#taraHeader").animate({
                    opacity: 1,
                    top: "0px"
                }, 480);

                $("#taraBannerBox").delay(120).animate({
                    opacity: 1,
                    top: "0px"
                }, 480);

                $("#taraPhotosRow").delay(240).animate({
                    opacity: 1,
                    top: "0px"
                }, 520);

                $("#storyCardTop").delay(160).animate({
                    opacity: 1,
                    top: "0px"
                }, 520);

                $("#storyCardBot").delay(280).animate({
                    opacity: 1,
                    top: "0px"
                }, 520);
            }
        }

        // Section 4 gadgets scroll entrance animation
        if(!deviceAnimated && $("#deviceSection").length > 0){
            var deviceOffset = $("#deviceSection").offset();
            if(deviceOffset && scrollBottom > deviceOffset.top + 70){
                deviceAnimated = true;

                $("#deviceTitle").animate({
                    opacity: 1,
                    top: "0px"
                }, 480);

                $("#deviceWrap").delay(120).animate({
                    opacity: 1,
                    top: "0px"
                }, 550);

                $("#deviceImg").delay(120)
                    .animate({ width: "102%" }, 380)
                    .animate({ width: "100%" }, 180);

                $("#deviceCaption").delay(380).animate({
                    opacity: 1,
                    left: "0px"
                }, 460);

                $("#buyNowLink").delay(240).animate({
                    opacity: 1,
                    top: "-2px",
                    right: "-2px"
                }, 460);
            }
        }
    }

    $(window).on("scroll", function(){
        handlePageScroll();
    });

    handlePageScroll();

    // === 3. SECTION 3 STALL PHOTO CAROUSEL (h3stall1, h3stall2, h3stall3, h3stall4) ===
    var currentStall = 0;
    var totalStalls = $(".stallSlideImg").length;

    function showStallImage(nextStallIndex){
        $(".stallSlideImg").eq(currentStall).stop(true, true).animate({
            opacity: 0
        }, 280);

        $(".stallSlideImg").eq(nextStallIndex).stop(true, true).animate({
            opacity: 1
        }, 280);

        currentStall = nextStallIndex;
    }

    $("#nextStallBtn").on("click", function(){
        var nextIdx = currentStall + 1;

        if(nextIdx >= totalStalls){
            nextIdx = 0;
        }

        showStallImage(nextIdx);
    });

    $("#prevStallBtn").on("click", function(){
        var prevIdx = currentStall - 1;

        if(prevIdx < 0){
            prevIdx = totalStalls - 1;
        }

        showStallImage(prevIdx);
    });

    // === 4. MENU PAGE: DRIBBBLE-INSPIRED WOODEN BOARD PIZZA SHOWCASE ===
    if($("#menuShowcase").length > 0){
        var pizzaTitles = [
            "Ham and Cheese",
            "HAWAIIAN",
            "BEEFY SPECIAL",
            "OVERLOAD"
        ];

        var pizzaDescriptions = [
            "Sweet tomato sauce, melted cheese, and savory ham slices.",
            "Sweet pineapple chunks, savory ham, and melted cheese.",
            "Seasoned ground beef, ham slices, and extra melted cheese.",
            "Ham, beef, pineapple, mushrooms, bell pepper, and cheese."
        ];

        var priceLabels = [
            "₱104 Take-Home Box • ₱114 Regular",
            "₱109 Take-Home Box • ₱119 Regular",
            "₱109 Take-Home Box • ₱119 Regular",
            "₱109 Take-Home Box • ₱119 Regular"
        ];

        var currentFlavor = 0;
        var isAnimatingFlavor = false;

        // Initial entrance animation onto the wooden board when Menu page loads
        $(".activePizzaImg").eq(0).css({
            left: "88%",
            top: "35%",
            opacity: 0
        }).animate({
            left: "50%",
            top: "50%",
            opacity: 1
        }, 620);

        $("#speechBubbleWrap").css({
            opacity: 0,
            top: "12%"
        }).delay(320).animate({
            opacity: 1,
            top: "4%"
        }, 380);

        function changeFlavor(newIndex, direction){
            if(isAnimatingFlavor || newIndex === currentFlavor){
                return;
            }
            isAnimatingFlavor = true;

            var oldIndex = currentFlavor;
            currentFlavor = newIndex;

            var exitLeft = "-15%";
            var enterLeft = "115%";

            if(direction === "prev"){
                exitLeft = "115%";
                enterLeft = "-15%";
            }

            // Update active flavor pill button
            $(".flavorDot").removeClass("activeDot");
            $('.flavorDot[data-index="' + newIndex + '"]').addClass("activeDot");

            // 1. Cross-fade floating ingredients background smoothly (no src swap)
            $(".menuBgImg").eq(oldIndex).stop(true, true).animate({
                opacity: 0
            }, 440);

            $(".menuBgImg").eq(newIndex).stop(true, true).animate({
                opacity: 1
            }, 440);

            // 2. Smoothly transition flavor title and price tag
            $("#menuFlavorTitle").stop(true, true).animate({
                opacity: 0,
                top: "-10px"
            }, 190, function(){
                $("#menuFlavorTitle").text(pizzaTitles[newIndex]).css("top", "10px").animate({
                    opacity: 1,
                    top: "0px"
                }, 240);
            });

            $("#flavorPriceTag").text(priceLabels[newIndex]);

            // 3. Smoothly transition pure CSS speech bubble text
            $("#speechBubbleWrap").stop(true, true).animate({
                opacity: 0,
                top: "10%"
            }, 180, function(){
                $("#speechBubbleText").text(pizzaDescriptions[newIndex]);
                $("#speechBubbleWrap").animate({
                    opacity: 1,
                    top: "4%"
                }, 260);
            });

            // 4. Simultaneously slide outgoing pizza off the board and incoming pizza onto the board
            $(".activePizzaImg").eq(oldIndex).stop(true, true).animate({
                left: exitLeft,
                top: "62%",
                opacity: 0
            }, 460);

            $(".activePizzaImg").eq(newIndex).stop(true, true).css({
                left: enterLeft,
                top: "38%",
                opacity: 0
            }).animate({
                left: "50%",
                top: "50%",
                opacity: 1
            }, 460, function(){
                isAnimatingFlavor = false;
            });
        }

        $("#nextFlavorBtn").on("click", function(){
            var nextIdx = currentFlavor + 1;
            if(nextIdx >= pizzaTitles.length){
                nextIdx = 0;
            }
            changeFlavor(nextIdx, "next");
        });

        $("#prevFlavorBtn").on("click", function(){
            var prevIdx = currentFlavor - 1;
            if(prevIdx < 0){
                prevIdx = pizzaTitles.length - 1;
            }
            changeFlavor(prevIdx, "prev");
        });

        $(".flavorDot").on("click", function(){
            var chosenIdx = parseInt($(this).attr("data-index"), 10);
            var dir = "next";
            if(chosenIdx < currentFlavor){
                dir = "prev";
            }
            changeFlavor(chosenIdx, dir);
        });
    }

    // === 5. MENU PAGE: SECTION 2 PASALUBONG BOX ORDER CALCULATOR ===
    if($("#orderSection").length > 0){
        var hamQty = 1;
        var hawQty = 0;
        var beefQty = 1;
        var overQty = 1;

        function updateOrderStack(){
            var takeHome = $("#takeHomeCheck").is(":checked");
            var extraCheese = $("#extraCheeseCheck").is(":checked");

            $("#qtyHam").text(hamQty);
            $("#qtyHaw").text(hawQty);
            $("#qtyBeef").text(beefQty);
            $("#qtyOver").text(overQty);

            var hamPrice = 114;
            var otherPrice = 119;

            if(takeHome){
                hamPrice = 104;
                otherPrice = 109;
            }

            if(extraCheese){
                hamPrice = hamPrice + 15;
                otherPrice = otherPrice + 15;
            }

            var totalBoxes = hamQty + hawQty + beefQty + overQty;
            var totalCost = 0;
            var receiptHtml = "";

            if(hamQty > 0){
                var hamSub = hamQty * hamPrice;
                totalCost = totalCost + hamSub;
                receiptHtml = receiptHtml + '<div class="receiptRow"><span>' + hamQty + 'x Ham and Cheese</span><span>₱' + hamSub + '.00</span></div>';
            }

            if(hawQty > 0){
                var hawSub = hawQty * otherPrice;
                totalCost = totalCost + hawSub;
                receiptHtml = receiptHtml + '<div class="receiptRow"><span>' + hawQty + 'x Hawaiian</span><span>₱' + hawSub + '.00</span></div>';
            }

            if(beefQty > 0){
                var beefSub = beefQty * otherPrice;
                totalCost = totalCost + beefSub;
                receiptHtml = receiptHtml + '<div class="receiptRow"><span>' + beefQty + 'x Beefy Special</span><span>₱' + beefSub + '.00</span></div>';
            }

            if(overQty > 0){
                var overSub = overQty * otherPrice;
                totalCost = totalCost + overSub;
                receiptHtml = receiptHtml + '<div class="receiptRow"><span>' + overQty + 'x Overload</span><span>₱' + overSub + '.00</span></div>';
            }

            if(totalBoxes === 0){
                receiptHtml = '<div class="receiptRow"><span>No boxes selected yet</span><span>₱0.00</span></div>';
            }

            $("#cartLines").html(receiptHtml);
            $("#cartTotal").text("₱" + totalCost + ".00");
        }

        $("#plusHam").on("click", function(){
            hamQty = hamQty + 1;
            updateOrderStack();
        });

        $("#minusHam").on("click", function(){
            if(hamQty > 0){
                hamQty = hamQty - 1;
                updateOrderStack();
            }
        });

        $("#plusHaw").on("click", function(){
            hawQty = hawQty + 1;
            updateOrderStack();
        });

        $("#minusHaw").on("click", function(){
            if(hawQty > 0){
                hawQty = hawQty - 1;
                updateOrderStack();
            }
        });

        $("#plusBeef").on("click", function(){
            beefQty = beefQty + 1;
            updateOrderStack();
        });

        $("#minusBeef").on("click", function(){
            if(beefQty > 0){
                beefQty = beefQty - 1;
                updateOrderStack();
            }
        });

        $("#plusOver").on("click", function(){
            overQty = overQty + 1;
            updateOrderStack();
        });

        $("#minusOver").on("click", function(){
            if(overQty > 0){
                overQty = overQty - 1;
                updateOrderStack();
            }
        });

        $("#takeHomeCheck, #extraCheeseCheck").on("change", function(){
            updateOrderStack();
        });

        $("#orderCheckoutForm").on("submit", function(event){
            event.preventDefault();

            var customerName = $("#orderName").val().trim();
            var customerPhone = $("#orderPhone").val().trim();
            var chosenBranch = $("#orderBranch").val();
            var totalBoxes = hamQty + hawQty + beefQty + overQty;

            if(totalBoxes === 0){
                $("#orderFeedback").text("Please add at least 1 pizza box to your order first.");
                return;
            }

            if(customerName === "" || customerPhone === ""){
                $("#orderFeedback").text("Please enter your name and mobile number for stall pickup.");
                return;
            }

            $("#orderFeedback").text("Salamat, " + customerName + "! Your " + totalBoxes + "-box order is queued for the oven at " + chosenBranch + ".");
        });

        updateOrderStack();
    }

    // === 6. MENU PAGE: SECTION 3 BULK & PARTY STACK INQUIRY FORM ===
    if($("#bulkInquiryForm").length > 0){
        $("#bulkInquiryForm").on("submit", function(event){
            event.preventDefault();

            var inqName = $("#inqName").val().trim();
            var inqPhone = $("#inqPhone").val().trim();
            var inqBranch = $("#inqBranch").val();
            var inqBoxes = $("#inqBoxes").val();

            if(inqName === "" || inqPhone === ""){
                $("#inqFeedback").text("Please fill in your full name and contact number.");
                return;
            }

            $("#inqFeedback").text("Inquiry received, " + inqName + "! Our " + inqBranch + " bakers will contact you at " + inqPhone + " for your " + inqBoxes + "-box stack.");
        });
    }

    // === 7. MEDIA GALLERY PAGE: CATEGORY FILTER & FULL-SCREEN LIGHTBOX ===
    if($("#gallerySection").length > 0){
        var currentGalleryIndex = 0;

        $(".galleryFilterBtn").on("click", function(){
            var selectedFilter = $(this).attr("data-filter");

            $(".galleryFilterBtn").removeClass("activeFilter");
            $(this).addClass("activeFilter");

            if(selectedFilter === "all"){
                $(".galleryItem").stop(true, true).fadeIn(260);
            }
            else {
                $(".galleryItem").each(function(){
                    var itemCategory = $(this).attr("data-category");

                    if(itemCategory === selectedFilter){
                        $(this).stop(true, true).fadeIn(260);
                    }
                    else {
                        $(this).stop(true, true).fadeOut(200);
                    }
                });
            }
        });

        function openLightboxAtIndex(itemIndex){
            var visibleItems = $(".galleryItem:visible");
            if(visibleItems.length === 0){
                return;
            }

            if(itemIndex >= visibleItems.length){
                itemIndex = 0;
            }
            if(itemIndex < 0){
                itemIndex = visibleItems.length - 1;
            }

            currentGalleryIndex = itemIndex;
            var chosenCard = visibleItems.eq(currentGalleryIndex);
            var imgSrc = chosenCard.find("img").attr("src");
            var captionTitle = chosenCard.find("h3").text();

            $("#lightboxImg").attr("src", imgSrc);
            $("#lightboxText").text(captionTitle);
            $("#lightboxModal").removeClass("hiddenModal").hide().fadeIn(220);
        }

        $(".galleryItem").on("click", function(){
            var visibleItems = $(".galleryItem:visible");
            var clickedIndex = visibleItems.index($(this));
            openLightboxAtIndex(clickedIndex);
        });

        $("#lightboxCloseBtn").on("click", function(){
            $("#lightboxModal").fadeOut(200, function(){
                $("#lightboxModal").addClass("hiddenModal");
            });
        });

        $("#lightboxNextBtn").on("click", function(){
            openLightboxAtIndex(currentGalleryIndex + 1);
        });

        $("#lightboxPrevBtn").on("click", function(){
            openLightboxAtIndex(currentGalleryIndex - 1);
        });

        $("#lightboxModal").on("click", function(event){
            if(event.target.id === "lightboxModal"){
                $("#lightboxModal").fadeOut(200, function(){
                    $("#lightboxModal").addClass("hiddenModal");
                });
            }
        });
    }

    // === 8. CONTACT US PAGE: HERO ENTRANCE, STALL CAROUSEL & MESSAGE FORM ===
    if($("#contactHeroContent").length > 0){
        $("#contactHeroContent").css({
            opacity: 0,
            top: "25px"
        }).animate({
            opacity: 1,
            top: "0px"
        }, 650);
    }

    if($("#loveSection").length > 0){
        var currentLoveSlide = 0;
        var totalLoveSlides = $(".loveSlide").length;
        var isAnimatingLove = false;

        function showLoveSlide(nextIndex){
            if(isAnimatingLove || nextIndex === currentLoveSlide){
                return;
            }
            isAnimatingLove = true;

            $(".loveSlide").eq(currentLoveSlide).stop(true, true).animate({
                opacity: 0
            }, 280, function(){
                $(this).addClass("hiddenLayer");
            });

            $(".loveSlide").eq(nextIndex).removeClass("hiddenLayer").css("opacity", 0).stop(true, true).animate({
                opacity: 1
            }, 320, function(){
                currentLoveSlide = nextIndex;
                isAnimatingLove = false;
            });
        }

        $("#nextLoveBtn").on("click", function(){
            var nextIdx = currentLoveSlide + 1;
            if(nextIdx >= totalLoveSlides){
                nextIdx = 0;
            }
            showLoveSlide(nextIdx);
        });

        $("#prevLoveBtn").on("click", function(){
            var prevIdx = currentLoveSlide - 1;
            if(prevIdx < 0){
                prevIdx = totalLoveSlides - 1;
            }
            showLoveSlide(prevIdx);
        });
    }

    if($("#contactMessageForm").length > 0){
        $("#contactMessageForm").on("submit", function(event){
            event.preventDefault();

            var senderName = $("#contactName").val().trim();
            var senderContact = $("#contactEmail").val().trim();
            var chosenStall = $("#contactBranch").val();
            var senderMsg = $("#contactMsg").val().trim();

            if(senderName === "" || senderContact === "" || senderMsg === ""){
                $("#contactFeedback").text("Please fill in your name, contact info, and message.");
                return;
            }

            $("#contactFeedback").text("Thank you, " + senderName + "! Your message for " + chosenStall + " has been sent.");
        });
    }

    // === 9. REVIEWS PAGE: STAR PICKER, LIVE RATING BARS & FEEDBACK LIST ===
    if($("#reviewMainSection").length > 0){
        var chosenRating = 5;
        var starCounts = [0, 1, 5, 18, 84];

        $("#reviewHeroContent").css({
            opacity: 0,
            top: "25px"
        }).animate({
            opacity: 1,
            top: "0px"
        }, 650);

        function updateRatingSummary(){
            var totalRatings = starCounts[0] + starCounts[1] + starCounts[2] + starCounts[3] + starCounts[4];
            var weightedSum = (starCounts[0] * 1) + (starCounts[1] * 2) + (starCounts[2] * 3) + (starCounts[3] * 4) + (starCounts[4] * 5);
            var averageScore = (weightedSum / totalRatings).toFixed(1);

            $("#countFive").text(starCounts[4]);
            $("#countFour").text(starCounts[3]);
            $("#countThree").text(starCounts[2]);
            $("#countTwo").text(starCounts[1]);
            $("#countOne").text(starCounts[0]);

            $("#barFive").css("width", Math.round((starCounts[4] / totalRatings) * 100) + "%");
            $("#barFour").css("width", Math.round((starCounts[3] / totalRatings) * 100) + "%");
            $("#barThree").css("width", Math.round((starCounts[2] / totalRatings) * 100) + "%");
            $("#barTwo").css("width", Math.round((starCounts[1] / totalRatings) * 100) + "%");
            $("#barOne").css("width", Math.round((starCounts[0] / totalRatings) * 100) + "%");

            $("#overallScoreNum").text(averageScore);
            $("#overallCount").text(totalRatings + " Ratings");
        }

        $(".pickStarBtn").on("click", function(){
            chosenRating = parseInt($(this).attr("data-rating"), 10);

            $(".pickStarBtn").each(function(){
                var starVal = parseInt($(this).attr("data-rating"), 10);

                if(starVal <= chosenRating){
                    $(this).addClass("selectedStar");
                }
                else {
                    $(this).removeClass("selectedStar");
                }
            });
        });

        $("#addReviewForm").on("submit", function(event){
            event.preventDefault();

            var reviewerName = $("#reviewName").val().trim();
            var reviewerBranch = $("#reviewBranch").val();
            var reviewerText = $("#reviewComment").val().trim();

            if(reviewerName === "" || reviewerText === ""){
                $("#reviewFormMsg").text("Please enter your name and write a short review.");
                return;
            }

            var starsText = "";
            var s = 1;
            for(s = 1; s <= 5; s++){
                if(s <= chosenRating){
                    starsText = starsText + "★";
                }
                else {
                    starsText = starsText + "☆";
                }
            }

            var newCardHtml =
                '<div class="feedbackCard">' +
                    '<div class="feedbackHeader">' +
                        '<div class="feedbackAuthorWrap">' +
                            '<strong class="feedbackUser"></strong>' +
                            '<span class="feedbackBranch"></span>' +
                        '</div>' +
                        '<span class="feedbackStars">' + starsText + '</span>' +
                    '</div>' +
                    '<p class="feedbackBody"></p>' +
                '</div>';

            var newCard = $(newCardHtml);
            newCard.find(".feedbackUser").text(reviewerName + " • Just now");
            newCard.find(".feedbackBranch").text(reviewerBranch);
            newCard.find(".feedbackBody").text(reviewerText);
            newCard.hide();

            $("#feedbackCardsWrap").prepend(newCard);
            newCard.fadeIn(320);

            starCounts[chosenRating - 1] = starCounts[chosenRating - 1] + 1;
            updateRatingSummary();

            $("#reviewName").val("");
            $("#reviewComment").val("");
            $("#reviewFormMsg").text("Salamat, " + reviewerName + "! Your review has been posted.");
        });

        updateRatingSummary();
    }

});
