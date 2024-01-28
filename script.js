$(document).ready(function(){


    $(".leftNavBarMenuSearch").click(function(){
        // $(".contentBarNavSearch").css("display", "flex")
        $(".contentBarNavSearchInp").val("")
        $(".contentBarNavHomeTxt").css("opacity", "0")
        $(".contentBarNavSearch").css("height", "70%")
        $(".contentBarNavSearch").css("margin-top", "10px")
        $(".contentBarNavSearch").css("font-size", "25px")
        document.querySelector(".leftNavBarMenuSearch").classList.add("leftNavBarMenu_itemOwn")
        document.querySelector(".leftNavBarMenuSearch").classList.remove("leftNavBarMenu_item")
        document.querySelector(".leftNavBarMenuHomeBg").classList.remove("leftNavBarMenu_itemOwn")
        document.querySelector(".leftNavBarMenuHomeBg").classList.add("leftNavBarMenu_item")
        setTimeout(() => {
            $(".contentBarNavSearch").css("width", "50%")
            $(".contentBarNavSearch").css("opacity", "1")
            $(".contentBarNavHomeTxt").css("width", "0%")
            $(".contentBarNavHomeTxt").css("height", "0%")
            $(".contentBarNavHomeTxt").css("margin-top", "30px")
            $(".contentBarNavHomeTxt").css("font-size", "0px")
        }, 100);
    });


    $(".leftNavBarMenuHomeBg").click(function(){
        $(".contentBarNavSearch").css("width", "0%")
        $(".contentBarNavSearch").css("opacity", "0")
        $(".contentBarNavSearch").css("font-size", "0px")
        
        $(".contentBarNavHomeTxt").css("opacity", "1")
        $(".contentBarNavHomeTxt").css("width", "27%")
        $(".contentBarNavHomeTxt").css("font-size", "25px")
        $(".contentBarNavHomeTxt").css("height", "75%")
        $(".contentBarNavHomeTxt").css("margin-top", "8px")
        document.querySelector(".leftNavBarMenuSearch").classList.remove("leftNavBarMenu_itemOwn")
        document.querySelector(".leftNavBarMenuSearch").classList.add("leftNavBarMenu_item")
        document.querySelector(".leftNavBarMenuHomeBg").classList.add("leftNavBarMenu_itemOwn")
        document.querySelector(".leftNavBarMenuHomeBg").classList.remove("leftNavBarMenu_item")
        setTimeout(() => {
            // $(".contentBarNavSearch").css("display", "none")
            $(".contentBarNavSearchInp").val("")
            $(".contentBarNavSearch").css("height", "0%")
            $(".contentBarNavSearch").css("margin-top", "30px")
        }, 100);
    });






    $(".leftNavBarMusicLibryCardTitleItmeTxt_xTentacion").click(function(){
        // $(".contentBarNavSearch").css("display", "flex")
        $(".contentBarNavHomeTxt").css("opacity", "0")
        $(".contentBarNavSearch").css("height", "70%")
        $(".contentBarNavSearch").css("margin-top", "10px")
        $(".contentBarNavSearch").css("font-size", "25px")
        $(".contentBarNavSearchInp").val("xxxTentacion")
        document.querySelector(".leftNavBarMenuSearch").classList.add("leftNavBarMenu_itemOwn")
        document.querySelector(".leftNavBarMenuSearch").classList.remove("leftNavBarMenu_item")
        document.querySelector(".leftNavBarMenuHomeBg").classList.remove("leftNavBarMenu_itemOwn")
        document.querySelector(".leftNavBarMenuHomeBg").classList.add("leftNavBarMenu_item")
        setTimeout(() => {
            $(".contentBarNavSearch").css("width", "50%")
            $(".contentBarNavSearch").css("opacity", "1")
            $(".contentBarNavHomeTxt").css("width", "0%")
            $(".contentBarNavHomeTxt").css("height", "0%")
            $(".contentBarNavHomeTxt").css("margin-top", "30px")
            $(".contentBarNavHomeTxt").css("font-size", "0px")
        }, 100);
    }); 
    $(".leftNavBarMusicLibryCardTitleItmeTxt_Phonk").click(function(){
        // $(".contentBarNavSearch").css("display", "flex")
        $(".contentBarNavHomeTxt").css("opacity", "0")
        $(".contentBarNavSearch").css("height", "70%")
        $(".contentBarNavSearch").css("margin-top", "10px")
        $(".contentBarNavSearch").css("font-size", "25px")
        $(".contentBarNavSearchInp").val("Phonk")
        document.querySelector(".leftNavBarMenuSearch").classList.add("leftNavBarMenu_itemOwn")
        document.querySelector(".leftNavBarMenuSearch").classList.remove("leftNavBarMenu_item")
        document.querySelector(".leftNavBarMenuHomeBg").classList.remove("leftNavBarMenu_itemOwn")
        document.querySelector(".leftNavBarMenuHomeBg").classList.add("leftNavBarMenu_item")
        setTimeout(() => {
            $(".contentBarNavSearch").css("width", "50%")
            $(".contentBarNavSearch").css("opacity", "1")
            $(".contentBarNavHomeTxt").css("width", "0%")
            $(".contentBarNavHomeTxt").css("height", "0%")
            $(".contentBarNavHomeTxt").css("margin-top", "30px")
            $(".contentBarNavHomeTxt").css("font-size", "0px")
        }, 100);
    });

    


    $(".leftNavBarMusicLibryCardImgElementItmeTop").mouseenter(function(){
       $(".leftNavBarMusicLibryCardImgElementItmeBottom").css("opacity", "1")
    });
    $(".leftNavBarMusicLibryCardImgElementItmeTop").mouseleave(function(){
        $(".leftNavBarMusicLibryCardImgElementItmeBottom").css("opacity", "0")
    });
    $(".leftNavBarMusicLibryCardImgElementItmeTop").mousedown(function(){
        $(".leftNavBarMusicLibryCardImgElementItmeBottom").css("border-bottom-color", "orangered")
        $(".leftNavBarMusicLibryCardImgElementItmeBottom").css("border-top-color", "orangered")
        $(".leftNavBarMusicLibryCardImgElementItmeBottom").css("height", "100%")
    });
    $(".leftNavBarMusicLibryCardImgElementItmeTop").mouseup(function(){
        setTimeout(() => {
            $(".leftNavBarMusicLibryCardImgElementItmeBottom").css("border-bottom-color", "white")
            $(".leftNavBarMusicLibryCardImgElementItmeBottom").css("border-top-color", "white")
            $(".leftNavBarMusicLibryCardImgElementItmeBottom").css("height", "85%")
        }, 200);
    });




    let StartSaundPhonk = true
    let StartSaundxTentacion = true


    $(".leftNavBarMusicLibryCardImgElementItmeTop_Phonk").click(function(){
        if (StartSaundPhonk === true) {
            $(".leftNavBarMusicLibryCard_Phonk").css("box-shadow", "0px 0px 15px 1px yellow")
            $(".leftNavBarMusicLibryCardImgElementItmeTop_Phonk").html(`<i class="fa-solid fa-pause"></i>`)
            $(".SaundGetList").css("bottom", "0")
            $(".SaundGetListUpHideBtn").css("display", "flex")
            $(".SaundGetListUpShowBtn").css("display", "none")

            $(".SaundGetList").html(`
            
            <div class="musicTitle">
            <div class="musicTitleImg">
                <div class="musicTitleImgLogo leftNavBarMusicLibryCardImgBG_phonk"></div>
            </div>
            <div class="musicTitleText">
                <div class="musicTitleTextBy musicTitleTextByMusicName">Sleepwalker</div>
                <div class="musicTitleTextBy musicTitleTextByEditName">
                    <p class="leftNavBarMusicLibryCardTitleItmeTxt leftNavBarMusicLibryCardTitleItmeTxt_Phonk">??-??-??</p>
                </div>
            </div>
        </div>
        <div class="SaundGetListUpBg">
            <div class="SaundGetListUpHideBtn SaundGetListUp"><i class="fa-solid fa-angle-down SaundGetListUpHideBtnIcon"></i></div>
            <div class="SaundGetListUpShowBtn SaundGetListUp"><i class="fa-solid fa-angle-up SaundGetListUpShowBtnIcon"></i></div>
        </div>
        <audio src="music/Phonk_Sleepwalker.m4a" class="SaundGetListSaund" controls></audio>
            
            `)


            $(".leftNavBarMusicLibryCardTitleItmeTxt_Phonk").click(function(){
                // $(".contentBarNavSearch").css("display", "flex")
                $(".contentBarNavHomeTxt").css("opacity", "0")
                $(".contentBarNavSearch").css("height", "70%")
                $(".contentBarNavSearch").css("margin-top", "10px")
                $(".contentBarNavSearch").css("font-size", "25px")
                $(".contentBarNavSearchInp").val("Phonk")
                document.querySelector(".leftNavBarMenuSearch").classList.add("leftNavBarMenu_itemOwn")
                document.querySelector(".leftNavBarMenuSearch").classList.remove("leftNavBarMenu_item")
                document.querySelector(".leftNavBarMenuHomeBg").classList.remove("leftNavBarMenu_itemOwn")
                document.querySelector(".leftNavBarMenuHomeBg").classList.add("leftNavBarMenu_item")
                setTimeout(() => {
                    $(".contentBarNavSearch").css("width", "50%")
                    $(".contentBarNavSearch").css("opacity", "1")
                    $(".contentBarNavHomeTxt").css("width", "0%")
                    $(".contentBarNavHomeTxt").css("height", "0%")
                    $(".contentBarNavHomeTxt").css("margin-top", "30px")
                    $(".contentBarNavHomeTxt").css("font-size", "0px")
                }, 100);
            });


            $(".leftNavBarMusicLibryCard_xTentacion").css("box-shadow", "")
            $(".leftNavBarMusicLibryCardImgElementItmeTop_xTentacion").html(`<i class="fa-solid fa-play"></i>`)

            $(".contentBarNavSearch").css("width", "0%")
            $(".contentBarNavSearch").css("opacity", "0")
            $(".contentBarNavSearch").css("font-size", "0px")
            
            $(".contentBarNavHomeTxt").css("opacity", "1")
            $(".contentBarNavHomeTxt").css("width", "27%")
            $(".contentBarNavHomeTxt").css("font-size", "25px")
            $(".contentBarNavHomeTxt").css("height", "75%")
            $(".contentBarNavHomeTxt").css("margin-top", "8px")
            document.querySelector(".leftNavBarMenuSearch").classList.remove("leftNavBarMenu_itemOwn")
            document.querySelector(".leftNavBarMenuSearch").classList.add("leftNavBarMenu_item")
            document.querySelector(".leftNavBarMenuHomeBg").classList.add("leftNavBarMenu_itemOwn")
            document.querySelector(".leftNavBarMenuHomeBg").classList.remove("leftNavBarMenu_item")
            setTimeout(() => {
                // $(".contentBarNavSearch").css("display", "none")
                $(".contentBarNavSearchInp").val("")
                $(".contentBarNavSearch").css("height", "0%")
                $(".contentBarNavSearch").css("margin-top", "30px")
            }, 100);
            $(".SaundGetListUpHideBtn").click(function(){
                $(".SaundGetList").css("bottom", "-77px")
                $(".SaundGetListUpHideBtn").css("display", "none")
                $(".SaundGetListUpShowBtn").css("display", "flex")
            });
        
            $(".SaundGetListUpShowBtn").click(function(){
                $(".SaundGetList").css("bottom", "0")
                $(".SaundGetListUpHideBtn").css("display", "flex")
                $(".SaundGetListUpShowBtn").css("display", "none")
            });
            StartSaundPhonk = false
            StartSaundxTentacion = true
        }else if (StartSaundPhonk === false) {
            $(".leftNavBarMusicLibryCard_Phonk").css("box-shadow", "")
            $(".leftNavBarMusicLibryCardImgElementItmeTop_Phonk").html(`<i class="fa-solid fa-play"></i>`)
            $(".SaundGetList").css("bottom", "-77px")
            $(".SaundGetListUpHideBtn").css("display", "none")
            $(".SaundGetListUpShowBtn").css("display", "flex")
            StartSaundPhonk = true
        }
    });






    
    $(".leftNavBarMusicLibryCardImgElementItmeTop_xTentacion").click(function(){
        if (StartSaundxTentacion === true) {
            $(".leftNavBarMusicLibryCard_xTentacion").css("box-shadow", "0px 0px 15px 1px yellow")
            $(".leftNavBarMusicLibryCardImgElementItmeTop_xTentacion").html(`<i class="fa-solid fa-pause"></i>`)
            $(".SaundGetList").css("bottom", "0")
            $(".SaundGetListUpHideBtn").css("display", "flex")
            $(".SaundGetListUpShowBtn").css("display", "none")

            $(".SaundGetList").html(`
            
            <div class="musicTitle">
            <div class="musicTitleImg">
                <div class="musicTitleImgLogo leftNavBarMusicLibryCardImgBG_xTentacion"></div>
            </div>
            <div class="musicTitleText">
                <div class="musicTitleTextBy musicTitleTextByMusicName">SAD!</div>
                <div class="musicTitleTextBy musicTitleTextByEditName">
                    <p class="leftNavBarMusicLibryCardTitleItmeTxt leftNavBarMusicLibryCardTitleItmeTxt_xTentacion">xxxTentacion</p>
                </div>
            </div>
        </div>
        <div class="SaundGetListUpBg">
            <div class="SaundGetListUpHideBtn SaundGetListUp"><i class="fa-solid fa-angle-down SaundGetListUpHideBtnIcon"></i></div>
            <div class="SaundGetListUpShowBtn SaundGetListUp"><i class="fa-solid fa-angle-up SaundGetListUpShowBtnIcon"></i></div>
        </div>
        <audio src="music/xxxTentacion_Sad.m4a" class="SaundGetListSaund" controls></audio>
            
            `)

            $(".leftNavBarMusicLibryCardTitleItmeTxt_xTentacion").click(function(){
        // $(".contentBarNavSearch").css("display", "flex")
        $(".contentBarNavHomeTxt").css("opacity", "0")
        $(".contentBarNavSearch").css("height", "70%")
        $(".contentBarNavSearch").css("margin-top", "10px")
        $(".contentBarNavSearch").css("font-size", "25px")
        $(".contentBarNavSearchInp").val("xxxTentacion")
        document.querySelector(".leftNavBarMenuSearch").classList.add("leftNavBarMenu_itemOwn")
        document.querySelector(".leftNavBarMenuSearch").classList.remove("leftNavBarMenu_item")
        document.querySelector(".leftNavBarMenuHomeBg").classList.remove("leftNavBarMenu_itemOwn")
        document.querySelector(".leftNavBarMenuHomeBg").classList.add("leftNavBarMenu_item")
        setTimeout(() => {
            $(".contentBarNavSearch").css("width", "50%")
            $(".contentBarNavSearch").css("opacity", "1")
            $(".contentBarNavHomeTxt").css("width", "0%")
            $(".contentBarNavHomeTxt").css("height", "0%")
            $(".contentBarNavHomeTxt").css("margin-top", "30px")
            $(".contentBarNavHomeTxt").css("font-size", "0px")
        }, 100);
            }); 


            $(".leftNavBarMusicLibryCard_Phonk").css("box-shadow", "")
            $(".leftNavBarMusicLibryCardImgElementItmeTop_Phonk").html(`<i class="fa-solid fa-play"></i>`)

            $(".contentBarNavSearch").css("width", "0%")
            $(".contentBarNavSearch").css("opacity", "0")
            $(".contentBarNavSearch").css("font-size", "0px")
            
            $(".contentBarNavHomeTxt").css("opacity", "1")
            $(".contentBarNavHomeTxt").css("width", "27%")
            $(".contentBarNavHomeTxt").css("font-size", "25px")
            $(".contentBarNavHomeTxt").css("height", "75%")
            $(".contentBarNavHomeTxt").css("margin-top", "8px")
            document.querySelector(".leftNavBarMenuSearch").classList.remove("leftNavBarMenu_itemOwn")
            document.querySelector(".leftNavBarMenuSearch").classList.add("leftNavBarMenu_item")
            document.querySelector(".leftNavBarMenuHomeBg").classList.add("leftNavBarMenu_itemOwn")
            document.querySelector(".leftNavBarMenuHomeBg").classList.remove("leftNavBarMenu_item")
            setTimeout(() => {
                // $(".contentBarNavSearch").css("display", "none")
                $(".contentBarNavSearchInp").val("")
                $(".contentBarNavSearch").css("height", "0%")
                $(".contentBarNavSearch").css("margin-top", "30px")
            }, 100);
            $(".SaundGetListUpHideBtn").click(function(){
                $(".SaundGetList").css("bottom", "-77px")
                $(".SaundGetListUpHideBtn").css("display", "none")
                $(".SaundGetListUpShowBtn").css("display", "flex")
            });
        
            $(".SaundGetListUpShowBtn").click(function(){
                $(".SaundGetList").css("bottom", "0")
                $(".SaundGetListUpHideBtn").css("display", "flex")
                $(".SaundGetListUpShowBtn").css("display", "none")
            });
            StartSaundxTentacion = false
            StartSaundPhonk = true
        }else if (StartSaundxTentacion === false) {
            $(".leftNavBarMusicLibryCard_xTentacion").css("box-shadow", "")
            $(".leftNavBarMusicLibryCardImgElementItmeTop_xTentacion").html(`<i class="fa-solid fa-play"></i>`)
            $(".SaundGetList").css("bottom", "-77px")
            $(".SaundGetListUpHideBtn").css("display", "none")
            $(".SaundGetListUpShowBtn").css("display", "flex")
            StartSaundxTentacion = true
        }
    });



});